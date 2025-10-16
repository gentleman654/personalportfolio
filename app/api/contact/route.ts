import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';

// Create Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

function isEmail(email: string) {
  // simple, safe email check
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

export async function POST(request: Request) {
  const client = new MongoClient(process.env.MONGODB_URI || '');
  
  try {
    const body: Body = await request.json();

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    if (!isEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Connect to MongoDB and store the message
    await client.connect();
    const db = client.db(process.env.MONGODB_DB || 'portfolio');
    const collection = db.collection('messages');

    const messageDoc = {
      name,
      email,
      message,
      createdAt: new Date(),
      status: 'new'
    };

    const result = await collection.insertOne(messageDoc);
    
    console.log('[contact] message stored with ID:', result.insertedId);

    // Send email notification to you
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD && process.env.CONTACT_DESTINATION) {
      try {
        console.log('[contact] sending emails with Gmail SMTP...');
        console.log('[contact] Gmail user:', process.env.GMAIL_USER);
        console.log('[contact] destination:', process.env.CONTACT_DESTINATION);
        
        // Send notification email to you
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
          to: process.env.CONTACT_DESTINATION,
          subject: `New contact from ${name} - Portfolio Website`,
          text: `New contact form submission from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">New Contact Form Submission</h2>
              <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 15px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Message:</strong></p>
                <div style="background: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <p style="font-size: 12px; color: #666;">Sent from your portfolio contact form</p>
            </div>
          `
        });

        console.log('[contact] notification email sent successfully');

        // Send auto-reply to the submitter
        await transporter.sendMail({
          from: `"Manas Gandotra" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: `Thanks for contacting me, ${name}!`,
          text: `Hi ${name},\n\nThanks for your message! I received it and will get back to you within 24-48 hours.\n\nBest regards,\nManas Gandotra`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <p>Hi ${name},</p>
              <p>Thanks for reaching out through my portfolio website! I received your message and will get back to you within 24-48 hours.</p>
              <p>I appreciate your interest and look forward to connecting with you.</p>
              <p>Best regards,<br><strong>Manas Gandotra</strong></p>
              <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
              <p style="font-size: 12px; color: #666;">This is an automated confirmation. Please do not reply to this email.</p>
            </div>
          `
        });

        console.log('[contact] auto-reply email sent successfully');
      } catch (emailError) {
        console.error('[contact] Gmail SMTP error:', emailError);
        // Don't fail the whole request if email fails, message is already saved
      }
    } else {
      console.log('[contact] email sending skipped - missing Gmail SMTP config');
      console.log('[contact] Gmail user present:', !!process.env.GMAIL_USER);
      console.log('[contact] App password present:', !!process.env.GMAIL_APP_PASSWORD);
      console.log('[contact] destination present:', !!process.env.CONTACT_DESTINATION);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('[contact] error handling request', err);
    
    if (err instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
    
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  } finally {
    await client.close();
  }
}

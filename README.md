This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact Form with MongoDB + SendGrid

This project includes a contact form that stores messages in MongoDB and sends automatic replies via SendGrid.

### Setup Instructions

#### 1. MongoDB Setup
You have several MongoDB connections available in the VS Code sidebar:
- `manas.btvnx.mongodb.net` 
- `dbs-russel-group-8d.alvk0.mongodb.net`

Choose one of these connections or create a new MongoDB Atlas cluster (free tier available at [mongodb.com](https://www.mongodb.com/cloud/atlas)).

#### 2. SendGrid Setup
1. Create a free SendGrid account at [sendgrid.com](https://sendgrid.com) (free tier: 100 emails/day)
2. Generate an API key in SendGrid dashboard
3. Verify a sender email address in SendGrid (required for sending emails)

#### 3. Environment Variables
Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

Required variables:
- `MONGODB_URI`: Your MongoDB connection string
- `MONGODB_DB`: Database name (e.g., "portfolio")
- `SENDGRID_API_KEY`: Your SendGrid API key
- `SENDGRID_VERIFIED_SENDER`: Your verified sender email
- `CONTACT_DESTINATION`: Where contact messages should be sent

#### 4. How it works
1. User submits contact form
2. Message stored in MongoDB `messages` collection
3. Email sent to you with the message details
4. Auto-reply sent to the user confirming receipt

### Database Schema
Messages are stored in MongoDB with this structure:
```javascript
{
  _id: ObjectId("..."),
  name: "John Doe",
  email: "john@example.com", 
  message: "Hello, I'm interested in...",
  createdAt: new Date(),
  status: "new"
}
```

## Local contact API

This project contains a minimal local API endpoint at `app/api/contact/route.ts` that accepts POST requests with JSON `{ name, email, message }`.

- The handler performs simple validation and logs the message to the server console. It is a local stub meant for development and testing.
- To use a real email provider (SendGrid, Mailgun, Gmail SMTP, etc.), replace the `console.log` in `app/api/contact/route.ts` with provider-specific code and store credentials in environment variables.

When deploying to a platform like Vercel, ensure to configure the provider's API key in production environment variables and update the handler accordingly.

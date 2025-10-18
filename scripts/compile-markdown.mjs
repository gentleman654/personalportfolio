// scripts/compile-markdown.mjs
// Pre-compiles all markdown case studies to HTML at build time

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CASE_STUDY_DIR = path.join(path.dirname(__dirname), 'casestudy');
const OUTPUT_FILE = path.join(path.dirname(__dirname), 'data', 'compiled-cases.json');

async function compileMarkdown(markdown) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

async function compileAllCaseStudies() {
  console.log('🔨 Compiling case studies...');

  // Check if casestudy directory exists
  if (!fs.existsSync(CASE_STUDY_DIR)) {
    console.log('⚠️  No casestudy directory found, creating empty output...');
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({}, null, 2));
    return;
  }

  const files = fs.readdirSync(CASE_STUDY_DIR).filter(f => f.endsWith('.md'));
  
  if (files.length === 0) {
    console.log('⚠️  No markdown files found in casestudy directory');
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify({}, null, 2));
    return;
  }

  const compiled = {};

  for (const file of files) {
    const slug = path.basename(file, '.md');
    const markdown = fs.readFileSync(path.join(CASE_STUDY_DIR, file), 'utf8');
    
    console.log(`  📄 Compiling ${slug}...`);
    const html = await compileMarkdown(markdown);
    compiled[slug] = html;
  }

  // Ensure data directory exists
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  
  // Write compiled HTML to JSON
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(compiled, null, 2));
  
  console.log(`✅ Compiled ${files.length} case studies to ${OUTPUT_FILE}`);
}

// Run the compilation
compileAllCaseStudies().catch(err => {
  console.error('❌ Error compiling case studies:', err);
  process.exit(1);
});

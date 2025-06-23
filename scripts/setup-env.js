#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

console.log("🔒 Setting up environment variables...\n");

const envPath = path.join(process.cwd(), ".env.local");
const envExamplePath = path.join(process.cwd(), ".env.example");

// Check if .env.local already exists
if (fs.existsSync(envPath)) {
  console.log("⚠️  .env.local already exists. Skipping setup.");
  console.log("   Edit .env.local manually if needed.\n");
  process.exit(0);
}

// Create .env.example if it doesn't exist
const envExampleContent = `# EmailJS Configuration
# Get these from your EmailJS dashboard: https://dashboard.emailjs.com/
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
NEXT_PUBLIC_CONTACT_PHONE=+1234567890
NEXT_PUBLIC_CONTACT_WHATSAPP=+1234567890

# Note: All variables prefixed with NEXT_PUBLIC_ will be exposed to the browser
# Only use this prefix for values that are safe to be public
`;

if (!fs.existsSync(envExamplePath)) {
  fs.writeFileSync(envExamplePath, envExampleContent);
  console.log("✅ Created .env.example");
}

// Create .env.local with current values
const envContent = `# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_id_on_emailjs
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_id

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=dejibimbola@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+2347065249677
NEXT_PUBLIC_CONTACT_WHATSAPP=+2347065249677
`;

fs.writeFileSync(envPath, envContent);

console.log("✅ Created .env.local with current configuration");
console.log("📝 Edit .env.local to customize for your needs");
console.log("🔒 .env.local is already in .gitignore (secure)");
console.log("\n📚 For more information, see SECURITY.md");
console.log("🚀 You can now run: yarn dev\n");

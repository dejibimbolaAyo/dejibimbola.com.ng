# 🔒 Security Guide

## Environment Variables Setup

### 1. Create Environment File

Create a `.env.local` file in your project root:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=adW7OUcZRhI2K6LOt
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_o9dgn2q
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_d006th8

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=dejibimbola@gmail.com
NEXT_PUBLIC_CONTACT_PHONE=+2347065249677
NEXT_PUBLIC_CONTACT_WHATSAPP=+2347065249677
```

### 2. Security Best Practices

#### ✅ What's Safe to Expose (NEXT*PUBLIC*)

- **EmailJS Public Key**: This is designed to be public
- **Service ID**: Safe to expose
- **Template ID**: Safe to expose
- **Contact Information**: Safe to expose

#### ❌ What Should NEVER Be Exposed

- **EmailJS Private Keys** (if any)
- **Database Connection Strings**
- **API Secret Keys**
- **JWT Secrets**
- **Admin Credentials**

### 3. Deployment Security

#### Netlify/Vercel

1. Go to your deployment dashboard
2. Navigate to Environment Variables section
3. Add all variables from `.env.local`
4. **Never commit `.env.local` to git**

#### Local Development

```bash
# Copy example file
cp .env.example .env.local

# Edit with your actual values
nano .env.local
```

### 4. EmailJS Security Notes

- **Public Key**: Safe to expose (designed for client-side use)
- **Service ID**: Safe to expose
- **Template ID**: Safe to expose
- **Rate Limiting**: Already implemented in the code
- **Template Security**: Configure recipient email in EmailJS dashboard

### 5. Additional Security Measures

#### Rate Limiting

The contact form includes:

- 1000ms throttle between requests
- Loading states to prevent spam
- Form validation

#### Input Validation

- Email format validation
- Required field validation
- XSS protection (Chakra UI handles this)

### 6. Monitoring

Consider adding:

- Form submission logging
- Error tracking (Sentry, LogRocket)
- Analytics for form usage

### 7. Backup Contact Methods

Always provide alternative contact methods:

- Direct email links
- Phone numbers
- WhatsApp links
- Social media profiles

## 🔍 Security Checklist

- [ ] Environment variables configured
- [ ] `.env.local` in `.gitignore`
- [ ] No hardcoded secrets in code
- [ ] EmailJS template recipient configured
- [ ] Rate limiting implemented
- [ ] Input validation active
- [ ] Error handling in place
- [ ] Alternative contact methods available

## 🚨 Emergency Contacts

If the contact form fails:

1. Direct email: dejibimbola@gmail.com
2. WhatsApp: +234 706 524 9677
3. LinkedIn: https://linkedin.com/in/dejibimbola

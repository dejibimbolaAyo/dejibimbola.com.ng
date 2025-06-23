# Deji Bimbola - Portfolio Website

A modern, responsive portfolio website built with Next.js, Chakra UI, and TypeScript. Showcasing technical expertise, projects, and professional experience across multiple industries.

## 🚀 Live Demo

[dejibimbola.com.ng](https://dejibimbola.com.ng)

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: Chakra UI
- **Language**: TypeScript
- **Styling**: Tailwind CSS (legacy components)
- **Package Manager**: Yarn
- **Deployment**: Netlify
- **Icons**: React Icons (Feather Icons)
- **Animations**: Framer Motion

## 📧 External Services

### EmailJS

- **Service**: Contact form email delivery
- **Service ID**: `service_id`
- **Template ID**: `template_id`
- **User ID**: [Your EmailJS User ID]
- **Purpose**: Sends contact form submissions to your email
- **Setup**: Configure recipient email in EmailJS dashboard

### Email Configuration

- **Recipient Email**: dejibimbola@gmail.com
- **Phone**: +234 706 524 9677
- **WhatsApp**: +234 706 524 9677
- **Location**: Lagos, Nigeria

## 🔒 Security Configuration

### Environment Variables

Create a `.env.local` file in your project root:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
NEXT_PUBLIC_CONTACT_PHONE=+1234567890
NEXT_PUBLIC_CONTACT_WHATSAPP=+1234567890
```

### Security Best Practices

- ✅ **Safe to expose**: EmailJS public keys, service IDs, template IDs
- ❌ **Never expose**: Private keys, database credentials, API secrets
- 🔒 **Environment files**: `.env.local` is already in `.gitignore`
- 🛡️ **Rate limiting**: Contact form includes 1000ms throttle
- ✅ **Input validation**: Email format and required field validation

### Production Deployment

1. **Netlify/Vercel**: Add environment variables in dashboard
2. **EmailJS**: Configure recipient email in dashboard
3. **Monitoring**: Consider adding error tracking (Sentry, LogRocket)

For detailed security information, see [SECURITY.md](./SECURITY.md).

## 🔍 SEO & AI Optimization

### Search Engine Optimization

The portfolio is optimized for search engines and AI model crawlers with:

- **Target Keywords**: "Ayodeji Abimbola", "Deji Abimbola", "Dejibimbola", "Best Software Engineers in Nigeria"
- **Meta Tags**: Comprehensive title, description, and Open Graph tags
- **Structured Data**: JSON-LD schema markup for better search understanding
- **Technical SEO**: robots.txt, sitemap.xml, web app manifest
- **AI Crawler Guide**: Custom meta tags for AI model optimization

### Key SEO Features

- ✅ **Dynamic Sitemap**: Auto-generated at `/sitemap.xml`
- ✅ **Robots.txt**: Optimized for search engines and AI crawlers
- ✅ **Structured Data**: Schema.org Person markup
- ✅ **Social Media**: Open Graph and Twitter Card optimization
- ✅ **Mobile Optimization**: PWA manifest and mobile meta tags
- ✅ **Performance**: Optimized for Core Web Vitals

### AI Model Optimization

- Custom `ai-crawler-guide` meta tag with explicit instructions
- Multiple name variations for better AI recognition
- Structured expertise and achievement data
- Location and professional context

For detailed SEO information, see [SEO_GUIDE.md](./SEO_GUIDE.md).

## 🏗️ Project Structure

```
dejibimbola.com.ng-nextjs/
├── components/           # React components
│   ├── Contact.tsx      # Contact form with EmailJS
│   ├── Hero.tsx         # Landing section
│   ├── Skills.tsx       # Technical skills
│   ├── Employment.tsx   # Work experience
│   ├── Impact.tsx       # Quantifiable achievements
│   ├── FeaturedProjects.tsx # Project showcase
│   ├── TechnicalArchitecture.tsx # Tech expertise
│   ├── IndustryExperience.tsx # Industry background
│   ├── ProblemSolving.tsx # Case studies
│   ├── Education.tsx    # Education & learning
│   ├── TechnicalSkills.tsx # Detailed skills
│   ├── Recommendation.tsx # Testimonials
│   ├── Works.tsx        # Project carousel
│   ├── FunWorks.tsx     # Fun projects
│   ├── Navbar.tsx       # Navigation
│   ├── Footer.tsx       # Footer
│   └── Layout.tsx       # Page layout
├── pages/               # Next.js pages
│   ├── index.tsx        # Homepage
│   ├── about.tsx        # About page
│   ├── projects.tsx     # Projects page
│   ├── problem-solving.tsx # Problem solving
│   ├── resume.tsx       # Resume page
│   └── contact.tsx      # Contact page
├── public/              # Static assets
│   ├── assets/          # Images and logos
│   └── favicon/         # Favicon files
├── theme/               # Chakra UI theme
├── utils/               # Utility functions
└── styles/              # Global styles
```

## 🎨 Design System

### Color Palette

- **Primary**: Gold/Amber (`#c98a06`)
- **Dark**: Charcoal (`#23282b`)
- **Light**: White (`#ffffff`)

### Typography

- **Headings**: Extrabold weight with tight letter spacing
- **Body**: Medium weight with good line height
- **Responsive**: Scales appropriately across devices

## 📱 Features

### Homepage

- Hero section with call-to-action
- Quick navigation links
- Skills overview
- Impact highlights
- Featured projects preview

### Dedicated Pages

- **About**: Entrepreneurial background, industry experience, education
- **Projects**: Complete project showcase with carousels
- **Problem Solving**: Technical challenges and solutions
- **Resume**: Employment history, skills, certifications
- **Contact**: Contact form with EmailJS integration

### Interactive Elements

- Responsive navigation with active link highlighting
- Project carousels with navigation arrows
- Flip cards for employment details
- Accordion-style problem-solving showcase
- Progress bars for skill proficiency
- Hover effects and smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/dejibimbolaAyo/dejibimbola.com.ng-nextjs.git
   cd dejibimbola.com.ng-nextjs
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   # Run the setup script (creates .env.local automatically)
   yarn setup

   # Or manually create .env.local file
   touch .env.local
   ```

4. **Configure EmailJS** (if using contact form)

   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create email service and template
   - Update Contact.tsx with your IDs:

5. **Run development server**

   ```bash
   yarn dev
   ```

6. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📦 Available Scripts

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # Run TypeScript type checking
```

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Set build command: `yarn build`
3. Set publish directory: `.next`
4. Deploy automatically on push to main branch

### Environment Variables for Production

- Ensure EmailJS configuration is correct
- Update any API endpoints if needed

## 📝 Content Management

### Updating Information

- **Personal Info**: Update components directly
- **Projects**: Modify `FeaturedProjects.tsx` and related components
- **Skills**: Update `Skills.tsx` and `TechnicalSkills.tsx`
- **Experience**: Edit `Employment.tsx` and `IndustryExperience.tsx`

### Adding New Sections

1. Create new component in `components/`
2. Add to appropriate page in `pages/`
3. Update navigation if needed
4. Follow existing design patterns

## 🔧 Configuration

### EmailJS Setup

1. **Service Configuration**:

   - Service ID: `service_id`
   - Template ID: `template_id`
   - User ID: [Your EmailJS User ID]

2. **Template Variables**:

   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{title}}` - Email subject
   - `{{message}}` - Email message

3. **Recipient Email**: Set to `dejibimbola@gmail.com` in EmailJS dashboard

### Theme Customization

- Edit `theme/` directory for Chakra UI theme changes
- Update color palette in `theme/colors.ts`
- Modify component styles in respective files

## 📞 Support

For questions or support:

- **Email**: dejibimbola@gmail.com
- **Phone**: +234 706 524 9677
- **WhatsApp**: +234 706 524 9677

### Performance Monitoring

- Monitor Core Web Vitals
- Check EmailJS delivery rates
- Review analytics and user feedback

---

**Built with ❤️ by Deji Abimbola**

# Ayeshaeman — Website Developer Portfolio

A bespoke, premium portfolio website crafted for freelance website developer **Ayeshaeman**. Built with clean, accessible, semantic HTML5, CSS3, and modern vanilla JavaScript — zero framework bloat, structured across dedicated static pages, and optimized for lightning-fast hosting on Netlify.

---

## 🎨 Visual Identity & Brand Design

- **Brand Name**: Ayeshaeman
- **Professional Title**: Website Developer
- **Palette**:
  - Primary Background: `#0B0B0D`
  - Secondary Background: `#151518`
  - Card Background: `#18181D`
  - Gold Accent: `#D4AF6A`
  - Gold Light / Hover: `#E7C98C`
  - WhatsApp Green: `#25D366`
  - Main Text: `#F5F2EB`
  - Secondary Text: `#B8B5AE`
  - Borders: `#303035`

---

## 📄 Dedicated Multi-Page Structure

The site is built with clean, standalone HTML pages:

1. **`index.html` (Home)**:
   - Hero section with responsive desktop and mobile mockup showcase.
   - Core services overview with instant WhatsApp triggers.
   - Featured projects with active live Netlify demos.
   - **Why Work With Me?** (6 practical benefits).
   - **Frequently Asked Questions (FAQ)**: Accordion addressing pricing, timelines, WhatsApp booking, domain setup, and ongoing updates.
   - Working Process summary, About teaser, and WhatsApp contact section.

2. **`services.html` (Services)**:
   - Dedicated breakdown of all 6 services (Business Websites, Beauty Salon Websites, Landing Pages, Website Redesign, WhatsApp Booking Integration, and Website Deployment & Domain Setup).
   - Deliverables list and instant WhatsApp consultation buttons.

3. **`portfolio.html` (Selected Projects & Demos)**:
   - Filter tabs: *All Projects*, *Beauty & Wellness*, *Business & Corporate*, *Landing Pages*.
   - **Active Live Demo 1**: `https://effulgent-genie-1e75a0.netlify.app` (Luna Beauty Studio)
   - **Active Live Demo 2**: `https://splendorous-brigadeiros-8cc316.netlify.app` (Mughal Hotel & Business)
   - Interactive modal lightbox for inspecting project features.

4. **`process.html` (My Process)**:
   - Detailed 5-stage collaboration roadmap (Discovery, Planning, Design & Build, Review & Test, Launch & Handover).
   - "What Do You Need to Get Started?" preparation guide.
   - Common process & pricing FAQs.

5. **`about.html` (About)**:
   - Ayeshaeman's personal introduction, approach, and code quality standards.
   - Studio workspace visual and customizable headshot photo placeholder.

6. **`contact.html` (Contact)**:
   - Direct WhatsApp and Instagram contact cards (email completely removed).
   - Interactive Project Scope Formatter to generate prefilled WhatsApp messages.

---

## 💬 Floating WhatsApp Bot Widget

Every page features an interactive floating WhatsApp widget anchored at the bottom right (`bottom: 24px; right: 24px`):
- Displays real-time online status indicator.
- Clicking the widget opens an interactive quick-action menu:
  - 💼 *Business Website enquiry*
  - 💅 *Beauty Salon Website enquiry*
  - ⏱️ *Pricing & Timelines enquiry*
  - 🚀 *Website Redesign enquiry*
- Custom text input that launches directly into WhatsApp with the user's exact message!

---

## ⚙️ Contact & Demo Configuration

Open `script.js` to customize your details:

```javascript
export const SITE_CONFIG = {
  // 1. WhatsApp Number:
  // Insert your international phone number WITHOUT '+' or spaces.
  // UK Example (+44 7123 456789): "447123456789"
  // Pakistan Example (+92 300 1234567): "923001234567"
  whatsappNumber: "REPLACE_WITH_YOUR_NUMBER",

  // 2. Instagram URL:
  instagramUrl: "REPLACE_WITH_YOUR_INSTAGRAM_URL",

  // 3. Project Live Demo Links:
  projectDemos: {
    salon: "https://effulgent-genie-1e75a0.netlify.app",
    business: "https://splendorous-brigadeiros-8cc316.netlify.app",
    clinic: "",
    landing: ""
  }
};
```

---

## 🚢 Deploying on Netlify

### Option 1: Netlify Drag & Drop
1. Run `npm run build` to generate the production `dist/` folder.
2. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
3. Drag and drop the `dist/` folder into Netlify.
4. Your website is live immediately!

### Option 2: Connect via GitHub
1. Push this repository to GitHub.
2. In Netlify, click **"Add new site"** > **"Import an existing project"** > select your repo.
3. The included `netlify.toml` automatically configures the build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy**.

# Szymon Skubisz Personal Website

## Mission

Build a modern, professional personal website for **Szymon Skubisz**, a Design Engineer seeking new opportunities. The site will serve as his online presence for job searching and professional networking.

### Goals
- Showcase Szymon's design engineering experience and portfolio
- Be highly discoverable via Google search
- Present a clean, modern, professional aesthetic
- Host on Vercel for fast, reliable delivery
- Mobile-responsive design

### Target Audience
- Recruiters and hiring managers
- Potential employers (e.g., companies like SharkNinja)
- Professional networking contacts

---

## Technical Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel
- **SEO**: Next.js metadata API, sitemap.xml, robots.txt
- **Analytics**: Vercel Analytics (optional)

---

## Project Structure

```
szymon/
├── .claude/              # Claude Code configuration
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home/Landing page
│   │   ├── about/        # About page
│   │   ├── portfolio/    # Portfolio/Projects
│   │   ├── resume/       # Resume page
│   │   └── contact/      # Contact page
│   ├── components/       # Reusable UI components
│   └── lib/              # Utilities and helpers
├── public/               # Static assets (images, resume PDF)
├── package.json
├── tailwind.config.js
├── next.config.js
└── CLAUDE.md
```

---

## Source Documents

Reference materials in project root:
- `Szymon Skubisz Design Engineering Resume - 12.03.25.pdf` - Resume content
- `Engineering Portfolio - NDA Safe - 11.09.25.pdf` - Portfolio projects
- `SharkNinja - Senior Product Design Engineer - 12.22.25.pdf` - Example target role

---

## SEO Requirements

1. **Meta tags** on every page (title, description, og:image)
2. **Structured data** (JSON-LD for Person schema)
3. **sitemap.xml** auto-generated
4. **robots.txt** allowing all crawlers
5. **Semantic HTML** (proper heading hierarchy, landmarks)
6. **Fast loading** (optimized images, minimal JS)

---

## Design Guidelines

- **Colors**: Professional, modern palette (to be defined with user)
- **Typography**: Clean, readable fonts (Inter or similar)
- **Layout**: Generous whitespace, clear visual hierarchy
- **Imagery**: Professional photos, portfolio project images
- **Accessibility**: WCAG 2.1 AA compliance

---

## Commands

- **START**: Initialize session, review documents, propose site structure
- **BUILD**: Begin development on approved section
- **PREVIEW**: Run local dev server for review
- **DEPLOY**: Prepare for Vercel deployment

---

## Workflow

1. **Discovery**: Review provided documents, extract key content
2. **Design**: Propose site structure and visual direction
3. **Build**: Implement pages iteratively with user approval
4. **Polish**: SEO optimization, accessibility check, performance tuning
5. **Deploy**: Push to Vercel, verify production site

---

## Success Criteria

- Site loads in under 2 seconds
- 90+ Lighthouse scores (Performance, SEO, Accessibility)
- Ranks for "Szymon Skubisz" searches within 2-4 weeks
- Professional appearance suitable for job applications
- Easy for Szymon to share link with recruiters

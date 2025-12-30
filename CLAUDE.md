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
- **Hosting**: Vercel (Free tier)
- **SEO**: Next.js metadata API, sitemap.xml, robots.txt
- **Analytics**: Vercel Analytics (optional)

---

## Git Branching & Deployment Strategy

### Branches
| Branch | Purpose | Vercel Deployment |
|--------|---------|-------------------|
| `main` | Development & staging | Preview (pre-prod) |
| `PROD` | Production releases | Production |

### Workflow
1. **Build** on `main` branch
2. **Review** via Vercel Preview URL (auto-deployed on push)
3. **Approve** locally after testing preview
4. **Merge** `main` → `PROD` for production release
5. Vercel auto-deploys `PROD` to production URL

### Vercel Settings (configure in dashboard)
- **Production Branch**: `PROD`
- **Preview Branches**: `main` (and any PRs)
- **Auto-deploy**: Enabled for both

### Commands
```bash
# Development
git checkout main
# ... make changes ...
git add . && git commit -m "message" && git push

# Promote to Production
git checkout PROD
git merge main
git push
```

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
│   │   ├── contact/      # Contact page
│   │   └── built-by/     # Hidden SEO credit page (not in nav)
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

Reference materials in `source-docs/` folder (not committed to git):
- `Szymon Skubisz Design Engineering Resume - 12.03.25.pdf` - Resume content
- `Engineering Portfolio - NDA Safe - 11.09.25.pdf` - Portfolio projects
- `SharkNinja - Senior Product Design Engineer - 12.22.25.pdf` - Example target role

---

## SEO & AI Discoverability Requirements

### Google Search Optimization
1. **Meta tags** on every page (title, description, og:image, og:type)
2. **Structured data** (JSON-LD for Person, WebSite, and ProfilePage schemas)
3. **sitemap.xml** auto-generated via Next.js
4. **robots.txt** allowing all crawlers
5. **Semantic HTML** (proper heading hierarchy, landmarks, ARIA labels)
6. **Fast loading** (Core Web Vitals optimized)
7. **Mobile-first** responsive design
8. **Canonical URLs** on all pages

### AI Search & LLM Discoverability
1. **Clear, descriptive content** - Write content that AI systems can parse and summarize
2. **Structured data rich** - Comprehensive JSON-LD schemas for:
   - `Person` (name, jobTitle, skills, education, experience)
   - `WebSite` (site name, description, author)
   - `ProfilePage` (main entity of page)
3. **llms.txt** file in root - AI-friendly site summary
4. **Natural language content** - Avoid jargon, use complete sentences
5. **Keyword-rich headings** - "Szymon Skubisz - Design Engineer" in H1
6. **About/Bio section** - Detailed professional summary for AI context
7. **Skills taxonomy** - Clearly listed and categorized skills
8. **Open Graph metadata** - Rich previews for AI assistants

### Technical SEO Checklist
- [ ] Google Search Console verified
- [ ] sitemap.xml submitted to Google
- [ ] No broken links (404s)
- [ ] Proper 301 redirects if needed
- [ ] Image alt text on all images
- [ ] Loading speed < 2 seconds
- [ ] Lighthouse SEO score 95+

### Hidden "Built By" Credit Page

A public but unlisted page at `/built-by` for SEO credit:
- **URL**: `/built-by` (included in sitemap, not in navigation)
- **Purpose**: SEO backlink and credit for the builder company
- **Content**:
  - Company name and logo
  - Brief description of services offered
  - Link back to company website
  - "We built this site for Szymon Skubisz" testimonial-style text
  - Contact info for web development inquiries
- **SEO**: Full meta tags, JSON-LD Organization schema
- **Note**: Page is crawlable but not linked from main navigation

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
- **PREVIEW**: Run local dev server (`npm run dev`)
- **PUSH**: Commit and push to `main` for Vercel preview
- **PROMOTE**: Merge `main` to `PROD` for production deployment

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

# PyData Indore Website

<p align="center">
  <a href="https://indore.pydata.org"><img src="https://img.shields.io/badge/Live%20Site-indore.pydata.org-a3e635?style=for-the-badge&logo=github-pages&logoColor=black" alt="Live Site"></a>
  <a href="https://github.com/pydataindore/pydataindore.github.io/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-e879f9?style=for-the-badge" alt="License"></a>
  <a href="https://github.com/pydataindore/pydataindore.github.io/pulls"><img src="https://img.shields.io/badge/PRs-Welcome-a3e635?style=for-the-badge&logo=git&logoColor=black" alt="PRs Welcome"></a>
  <a href="https://github.com/pydataindore/pydataindore.github.io/graphs/contributors"><img src="https://img.shields.io/github/contributors/pydataindore/pydataindore.github.io?style=for-the-badge&color=e879f9" alt="Contributors"></a>
  <a href="https://github.com/pydataindore/pydataindore.github.io/stargazers"><img src="https://img.shields.io/github/stars/pydataindore/pydataindore.github.io?style=for-the-badge&color=a3e635&logo=github&logoColor=black" alt="Stars"></a>
</p>

<p align="center">The official website for PyData Indore, a local chapter of the global PyData network.</p>

<p align="center">🌐 <strong>Live Site</strong>: <a href="https://indore.pydata.org">https://indore.pydata.org</a></p>

## About PyData Indore

PyData Indore is part of the global PyData network, an educational program of NumFOCUS, a 501(c)(3) nonprofit organization. We bring together data enthusiasts, practitioners, and researchers in Central India to share ideas and learn from each other. Our community focuses on Python, data science, machine learning, and open-source technologies.

## 🚀 Quick Start

This site is built with **[Jekyll](https://jekyllrb.com/)** — the same static-site generator GitHub Pages runs. Pages are Liquid templates with YAML front matter, and the nav, footer, and `<head>` come from shared layouts and includes.

> ⚠️ **You need to run Jekyll — a plain static file server will not work.**
> Opening the `.html` files directly, or serving them with `python -m http.server` / `npx serve` / VS Code Live Server, shows raw front matter and no navigation or footer, because nothing has processed the templates.

### Prerequisites

- **Ruby 3.x** with development headers — [installation guide](https://jekyllrb.com/docs/installation/)
  (on Windows, use [RubyInstaller **with Devkit**](https://rubyinstaller.org/))
- **Bundler**: `gem install bundler`

Check what you have:

```bash
ruby -v      # should be 3.x
bundle -v
```

### Run it locally

```bash
# 1. Clone your fork
git clone https://github.com/pydataindore/pydataindore.github.io.git
cd pydataindore.github.io

# 2. Install dependencies — first time, and after any Gemfile change
bundle install

# 3. Start the dev server
bundle exec jekyll serve
```

Open **<http://localhost:4000>**.

Edits to `.html`, `.css`, and `.js` files rebuild automatically — just refresh. The dev server sends no-cache headers (configured in `_config.yml`), so you should not need a hard refresh.

Useful flags:

| Command | What it does |
| --- | --- |
| `bundle exec jekyll serve --livereload` | Auto-refreshes the browser on save |
| `bundle exec jekyll serve --port 4001` | Use a different port |
| `bundle exec jekyll serve --no-watch` | Serve without rebuilding on change |
| `bundle exec jekyll build` | Build once into `_site/` without serving |

**`_config.yml` is the exception** — Jekyll does not watch it. Restart the server after editing it.

### Checking a production build

Local runs use the `development` environment, so Google Analytics never loads and no hits are sent. To build exactly what GitHub Pages will publish:

```bash
# macOS / Linux
JEKYLL_ENV=production bundle exec jekyll build

# Windows PowerShell
$env:JEKYLL_ENV="production"; bundle exec jekyll build
```

### Troubleshooting

**The site renders unstyled — white background, giant logo, no layout.**
Your `_site/` output is stale or corrupt. This happens most often when `jekyll build` is run while `jekyll serve` is already watching, since both write to `_site/` at once. Stop every Jekyll process, then:

```bash
rm -rf _site .jekyll-cache
bundle exec jekyll build
```

Because `_site/` is generated and gitignored, deleting it is always safe.

**`bundle install` fails to build native extensions.** Your Ruby install is missing development headers — on Windows, reinstall Ruby using RubyInstaller **with Devkit**.

**`cannot load such file -- webrick`.** Run `bundle install`; `webrick` is in the `Gemfile` for exactly this reason on Ruby 3.x.

## 🌍 Deployment

Deployment is automatic — there is no build step to run and no GitHub Actions workflow.

1. Merge to **`main`** on `pydataindore/pydataindore.github.io`
2. GitHub Pages rebuilds the site with the `github-pages` gem (Settings → Pages → *Deploy from a branch* → `main` / root)
3. The change is live at **<https://indore.pydata.org>**, usually within a couple of minutes

Things to know:

- The custom domain comes from the **`CNAME`** file at the repo root. Deleting or editing it breaks `indore.pydata.org` — leave it alone.
- Only plugins on the [GitHub Pages allowlist](https://pages.github.com/versions/) will run. The `Gemfile` pins the `github-pages` gem so your local build matches production; keep it that way rather than adding arbitrary plugins.
- **Never commit `_site/`.** It is build output and is gitignored.
- If a deploy looks wrong, check the repo's *Actions* tab — the `pages-build-deployment` run reports Jekyll build failures there.

## 📁 Project Structure

```
pydataindore.github.io/
├── _config.yml                   # Site-wide settings, defaults, build config
├── Gemfile                       # Pins the github-pages gem (matches production)
├── CNAME                         # Custom domain — do not remove
│
├── _layouts/
│   └── default.html              # The page shell: <head>, meta/OG tags, scripts
├── _includes/
│   ├── nav.html                  # Navigation (edit links here, once)
│   ├── footer.html               # Footer
│   ├── announcement.html         # Site-wide moving announcement ticker (currently off — see _layouts/default.html)
│   ├── cookie-consent.html       # Consent banner (gates analytics)
│   └── analytics.html            # GA4 — production builds only
│
├── index.html                    # Homepage
├── about.html                    # About PyData and our chapter
├── events.html                   # Upcoming and past events
├── team.html                     # Team & organizers
├── sponsors.html                 # Sponsors and partners
├── contact.html                  # Contact form and FAQs
├── volunteer.html                # Volunteer & co-organizer framework
├── code-of-conduct.html          # Community guidelines
├── privacy-policy.html           # Privacy policy
├── share.html                    # Link-hub page for socials / QR
│
│   # Event detail pages — one per event
├── meet-1.html                   # Meet #1 (23 May 2026)
├── hack-days.html                # PyData Indore Hack Days (18 Jul 2026)
├── ikigai-2026.html              # IKIGAI 2026 — community partnership
│
├── Assets/
│   ├── CSS/
│   │   ├── style.css             # Main stylesheet — shared by every page
│   │   ├── hack-days.css         # Page-specific (loaded via `extra_css`)
│   │   └── ikigai-2026.css       # Page-specific (loaded via `extra_css`)
│   ├── JavaScript/
│   │   └── main.js               # Nav, theme switcher, carousels, forms
│   └── images/
│       ├── Logos/                # Partner & sponsor logos
│       ├── Team/                 # Team photos
│       ├── Meetup1/ HackDays/ IKIGAI/   # Per-event assets
│       └── ...
│
├── _site/                        # Build output — generated, gitignored
└── README.md                     # This file
```

## 🎨 Design Features

- **Modern Dark Theme**: Electric Lime (#a3e635) with Hot Magenta (#e879f9) accents on near-black (#080808)
- **Typography**: Google Fonts (Space Mono, Syne) for modern, readable text
- **Visual Effects**: Grain overlay texture and floating shape animations
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Smooth Animations**: Scroll-triggered effects, hover transitions, and interactive elements
- **Accessible**: Following WCAG guidelines with proper ARIA labels
- **Fast Loading**: No heavy frameworks, pure HTML/CSS/JavaScript
- **Modern UI**: Card-based layouts, gradient backgrounds, and glassmorphism effects

## 🛠 Technologies Used

- **Jekyll + Liquid**: Static site generation — shared layouts, includes, and pretty URLs
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Vanilla JS for interactivity — no frameworks, no bundler
- **Google Fonts**: Space Mono and Syne font families
- **GitHub Pages**: Hosting and automatic builds, on the custom domain `indore.pydata.org`

## 🛠 Customization

### Updating Content

- **Events**: Edit `events.html` for the listing. Events with their own page (`hack-days.html`, `ikigai-2026.html`, …) also get a preview card on `index.html`
- **Sponsors**: Update `sponsors.html` with sponsor information
- **Team Members**: Update `team.html`
- **Contact info & social links**: Edit `_includes/footer.html` — it is shared by every page
- **Navigation**: Edit `_includes/nav.html`
- **Images**: Add to `Assets/images/` (per-event subfolder where it makes sense) and reference with a root-relative path, e.g. `/Assets/images/IKIGAI/poster.jpeg`

### Styling

The CSS uses custom properties (CSS variables) for easy theming:

```css
:root {
    --color-primary: #a3e635;       /* Electric Lime */
    --color-primary-dark: #84cc16;  /* Darker Lime */
    --color-primary-light: #d9f99d; /* Lighter Lime */
    --color-accent: #e879f9;        /* Hot Magenta */
    --color-accent-light: #f0abfc;  /* Light Magenta */
    --color-accent-dark: #d946ef;   /* Dark Magenta */
    --color-dark: #080808;          /* Near-black background */
    --color-dark-soft: #0f0f0f;     /* Soft dark surface */
}
```

The site also ships alternate themes (`cyberpunk`, `coral`, `amber`) as `[data-theme="…"]` overrides on `:root`, toggled by the floating switcher that `main.js` injects. **Always style with these variables rather than hardcoded hex values** — anything hardcoded will ignore the user's chosen theme.

You can customize the theme by modifying these variables in `Assets/CSS/style.css`.

### Adding New Pages

Create an `.html` file at the repo root containing **only your page content** — no `<html>`, `<head>`, `<nav>`, or `<footer>`. Those come from `_layouts/default.html`. Start it with YAML front matter:

```yaml
---
permalink: "/your-page/"                     # the URL — trailing slash, no .html
title: "Your Page | PyData Indore"           # <title> + OG/Twitter title
description: "One or two sentences."         # meta description + social preview
active: "events"                             # which nav item to highlight
extra_css: "/Assets/CSS/your-page.css"       # optional, page-specific styles
image: "/Assets/images/your-og-image.jpg"    # optional, social preview image
---
```

Front matter reference:

| Key | Required | Notes |
| --- | --- | --- |
| `permalink` | yes | Pretty URL, e.g. `/hack-days/`. Always link to pages this way — never `page.html`. |
| `title` | yes | Shown in the browser tab and social previews. |
| `description` | yes | Used for SEO and link previews. |
| `active` | yes | One of `home`, `about`, `events`, `team`, `coc`, `sponsors`. Event pages use `events`. |
| `extra_css` | no | Only for genuinely page-specific styling; shared styles belong in `style.css`. |
| `image` | no | Defaults to the PyData banner (set in `_config.yml`). |

The `layout` is applied automatically by the defaults in `_config.yml` — you do not need to declare it.

**To add the page to the main navigation**, edit `_includes/nav.html` — once. It is shared by every page, so there is no longer any need to update links file by file.

## 📝 Content Guidelines

- All events should follow the NumFOCUS Code of Conduct
- Use inclusive language
- Keep content professional and educational
- Credit speakers and contributors appropriately

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. **Fork** the repository
2. **Add the upstream remote** (only needed once):
   ```bash
   git remote add upstream https://github.com/pydataindore/pydataindore.github.io.git
   ```
3. **Create a feature branch** from the latest upstream:
   ```bash
   git fetch upstream
   git checkout -b feature/your-feature upstream/main
   ```
4. **Make your changes**, then **check them locally** before committing:
   ```bash
   bundle exec jekyll serve      # then open http://localhost:4000
   ```
   Look at the page you changed at both desktop and mobile widths, and click through
   any links you added. See [Quick Start](#-quick-start) if this is your first run.
5. **Commit**:
   ```bash
   git commit -m 'PYD-XX Description of change'
   ```
6. **Push** to your fork and open a Pull Request:
   ```bash
   git push origin feature/your-feature
   ```

> **Important — Squash & Merge:** This repo uses **Squash and Merge** for all PRs. After your PR is merged, your local commits will have different hashes from upstream. Clean up your fork with:
> ```bash
> git fetch upstream
> git reset --hard upstream/main
> git push --force-with-lease origin main
> ```
> ⚠️ Do **not** use GitHub's "Sync fork" button — it creates merge commits that permanently pollute your history.

### Areas We Need Help With

- 🎨 Design improvements and UI/UX enhancements
- 📱 Mobile experience optimizations
- ♿ Accessibility improvements (WCAG compliance)
- 🌐 Content translation (Hindi and other languages)
- 📸 Event photos and graphics
- 🧪 Testing and bug fixes
- 📝 Documentation improvements
- 🚀 Performance optimizations

## 👥 Contributors

Thanks to everyone who has contributed to this project!

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/SamChawla">
        <img src="https://github.com/SamChawla.png?size=100" width="100px;" alt="Sumit S Chawla" style="border-radius: 50%;"/><br/>
        <sub><b>Sumit S Chawla</b></sub>
      </a><br/>
      <sub>Organizer & Lead Dev</sub>
    </td>
    <td align="center">
      <a href="https://github.com/jagdish575">
        <img src="https://github.com/jagdish575.png?size=100" width="100px;" alt="Jagdish Prajapati" style="border-radius: 50%;"/><br/>
        <sub><b>Jagdish Prajapati</b></sub>
      </a><br/>
      <sub>Contributor</sub>
    </td>
  </tr>
</table>

Want to see your avatar here? [Contribute](#-contributing) to the project!

## 📧 Contact

- **Email**: [indore@pydata.org](mailto:indore@pydata.org)
- **LinkedIn**: [PyData Indore](https://www.linkedin.com/company/pydata-indore)
- **Instagram**: [@pydata.indore](https://www.instagram.com/pydata.indore/)
- **GitHub**: [@pydataindore](https://github.com/pydataindore)
- **Meetup**: [PyData Indore](https://www.meetup.com/pydata-indore/)
- **Code of Conduct Issues**: [admin@pydata.org](mailto:admin@pydata.org)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details (if available).

## 🔧 Development Notes

- **Navigation and footer live in `_includes/`** — edit `nav.html` or `footer.html` once, not every page
- **Link with pretty URLs**: `/events/`, not `/events.html`. Use root-relative paths (`/Assets/...`) so links work from nested URLs
- **Styling** is centralized in `Assets/CSS/style.css`. Reach for a page-specific file via `extra_css` only when the styles genuinely belong to one page
- **Theming** uses CSS custom properties with `[data-theme="…"]` overrides, so use `var(--color-primary)` and friends rather than hardcoding hex values — otherwise the theme switcher won't affect your work
- **JavaScript** is centralized in `Assets/JavaScript/main.js` — vanilla, no build step
- **Optimize images before committing.** Resize to roughly 2× their displayed width and export as JPEG/WebP; multi-MB files slow the site down noticeably
- **Analytics only run in production** and only after consent, so local development never sends hits
- **Never commit `_site/`** — it is generated output

## 🙏 Acknowledgments

- [PyData Global](https://pydata.org) for the global network and support
- [NumFOCUS](https://numfocus.org) for fiscal sponsorship
- All our volunteers and community members
- Our sponsors who make events possible

---

Made with ❤️ by the PyData Indore community

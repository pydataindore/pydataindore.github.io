# PyData Indore Website

The official website for PyData Indore, a local chapter of the global PyData network.

🌐 **Live Site**: [https://pydataindore.github.io](https://pydataindore.github.io)

## About PyData Indore

PyData Indore is part of the global PyData network, an educational program of NumFOCUS, a 501(c)(3) nonprofit organization. We bring together data enthusiasts, practitioners, and researchers in Central India to share ideas and learn from each other. Our community focuses on Python, data science, machine learning, and open-source technologies.

## 🚀 Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/pydataindore/pydataindore.github.io.git
   cd pydataindore.github.io
   ```

2. Open with a local server (you can use any of these methods):
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js:**
   ```bash
   npx serve
   ```
   
   **Using VS Code:**
   Install the "Live Server" extension and click "Go Live"

3. Open `http://localhost:8000` in your browser

### Deploying to GitHub Pages

1. Push your changes to the `main` branch
2. Go to Settings → Pages
3. Select "Deploy from a branch" and choose `main`
4. Your site will be live at `https://[username].github.io/[repo-name]`

## 📁 Project Structure

```
pydataindore.github.io/
├── index.html                    # Homepage
├── about.html                    # About PyData and our chapter
├── events.html                   # Upcoming and past events
├── code-of-conduct.html          # Community guidelines
├── sponsors.html                 # Sponsorship information
├── contact.html                  # Contact form and FAQs
├── Assets/
│   ├── CSS/
│   │   └── style.css            # Main stylesheet
│   ├── JavaScript/
│   │   └── main.js              # JavaScript functionality
│   └── images/                  # Images and logos
│       ├── pydata_banner_logo.jpeg
│       ├── pydata_logo.png
│       ├── PyData_logo1.webp
│       └── ...
└── README.md                     # This file
```

## 🎨 Design Features

- **Modern Dark Theme**: Vibrant cyan (#06b6d4) with warm orange (#f97316) accents
- **Typography**: Google Fonts (Space Mono, Syne) for modern, readable text
- **Visual Effects**: Grain overlay texture and floating shape animations
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **Smooth Animations**: Scroll-triggered effects, hover transitions, and interactive elements
- **Accessible**: Following WCAG guidelines with proper ARIA labels
- **Fast Loading**: No heavy frameworks, pure HTML/CSS/JavaScript
- **Modern UI**: Card-based layouts, gradient backgrounds, and glassmorphism effects

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Vanilla JS for interactivity
- **Google Fonts**: Space Mono and Syne font families
- **GitHub Pages**: Hosting platform

## 🛠 Customization

### Updating Content

- **Events**: Edit `events.html` to add/update events
- **Sponsors**: Update `sponsors.html` with sponsor information
- **Contact Info**: Update email addresses and social links in all HTML files
- **Images**: Add new images to `Assets/images/` and reference them in HTML files
- **Team Members**: Update team information in `index.html` and `about.html`

### Styling

The CSS uses custom properties (CSS variables) for easy theming:

```css
:root {
    --color-primary: #06b6d4;       /* Main cyan */
    --color-primary-dark: #0891b2;  /* Darker cyan */
    --color-primary-light: #22d3ee; /* Lighter cyan */
    --color-accent: #f97316;        /* Orange accent */
    --color-accent-light: #fb923c;  /* Light orange */
    --color-accent-dark: #ea580c;   /* Dark orange */
    --color-dark: #0f172a;          /* Background */
    --color-dark-soft: #1e293b;     /* Soft dark */
}
```

You can customize the theme by modifying these variables in `Assets/CSS/style.css`.

### Adding New Pages

1. Copy an existing HTML file (e.g., `about.html`) as a template
2. Update the `<title>` tag in the `<head>` section
3. Update the navigation `active` class on the corresponding `<li><a>` element
4. Modify the content sections
5. Add the page link to the navigation menu in all HTML files
6. Ensure footer links are consistent across all pages

## 📝 Content Guidelines

- All events should follow the NumFOCUS Code of Conduct
- Use inclusive language
- Keep content professional and educational
- Credit speakers and contributors appropriately

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Areas We Need Help With

- 🎨 Design improvements and UI/UX enhancements
- 📱 Mobile experience optimizations
- ♿ Accessibility improvements (WCAG compliance)
- 🌐 Content translation (Hindi and other languages)
- 📸 Event photos and graphics
- 🧪 Testing and bug fixes
- 📝 Documentation improvements
- 🚀 Performance optimizations

## 📧 Contact

- **Email**: [pydataindore@gmail.com](mailto:pydataindore@gmail.com)
- **LinkedIn**: [PyData Indore](https://www.linkedin.com/company/pydata-indore)
- **Instagram**: [@pydata.indore](https://www.instagram.com/pydata.indore/)
- **GitHub**: [@pydataindore](https://github.com/pydataindore)
- **Meetup**: [PyData Indore](https://www.meetup.com/pydata-indore/)
- **Code of Conduct Issues**: [admin@pydata.org](mailto:admin@pydata.org)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details (if available).

## 🔧 Development Notes

- All HTML files share the same navigation structure - update consistently across all pages
- The site uses a single CSS file (`Assets/CSS/style.css`) for all styling
- JavaScript functionality is centralized in `Assets/JavaScript/main.js`
- Images should be optimized before adding to `Assets/images/`
- The site is designed to work without a build process - just static HTML/CSS/JS

## 🙏 Acknowledgments

- [PyData Global](https://pydata.org) for the global network and support
- [NumFOCUS](https://numfocus.org) for fiscal sponsorship
- All our volunteers and community members
- Our sponsors who make events possible

---

Made with ❤️ by the PyData Indore community

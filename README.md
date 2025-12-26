# PyData Indore Website

The official website for PyData Indore, a local chapter of the global PyData network.

🌐 **Live Site**: [https://pydata-indore.github.io](https://pydata-indore.github.io) (Update with your actual URL)

## About PyData Indore

PyData Indore is part of the global PyData network, an educational program of NumFOCUS, a 501(c)(3) nonprofit organization. We bring together data enthusiasts, practitioners, and researchers in Central India to share ideas and learn from each other.

## 🚀 Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/pydata-indore/pydata-indore.github.io.git
   cd pydata-indore.github.io
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
pydata-indore/
├── index.html          # Homepage
├── about.html          # About PyData and our chapter
├── events.html         # Upcoming and past events
├── code-of-conduct.html # Community guidelines
├── sponsors.html       # Sponsorship information
├── contact.html        # Contact form and FAQs
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## 🎨 Design Features

- **Modern Dark Theme**: Deep teal with warm saffron accents
- **Responsive Design**: Works on all devices
- **Smooth Animations**: Subtle scroll and hover effects
- **Accessible**: Following WCAG guidelines
- **Fast Loading**: No heavy frameworks, pure HTML/CSS/JS

## 🛠 Customization

### Updating Content

- **Events**: Edit `events.html` to add/update events
- **Sponsors**: Update `sponsors.html` with sponsor information
- **Contact Info**: Modify email addresses and social links in all pages

### Styling

The CSS uses custom properties (CSS variables) for easy theming:

```css
:root {
    --color-primary: #0d9488;      /* Main teal */
    --color-accent: #f59e0b;        /* Saffron accent */
    --color-dark: #0f172a;          /* Background */
}
```

### Adding New Pages

1. Copy an existing HTML file as a template
2. Update the navigation `active` class
3. Modify the content
4. Add the page to the footer links

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

- 🎨 Design improvements
- 📱 Mobile experience enhancements
- ♿ Accessibility improvements
- 🌐 Hindi translation
- 📸 Event photos and graphics

## 📧 Contact

- **Email**: hello@pydataindore.org
- **Twitter**: [@pydataindore](https://twitter.com/pydataindore)
- **Discord**: [Join our server](https://discord.gg/pydata-indore)
- **Meetup**: [PyData Indore](https://meetup.com/pydata-indore)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [PyData Global](https://pydata.org) for the global network and support
- [NumFOCUS](https://numfocus.org) for fiscal sponsorship
- All our volunteers and community members
- Our sponsors who make events possible

---

Made with ❤️ by the PyData Indore community

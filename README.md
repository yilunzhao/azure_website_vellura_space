# Vellura Space - AI-Powered Interior Design & Soft Furnishings Styling

Welcome to the Vellura Space website repository. This is a modern, responsive website for showcasing AI-powered interior design and soft furnishings styling services.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Aesthetics**: Warm, sophisticated color palette perfect for interior design
- **Interactive Elements**: Smooth scrolling, animations, and parallax effects
- **Mobile-First Approach**: Optimized for all screen sizes
- **Fast Performance**: No external JavaScript dependencies, pure vanilla JS
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## Technology Stack

- **HTML5**: Semantic markup with modern best practices
- **CSS3**: Custom properties, CSS Grid, Flexbox, animations, and gradients
- **JavaScript (ES6+)**: Vanilla JavaScript with no dependencies
- **Google Fonts**: Inter and Playfair Display for beautiful typography

## Project Structure

```
vellura_space/
├── index.html           # Main HTML file
├── styles.css           # All CSS styles and animations
├── script.js            # JavaScript functionality
├── README.md            # This file
├── DEPLOYMENT.md        # Deployment guide
├── CNAME                # Custom domain configuration
└── .gitignore           # Git ignore rules
```

## Website Sections

1. **Navigation Bar**: Fixed navbar with smooth scroll effects and mobile hamburger menu
2. **Hero Section**: Eye-catching introduction with CTA buttons and statistics
3. **Features**: 6 key features showcasing the platform's benefits
4. **How It Works**: 4-step process explanation
5. **Benefits**: 6 benefit cards highlighting value propositions
6. **Call-to-Action**: Email subscription form and contact information
7. **Footer**: Links, company info, and social media connections

## Color Palette

- **Primary**: #9b7e6b (Warm Taupe)
- **Secondary**: #c9a984 (Soft Caramel)
- **Accent**: #d4a373 (Warm Tan)
- **Background**: #f7f5f1 (Cream)
- **Dark Background**: #2e2e2e (Charcoal)

## Customization

### Updating Content

1. **Company Info**: Edit the footer and CTA section with your actual contact information
2. **Colors**: Modify CSS variables in `styles.css` (`:root` section)
3. **Fonts**: Change Google Fonts links in `index.html` head section
4. **Images/Icons**: Replace emoji icons with actual images as needed

### Key CSS Variables to Customize

```css
:root {
    --primary: #9b7e6b;           /* Main brand color */
    --secondary: #c9a984;         /* Secondary brand color */
    --background: #f7f5f1;        /* Light background */
    --background-dark: #2e2e2e;   /* Dark background */
    --text-primary: #2e2e2e;      /* Main text color */
}
```

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vellura_space.git
cd vellura_space
```

2. Open `index.html` in your browser:
```bash
open index.html
# or
python -m http.server 8000
# then visit http://localhost:8000
```

3. Make your changes and test in real-time

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minimal CSS without unnecessary bloat
- No external JavaScript libraries
- Lazy loading with Intersection Observer API
- Optimized animations with hardware acceleration
- Responsive images and scalable vector graphics

## Accessibility

- Semantic HTML5 markup
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Mobile-friendly touch targets

## Analytics & Integration

To add Google Analytics or other tracking:

1. Add your tracking code before the closing `</body>` tag in `index.html`
2. For email form submissions, integrate with your email service (Mailchimp, SendGrid, etc.)

## Deployment

For detailed deployment instructions including GitHub Pages and Cloudflare setup, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick Start - GitHub Pages

1. Create a new GitHub repository named `vellura_space` (or your custom name)
2. Push this code to your repository
3. Go to Settings > Pages and select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/vellura_space`

### Quick Start - Cloudflare

1. Point your custom domain's nameservers to Cloudflare
2. In Cloudflare, create an A record pointing to GitHub Pages IP
3. Enable HTTPS (automatic with Cloudflare)

For complete instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## File Sizes

- `index.html`: ~20 KB
- `styles.css`: ~20 KB
- `script.js`: ~12 KB
- **Total**: ~52 KB (uncompressed)

## Features to Add

Consider these enhancements for future versions:
- [ ] Portfolio gallery with before/after images
- [ ] Client testimonials section
- [ ] Blog/Resources page
- [ ] Service pricing table
- [ ] Team member profiles
- [ ] Video embedding
- [ ] Advanced form with backend integration
- [ ] Dark mode toggle
- [ ] Multi-language support

## Troubleshooting

### Styles not loading?
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check that `styles.css` is in the same directory as `index.html`

### JavaScript not working?
- Check browser console for errors (F12)
- Ensure `script.js` is in the same directory
- Check that JavaScript is enabled in your browser

### Navigation not smooth?
- Some older browsers don't support smooth scrolling natively
- The fallback is instant jump navigation, which still works

## SEO Tips

1. Update meta description in `index.html`
2. Add relevant keywords
3. Ensure fast loading times
4. Create XML sitemap
5. Set up Google Search Console
6. Add structured data (Schema.org)

## License

This website template is free to use and modify for Vellura Space.

## Support

For issues, questions, or suggestions:
- Email: hello@velluraspc.com
- Create an issue on GitHub

## Version History

- **v1.0.0** (2024) - Initial launch with core features

---

Made with care for beautiful spaces.

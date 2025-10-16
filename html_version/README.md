# Bitcoin Pro - HTML Version

This folder contains standalone HTML/CSS/JavaScript versions of all pages from the Bitcoin Pro website.

## 📁 Folder Structure

```
html_version/
├── index.html              # Home page
├── about.html              # About page
├── contact.html            # Contact page
├── download.html           # Download page
├── rpc-docs.html           # RPC Documentation page
├── blog.html               # Blog listing page
├── styles/                 # CSS files
│   ├── common.css          # Shared styles (navbar, footer, base)
│   ├── index.css           # Home page specific styles
│   ├── about.css           # About page specific styles
│   ├── contact.css         # Contact page specific styles
│   ├── download.css        # Download page specific styles
│   ├── rpc-docs.css        # RPC docs page specific styles
│   └── blog.css            # Blog page specific styles
└── scripts/                # JavaScript files
    └── common.js           # Shared JavaScript (mobile menu)
```

## 🎨 Styling Architecture

Each page uses two CSS files:
1. **common.css** - Contains all shared styles:
   - CSS variables and design tokens
   - Reset and base styles
   - Navbar components
   - Footer components
   - Mobile navigation
   - Responsive breakpoints

2. **Page-specific CSS** - Contains styles unique to each page:
   - `index.css` - Hero section, about section, maintainers section
   - `about.css` - About hero, goals section, help section
   - `contact.css` - Contact hero, contact information
   - `download.css` - Download hero, verification section, OS selection
   - `rpc-docs.css` - RPC documentation layout
   - `blog.css` - Blog listing layout

## 📱 Responsive Design

All pages are fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 JavaScript Functionality

The `common.js` file provides:
- Mobile menu toggle functionality
- Menu open/close handlers
- Body scroll lock when mobile menu is open

## 🚀 Usage

1. Simply open any HTML file in a web browser
2. All pages are standalone and self-contained
3. Links between pages work correctly
4. Images reference the `../public/` directory

## 📝 Notes

- All styles use CSS custom properties (CSS variables) for consistency
- Font families are loaded from Google Fonts
- Images are referenced from the parent `public/` folder
- Each page follows the same structural pattern for easy maintenance

## 🔗 Page Links

- **Home**: `index.html`
- **About**: `about.html`
- **Blog**: `blog.html`
- **Contact**: `contact.html`
- **Download**: `download.html`
- **RPC Docs**: `rpc-docs.html`

---

Generated for Bitcoin Pro | HTML/CSS/JavaScript Version

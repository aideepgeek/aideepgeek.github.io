# Modern Jekyll Theme

A modern, fast, and responsive Jekyll theme built with Tailwind CSS and Alpine.js. Perfect for developers, designers, and creatives who want a sleek online presence.

![Modern Jekyll Theme](screenshot.png)

## Features

- 🎨 **Modern Design** - Clean, minimalist aesthetic with beautiful typography
- ⚡ **Lightning Fast** - Optimized for 100/100 Lighthouse scores
- 📱 **Fully Responsive** - Looks great on all devices
- 🌙 **Dark Mode** - Automatic dark mode support
- 🔍 **Search** - Built-in search functionality
- 📝 **Blog** - Full blogging capabilities with categories and tags
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- ⚡ **Alpine.js** - Lightweight JavaScript framework
- 🔧 **Easy Customization** - Well-organized and documented code
- 📊 **SEO Ready** - Built-in SEO optimization
- 🗺️ **Sitemap** - Automatic sitemap generation
- 📰 **RSS Feed** - Automatic RSS feed generation
- 💬 **Comments** - Disqus integration
- 🔗 **Social Sharing** - Easy social media sharing

## Demo

[View Live Demo](https://aideepgeek.github.io/)

## Installation

### Prerequisites

- Ruby 2.7 or higher
- Bundler
- Node.js 16+ and npm/yarn

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/aideepgeek/modern-jekyll-theme.git
cd modern-jekyll-theme
```

2. Install Ruby dependencies:
```bash
bundle install
```

3. Install Node.js dependencies:
```bash
npm install
```

4. Build the CSS:
```bash
npm run build:css
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:4000`

## Usage

### Creating a New Post

Create a new file in the `_posts` directory with the following format:

```bash
YEAR-MONTH-DAY-title.md
```

Example:
```markdown
---
layout: post
title: "My First Post"
date: 2024-01-15 10:00:00 +0000
categories: [jekyll, tutorial]
tags: [beginner, guide]
author: Your Name
image: /assets/images/blog/post-image.jpg
---

Your post content here...
```

### Creating a New Page

Create a new file in the `_pages` directory:

```markdown
---
layout: page
title: About
subtitle: Learn more about us
permalink: /about/
---

Your page content here...
```

### Creating a New Project

Create a new file in the `_projects` directory:

```markdown
---
layout: project
title: Project Name
categories: [web-development]
client: Client Name
year: 2024
duration: 3 months
demo_url: https://demo.example.com
github_url: https://github.com/example/project
image: /assets/images/projects/project.jpg
technologies: [React, Node.js, Tailwind CSS]
services: [Web Design, Development]
---

Project description here...
```

### Creating a New Service

Create a new file in the `_services` directory:

```markdown
---
layout: service
title: Service Name
subtitle: Service description
icon: 🎨
---

Service content here...
```

## Customization

### Site Configuration

Edit `_config.yml` to customize your site:

```yaml
title: Your Site Name
description: Your site description
author:
  name: Your Name
  bio: "Your bio"
  avatar: /assets/images/avatar.jpg
social:
  twitter: yourusername
  github: yourusername
  linkedin: yourusername
```

### Colors

Edit `tailwind.config.js` to customize colors:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ...
    600: '#2563eb',
    // ...
  },
}
```

### Fonts

The theme uses Google Fonts (Inter, Merriweather, Fira Code). To change fonts, edit the Google Fonts link in `_layouts/default.html` and update the `fontFamily` in `tailwind.config.js`.

## Available Scripts

- `npm run build` - Build the site for production
- `npm run build:css` - Build CSS with Tailwind
- `npm run watch:css` - Watch and rebuild CSS on changes
- `npm run serve` - Start Jekyll development server
- `npm run dev` - Start both CSS watcher and Jekyll server
- `npm run clean` - Clean the `_site` directory

## Folder Structure

```
modern-jekyll-theme/
├── _data/              # Data files
├── _includes/          # Include partials
├── _layouts/           # Layout templates
├── _pages/             # Static pages
├── _posts/             # Blog posts
├── _projects/          # Project pages
├── _sass/              # Sass partials
├── _services/          # Service pages
├── assets/             # Static assets
│   ├── css/           # Stylesheets
│   ├── images/        # Images
│   └── js/            # JavaScript files
├── _config.yml         # Site configuration
├── Gemfile            # Ruby dependencies
├── package.json       # Node.js dependencies
├── tailwind.config.js # Tailwind configuration
└── postcss.config.js  # PostCSS configuration
```

## Deployment

### GitHub Pages

1. Fork this repository
2. Rename it to `yourusername.github.io`
3. Update `_config.yml` with your information
4. Push your changes
5. Your site will be live at `https://yourusername.github.io`

### Netlify

1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `_site`
4. Deploy!

### Vercel

1. Import your Git repository
2. Set framework preset to "Other"
3. Set build command: `npm run build`
4. Set output directory: `_site`
5. Deploy!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- [Jekyll](https://jekyllrb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Alpine.js](https://alpinejs.dev/)
- [Inter Font](https://rsms.me/inter/)

## Support

If you have any questions or need help, please [open an issue](https://github.com/aideepgeek/modern-jekyll-theme/issues).

---

Made with ❤️ by [aideepgeek](https://aideepgeek.github.io)

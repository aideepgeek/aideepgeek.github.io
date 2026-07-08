# Development Guide

This guide will help you set up and develop the Modern Jekyll Theme locally.

## Prerequisites

- Ruby 2.7 or higher
- Node.js 16+ and npm
- Bundler gem

## Setup

### 1. Install Ruby Dependencies

```bash
bundle install
```

### 2. Install Node.js Dependencies

```bash
npm install
```

### 3. Build CSS

For development (with watch mode):
```bash
npm run watch:css
```

For production:
```bash
npm run build:css
```

### 4. Start Development Server

```bash
npm run dev
```

This will start both the CSS watcher and Jekyll server.

Visit `http://localhost:4000` to view the site.

## Development Workflow

### Making Changes to CSS

1. Edit files in `assets/css/main.css`
2. The CSS will automatically rebuild when using `npm run watch:css`
3. Refresh your browser to see changes

### Customizing Tailwind

Edit `tailwind.config.js` to:
- Add custom colors
- Extend default theme
- Add plugins
- Configure content paths

### Adding New Layouts

1. Create a new file in `_layouts/` directory
2. Use the existing layouts as templates
3. Reference in front matter: `layout: your-layout`

### Adding New Includes

1. Create a new file in `_includes/` directory
2. Include in layouts or pages: `{% include your-include.html %}`

### Creating Content

#### Blog Posts
Create files in `_posts/` with format: `YYYY-MM-DD-title.md`

```yaml
---
layout: post
title: "Post Title"
date: 2024-01-15 10:00:00 +0000
categories: [category1, category2]
tags: [tag1, tag2]
---
```

#### Pages
Create files in `_pages/`:

```yaml
---
layout: page
title: Page Title
permalink: /page-url/
---
```

#### Projects
Create files in `_projects/`:

```yaml
---
layout: project
title: Project Name
categories: [web-development]
year: 2024
image: /assets/images/projects/project.jpg
technologies: [React, Node.js]
---
```

#### Services
Create files in `_services/`:

```yaml
---
layout: service
title: Service Name
icon: 🎨
---
```

## Build for Production

```bash
npm run build
```

This will:
1. Build CSS with Tailwind
2. Build the Jekyll site
3. Output to `_site/` directory

## Troubleshooting

### CSS not updating
- Make sure `npm run watch:css` is running
- Check that your HTML files are in the `content` array in `tailwind.config.js`
- Try clearing browser cache

### Jekyll build errors
- Check `_config.yml` for syntax errors
- Ensure all required gems are installed: `bundle install`
- Check file permissions

### Node.js errors
- Delete `node_modules/` and `package-lock.json`
- Run `npm install` again
- Ensure you're using Node.js 16+

## File Structure

```
.
├── _config.yml          # Site configuration
├── _data/               # Data files
├── _includes/           # Include partials
├── _layouts/            # Layout templates
├── _pages/              # Static pages
├── _posts/              # Blog posts
├── _projects/           # Project pages
├── _sass/               # Sass partials
├── _services/           # Service pages
├── assets/              # Static assets
│   ├── css/            # Stylesheets
│   ├── images/         # Images
│   └── js/             # JavaScript files
└── index.md            # Homepage
```

## Available Scripts

- `npm run build` - Full production build
- `npm run build:css` - Build CSS once
- `npm run watch:css` - Watch and rebuild CSS
- `npm run serve` - Start Jekyll server only
- `npm run dev` - Start both CSS watcher and Jekyll server
- `npm run clean` - Clean Jekyll build

## Tips

1. **Use the browser inspector** - Tailwind's utility classes make it easy to experiment
2. **Check the Jekyll docs** - For advanced Liquid templating
3. **Test on multiple devices** - The theme is responsive, test on mobile and desktop
4. **Optimize images** - Use WebP format when possible
5. **Keep dependencies updated** - Regularly run `bundle update` and `npm update`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For issues and questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review Jekyll and Tailwind documentation

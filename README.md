# Music Artist Landing Page

A simple, modern landing page for a music artist built with React + Vite and pnpm. This is a demo project created primarily for practicing Git.

## 🎵 Features

- **Modern Design**: Clean, gradient-based UI with smooth animations
- **Responsive Layout**: Works great on all screen sizes
- **Fast Performance**: Built with Vite for lightning-fast development
- **Simple Structure**: Easy to understand and modify

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Build for Production

```bash
pnpm build
```

The production-ready files will be in the `dist` folder.

## 🎨 Customization

### Change Artist Information

Edit `src/App.jsx` to update:
- Artist name (line 11)
- Tagline (line 12)
- Albums (lines 6-10)

### Modify Colors

Update CSS variables in `src/index.css`:
- `--primary`: Main brand color
- `--secondary`: Accent color
- `--bg-dark`: Background color
- `--bg-card`: Card background

### Update Styles

Main styles are in:
- `src/index.css` - Global styles and CSS variables
- `src/App.css` - Component-specific styles

## 📁 Project Structure

```
music-artist-site/
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # Component styles
│   ├── index.css        # Global styles
│   └── main.jsx         # App entry point
├── public/              # Static assets
├── index.html           # HTML template
└── package.json         # Dependencies
```

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **pnpm** - Package manager

## 📝 License

This is a demo project for learning purposes. Feel free to use and modify as needed.

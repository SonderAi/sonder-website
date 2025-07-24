## Sondry Website

A modern, responsive website for Sonder built with React, TypeScript, and Vite. The website showcases web development services, featured projects, and provides an interactive contact experience.

## 🚀 Features

- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Interactive UI**: Smooth animations with Framer Motion
- **Multi-page Navigation**: React Router for seamless page transitions
- **Contact Form**: Interactive conversational contact form
- **Project Showcase**: Featured projects with detailed modals
- **Admin Panel**: Protected admin routes for project management
- **Type-Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Linting**: ESLint with TypeScript support

## 📦 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SonderAi/sonder-website.git
cd sonder-website
```

### 2. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 3. Start Development Server

```bash
npm run dev
```

or

```bash
yarn dev
```

The application will start at `http://localhost:5173` (or the next available port).

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

## 🏗️ Building for Production

### 1. Create Production Build

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle and optimize all assets
- Generate optimized production files in the `dist/` directory

### 2. Preview Production Build

```bash
npm run preview
```

This starts a local server to preview the production build.

### 3. Deploy

The built files in the `dist/` directory can be deployed to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── admin/          # Admin panel components
│   ├── contact/        # Contact form components
│   ├── features/       # Feature-related components
│   ├── graphics/       # Visual graphics and illustrations
│   ├── layout/         # Layout components (Header, Footer)
│   ├── projects/       # Project showcase components
│   ├── sections/       # Page section components
│   └── ui/            # Basic UI components
├── data/              # Static data and configurations
├── pages/             # Page components
├── styles/            # Global styles
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🎨 Styling

This project uses **Tailwind CSS 4** for styling:

- Utility-first CSS framework
- Responsive design system
- Custom color palette and design tokens
- Dark theme support

## 🔧 Development

### ESLint Configuration

The project includes a comprehensive ESLint setup with:
- TypeScript support
- React-specific rules
- Modern JavaScript standards

### TypeScript Configuration

- Strict TypeScript configuration
- Separate configs for app and build tools
- Full type checking enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Sonder.

## 📞 Support

For any questions or support, please contact the development team or create an issue in the repository. minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

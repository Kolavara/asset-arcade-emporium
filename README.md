# Asset Arcade Emporium

A modern e-commerce platform for discovering, browsing, and purchasing digital assets. Built with cutting-edge web technologies for a smooth and intuitive user experience.

## 🎮 Overview

Asset Arcade Emporium is a full-featured digital marketplace application designed to make it easy to find and purchase digital assets. Whether you're looking for game assets, design elements, or other digital products, this platform provides a seamless shopping experience with a polished UI and responsive design.

## ✨ Features

- **Modern UI Components** - Built with shadcn/ui for a professional, accessible interface
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Form Validation** - Robust form handling with react-hook-form and zod validation
- **Data Fetching** - Efficient server state management with React Query
- **Smooth Animations** - Enhanced UX with Tailwind CSS animations
- **Theme Support** - Light/dark mode support with next-themes
- **Charts & Data Visualization** - Integrated with Recharts for analytics
- **Drag & Drop** - React Resizable Panels for flexible layouts
- **Carousel** - Image galleries with Embla Carousel
- **Notifications** - Toast notifications with Sonner

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://react.dev/) 18.3
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.5
- **Build Tool**: [Vite](https://vitejs.dev/) 5.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Router**: [React Router](https://reactrouter.com/) 6.26
- **Icon Library**: [Lucide React](https://lucide.dev/)

### State & Data Management
- **Forms**: [React Hook Form](https://react-hook-form.com/) 7.53
- **Validation**: [Zod](https://zod.dev/) 3.23
- **Server State**: [React Query](https://tanstack.com/query/latest) 5.56

### UI/UX Enhancements
- **Components**: Radix UI primitives
- **Charts**: [Recharts](https://recharts.org/) 2.12
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/) 8.3
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) 1.5
- **Theme**: [next-themes](https://next-themes-example.vercel.app/) 0.3

### Development Tools
- **Linting**: [ESLint](https://eslint.org/) 9.9
- **Package Manager**: npm/Bun

## 🚀 Getting Started

### Prerequisites

- Node.js (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or Bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kolavara/asset-arcade-emporium.git
   cd asset-arcade-emporium
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (default Vite port)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot module replacement |
| `npm run build` | Build the project for production |
| `npm run build:dev` | Build with development mode enabled |
| `npm run lint` | Run ESLint to check code quality |
| `npm run preview` | Preview the production build locally |

## 📁 Project Structure

```
asset-arcade-emporium/
├── src/                      # Source code
│   ├── components/          # React components
│   ├── pages/              # Page components
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── eslint.config.js        # ESLint configuration
└── README.md               # This file
```

## 🎨 Styling & Components

This project uses **shadcn/ui** for accessible, customizable UI components. Each component comes with:
- Full TypeScript support
- Tailwind CSS styling
- Accessibility features (a11y)
- Customizable appearance

Common components include:
- Buttons, Forms, Inputs
- Dialogs, Modals, Alerts
- Dropdowns, Menus, Navigation
- Cards, Tables, Carousels
- And many more!

## 🔧 Configuration Files

- **tsconfig.json** - TypeScript compiler options
- **vite.config.ts** - Vite build and dev server configuration
- **tailwind.config.ts** - Tailwind CSS customization
- **postcss.config.js** - CSS post-processing
- **eslint.config.js** - Code linting rules
- **components.json** - shadcn/ui component configuration

## 📝 Development Workflow

### Editing Code

Choose your preferred method:

**Local IDE**
- Clone the repository and use your favorite editor (VS Code, WebStorm, etc.)
- Changes are reflected immediately with hot module replacement

**GitHub Web Editor**
- Navigate to any file in the repository
- Click the pencil icon to edit directly
- Commit changes from the web interface

**GitHub Codespaces**
- Click "Code" → "Codespaces" → "New codespace"
- Full development environment in your browser
- Commit and push changes directly

### Code Quality

Before committing, ensure code quality:
```bash
npm run lint
```

## 🚢 Deployment

Build for production:
```bash
npm run build
```

This generates an optimized production build in the `dist/` directory, ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📦 Dependencies

All dependencies are listed in `package.json`. Key packages include:
- UI framework dependencies (React, React DOM)
- UI component libraries (Radix UI, shadcn/ui)
- Form and validation libraries
- Utilities and helpers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source. Check the repository for license details.

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Router Documentation](https://reactrouter.com/)

## 📞 Support

For issues and questions:
1. Check existing [GitHub Issues](https://github.com/Kolavara/asset-arcade-emporium/issues)
2. Create a new issue with detailed information
3. Include steps to reproduce and your environment details

---

Built with ❤️ using modern web technologies

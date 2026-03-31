# riboli.dev

A modern personal portfolio website built with Next.js 16, showcasing professional experience, skills, education, and projects.

## ✨ Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS 4
- **Smooth Animations** - Framer Motion for elegant transitions and interactions
- **Modern Stack** - Built with Next.js 16, React 19, and TypeScript
- **Fast Performance** - Optimized for speed with automatic image and font optimization
- **Multiple Sections** - Hero, Skills, Experience, Education, Projects, and Contact areas

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended 20 LTS)
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The app auto-reloads as you edit files. Start by modifying `app/page.tsx`.

## 📁 Project Structure

```
riboli.dev/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Header/navigation
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── Skills.tsx      # Skills section
│       ├── Experience.tsx  # Work experience
│       ├── Education.tsx   # Education section
│       ├── Projects.tsx    # Projects showcase
│       └── Contact.tsx     # Contact section
├── public/                 # Static assets
├── package.json
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.1](https://nextjs.org)
- **UI Library**: [React 19.2.4](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion)
- **Icons**: [Lucide React](https://lucide.dev)
- **Language**: [TypeScript 5](https://www.typescriptlang.org)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint checks
```

## 🎨 Customization

- **Content**: Edit sections in `components/sections/`
- **Styles**: Modify Tailwind CSS classes or update `app/globals.css`
- **Navigation**: Update `components/Navigation.tsx`
- **Animations**: Adjust Framer Motion configs in component files

## 🚢 Deployment

The easiest way to deploy is on [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=riboli-dev):

```bash
npm run build   # Verify production build
vercel         # Deploy to Vercel
```

For detailed deployment instructions, see the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/introduction)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

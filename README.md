# NeuroTrack — AI-Powered Focus & Productivity Web App

> **Official marketing website** for the NeuroTrack mobile app — _Passive Productivity, Powered by AI._

---

## 🚀 Overview

**NeuroTrack Web** is the landing page and promotional website for the NeuroTrack mobile application. It showcases the app's core features, use cases, pricing plans, and real in-app screenshots — all wrapped in a premium dark-first design with full light/dark mode support.

The site is built with **Vite + React + TypeScript + Tailwind CSS v4**, following a component-based architecture with a centralised design system.

---

## ✨ Features

| Feature                        | Description                                                                            |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| 🎨 **Dark / Light Mode**       | Toggle with one click. Preference persisted in `localStorage`. Defaults to OS theme.   |
| 🔍 **Scroll-Spy Navigation**   | Active section automatically highlighted in the Navbar using `IntersectionObserver`.   |
| 📱 **App Screenshots Gallery** | Horizontal scroll gallery of real in-app screenshots at `/screenshots`.                |
| 🏠 **Full Landing Page**       | Hero, Stats Bar, Features (8), Use Cases (tabs), How It Works, Pricing, Download CTA.  |
| 📐 **Responsive Design**       | Mobile-first layout with a hamburger menu and adaptive grid breakpoints.               |
| ⚡ **Smooth Scrolling**        | Navbar anchor links scroll to sections; works even when navigating from other routes.  |
| 🌐 **SEO Ready**               | Meta tags, Open Graph, descriptive title, semantic HTML with proper heading hierarchy. |

---

## 🛠️ Tech Stack

| Layer      | Technology                                                                                                                             |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)                                                         |
| Build Tool | [Vite 6](https://vitejs.dev/)                                                                                                          |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Variables                                                                     |
| Routing    | [React Router DOM v7](https://reactrouter.com/)                                                                                        |
| Icons      | [Lucide React](https://lucide.dev/)                                                                                                    |
| Fonts      | [Outfit](https://fonts.google.com/specimen/Outfit) · [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts) |

---

## 🎨 Design System

The entire UI is built on a **2-colour palette**:

```
Primary  →  #6C3BFF   (Deep Violet)
Accent   →  #00D4C8   (Electric Cyan)
Dark BG  →  #070711
Light BG →  #f4f4fb
```

All design tokens live in `src/index.css` as CSS custom properties and automatically swap when `[data-theme="light"]` is applied to the `<html>` element.

---

## 📁 Project Structure

```
neuroTrack-Web/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── images/              # Real mobile app screenshots (7 PNGs)
│   ├── Component/
│   │   ├── home/                # Page-level section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── UseCasesSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── DownloadCTA.tsx
│   │   │   └── PhoneMockup.tsx
│   │   ├── Navbar.tsx           # Sticky navbar with scroll-spy + theme toggle
│   │   └── Footer.tsx           # Full footer with newsletter + social links
│   ├── context/
│   │   └── ThemeContext.tsx     # Global dark/light theme state
│   ├── data/
│   │   ├── homeData.ts          # Static data arrays (features, pricing, etc.)
│   │   └── screenshotData.ts    # App screenshot metadata + imports
│   ├── pages/
│   │   ├── HomePage.tsx         # Thin orchestrator — composes all sections
│   │   └── ScreenshotsPage.tsx  # Horizontal scroll gallery page
│   ├── Routes/
│   │   └── index.tsx            # React Router route definitions
│   ├── App.tsx                  # Root — wraps in ThemeProvider
│   ├── main.tsx                 # React entry point
│   └── index.css                # Design system (variables, utilities, light mode)
├── index.html                   # HTML entry with SEO meta tags + font links
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🧭 Routes

| Path           | Component         | Description                                       |
| -------------- | ----------------- | ------------------------------------------------- |
| `/`            | `HomePage`        | Full marketing landing page                       |
| `/screenshots` | `ScreenshotsPage` | Horizontal scroll gallery of real app screenshots |

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/neurotrack-web.git
cd neurotrack-web

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens at **http://localhost:5173** with HMR enabled.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🌗 Dark / Light Mode

The theme system works entirely via CSS custom properties:

| Behaviour          | Detail                                                                |
| ------------------ | --------------------------------------------------------------------- |
| **Default**        | Reads OS preference (`prefers-color-scheme`)                          |
| **Toggle**         | Sun / Moon button in the Navbar (desktop + mobile menu)               |
| **Persistence**    | Saved to `localStorage` under key `nt-theme`                          |
| **Implementation** | `data-theme="light"` applied to `<html>` → all `var(--*)` tokens swap |

---

## 🔍 Scroll-Spy Active Sections

The Navbar uses **`IntersectionObserver`** to track which section is currently in view:

- Sections watched: `#features`, `#use-cases`, `#how-it-works`, `#pricing`
- The matching nav link receives the `.active` CSS class (gradient underline + bold)
- Auto-cleared when navigating to `/screenshots` (no sections present)
- Works cross-route: clicking a nav link from `/screenshots` → navigates home first, then scrolls

---

## 📱 App Screenshots

The gallery at `/screenshots` showcases 7 real screens from the mobile app:

| #   | Screen              | Tag        |
| --- | ------------------- | ---------- |
| 1   | App Launch (Splash) | Onboarding |
| 2   | Home Dashboard      | Core       |
| 3   | App Usage Tracker   | Analytics  |
| 4   | Email Intelligence  | AI Feature |
| 5   | AI Assistant        | AI Feature |
| 6   | Productivity Report | Insights   |
| 7   | Profile & Settings  | Account    |

---

## 📦 Available Scripts

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m "feat: add my feature"`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a Pull Request

Please follow the existing code style — components are stateless where possible, all static data lives in `src/data/`, and inline styles use CSS variables from the design system.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 📬 Contact

Built with ❤️ by **Devanand Kumar**

- **App**: NeuroTrack — _Passive Productivity, Powered by AI_
- **Email**: helpdesk.neurotrack@gmail.com

---

> _"Train Your Brain. Master Focus. Achieve More."_

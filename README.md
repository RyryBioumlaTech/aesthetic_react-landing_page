# MyApp — React + Vite Landing Page

A modern landing page built with React, Vite and Tailwind CSS. This repository is a minimal UI demo that showcases an AI-assisted code editor UI, pricing cards, testimonials and other common landing page sections.

---

## Quick links (open files / symbols)

- Project entry: [index.html](index.html)  
- Dev entry point: [src/main.jsx](src/main.jsx) -> mounts [`App`](src/App.jsx)  
- Root app component: [`App`](src/App.jsx) ([src/App.jsx](src/App.jsx))  
- Components:
  - [`Navbar`](src/components/Navbar.jsx) ([src/components/Navbar.jsx](src/components/Navbar.jsx))
  - [`Hero`](src/components/Hero.jsx) ([src/components/Hero.jsx](src/components/Hero.jsx))
  - [`Features`](src/components/Features.jsx) ([src/components/Features.jsx](src/components/Features.jsx))
  - [`Pricing`](src/components/Pricing.jsx) ([src/components/Pricing.jsx](src/components/Pricing.jsx))
  - [`Testimonial`](src/components/Testimonials.jsx) ([src/components/Testimonials.jsx](src/components/Testimonials.jsx))
  - [`Footer`](src/components/Footer.jsx) ([src/components/Footer.jsx](src/components/Footer.jsx))
- Data helpers: [`code`](src/data/code.js), [`floatingCards`](src/data/code.js) ([src/data/code.js](src/data/code.js))
- Styles: [src/index.css](src/index.css)
- Vite config: [vite.config.js](vite.config.js)
- ESLint config: [eslint.config.js](eslint.config.js)
- Package manifest & scripts: [package.json](package.json)
- Git ignore: [.gitignore](.gitignore)

---

## Features

- Responsive landing layout with:
  - Top navigation ([`Navbar`](src/components/Navbar.jsx])
  - Hero section with an interactive mock code editor ([`Hero`](src/components/Hero.jsx])
  - Syntax highlighting (uses react-syntax-highlighter) in hero & features
  - Features, Pricing, Testimonials and Footer sections
- Tailwind CSS utilities and custom animations in [src/index.css](src/index.css)
- Simple data-driven UI for the "editor" tabs via [`code`](src/data/code.js) and floating meta-cards via [`floatingCards`](src/data/code.js)

---

## Project structure

Top-level:
- index.html — app HTML shell
- vite.config.js — Vite + plugin setup
- package.json — scripts & dependencies

src/:
- main.jsx — app bootstrap (creates React root and renders [`App`](src/App.jsx))
- index.css — Tailwind + custom utilities & keyframes
- App.jsx — composes all page sections
- components/ — UI components:
  - [src/components/Navbar.jsx](src/components/Navbar.jsx)
  - [src/components/Hero.jsx](src/components/Hero.jsx)
  - [src/components/Features.jsx](src/components/Features.jsx)
  - [src/components/Pricing.jsx](src/components/Pricing.jsx)
  - [src/components/Testimonials.jsx](src/components/Testimonials.jsx)
  - [src/components/Footer.jsx](src/components/Footer.jsx)
- data/code.js — sample code snippets and floating card meta

---

## Getting started

Prerequisites:
- Node.js (16+ recommended)
- npm / pnpm / yarn

Install dependencies:

```sh
npm install
# or
pnpm install
# or
yarn
```

Run dev server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview production build locally:

```sh
npm run preview
```

Lint the project:

```sh
npm run lint
```

(See [package.json](package.json) for scripts.)

---

## Tailwind / Styling

- Tailwind is set up and imported from [src/index.css](src/index.css). Custom utility classes and keyframes are defined there.
- The project uses the plugin listed in [vite.config.js](vite.config.js) for Tailwind integration and the React plugin for Vite.

---

## Notes, caveats & TODOs

- Typographical issues in copy and some identifier names (e.g., "Developper", "developp") — polish copy for production.
- Some components import or use third-party resources (syntax highlighter styles) in a non-standard way; if you want exact theme files, import from `react-syntax-highlighter/dist/cjs/styles/...`.
- Ensure assets referenced (e.g., `/vite.svg`, `/user.jpg`) exist in the `public/` folder.
- Consider adding:
  - Proper Tailwind config (tailwind.config.js) if you need custom theme/variants.
  - Unit / visual tests for components.
  - Accessibility reviews for buttons, links and semantic markup.

---

## How the app is wired

- App bootstrap: [`src/main.jsx`](src/main.jsx) mounts [`App`](src/App.jsx).
- [`App`](src/App.jsx) manages the scrolled state and renders top-level sections.
- The interactive code editor mock in [`Hero`](src/components/Hero.jsx) uses data from [`src/data/code.js`](src/data/code.js) to display different snippets and floating card metadata.
- Navigation toggles mobile menu state inside [`Navbar`](src/components/Navbar.jsx).

---

## Contributing

1. Fork the repo and create a branch.
2. Run and test locally (`npm run dev`).
3. Open a PR with a clear description and small focused changes.

---

## License

Add a license file if you plan to publish or share this project.

---

If you want, I can:
- Update this repository's README.md file with the content above.
- Add a CONTRIBUTING.md or TODO list based on the issues above.
- Create a basic tailwind.config.js and fix the syntax-highlighter imports.

# aesthetic_react-landing_page
this is an aesthetic react landing page build for a virtual AI-code Saas company with ract and tailwind css fully responsive

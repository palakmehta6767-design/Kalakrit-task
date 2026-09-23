# Kalakrit

Kalakrit is a modern React + Vite landing page for a multilingual localization and content adaptation business. The site showcases the brand's services, highlights Indian language support, and includes a demo request form for client enquiries.

## Overview

This project presents a polished marketing website for a company that helps businesses localize video, training materials, websites, and campaigns for diverse audiences across India and beyond.

Key sections include:
- Hero section with brand messaging and service positioning
- Multilingual language showcase around the main graphic
- Demo request form for lead capture
- Responsive navigation and marketing-style layout

## Tech Stack

- React 19
- Vite
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Project Structure

```bash
src/
├── App.jsx
├── components/
│   ├── DemoForm.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── ...
├── assets/
├── index.css
├── main.jsx
└── App.css
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root and add your W3Forms access key:

```bash
VITE_WEB3FORMSKEY=your_w3forms_access_key
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal (typically `http://localhost:5173`).

## Available Scripts

```bash
npm run dev
```
Runs the app in development mode.

```bash
npm run build
```
Builds the production bundle for deployment.

```bash
npm run preview
```
Serves the production build locally.

```bash
npm run lint
```
Runs ESLint checks on the project.

## Form Integration

The demo request form submits to the W3Forms API. The form requires a valid `VITE_WEB3FORMSKEY` value in the environment variables. Without that key, the application shows an error message instead of submitting.

## Deployment

This app is ready to be deployed as a Vite static site on platforms such as:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

## License

This project is for demonstration and business website use.


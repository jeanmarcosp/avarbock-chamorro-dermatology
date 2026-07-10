# Avarbock Chamorro Dermatology

A modern, single-page marketing site for Avarbock Chamorro Dermatology (Coral Gables / Miami, FL). Built with **React + Vite + Tailwind CSS**.

## Development

```bash
npm install
npm run dev      # start dev server with hot reload
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

- `src/data/content.js` — all site copy and business facts in one place.
- `src/components/` — presentational sections (Navbar, Hero, Doctors, Conditions, Contact, Footer, etc.).
- `src/App.jsx` — composes the single-page scroll layout.
- `public/contents/` — drop real images here (see below).

## Adding real images

Images are currently shown via a `<Placeholder>` component. Drop the real files into
`public/contents/` and swap the placeholder for an `<img>` tag. Each placeholder is
commented with the exact `/contents/<filename>` path it expects:

| File                     | Used for                        |
| ------------------------ | ------------------------------- |
| `logo.png`               | Navbar logo + favicon           |
| `hero.jpg`               | Hero background image           |
| `dr-avarbock.jpg`        | Dr. Andrew Avarbock headshot    |
| `dr-chamorro.jpg`        | Dr. Paola Chamorro headshot     |
| `map.jpg`                | Contact section map/office photo|

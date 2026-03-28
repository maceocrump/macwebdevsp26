# Midterm Project — 001 Store

**DM-UY 2193 Intro to Web Development, Spring 2026**
**Maceo Crump**


PUBLISHED LIVE AT:


 001BRAND.COM 
 
 AND
 
 001SUPPLY.COM


 (USING GITHUB PRO, CLOUDFLARE DOMAIN SERVICES, AND CLOUDFLARE PAGES)


---

## Concept

001: concept is a minimal, high-contrast digital storefront — black background, monospace type, grayscale product images — inspired by modern and minimalist design aesthetics. The site only sells two products, which are essentially 90% of the content/substance on the site: an "oversized tee" and a "utility hoodie".

## Inspiration

The design draws HUD/terminal interfaces. Key references for site design were minimal streetwear brands that use raw typography and negative space as the primary design language. Particularly the philosphy is that the format is stripping away decoration to let the product speak to the consumer, allowing them to become almost a member of a club rather than a mere customer.

## Skills Used

- HTML5 semantic structure
(`<header>`, `<main>`, `<footer>`, `<article>`, `<section>`, `<form>`)
- CSS custom properties 
(design tokens via `--background`, `--foreground`, etc.)
- Tailwind CSS utility classes for layout, spacing, and typography
- Responsive design with media queries 
(`max-width: 768px`, `max-width: 1024px`)
- React component architecture (functional components, props, state)
- React Router v6 for client-side page navigation
- React Context API for global cart state management
- TypeScript for type-safe data structures

## Pages & Routing

| Route | Page | Description |
|---|---|---|
| `/` | Index | Product feed — scrollable list of items |
| `/product/:id` | ProductDetail | Individual product with size selector and add-to-cart |
| `/selection` | Selection | Cart view with item list and totals |
| `/checkout` | Checkout | Shipping and billing form |
| `*` | NotFound | 404 fallback |


## Media Queries & Responsive Behavior

Media queries handle layout adjustments at two breakpoints:

```css
@media (max-width: 768px) {
  .product-feed { padding: 10vh 1rem; gap: 8vh; }
  .product-item { max-width: 90vw; }
  nav { flex-direction: column; gap: 1rem; align-items: flex-start; }
}

@media (max-width: 1024px) {
  .product-item { max-width: 80vw; }
}
```

On mobile the nav stacks vertically and product images expand to nearly full width with padding tightening. On tablet, images are scaled to keep optimal proportions

## Live Site

deployed on Cloudflare Pages: [https://001-store.pages.dev](https://001-store.pages.dev)

## Next Steps

- Integrate backend elements--supabase data management, forms storage, inventory tracker, payment processor, inbox
- Add persistent cart state with localStorage for high quality user session
- Add transition animations between pages?

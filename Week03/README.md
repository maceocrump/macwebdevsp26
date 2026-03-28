# Week 03 — Information Architecture & Site Planning

## Project: 001 Store

Before building anything, I mapped out the full structure of the site and figured out what pages were actually needed. The goal was to keep things as simple as possible — the store is meant to feel like a product catalog, not a portal, so every page had to earn its place.

## Sitemap

```
001 Apparel Shop
└── Landing Page / Product Feed
    └── Product Page (Individual Item View)
        └── Shopping Cart
            └── Checkout / Payment
```

The site is a linear purchase funnel. The landing page IS the store — it's not a marketing page that leads to a shop section. You land and you're already looking at product. From there it's: pick something, see the detail view, add to cart, check out. That's it.

No about page, no blog, no account creation. Reduce friction.

## Page Breakdown

**Landing Page (`/`)**
The product feed. A scrollable list of items. Each item shows the image, name, and price. Clicking navigates to the product detail.

**Product Page (`/product/:id`)**
Single-item view. Larger image, description, size selector, add-to-cart button.

**Cart / Selection (`/selection`)**
List of items added with quantities and running total. Link to checkout.

**Checkout (`/checkout`)**
Shipping and billing form. Name, address, card info. Submit order.

**404 (`*`)**
Fallback for any bad routes.

## Layout Logic

Desktop layout uses a lot of negative space intentionally — the product images sit center-frame with metadata distributed around them. The wireframe had labeled zones for logo, product display, and text blocks at the lower corners.

Mobile collapses everything vertically. The nav stacks, images go full-width, padding tightens. No horizontal scroll ever.

Key constraints I set early:
- Build mobile first
- No horizontal scrolling
- Vertical scroll between items (could go snap/toggle-style)

## Notes on Naming Conventions

Route IDs use `:id` param so the product page is dynamic — one template handles all products. The actual product data lives in a separate file and gets pulled in based on the URL param.

The cart state needed to be global (any component can read or update it), which pointed to React Context rather than drilling props down everywhere.

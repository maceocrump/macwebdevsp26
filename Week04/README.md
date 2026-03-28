# Week 04 — Midterm Proposal: 001 Store

## Brand Concept

001 is a modern apparel brand built around the intersection of code, technology, and fashion. The name references binary — 001 as the foundation of all digital systems. The products are tech-themed apparel: an oversized tee and a utility hoodie.

The web design enforces a strict monochrome palette. Black and white only, with light grays for secondary text. No color. The aesthetic comes from terminal interfaces, command-line tools, and brutalist/modernist architecture — raw, functional, high-contrast.

**Palette:** #000000 / #FFFFFF. Light grays for fine text.

**Typography:** JetBrains Mono / Roboto Mono for all UI elements (simulates terminal). Inter for fine-print readability.

**Design language:** Stark contrast, utilitarian minimalism, deep black negative space.

## Design Inspiration

The primary reference point is brutalist architecture — enclosed modular spaces, heavy contrast, content in strictly defined containers. Early internet and command-line interfaces also heavily influenced the type treatment and overall feel.

Specific brand references studied: Sp5der, Palace, Supreme, Saalt Studio, Off-White, Fear of God, Yeezy, BLVCK, Billionaire Boys Club, Kith. The common thread is minimal interference between the brand and the product — let the item speak.

Design principles carried into the build:
- High contrast for legibility against black backgrounds
- Modular layouts — content in bordered containers
- Hover states that invert color (white bg becomes black, black text becomes white)

## Sitemap

Landing Page / Product Feed → Product Page (Individual Item View) → Shopping Cart → Checkout / Payment

The site is a linear funnel. Landing page IS the shop — not a marketing homepage. The idea was to reduce buyer friction to near zero: you're looking at product the second you arrive.

## Skills to Apply (from class)

HTML — elements, attributes, headings, paragraphs, lists, forms and form input types for the checkout flow

CSS Styling — typography, font style, formatting, custom properties for design tokens

Media Queries — viewport-aware layout at breakpoints (mobile, tablet, desktop)

Information Architecture & UI — rows, columns, headers, footers, logical content hierarchy

## New Skills Needed

**JavaScript / React** — interactivity, hover states, button behavior, transitions, cart total calculations

**State management** — cart needs to be globally accessible without prop drilling (React Context)

**Dynamic routing** — one product template handles all items based on URL param

**Mobile-first build** — designing for the smallest viewport first, then scaling up

**Local storage / persistent cart** — saving cart state across page refreshes (planned for post-midterm)

## Wireframe Notes

Desktop layout: logo top-left, cart link top-right. Product image centered with metadata in lower corners (item name, price). Vertical edge label for series/edition info.

Mobile: everything stacks vertically. Logo top-center, product image full-width, text blocks below. No horizontal scrolling. Scroll behavior between items could be snap/toggle style.

Constraint: build mobile first, verify on desktop second.

## Live Site

[https://001-store.pages.dev](https://001-store.pages.dev)
Deployed on Cloudflare Pages, built with React + TypeScript + Vite + Tailwind CSS.

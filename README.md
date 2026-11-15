# ChromaCam.art — Official Promo Website

This repository contains the promo web application, interactive film emulator, and container deployment configuration for **[chromacam.art](https://chromacam.art)**.

---

## 🎞️ Representative Non-Branded Film Stock Catalog

To move away from trademarked brand names while maintaining authentic optical precision, ChromaCam uses representative nomenclature focused on tone curves, color science matrix, and silver halide grain structure:

| Original Stock | Representative Name | Category | Tier | ISO | Character Note |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Kodak Gold 200** | **Amber Gold 200** | Color Negative | Free | 200 | Warm nostalgic daylight stock with golden amber highlights and honey-yellow midtones. |
| **Kodak Portra 400** | **Pastel Portrait 400** | Color Negative | Free | 400 | Flattering natural skin tones, smooth micro-contrast, and low-saturation pastel palette. |
| **Kodak Tri-X 400** | **Gritty Noir 400** | Monochrome | Free | 400 | Bold contrast, deep shadow blacks, silver halide highlight glow, and heavy gritty grain. |
| **Kodak Ektachrome E100** | **Neutral Slide 100** | Slide Reversal | PRO+ | 100 | Clean neutral colors, ultra-fine grain structure, and cool transparent shadow depth. |
| **Fujifilm Velvia 50** | **Vivid Landscape 50** | Slide Reversal | PRO+ | 50 | Hyper-saturated emerald greens, vivid magenta dusk skies, and steep slide contrast. |
| **CineStill 800T** | **Tungsten Halation 800** | Color Negative | PRO+ | 800 | Cool cyan shadows, warm tungsten highlights, and red-orange halation flares. |
| **Ilford HP5 Plus** | **Tonal Mono 400** | Monochrome | PRO+ | 400 | Wide exposure latitude, silky midtone gradations, and classic medium silver grain. |
| **Fujifilm Superia 400** | **Emerald Peach 400** | Color Negative | PRO+ | 400 | Cool emerald shadow tints, turquoise skies, and soft peach skin highlights. |
| **Kodak FunSaver 800** | **Party Flash 800** | Color Negative | PRO+ | 800 | Disposable party camera aesthetic for direct flash shots and punchy midtones. |
| **Kodak Aerochrome IR** | **Crimson Infrared 400** | Slide Reversal | PRO+ | 400 | False-color infrared shifting foliage into intense crimson red and hot magenta. |
| **Polaroid 600** | **Instant Pastel 600** | Color Instant | PRO+ | 600 | Square instant film feel with creamy lifted blacks and warm vintage split-toning. |
| **Ilford SFX 200** | **Deep Infrared Mono 200** | Monochrome IR | PRO+ | 200 | 740nm near-infrared monochrome with pitch-black skies and glowing white foliage. |

---

## 🚀 Docker Deployment Guide

### Run via Docker Compose
```bash
docker compose up -d --build
```
The website will be served on port `8090`.

### Configure Reverse Proxy
Map your domain (`chromacam.art`) to container host port `8090` via your reverse proxy of choice (e.g. Nginx, Caddy, Traefik).

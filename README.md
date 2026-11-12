# ChromaCam.art — Official Promo Website

This repository contains the promo web application, interactive film emulator, and stack deployment configuration for **[chromacam.art](https://chromacam.art)** designed to run via **Portainer (`portainer.remon.uk`)** and **Nginx Proxy Manager (`npm.remon.uk`)**.

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

## 🚀 Portainer & Nginx Proxy Manager (NPM) Deployment Guide

### Step 1: Deploy Stack in Portainer (`portainer.remon.uk`)
1. Log into Portainer (`portainer.remon.uk`).
2. Navigate to **Stacks** → **Add Stack**.
3. Name: `chromacam-art`.
4. Select **Repository**:
   - Repository URL: `https://github.com/nicbkw/chromacam-website.git`
   - Compose path: `docker-compose.yml`
5. Click **Deploy the stack**.

*(Note: The default host port is set to `8085`. If `8085` is in use, set an environment variable `PORT=8090` in Portainer environment variables or edit the port).*

### Step 2: Configure Proxy Host in Nginx Proxy Manager (`npm.remon.uk`)
1. Log into Nginx Proxy Manager (`npm.remon.uk`).
2. Go to **Hosts** → **Proxy Hosts** → **Add Proxy Host**.
3. **Details Tab**:
   - **Domain Names**: `chromacam.art`, `www.chromacam.art`
   - **Scheme**: `http`
   - **Forward Hostname / IP**: `<your-server-ip>`
   - **Forward Port**: `8085` (matching the host port mapped in Portainer)
   - Check: `Block Common Exploits`, `Websockets Support`
4. **SSL Tab**:
   - Select **Request a new SSL Certificate** (Let's Encrypt).
   - Check: `Force SSL`, `HTTP/2 Support`.
   - Agree to Terms of Service & **Save**.

# Truman's Desk: YOU Decide
### Oak Ridge High School — CP World History Simulation (August 1945)

An interactive, inquiry-based pedagogical simulation examining President Harry S. Truman's fateful decision to authorize atomic strikes against Japan. Designed for classroom use, differentiated instruction (accessible, standard, advanced reading levels), and historical counterfactual analysis.

---

## 🚀 How to Run Locally

### 1. Requirements
- Node.js (version 18 or newer)
- npm or pnpm / yarn

### 2. Install & Start
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal) in your browser.

---

## 📦 How to Build for Production

```bash
npm run build
```
This compiles and bundles all TypeScript, CSS, audio, and archival photographs into a standalone, static distribution folder: **`dist/`**.

You can preview the built files locally anytime with:
```bash
npm run preview
```

---

## 🌐 How to Host on Your Own Site

Because this simulation is a pure static client-side React single-page app (SPA), **it requires no database and no server runtime**. The contents of the `dist/` folder can be hosted anywhere for free or on your existing school/personal server.

### Option A: Drag-and-Drop (Netlify Drop) — Fastest (30 seconds, Free)
1. Run `npm run build` on your computer.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the entire **`dist`** folder into the browser window.
4. Your simulation is immediately live with a free custom SSL URL.

### Option B: Vercel (Free)
1. Push this project to GitHub.
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository. Vercel automatically detects Vite and configures:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Option C: GitHub Pages (Free)
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Use the standard static Vite workflow, or install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
   Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
   Run: `npm run deploy`.

### Option D: Traditional Web Hosting (Apache, Nginx, cPanel, School District Server)
1. Run `npm run build`.
2. Upload all files **inside** the `dist/` directory into your web server's web root (e.g. `public_html` or `/var/www/html/`).
3. Because `base: './'` is enabled in `vite.config.ts`, the simulation works whether it is placed at the domain root (`https://yoursite.com/`) or in a subfolder (`https://yoursite.com/trumans-desk/`).

---

## 🛠️ Project Structure
- `src/App.tsx`: Main simulation controller, state machine, and audio handling.
- `src/data/historicalRounds.ts`: The 5 core historical deliberation dossiers and choices.
- `src/data/realityLedger.ts`: Archival survivor testimonies and counterfactual historian scenarios.
- `src/components/`: Modular UI views (Dossier views, Pressure gauges, Timeline, Vintage photo filter, Reports).
- `src/assets/images/`: Archival 1945 photography bundled into production assets.

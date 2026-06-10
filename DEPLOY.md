# EverForge Alloys — Deploy to Vercel

## Changes made
- ✅ Hero section now shows the forge photo as a full-bleed background with dark overlay
- ✅ WhatsApp number updated to +91 6397597020 (floating button + contact page)
- ✅ All forms point to Formspree (one step left — see below)
- ✅ vercel.json added for proper SPA routing

---

## Step 1 — Get your Formspree form ID (free, 2 min)

1. Go to https://formspree.io and sign up free
2. Click **+ New Form**, name it "EverForge Alloys"
3. Copy your form ID — it looks like `xabc1234`
4. In the project, find-and-replace `YOUR_FORM_ID` with your actual ID in these 3 files:
   - `src/pages/home.tsx`
   - `src/pages/contact.tsx`
   - `src/pages/quote.tsx`

---

## Step 2 — Deploy to Vercel (free, 5 min)

### Option A: Drag & Drop (easiest)
1. Run `npm run build` locally → this creates a `dist/` folder
2. Go to https://vercel.com → **Add New Project → Import**
3. Drag the `dist/` folder into the Vercel dashboard
4. Done — Vercel gives you a `.vercel.app` URL instantly

### Option B: Git + Auto-deploy (recommended)
1. Push this project to a GitHub repo
2. Go to https://vercel.com → **Add New Project → Import Git Repository**
3. Select your repo, Vercel auto-detects Vite settings
4. Click **Deploy** — every git push auto-deploys

---

## Step 3 — Connect your custom domain

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `everforgealloys.com`)
3. Vercel shows you DNS records to add — go to your domain registrar and add them
4. SSL certificate is automatic and free

---

## WhatsApp number
Already updated to `+91 6397597020` in:
- Floating WhatsApp button (bottom-right on all pages)
- Contact page details panel

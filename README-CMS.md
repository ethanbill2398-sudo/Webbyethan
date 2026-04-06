# Tina CMS Setup

## 1. Connect to Tina Cloud
1. Go to https://app.tina.io and sign in with GitHub
2. Add your repo and copy your **Client ID** and **Token**

## 2. Add environment variables
```bash
cp .env.example .env.local
# Fill in NEXT_PUBLIC_TINA_CLIENT_ID and TINA_TOKEN
```

## 3. Build the admin panel
```bash
npm install
npm run build:cms
```
This generates an `admin/` folder. Commit and push it to GitHub so it's available on your live site.

## 4. Access the editor
Go to `https://yourdomain.com/admin` to edit content.
Changes are committed directly to your GitHub repo and the live site updates automatically.

## How content updates work
- All editable text lives in `content/pages/home.json`
- The CMS admin writes changes back to that JSON file via GitHub
- A small JS snippet at the bottom of `index.html` fetches that JSON on page load and populates elements tagged with `data-cms="..."` attributes
- The static HTML itself is the fallback — if the fetch fails, the hardcoded text still shows

# SinzNation V4 Clean Next.js + Stripe Repo

## Upload to GitHub correctly
Do not upload the outer ZIP folder. Upload these items directly into the repo root:

- app
- components
- lib
- public
- package.json
- README.md
- next.config.js
- postcss.config.js
- tailwind.config.js
- tsconfig.json
- .env.example

Your GitHub root must show `app` directly. If `app` is inside another folder, Vercel will fail.

## Images
Put these files inside the `public` folder:

- sinznation-logo.png
- drink-water-shirt.png

## Vercel environment variables
Add these in Vercel Project Settings > Environment Variables:

- STRIPE_SECRET_KEY
- STRIPE_PRICE_ID
- NEXT_PUBLIC_SITE_URL

Example:
NEXT_PUBLIC_SITE_URL=https://sinznation.com

## Stripe
Create a product in Stripe, create a price, and copy the Price ID into STRIPE_PRICE_ID.

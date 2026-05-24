import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  if (!secretKey || !priceId) {
    return NextResponse.json({ error: 'Missing STRIPE_SECRET_KEY or STRIPE_PRICE_ID.' }, { status: 500 });
  }

  const stripe = new Stripe(secretKey);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/success`,
    cancel_url: `${siteUrl}/cancel`,
    shipping_address_collection: { allowed_countries: ['US'] },
    billing_address_collection: 'auto',
  });

  return NextResponse.json({ url: session.url });
}

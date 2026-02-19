import { NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!);
}

export async function POST(request: Request) {
  const { amount, email, name } = await request.json();

  if (!amount || amount < 1) {
    return NextResponse.json(
      { error: "Donation amount must be at least $1." },
      { status: 400 }
    );
  }

  const origin = request.headers.get("origin") || "https://teamworknation.org";

  try {
    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "TeamworkNation Donation",
              description:
                "Supporting youth leadership and collaboration",
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/learn-more?success=true`,
      cancel_url: `${origin}/learn-more`,
      metadata: {
        email: email || "",
        name: name || "",
        purpose: "TeamworkNation Donation",
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: "Failed to create donation session." },
      { status: 500 }
    );
  }
}

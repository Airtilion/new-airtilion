import NewPricing from '@models/Pricing';
import dbConnect from '@lib/db';

export async function POST(req) {
  try {
    await dbConnect();
    const { name, email, phone, contactHours, type, message, privacyConsent, marketingConsent} = await req.json();

    const newPricing = new NewPricing({ name, email, phone, contactHours, type, message, privacyConsent, marketingConsent});
    await newPricing.save();

    return new Response(
      JSON.stringify({ success: true, id: newPricing._id }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    console.error('Error saving pricing request:', err);
    return new Response(
      JSON.stringify({ error: 'Server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
import Message from '@models/Message';
import dbConnect from '@lib/db';

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, phone, message, privacyConsent, marketingConsent } = body;

    const newMsg = new Message({ name, email, phone, message, privacyConsent, marketingConsent });
    await newMsg.save();
    return new Response(JSON.stringify({ success: true, id: newMsg._id }), { status: 201 });
  } catch (err) {
    console.error('Error saving message:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}

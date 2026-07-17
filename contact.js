
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[char]));
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const company = clean(body.company, 160);
    const message = clean(body.message, 4000);
    const honeypot = clean(body.website, 200);

    if (honeypot) return Response.json({ ok: true });
    if (!name || !email || !message || body.consent !== true) {
      return Response.json({ error: 'Please complete all required fields and accept the privacy notice.' }, { status: 400 });
    }
    if (!emailPattern.test(email)) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      console.error('Missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL');
      return Response.json({ error: 'The contact service is not configured yet. Please email hello@stellarisai.com.' }, { status: 503 });
    }

    const html = `
      <h2>New Stellaris website inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(company || 'Not provided')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Stellaris inquiry from ${name}${company ? ` at ${company}` : ''}`,
        html
      })
    });

    const result = await resendResponse.json();
    if (!resendResponse.ok) {
      console.error('Resend error', result);
      return Response.json({ error: 'The message could not be sent. Please email hello@stellarisai.com.' }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'The message could not be sent. Please email hello@stellarisai.com.' }, { status: 500 });
  }
}

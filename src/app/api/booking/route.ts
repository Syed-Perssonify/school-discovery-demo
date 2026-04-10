import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await request.json();
  const { schoolName, location, name, email, phone } = body;

  if (!schoolName || !location || !name || !email || !phone) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "School Discovery <noreply@schooldiscovery.in>",
    to: "subbu.k@schooldiscovery.in",
    subject: `New Discovery Visit Request – ${schoolName}`,
    html: `
      <h2>New Discovery Visit Booking</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;">
        <tr><td style="padding:6px 12px;font-weight:bold;">School Name</td><td style="padding:6px 12px;">${schoolName}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Location</td><td style="padding:6px 12px;">${location}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${name}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;">${email}</td></tr>
        <tr><td style="padding:6px 12px;font-weight:bold;">Phone</td><td style="padding:6px 12px;">${phone}</td></tr>
      </table>
    `,
  });

  if (error) {
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }

  return Response.json({ success: true });
}

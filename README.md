# Stellaris Launch Website

This is the launch-ready static website package for Stellaris, designed for Vercel.

## Included

- Updated homepage and positioning
- Three defined commercial offers
- Founder-led credibility section
- AI Opportunity Assessment page
- Insights landing page
- First published article
- Working contact-form API using Resend
- Privacy Policy and Terms of Use
- Logo mark, favicon, and social-sharing image
- SEO metadata, sitemap, robots.txt, and web manifest
- Vercel Web Analytics script
- Security headers and clean URLs
- Custom 404 page

## Deploy to Vercel

Upload this ZIP as a new deployment, or put the files in a GitHub repository connected to the existing Vercel project.

The included `vercel.json` maps clean URLs such as `/assessment` to their HTML files.

## Configure the contact form

The form posts to `/api/contact`. The Vercel Function sends the message through Resend.

1. Create a Resend account.
2. Verify `stellarisai.com` in Resend.
3. Create a Resend API key.
4. In Vercel, open the Stellaris project.
5. Go to Settings → Environment Variables.
6. Add:

   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_TO_EMAIL` = the inbox that should receive inquiries, such as `hello@stellarisai.com`
   - `CONTACT_FROM_EMAIL` = a verified sender, such as `Stellaris Website <website@stellarisai.com>`

7. Redeploy after adding the variables.

Until these variables are configured, the form will display a clear fallback asking the visitor to email `hello@stellarisai.com`.

## Enable analytics

In the Vercel project, open Analytics and enable Web Analytics. The website already includes the Vercel insights script.

## Domain and email

When connecting `stellarisai.com` to Vercel, preserve the MX and email-authentication DNS records used by Microsoft 365 or your email provider.

Recommended mailboxes:
- `hello@stellarisai.com`
- `privacy@stellarisai.com`
- `website@stellarisai.com` or another sender used by Resend

## Important launch decisions

The website intentionally does not include Calendly, Microsoft Bookings, or another scheduling widget.

The Privacy Policy and Terms are starter documents, not jurisdiction-specific legal advice. Counsel should review them before significant commercial launch, paid marketing, or collection of sensitive or regulated data.

# Stellaris V2

A production-ready Next.js website for Stellaris.

## Deploy to Vercel

1. Upload all files in this folder to the root of the GitHub repository.
2. Vercel will detect Next.js and deploy automatically.
3. Add these environment variables in Vercel:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Redeploy after adding environment variables.

Suggested values:
- `CONTACT_TO_EMAIL=hello@stellarisai.com`
- `CONTACT_FROM_EMAIL=Stellaris Website <website@stellarisai.com>`

The sending domain must be verified in Resend.

## Local development

```bash
npm install
npm run dev
```

## Notes

The privacy policy and terms are starter content and should be reviewed by counsel before production use.

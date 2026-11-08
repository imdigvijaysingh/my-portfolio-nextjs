# Vercel Deployment & Agent Guidelines

This project is a Next.js web application configured for deployment on Vercel.

## Framework & Build Settings
- **Framework**: Next.js (App Router)
- **Node.js Version**: 20+
- **Build Command**: `npm run build` (or `next build`)
- **Development Command**: `npm run dev`
- **Output Directory**: `.next`

## Vercel CLI Commands
- `vercel`: Deploy a preview deployment.
- `vercel --prod`: Deploy directly to production.
- `vercel env pull .env.local`: Pull environment variables from your Vercel project into local development.
- `vercel logs`: Inspect real-time runtime and deployment logs.

## Best Practices
- Never commit `.env*.local` or `.vercel` project configuration to source control.
- Ensure all dynamic API routes and edge functions conform to standard Vercel serverless limits.


# cognera-landing-page-v0

Professional website for Cognera Data Labs - Analytics Platform

## Features

- Modern Next.js 15 application
- Professional enterprise design
- Responsive layout
- Authentication system with JWT
- Multiple page sections
- Vercel KV integration for production data storage

## Tech Stack

- Next.js 15.1.3
- React 19
- Tailwind CSS
- Authentication with JWT
- Vercel KV for data storage

## Getting Started

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`

## Environment Variables

For local development, create a `.env.local` file with:

```env
JWT_SECRET=your-secret-key-here
```

Generate a strong secret key:
```bash
openssl rand -base64 32
```

## Vercel Deployment

This project is configured for seamless deployment on Vercel.

### Prerequisites

1. A Vercel account ([sign up here](https://vercel.com))
2. A GitHub repository (optional, but recommended)

### Deployment Steps

1. **Push to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**:
   - In your Vercel project settings, go to "Environment Variables"
   - Add `JWT_SECRET` with a strong random string
   - Generate one: `openssl rand -base64 32`

4. **Set up Vercel KV** (for production data storage):
   - In Vercel dashboard, go to "Storage" → "Create Database"
   - Select "KV" (Key-Value)
   - Connect it to your project
   - Vercel will automatically configure the KV environment variables

5. **Deploy**:
   - Vercel will automatically build and deploy your application
   - Your site will be live at `https://your-project.vercel.app`

### Automatic Deployments

- Every push to `main` branch triggers a production deployment
- Pull requests get preview deployments automatically

### Build Configuration

The project includes `vercel.json` with optimized settings:
- Framework: Next.js
- Build command: `npm run build`
- Region: US East (iad1)

### Production Features

- **Vercel KV**: User data is stored in Vercel KV in production
- **File System Fallback**: Local development uses file-based storage
- **Secure Cookies**: HTTP-only cookies with secure flag in production
- **Environment Detection**: Automatically detects Vercel environment

## Local Development

The application uses file-based storage (`/data/users.json`) for local development. This directory is automatically created and is ignored by git.

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── lib/             # Utility functions and auth
│   └── pages/           # Page components
├── public/              # Static assets
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies
```

## Support

For issues or questions, please open an issue on GitHub.

"# cognera-landing-page-v0" 

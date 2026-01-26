# How to Make Your Website Appear in Google Search

Follow these steps to get your Cognera website indexed by Google and appearing in search results.

## Step 1: Deploy Your Website

First, make sure your website is live on Vercel (or your hosting platform). You should have a public URL like:
- `https://your-site.vercel.app` or
- `https://cognera.com` (if you have a custom domain)

## Step 2: Update Environment Variable

Add your site URL to Vercel environment variables:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add a new variable:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: Your full website URL (e.g., `https://cognera.com`)
   - **Environment**: Production, Preview, Development (all)
3. Redeploy your site after adding the variable

## Step 3: Verify Your Site is Accessible

1. Visit your live website
2. Check that all pages load correctly
3. Verify the sitemap is accessible at: `https://your-site.com/sitemap.xml`
4. Verify robots.txt is accessible at: `https://your-site.com/robots.txt`

## Step 4: Submit to Google Search Console

### Create a Google Search Console Account

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click "Add Property"
4. Choose "URL prefix" and enter your website URL (e.g., `https://cognera.com`)

### Verify Ownership

You have several verification options:

#### Option A: HTML File Upload (Easiest)
1. Download the HTML verification file from Google Search Console
2. Upload it to your `public/` folder
3. Commit and push to GitHub
4. Wait for Vercel to redeploy
5. Click "Verify" in Google Search Console

#### Option B: HTML Tag (Recommended)
1. Copy the HTML meta tag from Google Search Console
2. Add it to `src/app/layout.js` in the `<head>` section
3. Commit, push, and redeploy
4. Click "Verify" in Google Search Console

#### Option C: Domain Name Provider
1. Add a TXT record to your domain's DNS settings
2. Follow Google's instructions for your domain provider

### Submit Your Sitemap

1. Once verified, go to "Sitemaps" in the left sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Google will start crawling your site

## Step 5: Request Indexing (Optional but Recommended)

1. In Google Search Console, go to "URL Inspection"
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for important pages (contact, pricing, etc.)

## Step 6: Wait for Indexing

- **Initial indexing**: Usually takes 1-7 days
- **Full site indexing**: Can take 2-4 weeks
- **Regular updates**: Google will automatically re-crawl your site periodically

## Step 7: Monitor Your Progress

1. Check "Coverage" in Google Search Console to see indexed pages
2. Monitor "Performance" to see search impressions and clicks
3. Check for any errors or issues

## Additional SEO Tips

### 1. Create Quality Content
- Write unique, valuable content for each page
- Use relevant keywords naturally
- Keep content updated regularly

### 2. Build Backlinks
- Get other websites to link to your site
- Share on social media
- Submit to relevant directories

### 3. Optimize Page Speed
- Your Next.js site is already optimized
- Use Vercel's CDN for fast global delivery

### 4. Mobile-Friendly
- Your site is already responsive
- Test with [Google's Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### 5. Use Structured Data (Optional)
- Consider adding JSON-LD structured data
- Helps Google understand your content better

## Troubleshooting

### Site Not Appearing in Search?

1. **Check if site is indexed**: Search `site:your-site.com` in Google
2. **Check for errors**: Look in Google Search Console → Coverage
3. **Wait longer**: New sites can take time to index
4. **Check robots.txt**: Make sure it's not blocking Google
5. **Check meta tags**: Ensure `robots` meta tag allows indexing

### Common Issues

- **"Discovered - currently not indexed"**: Google found your page but hasn't indexed it yet. Request indexing.
- **"Crawled - currently not indexed"**: There might be quality issues. Check your content.
- **"Duplicate without user-selected canonical"**: Add canonical URLs (already done in metadata)

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Next.js SEO Documentation](https://nextjs.org/learn/seo/introduction-to-seo)

## Quick Checklist

- [ ] Website is live and accessible
- [ ] `NEXT_PUBLIC_SITE_URL` environment variable is set
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] Google Search Console account created
- [ ] Site verified in Google Search Console
- [ ] Sitemap submitted to Google Search Console
- [ ] Requested indexing for important pages
- [ ] Monitoring Search Console for errors

Good luck! 🚀


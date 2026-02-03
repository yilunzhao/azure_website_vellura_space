# Deployment Guide - Vellura Space Website

This guide covers deploying your Vellura Space website using GitHub Pages and connecting it to a custom domain via Cloudflare.

## Overview

The deployment process involves three main steps:

1. **Push code to GitHub** - Version control and hosting
2. **Enable GitHub Pages** - Make site publicly accessible
3. **Configure Cloudflare DNS** - Connect your custom domain

---

## Part 1: GitHub Setup

### Step 1.1: Create a GitHub Account
If you don't have one already:
1. Go to https://github.com
2. Click "Sign up"
3. Create your account

### Step 1.2: Create a New Repository

1. Log in to GitHub
2. Click the **+** icon in the top right and select **New repository**
3. Repository name: `azure_website_vellura_space` (or your preferred name)
4. Description: "AI-Powered Interior Design & Soft Furnishings Styling Website"
5. Make it **Public** (required for GitHub Pages free tier)
6. Do NOT initialize with README, .gitignore, or license yet
7. Click **Create repository**

### Step 1.3: Push Your Code to GitHub

1. Open terminal/command prompt on your local machine
2. Navigate to your project directory:
```bash
cd /Users/yilunzhao/github/azure_startup_website/vellura_space
```

3. Initialize git (if not already done):
```bash
git init
```

4. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/azure_website_vellura_space.git
```

5. Add all files:
```bash
git add .
```

6. Create initial commit:
```bash
git commit -m "Initial commit: Vellura Space website with AI design portfolio"
```

7. Push to GitHub (main branch):
```bash
git branch -M main
git push -u origin main
```

### Step 1.4: Create .gitignore

Create a `.gitignore` file in your project root:

```
# OS files
.DS_Store
Thumbs.db
*.swp

# Editor files
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Environment files
.env
.env.local

# Dependencies (if you add any later)
node_modules/
package-lock.json

# Build files
dist/
build/

# Logs
*.log
npm-debug.log*
```

Then add and commit it:
```bash
git add .gitignore
git commit -m "Add .gitignore"
git push origin main
```

---

## Part 2: Enable GitHub Pages

### Step 2.1: Configure GitHub Pages

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/vellura_space`
2. Click **Settings** (gear icon in top right)
3. In the left sidebar, click **Pages**
4. Under "Source", select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 2.2: Wait for GitHub to Deploy

1. Refresh the Settings > Pages page
2. You should see a message: "Your site is published at `https://YOUR_USERNAME.github.io/azure_website_vellura_space/`"
3. This usually takes 1-2 minutes
4. Click the URL to verify your site is live

### Step 2.3: Verify Your Site Works

1. Visit `https://YOUR_USERNAME.github.io/azure_website_vellura_space/`
2. Check that all pages load correctly
3. Test navigation and interactive features
4. Test on mobile devices

---

## Part 3: Cloudflare DNS Configuration

### Step 3.1: Add Your Domain to Cloudflare

1. Go to https://dash.cloudflare.com
2. Log in (or create a free account)
3. Click **Add site**
4. Enter your domain name (e.g., `vellura.space`)
5. Click **Add site**
6. Select the **Free** plan
7. Click **Continue**

### Step 3.2: Update Nameservers at Your Domain Registrar

Cloudflare will show you two nameservers. You need to update these at your domain registrar (Cloudflare Registrar or wherever you bought the domain).

**Cloudflare Nameservers** (your values will be different):
```
ns1.cloudflare.com
ns2.cloudflare.com
```

**Steps for your registrar:**

1. Log in to your domain registrar
2. Find "Nameservers" or "DNS Settings"
3. Replace existing nameservers with Cloudflare's
4. Save changes
5. Wait 24-48 hours for DNS to propagate

If using **Cloudflare Registrar**:
1. Go to https://dash.cloudflare.com
2. Click **Domain Registration**
3. Your domain will already be configured

### Step 3.3: Create DNS Records in Cloudflare

Once nameservers are updated and DNS propagates:

1. In Cloudflare dashboard, go to your domain
2. Click **DNS** in the left sidebar
3. Add the following records:

**For apex domain (example.com):**

| Type | Name | Content | TTL | Proxy |
|------|------|---------|-----|-------|
| A | example.com | 185.199.108.153 | Auto | Proxied |
| A | example.com | 185.199.109.153 | Auto | Proxied |
| A | example.com | 185.199.110.153 | Auto | Proxied |
| A | example.com | 185.199.111.153 | Auto | Proxied |

**For www subdomain (www.example.com):**

| Type | Name | Content | TTL | Proxy |
|------|------|---------|-----|-------|
| CNAME | www | example.com | Auto | Proxied |

### Step 3.4: Create CNAME File in Repository

Create a `CNAME` file in your GitHub repository root with your domain:

```
vellura.space
```

Or if you prefer www:
```
www.vellura.space
```

Add and push it:
```bash
echo "vellura.space" > CNAME
git add CNAME
git commit -m "Add custom domain CNAME"
git push origin main
```

### Step 3.5: Configure GitHub Pages with Custom Domain

1. Go to your GitHub repository Settings > Pages
2. Under "Custom domain", enter your domain: `vellura.space`
3. Click **Save**
4. GitHub will verify the domain
5. Check "Enforce HTTPS" (after domain is verified)

### Step 3.6: Verify Your Setup

**Wait for DNS propagation (can take 24-48 hours):**

1. Test your domain: `https://vellura.space`
2. Test www subdomain: `https://www.vellura.space`
3. Check HTTPS is working (green lock icon)
4. Try different browsers and devices

**Check DNS propagation:**
- Use https://www.whatsmydns.net
- Enter your domain name
- Verify all nameservers show Cloudflare

---

## Part 4: Cloudflare Advanced Settings (Optional)

### Enable SSL/TLS

1. In Cloudflare dashboard, go to your domain
2. Click **SSL/TLS** in the left sidebar
3. Under "Overview", set SSL/TLS encryption mode to:
   - **Full** (minimum) - if your GitHub Pages uses HTTPS
   - **Full (strict)** (recommended) - for maximum security

### Enable HTTP to HTTPS Redirect

1. Click **Rules** in the left sidebar
2. Click **Create rule** under "Page Rules"
3. Rule: `http://vellura.space/*` → Forward URL to `https://vellura.space$1`
4. Set to **Permanent Redirect (301)**

**Or in newer Cloudflare:**
1. Go to **Security** > **SSL/TLS** > **Edge Certificates**
2. Enable "Always Use HTTPS"

### Enable Caching

1. Click **Caching** in the left sidebar
2. Set Cache Level to **Cache Everything**
3. Browser Cache TTL: **1 hour**
4. Edge Cache TTL: **1 day**

### Minify Assets (Optional)

1. Click **Speed** in the left sidebar
2. Click **Optimization**
3. Enable:
   - Minify CSS
   - Minify JavaScript
   - Minify HTML

---

## Part 5: Ongoing Maintenance

### Update Your Website

1. Make changes to your files locally
2. Commit changes:
```bash
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

3. GitHub Pages will automatically redeploy (usually within 1-2 minutes)
4. Clear browser cache to see changes immediately

### Monitor Performance

In Cloudflare dashboard:
- **Analytics** tab: Traffic, requests, threats blocked
- **Performance** tab: Page speed insights
- **Security** tab: DDoS protection status

### Update Cloudflare Settings

- Review security rules regularly
- Update caching rules as needed
- Monitor SSL certificate status (auto-renews)

---

## Troubleshooting

### Domain Not Resolving

**Problem**: "Can't reach the website" error

**Solutions**:
1. Check DNS propagation at https://www.whatsmydns.net
2. Wait 24-48 hours for DNS to fully propagate
3. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
4. Clear browser cache completely
5. Try incognito/private browsing window
6. Check Cloudflare DNS records are correct

### HTTPS Not Working

**Problem**: "Not Secure" warning in browser

**Solutions**:
1. Verify SSL/TLS is set to "Full" or "Full (strict)" in Cloudflare
2. Wait for certificate to be issued (usually 5 minutes)
3. Check that CNAME file is in GitHub repo
4. Verify GitHub Pages domain verification shows checkmark

### GitHub Pages Not Updating

**Problem**: Changes not appearing on live site

**Solutions**:
1. Check that push was successful: `git status`
2. Verify branch is set to `main` in GitHub Settings > Pages
3. Check for build errors in GitHub Actions
4. Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
5. Wait 2-3 minutes for GitHub to rebuild

### Cloudflare Not Proxying

**Problem**: DNS records showing "DNS only" instead of "Proxied"

**Solutions**:
1. Click the cloud icon to toggle to "Proxied" (orange)
2. For apex domain (A records), must be proxied
3. For CNAME records, should be proxied for full Cloudflare benefits

---

## Performance Optimization Tips

1. **Reduce file sizes**: Current total ~52 KB is already lean
2. **Use Cloudflare caching**: Set up rules in Cloudflare dashboard
3. **Enable GZIP compression**: Cloudflare does this automatically
4. **Monitor page speed**: Use Google PageSpeed Insights or GTmetrix
5. **Optimize images**: If you add images, compress them first

---

## Security Best Practices

1. **Enable HTTPS**: Already done via Cloudflare
2. **Set strong passwords**: For GitHub and Cloudflare accounts
3. **Enable 2FA**: Two-factor authentication on both platforms
4. **Review DNS records**: Regularly check for unauthorized changes
5. **Monitor for attacks**: Cloudflare has built-in DDoS protection

---

## Next Steps

After deployment:

1. **Submit to search engines**:
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster Tools: https://www.bing.com/webmasters

2. **Add analytics**:
   - Google Analytics: https://analytics.google.com
   - Cloudflare Analytics: (included in dashboard)

3. **Set up email**:
   - Configure email forwarding at your registrar
   - Or use service like ProtonMail, Zoho Mail

4. **Backup your code**:
   - GitHub is your backup
   - Consider local backup copies

5. **Plan content updates**:
   - Portfolio additions
   - Blog posts
   - Team bios
   - Service listings

---

## Quick Reference

| Task | Time | Difficulty |
|------|------|-----------|
| Create GitHub repo | 2 min | Easy |
| Push code to GitHub | 2 min | Easy |
| Enable GitHub Pages | 2 min | Easy |
| Add domain to Cloudflare | 3 min | Easy |
| Update nameservers | 5 min | Easy |
| Create DNS records | 5 min | Medium |
| DNS propagation | 24-48 hrs | N/A |
| Verify setup | 5 min | Easy |
| **Total Active Time** | **~24 min** | - |
| **Total Including DNS** | **24-72 hrs** | - |

---

## Support & Resources

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Cloudflare Docs**: https://developers.cloudflare.com
- **DNS Propagation Checker**: https://www.whatsmydns.net
- **PageSpeed Insights**: https://pagespeed.web.dev
- **SSL Certificate Check**: https://www.ssllabs.com/ssltest

---

**Your Vellura Space website is now live and optimized!** 🎉

For questions or issues, refer to the GitHub Pages and Cloudflare documentation or reach out to their support teams.

Last Updated: 2024

# Next.js Redirect Implementation Guide
**For**: Roselle Center for Healing Website Redesign  
**Purpose**: Preserve SEO rankings with 301 redirects

---

## OPTION 1: Using next.config.js (Recommended)

Add this to your `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      // Main pages
      {
        source: '/about-us.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/acupuncture.html',
        destination: '/services/acupuncture',
        permanent: true,
      },
      {
        source: '/services/applied-kinesiology.html',
        destination: '/services/applied-kinesiology',
        permanent: true,
      },
      {
        source: '/services/massage-therapy.html',
        destination: '/services/massage-therapy',
        permanent: true,
      },
      {
        source: '/functional-medicine',
        destination: '/services/functional-medicine',
        permanent: true,
      },
      {
        source: '/sports-medicine',
        destination: '/services/sports-medicine',
        permanent: true,
      },
      {
        source: '/prenatal-chiropractic',
        destination: '/services/prenatal-chiropractic',
        permanent: true,
      },
      {
        source: '/webster-technique',
        destination: '/services/webster-technique',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/new-patient-center.html',
        destination: '/new-patients',
        permanent: true,
      },
      {
        source: '/new-patient-center/payment-options.html',
        destination: '/new-patients/payment-options',
        permanent: true,
      },
      {
        source: '/about-us/center-hours.html',
        destination: '/about/hours',
        permanent: true,
      },
      {
        source: '/contact-us/directions.html',
        destination: '/contact/directions',
        permanent: true,
      },
      {
        source: '/about-us/meet-the-doctors---therapists.html',
        destination: '/about/team',
        permanent: true,
      },
      {
        source: '/new-patient-office-policy-form',
        destination: '/new-patients/office-policy',
        permanent: true,
      },
      {
        source: '/acupuncture-faqs',
        destination: '/services/acupuncture/faq',
        permanent: true,
      },
      {
        source: '/purpose-and-mission',
        destination: '/about/mission',
        permanent: true,
      },
      // Blog posts - preserve exact URLs
      {
        source: '/blog/:id-:slug',
        destination: '/blog/:id-:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

---

## OPTION 2: Using Middleware (For Dynamic Redirects)

Create `middleware.ts` in your project root:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const redirectMap: Record<string, string> = {
  '/about-us.html': '/about',
  '/services.html': '/services',
  '/services/acupuncture.html': '/services/acupuncture',
  '/services/applied-kinesiology.html': '/services/applied-kinesiology',
  '/services/massage-therapy.html': '/services/massage-therapy',
  '/functional-medicine': '/services/functional-medicine',
  '/sports-medicine': '/services/sports-medicine',
  '/prenatal-chiropractic': '/services/prenatal-chiropractic',
  '/webster-technique': '/services/webster-technique',
  '/new-patient-center.html': '/new-patients',
  '/new-patient-center/payment-options.html': '/new-patients/payment-options',
  '/about-us/center-hours.html': '/about/hours',
  '/contact-us/directions.html': '/contact/directions',
  '/about-us/meet-the-doctors---therapists.html': '/about/team',
  '/new-patient-office-policy-form': '/new-patients/office-policy',
  '/acupuncture-faqs': '/services/acupuncture/faq',
  '/purpose-and-mission': '/about/mission',
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if pathname needs redirect
  if (redirectMap[pathname]) {
    return NextResponse.redirect(
      new URL(redirectMap[pathname], request.url),
      { status: 301 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

---

## OPTION 3: Using Vercel redirects.json (If Hosting on Vercel)

Create `vercel.json` in your project root:

```json
{
  "redirects": [
    {
      "source": "/about-us.html",
      "destination": "/about",
      "permanent": true
    },
    {
      "source": "/services.html",
      "destination": "/services",
      "permanent": true
    },
    {
      "source": "/services/acupuncture.html",
      "destination": "/services/acupuncture",
      "permanent": true
    },
    {
      "source": "/services/applied-kinesiology.html",
      "destination": "/services/applied-kinesiology",
      "permanent": true
    },
    {
      "source": "/services/massage-therapy.html",
      "destination": "/services/massage-therapy",
      "permanent": true
    },
    {
      "source": "/functional-medicine",
      "destination": "/services/functional-medicine",
      "permanent": true
    },
    {
      "source": "/sports-medicine",
      "destination": "/services/sports-medicine",
      "permanent": true
    },
    {
      "source": "/prenatal-chiropractic",
      "destination": "/services/prenatal-chiropractic",
      "permanent": true
    },
    {
      "source": "/webster-technique",
      "destination": "/services/webster-technique",
      "permanent": true
    },
    {
      "source": "/new-patient-center.html",
      "destination": "/new-patients",
      "permanent": true
    },
    {
      "source": "/new-patient-center/payment-options.html",
      "destination": "/new-patients/payment-options",
      "permanent": true
    },
    {
      "source": "/about-us/center-hours.html",
      "destination": "/about/hours",
      "permanent": true
    },
    {
      "source": "/contact-us/directions.html",
      "destination": "/contact/directions",
      "permanent": true
    },
    {
      "source": "/about-us/meet-the-doctors---therapists.html",
      "destination": "/about/team",
      "permanent": true
    },
    {
      "source": "/new-patient-office-policy-form",
      "destination": "/new-patients/office-policy",
      "permanent": true
    },
    {
      "source": "/acupuncture-faqs",
      "destination": "/services/acupuncture/faq",
      "permanent": true
    },
    {
      "source": "/purpose-and-mission",
      "destination": "/about/mission",
      "permanent": true
    }
  ]
}
```

---

## CRITICAL: Blog URL Preservation

**IMPORTANT**: All blog URLs MUST remain exactly the same:

```
https://www.rosellecare.com/blog/[ID]-[slug]
```

Examples:
- `/blog/924607-degenerative-joint-disease-aka-osteoarthritis`
- `/blog/53379-5-of-the-best-natural-remedies-for-arthritis-amp-inflammation`
- `/blog/53075-6-natural-ways-to-relieve-sciatic-nerve-pain`

**Do NOT change blog URL structure** - These pages have established rankings and backlinks.

---

## Testing Redirects

### 1. Local Testing
```bash
npm run build
npm run start
```

Then test redirects:
```bash
curl -I http://localhost:3000/about-us.html
# Should return 301 status code
```

### 2. Using Online Tools
- [Redirect Checker](https://www.redirect-checker.org/)
- [HTTP Status Code Checker](https://httpstatus.io/)

### 3. Google Search Console
After deployment:
1. Go to Google Search Console
2. Check "Coverage" tab for crawl errors
3. Look for "Redirect error" or "Not found" errors
4. Monitor for 2-4 weeks

---

## Verification Checklist

- [ ] All redirects return 301 status code (not 302)
- [ ] Redirects work on both www and non-www versions
- [ ] Blog URLs remain unchanged
- [ ] Internal links updated to new URLs
- [ ] Sitemap.xml updated with new URLs
- [ ] robots.txt updated if needed
- [ ] Google Search Console notified
- [ ] No redirect chains (A→B→C)
- [ ] No redirect loops
- [ ] Backlinks still work

---

## Post-Launch Monitoring

### Week 1-2
- Monitor Google Search Console for crawl errors
- Check for 404 errors
- Verify all redirects working

### Week 2-4
- Monitor organic traffic (should remain stable)
- Check keyword rankings (should maintain or improve)
- Look for any indexing issues

### Week 4-6
- Full SEO audit
- Compare traffic to baseline
- Verify all rankings preserved

---

## Troubleshooting

### Issue: Redirects not working
**Solution**: 
- Clear browser cache
- Check next.config.js syntax
- Rebuild and redeploy
- Check middleware.ts if using middleware

### Issue: 302 redirects instead of 301
**Solution**:
- Ensure `permanent: true` is set
- Check hosting provider settings
- Verify Next.js version supports permanent redirects

### Issue: Redirect chains detected
**Solution**:
- Map all old URLs directly to new URLs
- Don't redirect A→B→C, use A→C instead

### Issue: Blog posts not found
**Solution**:
- Verify blog URL structure matches exactly
- Check for trailing slashes
- Ensure dynamic routes configured correctly

---

## SEO Impact Summary

**Expected Results**:
- ✓ 0% traffic loss (with proper 301 redirects)
- ✓ Keyword rankings maintained
- ✓ Backlinks preserved
- ✓ PageRank transferred to new URLs
- ✓ Crawl budget preserved

**Timeline**:
- Immediate: Redirects active
- 1-2 weeks: Google recrawls pages
- 2-4 weeks: Rankings stabilize
- 4-6 weeks: Full recovery expected

---

## Additional Resources

- [Next.js Redirects Documentation](https://nextjs.org/docs/api-reference/next.config.js/redirects)
- [Google Search Central - Redirects](https://developers.google.com/search/docs/beginner/http-redirects)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

**Last Updated**: April 16, 2026  
**Status**: Ready for Implementation

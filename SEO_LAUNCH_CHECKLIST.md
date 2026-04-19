# SEO Launch Checklist - Roselle Center for Healing
**Redesign**: Old Site → Next.js  
**Launch Date**: [TO BE SET]  
**Status**: Pre-Launch

---

## PRE-LAUNCH (2 Weeks Before)

### Content & URLs
- [ ] Audit all existing URLs (225 keywords tracked)
- [ ] Document all blog post URLs (preserve exactly)
- [ ] Extract all meta titles and descriptions
- [ ] Backup all internal links
- [ ] Document H1 tags and heading structure
- [ ] Verify all images have alt text
- [ ] Check for broken links on current site

### Technical Setup
- [ ] Configure 301 redirects in next.config.js or middleware
- [ ] Set up sitemap.xml generation
- [ ] Create robots.txt
- [ ] Configure canonical tags
- [ ] Set up Open Graph tags
- [ ] Enable HTTPS
- [ ] Configure security headers

### Google Integration
- [ ] Verify Google Search Console access
- [ ] Note current indexing status
- [ ] Document current rankings (baseline)
- [ ] Set up Google Analytics 4
- [ ] Create Google Search Console property for new domain (if applicable)

### Backups
- [ ] Export current rankings from DataForSEO
- [ ] Screenshot current Google Search Console data
- [ ] Document current traffic metrics
- [ ] Save all meta data in spreadsheet

---

## LAUNCH DAY

### Pre-Deployment
- [ ] Final test of all redirects locally
- [ ] Verify 301 status codes (not 302)
- [ ] Test blog URLs (should not redirect)
- [ ] Check internal links point to new URLs
- [ ] Verify sitemap.xml is valid
- [ ] Test robots.txt
- [ ] Verify HTTPS certificate

### Deployment
- [ ] Deploy Next.js site to production
- [ ] Verify site loads correctly
- [ ] Test all main pages load
- [ ] Check mobile responsiveness
- [ ] Verify Core Web Vitals
- [ ] Test contact forms
- [ ] Check all images load

### Post-Deployment
- [ ] Verify all redirects working (curl tests)
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor 404 errors
- [ ] Verify analytics tracking
- [ ] Test all internal links
- [ ] Check external links still work
- [ ] Verify social media tags (OG tags)

---

## WEEK 1 POST-LAUNCH

### Monitoring
- [ ] Daily check of Google Search Console
- [ ] Monitor for crawl errors
- [ ] Check 404 error rate
- [ ] Monitor organic traffic (should be stable)
- [ ] Check keyword rankings (should maintain)
- [ ] Monitor Core Web Vitals
- [ ] Check for indexing issues

### Fixes
- [ ] Fix any broken redirects
- [ ] Fix any 404 errors
- [ ] Fix any crawl errors
- [ ] Update any broken internal links
- [ ] Fix any missing meta data

### Communication
- [ ] Notify Google of site migration (if applicable)
- [ ] Submit sitemap to Google Search Console
- [ ] Request recrawl of important pages
- [ ] Monitor backlinks for any issues

---

## WEEK 2-4 POST-LAUNCH

### SEO Monitoring
- [ ] Weekly ranking check (DataForSEO)
- [ ] Monitor organic traffic trends
- [ ] Check for any ranking drops
- [ ] Monitor backlink health
- [ ] Check for new 404 errors
- [ ] Monitor Core Web Vitals

### Content Verification
- [ ] Verify all blog posts indexed
- [ ] Check all service pages indexed
- [ ] Verify homepage indexed
- [ ] Check for duplicate content issues
- [ ] Verify canonical tags working

### Performance
- [ ] Monitor page load times
- [ ] Check Core Web Vitals scores
- [ ] Monitor crawl budget usage
- [ ] Check for any server errors

---

## WEEK 4-6 POST-LAUNCH

### Full Audit
- [ ] Run full SEO audit (DataForSEO)
- [ ] Compare rankings to baseline
- [ ] Compare traffic to baseline
- [ ] Check backlink profile
- [ ] Verify all URLs indexed
- [ ] Check for any ranking losses

### Optimization
- [ ] Identify any ranking drops
- [ ] Optimize underperforming pages
- [ ] Add missing schema markup
- [ ] Improve Core Web Vitals if needed
- [ ] Optimize images for speed

### Reporting
- [ ] Generate SEO report
- [ ] Compare pre/post metrics
- [ ] Document any issues found
- [ ] Create action plan for improvements

---

## CRITICAL URLS TO MONITOR

### Homepage (Brand Keyword)
- **URL**: `https://www.rosellecare.com/`
- **Keyword**: "roselle center for healing"
- **Current Rank**: #1
- **Current ETV**: 304
- **Status**: ⚠️ CRITICAL - Must maintain #1 ranking

### Local Keywords
- **URL**: `https://www.rosellecare.com/`
- **Keyword**: "chiropractic in fairfax"
- **Current Rank**: #11
- **Current ETV**: 19.70
- **Status**: ⚠️ CRITICAL - Must maintain top 15

### Service Pages
- **Acupuncture**: Rank #30 for "acupuncture fairfax"
- **Massage**: Rank #11 for "massage roselle"
- **Applied Kinesiology**: Rank #44 for "kinesiology massage near me"
- **Status**: ⚠️ HIGH - Monitor weekly

### Blog Posts
- **Sciatic Nerve Pain**: Rank #63 for "natural remedies sciatic nerve pain"
- **Degenerative Joint Disease**: Rank #80 for "degenerative joint disease"
- **Inflammation**: Rank #34 for "inflammation remedies natural"
- **Status**: ⚠️ MEDIUM - Monitor bi-weekly

---

## REDIRECT VERIFICATION

### Test Commands
```bash
# Test homepage redirect
curl -I https://www.rosellecare.com/

# Test service page redirect
curl -I https://www.rosellecare.com/services/acupuncture.html

# Test blog post (should NOT redirect)
curl -I https://www.rosellecare.com/blog/53075-6-natural-ways-to-relieve-sciatic-nerve-pain

# Check status code (should be 301 for redirects, 200 for blog)
```

### Expected Results
- [ ] Homepage: 200 OK
- [ ] Service pages: 301 Moved Permanently (if URL changed)
- [ ] Blog posts: 200 OK (no redirect)
- [ ] Old URLs: 301 Moved Permanently
- [ ] Non-existent URLs: 404 Not Found

---

## TRAFFIC BASELINE

**Current Metrics** (Pre-Launch):
- Organic Traffic: [TO BE MEASURED]
- Keyword Rankings: 225 tracked
- Top Ranking: #1 (roselle center for healing)
- Average Position: 45.7
- Estimated Monthly ETV: 554
- Backlinks: 1,738
- Referring Domains: 40

**Target Metrics** (Post-Launch):
- Organic Traffic: Maintain or increase
- Keyword Rankings: Maintain or improve
- Top Ranking: Maintain #1
- Average Position: Improve to <40
- Estimated Monthly ETV: Maintain or increase
- Backlinks: Maintain (via redirects)
- Referring Domains: Maintain

---

## COMMON ISSUES & SOLUTIONS

### Issue: Traffic drops after launch
**Solution**:
1. Check Google Search Console for crawl errors
2. Verify all redirects working (301 status)
3. Check for duplicate content
4. Verify canonical tags
5. Wait 2-4 weeks for Google to recrawl

### Issue: Rankings drop for specific keywords
**Solution**:
1. Check if page indexed
2. Verify meta title/description preserved
3. Check if content changed
4. Verify internal links preserved
5. Check for technical issues

### Issue: 404 errors appearing
**Solution**:
1. Check redirect configuration
2. Verify URL structure matches
3. Check for typos in redirects
4. Test redirects locally
5. Check server logs

### Issue: Blog posts not found
**Solution**:
1. Verify blog URL structure preserved
2. Check for trailing slashes
3. Verify dynamic routes configured
4. Check database/content migration
5. Test blog URLs directly

---

## TOOLS & RESOURCES

### Monitoring Tools
- Google Search Console (free)
- Google Analytics 4 (free)
- DataForSEO (paid - for ranking tracking)
- Screaming Frog (free/paid - for crawling)

### Testing Tools
- Redirect Checker: https://www.redirect-checker.org/
- HTTP Status Checker: https://httpstatus.io/
- PageSpeed Insights: https://pagespeed.web.dev/
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

### Documentation
- Next.js Redirects: https://nextjs.org/docs/api-reference/next.config.js/redirects
- Google Search Central: https://developers.google.com/search
- HTTP Status Codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

---

## SIGN-OFF

- [ ] All pre-launch checks completed
- [ ] All redirects tested and verified
- [ ] All monitoring tools configured
- [ ] Team trained on monitoring process
- [ ] Backup of all data completed
- [ ] Ready for launch

**Approved By**: ________________  
**Date**: ________________  
**Launch Date**: ________________  

---

## CONTACT & ESCALATION

**SEO Lead**: [Name]  
**Technical Lead**: [Name]  
**Project Manager**: [Name]  

**Escalation Process**:
1. Monitor alerts daily
2. If traffic drops >10%: Investigate immediately
3. If rankings drop >5 positions: Review changes
4. If 404 errors >100: Fix redirects
5. If crawl errors: Check robots.txt and sitemap

---

**Document Version**: 1.0  
**Last Updated**: April 16, 2026  
**Status**: Ready for Use

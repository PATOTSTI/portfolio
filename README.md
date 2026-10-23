# Vincent Sanchez — Portfolio

A static, responsive portfolio built with HTML, CSS, and vanilla JavaScript.
GSAP 3.13.0, ScrollTrigger 3.13.0, and Lenis 1.3.26 load from pinned CDN URLs.
No framework, application dependencies, or paid media service is required.

## Preview

Run these commands from the project root to preview the same clean URLs used on Vercel:

```powershell
node scripts/prepare-deploy.mjs
node scripts/preview.mjs
```

Open `http://localhost:3000`. Stop with Ctrl+C. Re-run the build after editing source files, then refresh the browser. No package installation is needed. Use this preview server instead of opening HTML files directly: nested project routes require HTTP routing. The dist directory contains public files only.

## Page URLs

| Page | Public URL path | Source |
| --- | --- | --- |
| Home | `/` | `index.html` |
| Hydrobot | `/projects/hydrobot` | `hydrobot.html` |
| AquaDetect | `/projects/aquadetect` | `aquadetect.html` |
| EPHOR | `/projects/ephor` | `ephor.html` |
| AUB internship | `/experience/aub` | `aub-internship.html` |

The build copies case studies into `dist/projects/`. Vercel's `cleanUrls` setting removes `.html`, and `trailingSlash: false` standardizes the paths. Permanent redirects preserve old flat project links and `/index.html`. Internal links and canonical URLs use the new paths; relative asset URLs resolve from the nested location. The local preview reproduces these static route behaviors; actual Vercel routing still needs a deployment check when published.

Reference: [Vercel clean URL configuration](https://vercel.com/docs/project-configuration/vercel-json#cleanurls).

## Edit

- index.html: content, contact links, system diagram, and page sections.
- style.css: colors, fonts, responsive layouts, and motion overrides.
- script.js: navigation, scroll animation, and motion controls.
- hydrobot.html, aquadetect.html, ephor.html: separate project case studies.
- aub-internship.html: three internship case studies and technical documentation work.
- assets/project-gallery.js: screenshot selection and accessible image viewer.
- assets/: optimized public media and locally hosted licensed fonts.
- BUILD-PLAN.md: creative brief and approved video-free revision.

The graduation photograph is optimized into two WebP sizes in assets/images/.
The original Media/GRAD PHOTO.JPG is ignored by Git and deployment packaging.
Email and LinkedIn use Vincent's confirmed destinations. The resume links open the supplied PDF in a new tab.

## Vercel

This replaces the original Next.js starter. vercel.json selects the Other
framework preset, no dependency installation, and a simple Node file-copy
command that packages the static site into dist. It does not compile or run
an application server. The existing GitHub repository stays connected to the
existing Vercel project.

Before production publication, verify a Vercel preview uses this configuration
and that old Next.js dashboard overrides do not interfere. The output includes
only index.html, projects/*.html, experience/aub.html, style.css, script.js, and assets/. Original photos, planning
documents, source tooling, and caches are outside the served directory.

Pushing main updates production. This implementation is prepared locally;
publishing is a separate step.

## Verification

Internship screenshots were removed at Vincent’s request. The page retains its three case studies and workflow diagrams; source images remain in the private Media folder.

Internship update: verified `/experience/aub`, reloads, homepage and project-anchor navigation, legacy redirects, and the existing academic project routes. Checked 320, 390, 768, and 1440 px, mobile menu/Escape, reduced motion, blocked animation CDNs, and JavaScript disabled; automated axe checks reported no violations. Confirmed the public build contains no internship PDFs or excluded source details, private-source URLs return 404, and the three PDFs and private review artifacts are ignored by Git. All checks are local; production has not been redeployed.

October 15 update: locally verified direct clean-route loads and refreshes for all three case studies; permanent redirects from legacy, `.html`, and trailing-slash URLs; internal links and assets; and all eight Hydrobot image-viewer entries. New sections passed at 320, 390, 768, and 1440 px with no horizontal overflow or automated axe violations. Keyboard navigation, zoom, focus return, reduced motion, blocked CDNs, and JavaScript-disabled image links were checked. Production routing remains to be checked after deployment.

Project pages checked in local Chrome at 320, 390, 768, and 1440 px, including
gallery selection, image zoom, keyboard navigation, Escape and focus return,
reduced-motion control, blocked animation CDNs, and JavaScript disabled. Automated axe checks cover
WCAG A/AA rules; they do not replace a full manual accessibility audit.

## Assets and credits

See ASSET-NOTES.md for the updated portrait and real project media. Source
images remain unchanged. Barlow Condensed and Manrope are distributed
under the SIL Open Font License; notices are included in assets/fonts/.

## Resume link

Navigation and contact links open `assets/documents/SANCHEZ_RESUME.pdf` in a new tab. There is no dedicated section or embedded viewer. Replace that PDF using the same filename, then run `node scripts/prepare-deploy.mjs`. Preview with `node scripts/preview.mjs`. If renaming the PDF, update both links in `index.html`.

## Mobile arrow update

Replaced Unicode arrow glyphs across all five pages with decorative inline SVGs to avoid emoji rendering on phone browsers. Verified in local Chrome mobile emulation at 320, 390, and 430 px: no horizontal overflow or JavaScript errors. The supplied updated resume is served intact as a PDF and linked in a new tab. Physical iPhone/Safari verification and publication remain pending.

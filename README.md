# Vincent Sanchez — Portfolio

A static, responsive portfolio built with HTML, CSS, and vanilla JavaScript.
GSAP 3.13.0, ScrollTrigger 3.13.0, and Lenis 1.3.26 load from pinned CDN URLs.
No framework, application dependencies, or paid media service is required.

## Preview

Open index.html directly in a browser for a quick review. For a local HTTP preview:

```powershell
node scripts/prepare-deploy.mjs
npx.cmd --yes serve dist
```

Use the Local URL printed by the server. The dist directory contains public files only.

## Edit

- index.html: content, contact links, system diagram, and page sections.
- style.css: colors, fonts, responsive layouts, and motion overrides.
- script.js: navigation, system explorer, case-study navigation, and motion controls.
- assets/: optimized public media and locally hosted licensed fonts.
- BUILD-PLAN.md: creative brief and approved video-free revision.

The graduation photograph is optimized into two WebP sizes in assets/images/.
The original Media/GRAD PHOTO.JPG is ignored by Git and deployment packaging.
Email and LinkedIn use Vincent's confirmed destinations. The résumé action is
omitted until the actual PDF is supplied; put it under assets/documents/ and
add a normal link when ready.

## Vercel

This replaces the original Next.js starter. vercel.json selects the Other
framework preset, no dependency installation, and a simple Node file-copy
command that packages the static site into dist. It does not compile or run
an application server. The existing GitHub repository stays connected to the
existing Vercel project.

Before production publication, verify a Vercel preview uses this configuration
and that old Next.js dashboard overrides do not interfere. The output includes
only index.html, style.css, script.js, and assets/. Original photos, planning
documents, source tooling, and caches are outside the served directory.

Pushing main updates production. This implementation is prepared locally;
publishing is a separate step.

## Verification

Checked in local Chrome at 320, 390, 768, 1024, and 1440 px, including system
explorer, case-study disclosure, mobile menu and Escape, reduced-motion control,
blocked animation CDNs, and JavaScript disabled. Automated axe checks cover
WCAG A/AA rules; they do not replace a full manual accessibility audit.

## Assets and credits

See ASSET-NOTES.md. The original graduation photograph retains its visible
Art Studio Photography credit. Barlow Condensed and Manrope are distributed
under the SIL Open Font License; notices are included in assets/fonts/.

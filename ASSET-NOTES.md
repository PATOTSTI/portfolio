# Asset notes

## Internship images — current decision

Removed the three selected screenshots at Vincent’s request. The internship page uses project descriptions and simplified workflow diagrams. Optimized screenshot copies were removed from public assets and the local build; originals remain unchanged in `Media/Internship/`.

## Internship documentation review — October 15, 2026

- Reviewed the three user-supplied PDFs in `Media/Internship/` (31 pages in total) as reference for `/experience/aub`.
- In the initial PDF-based revision, no PDF pages, screenshots, extracted records, or source-code snippets were copied into public assets. Many screenshots contain account-like identifiers, transaction amounts, internal paths/metadata, and email-related details; synthetic status cannot be established. The three images briefly added after reviewing originals have since been removed at Vincent’s request.
- Public visuals are semantic HTML workflow diagrams summarizing the three tools, labelled as simplified workflows. They contain no example customer records and are not reproductions of application screenshots.
- Public text uses generalized project titles and technical contributions. Internal SQL rules, routing details, table names, filenames, addresses, and configuration values are omitted. Example run counts are not used as performance statistics; configured email handling is not presented as verified delivery.
- Original PDFs remain excluded by `Media/` entries in `.gitignore` and `.vercelignore` and by the static build allowlist. Private review text and renders stay under ignored `.tools/internship-review/`.

## Personal photograph

- Source: `Media/GRAD PHOTO.JPG`, supplied by Vincent during implementation.
- Current output: `assets/images/vincent-graduation-v2-600.webp` and `vincent-graduation-v2-1000.webp`, using the newly supplied portrait.
- Processing: proportional resize and WebP compression only. No generative editing,
  facial alteration, retouching, or removal of source details.
- Placement: About / My Story. Original file remains unchanged and excluded from Git.

## Original site graphics

- Exploded hardware assembly in the hero: symbolic SVG illustration, authored for this site.
- Project pages use the supplied real photographs and screenshots, not live feeds.
- Grain SVG, VS favicon, and social preview: original site graphics.
- No generated video, paid stock, or invented project photographs.

## Project media

- Hydrobot design additions (October 15, 2026): `3D Design of HydroBot.png`, `Circuit Diagram.png`, `Hulls.png`, `Body.png`, `Filtration Chamber.png`, `Solar Mount.png`, and `Oil Collection Mouth.png`, all in `Media/Hydrobot/`. Exported at original resolution with lossless WebP compression; drawing labels, dimensions, wiring, and colors are preserved.
- Context comes from `Media/Hydrobot/CONTEXT FOR THE PARTS OF HYDROBOT.txt`. Copy summarizes subsystem purposes and documented materials. Dimensions are presented consistently as length × width × height. Unclear hole-size wording and unsupported performance claims are omitted.
- The Hydrobot viewer includes the prototype photograph and all seven drawings. Each image opens directly at its selected position, with zoom and previous/next controls. Drawings also remain accessible through normal image links without JavaScript.

- Hydrobot source: `Media/Hydrobot/HydroBot.JPG`; 800px and 1600px WebP exports.
- AquaDetect source: `Media/AquaDetect/`; eight full-resolution lossless WebP screenshots and smaller previews for dashboard, navigation, detection results, manual control, batch screening, oil detection, cleaning patterns, and logs.
- EPHOR source: `Media/Ephor - AI CATNA FORM/EPHOR.png`; full-resolution lossless `ephor.webp` and 1000px `ephor-preview.webp`. The supplied screenshot shows sign-in, not training recommendations.
- All public exports live in `assets/images/projects/`. Original files remain unchanged and excluded from deployment. CSS and GSAP provide framing and motion without changing screenshot contents or hardware details.

## Fonts

- Barlow Condensed, Latin 700 normal; downloaded from Fontsource CDN.
- Manrope, Latin variable weights; downloaded from Fontsource CDN.
- Files are self-hosted. SIL OFL notices obtained from the Google Fonts source repositories.

## Supplied links

- Email: `biceentandreei@gmail.com` (confirmed after correcting the initial domain typo).
- LinkedIn: `https://www.linkedin.com/in/vincent-sanchez-875a4b3a8`.
- GitHub: `https://github.com/PATOTSTI`.

## Supplied resume

- `assets/documents/SANCHEZ_RESUME.pdf`: supplied one-page resume, linked in a new tab. Original PDF unchanged.

## Optional assets still to supply

- Public project repository or live-demo URLs; additional EPHOR form and dashboard screenshots.
- Precise individual thesis responsibilities if Vincent wants a contribution-specific case study.

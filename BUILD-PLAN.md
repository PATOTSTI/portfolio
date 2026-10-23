# Vincent Sanchez — Master Build Plan

## Document control

### Updated personal story — October 23, 2026

Vincent's latest first-person account supersedes the earlier Iron Man origin story. His interest began in his family's computer café in their barangay, playing games with friends and discovering computers. After the café closed, a high-school need for a PC led him to YouTube tutorials, building his own computer, saving for gaming upgrades, and troubleshooting hardware and software himself. Computer Engineering then broadened his interests into programming, embedded systems, microprocessors, and AI/machine learning. Present his graduation with gratitude and an eagerness to keep learning. Use the About heading “It started at the café” and concise, personal paragraphs; do not restore the superseded origin story.

### Latest internship presentation decision

Vincent requested removal of the three internship screenshots. Remove their captions, viewer markup, page-specific gallery script, and exported public image files. Keep the three case studies and simplified workflow diagrams. Original files in `Media/Internship/` remain unchanged. This decision supersedes earlier screenshot-selection instructions below.

### Approved internship screenshot selection — October 15, 2026

This follow-up supersedes the blanket screenshot exclusion in the initial internship revision. Review of all 41 original images supports three selections: the ATM automated-test result, the daily-reporting empty date prompt, and the MT940 generic module structure. Place one accurately captioned screenshot in each corresponding case study with shared image-viewer zoom, keyboard navigation, focus return, and no-JavaScript direct-image fallback.

Preserve original pixels through lossless WebP export. Personal local development folder names remain visible in the two terminal images; no observed customer/account records, financial amounts, credentials, or email recipients appear in the selected images. Do not publish other screenshots, source PDFs, actual reports, or configuration views. Describe the five passing tests as a captured development run, not a new verification or performance claim. Keep workflow illustrations and all existing project explanations.

### Approved internship expansion — October 15, 2026

- Use the user's three internship documents as private source material for a new `/experience/aub` page, built from root source `aub-internship.html` into `dist/experience/aub.html`.
- Present three concise case studies: ATM log reporting (JRN/NCR normalization, Excel/CSV, SQLite, traceability and file-hash duplicate protection); daily transaction reporting (VB6-to-Python migration, modular database/report logic, summaries and overwrite checks); MT940 statement generation (legacy migration, statement files, repeat-run checks, configured delivery handling).
- Explain the task, personal contribution, implementation decisions, and functional result. No unsupported production claims, internship dates, throughput, savings, percentages, or successful email-delivery claims.
- Summarize documentation work: prerequisites, setup, program flow, output verification, and troubleshooting. Credit the internship at Asia United Bank Corporation and supervisor coordination already supplied by the user.
- Replace generic homepage internship bullets with the three documented tools, linked to their case-study anchors. Keep the existing three academic project cards and count unchanged.
- Use simplified semantic HTML workflow diagrams in the established palette. Exclude all original banking screenshots and PDFs from public output because they reveal records, internal metadata, and email-related information. Do not create fake application screenshots or expose internal business rules.
- Verify the clean URL, deep links, mobile navigation, reduced motion, no-JavaScript readability, accessibility, and build/source-document separation.

### Approved hardware documentation and URL revision — October 15, 2026

- Expand Hydrobot with the supplied complete 3D layout, circuit diagram, and five component drawings: twin hulls, electronics enclosure, filtration chamber, solar mount, and oil collection mouth. Preserve original resolution and diagram details in lossless WebP assets.
- Summarize the supplied context into an assembly overview, three circuit explanations (sensing, power, actuation), and five concise component descriptions. Label dimensions length × width × height. Keep team credit and distinguish design drawings from the constructed prototype photograph.
- Extend the image viewer so each drawing opens at the correct position within eight Hydrobot images, with enlargement, keyboard navigation, and reduced-motion support. No generative modification to engineering evidence.
- Public pages: `/`, `/projects/hydrobot`, `/projects/aquadetect`, `/projects/ephor`. Source HTML files remain in the root; the build packages case studies into `dist/projects/`. Vercel `cleanUrls` removes extensions, and permanent redirects preserve previous flat URLs. Update internal links, relative asset references, and canonical URLs together.
- Preview through `node scripts/prepare-deploy.mjs` followed by `node scripts/preview.mjs`; direct file opening no longer represents nested public routing.

### Approved project presentation revision — October 14, 2026

This revision supersedes the earlier stats-strip and combined-project presentation requirements below.

- Remove the homepage stats strip. Keep the 73.48% mAP50 result and training iterations within AquaDetect, and the VB6-to-Python migration within the internship section.
- Use a compact **PROJECTS** header with a **3 PROJECTS** count and **Projects** in navigation. Preserve charcoal, ivory, and muted pink styling.
- Feature EPHOR, followed by Hydrobot and AquaDetect. Provide `ephor.html`, `hydrobot.html`, and `aquadetect.html`. Hydrobot and AquaDetect remain two parts of one team thesis.
- EPHOR is a COGNATE web/Android HR system built in a 21-member team. Summarize CATNA processing, learning plans, Gemini-assisted recommendations, and HR/Supervisor access. Include confirmed Flutter/Dart, Supabase, FastAPI, deployment, and testing contributions. Do not claim all team pull requests or invent metrics.
- Label EPHOR's supplied image as its sign-in screen. Describe other features in text without inventing screenshots.
- Use the actual Hydrobot photograph and eight AquaDetect screenshots, with enlargement, zoom, keyboard controls, and no-JavaScript image-link fallbacks.
- Use the updated graduation photograph through `vincent-graduation-v2-*`. Preserve identity and originals. Use subtle CSS/GSAP framing and motion with reduced-motion support.
- Package four HTML pages and public assets into `dist/`; exclude `Media/` originals.

**Project:** Vincent Sanchez / Computer Engineering Portfolio  
**Creative concept:** Curiosity, put to work.  
**Document type:** Professional creative brief followed by implementation instructions for Claude Code or the coding agent working in this repository.  
**Status:** Approved for implementation; revised to a video-free design on October 13, 2026.  
**Project root:** `F:\Vincent\PORTFOLIO`  
**Repository:** https://github.com/PATOTSTI/portfolio  
**Existing deployment:** https://portfolio-omega-jet-b6e9njfqyv.vercel.app/  
**Required delivery:** Static HTML, CSS, and vanilla JavaScript, with GSAP, ScrollTrigger, and Lenis loaded through pinned CDN URLs.

Vincent approved implementation after replacing generated videos with lightweight HTML/CSS/SVG animation. This revision supersedes every earlier video, Seedance, image-sequence, or video-scrubbing requirement in the brief. No subscription, generated likeness, or paid media is required. Build the static source and validate locally; the production publishing step remains separate from the build.

---

# Part I — Creative brief

## 1. Website overview

Create a personal portfolio that helps employers understand Vincent Sanchez's practical ability, technical range, and potential as a fresh Computer Engineering graduate. The website should itself demonstrate thoughtful frontend implementation while presenting existing work clearly.

The intended audience is recruiters, engineering managers, and technical interviewers considering Vincent for entry-level AI engineering, AI automation, software development, or technical support positions. Avoid making four competing identities. Present one foundation: a hands-on Computer Engineering graduate who connects hardware, software, and practical problem-solving, with a growing focus on applied AI.

The experience should be cinematic enough to be memorable and direct enough to support a hiring decision. A visitor should understand Vincent's name, background, strongest project, and contact options within the first thirty seconds. Experienced engineers should be able to explore the evidence beneath the presentation.

### Objectives

1. Establish a credible professional identity without overstating seniority.
2. Lead with Hydrobot & Aquadetect as the strongest technical case study.
3. Demonstrate workplace experience through the Asia United Bank internship.
4. Make the connection between personal computer building, software development, and applied AI feel natural.
5. Offer separate routes to projects, résumé, email, and LinkedIn.
6. Deliver a fast, accessible, responsive site with motion that supports understanding.

### Measures of a successful first release

- An employer can find the thesis result and internship responsibilities without watching a video.
- The project story distinguishes the team outcome from Vincent's confirmed responsibilities.
- All published links lead somewhere real; missing links never masquerade as working buttons.
- The site remains readable when animation libraries, videos, or JavaScript fail.
- Keyboard and mobile users can complete the same core tasks as desktop users.
- Visual quality is judged through spacing, typography, imagery, and coherence. Awwwards is a quality reference, not an award claim or guaranteed outcome.

## 2. Core positioning

### Primary positioning statement

Vincent Sanchez is a Computer Engineering graduate with hands-on experience in computer hardware, Python development, automation, and computer vision, seeking opportunities to build useful technology and grow with an engineering team.

### Brand promise

**Curiosity, put to work.**

This connects the childhood spark, the self-built computer, the software learning journey, the bank internship, and the thesis project. It is specific enough to guide the site without claiming expertise Vincent has not established.

### Employer-facing introduction

> I'm Vincent Sanchez, a Computer Engineering graduate who enjoys understanding how things work—and making them work better. My experience spans building and troubleshooting PCs, automating tasks with Python, and developing a computer vision thesis with my team. I'm looking for a place to contribute, keep learning, and build useful systems.

### Role framing

- Lead identity: Computer Engineering graduate.
- Direction of growth: Applied AI and automation.
- Supporting strengths: Software development and technical support.
- Availability wording: “Open to entry-level opportunities.” Reconfirm before future updates.
- Avoid “AI expert,” “senior engineer,” “industry-leading,” and claims of production-scale AI deployment.

### Evidence hierarchy

1. Hydrobot & Aquadetect: real integration of computer vision, embedded hardware, and a monitoring dashboard.
2. Asia United Bank: Python migration, reporting automation, database work, and documentation in a professional environment.
3. Personal technical foundation: building, installing, repairing, networking, and troubleshooting computers.
4. Skills and tools: supporting context linked to the work, rather than a wall of logos.

## 3. Brand personality

**Curious, grounded, capable, approachable, and quietly ambitious.**

Write in Vincent's first-person voice. Use short, concrete sentences and natural language. Confidence should come from explaining the work. Warmth should come from the story and an open invitation to talk.

| Attribute | How it appears |
|---|---|
| Curious | Origin story, learning through building, interest in both hardware and software |
| Grounded | Exact project details, honest metrics, careful separation of facts and aspirations |
| Capable | Architecture explanation, internship responsibilities, readable case studies |
| Approachable | Warm imagery, plain language, helpful navigation, clear contact options |
| Ambitious | Applied AI direction and a strong presentation without inflated job titles |

### Copy rules

- Prefer “Built a monitoring dashboard with React, FastAPI, and Leaflet” over abstract claims about innovation.
- Describe automation benefits qualitatively where no measured time savings exist.
- Never invent client counts, years of experience, certifications, employers, awards, testimonials, grades, or project links.
- The thesis score is **73.48% mAP50**, not “73.48% accuracy.”
- Credit Hydrobot as a team thesis. Do not assign every component solely to Vincent without confirmation.
- Treat listed skills as user-reported experience, not certifications or proficiency ratings.
- Do not publish banking records, internal screenshots, or unconfirmed proprietary implementation details.

## 4. Visual direction

### Concept: an engineer's field notes, presented cinematically

Combine the intimacy of a real workbench with the clarity of an editorial portfolio. Use oversized typography, quiet photographic compositions, project annotations, numbered chapters, and intentional changes in background tone.

The page starts in charcoal, opens into an ivory project chapter, returns to dark technical detail, and ends with a warm pink contact invitation. This creates a story rhythm without making every section a separate visual gimmick.

### Signature visual decisions

1. Vincent's name is large and unmistakable. The work and person lead the page.
2. Pink is a restrained signature: a margin line, a selected state, a scene light, or one large final section.
3. Use full-width project images and asymmetric editorial layouts instead of repeating rounded cards.
4. Use a narrow monospace label system for project numbers, technologies, and evidence captions.
5. Allow ordinary real objects—PC parts, a desk, a prototype—to carry the visual story.
6. Give the imagery room to breathe; avoid placing dense paragraphs over moving footage.

### Exclusions

No generic neon AI brain, floating code tunnel, glassmorphism dashboard grid, endless logo marquee, synthetic testimonial carousel, progress-bar skill ratings, default gradient orb, or custom cursor that replaces the user's pointer. Avoid superhero suits, branded Iron Man imagery, and theatrical laboratory props. The Iron Man connection belongs in the personal story.

## 5. Approved media direction — no generated video

The user has replaced the Higgsfield direction with original HTML/CSS/SVG visuals, restrained GSAP animation, and real personal/project photos when supplied. No video generation, paid subscription, identity generation, or video scrubbing is in the current scope.

Use local licensed fonts, a subtle static grain texture, muted pink background light, an original exploded hardware illustration, and a conceptual Hydrobot system diagram. Keep the diagram explicitly labeled as conceptual. Contact email is confirmed as biceentandreei@gmail.com; LinkedIn is https://www.linkedin.com/in/vincent-sanchez-875a4b3a8.

## 6. Three visual chapters

1. **The spark:** Large editorial typography and a symbolic layered hardware illustration, moved slightly by scroll. This is decorative original vector artwork, not a picture of Vincent's actual computer.
2. **The builder:** A clear VB6 → Python migration motif, numbered internship responsibilities, and restrained line/text reveals.
3. **Hydrobot:** A teal conceptual diagram with three selectable explanations: vision, telemetry, and natural-fiber filtration. Do not simulate actual telemetry or fabricate a prototype photograph.

The real graduation photo belongs beside the About / My Story narrative. Until it is supplied, use a complete editorial VS monogram composition, without a broken image or fake portrait. Replace it with an optimized version of Media/graduation.jpg once that original arrives. Actual project photos can replace or complement the conceptual diagram later.

## 7. Website structure

A single editorial page with anchor navigation, optional in-page case-study expansion, and no forced multi-page maze.

| Order | Section | Visitor question answered |
|---|---|---|
| 01 | Header and hero | Who is Vincent, and what is he looking for? |
| 02 | Animated evidence strip | What concrete experience backs this up? |
| 03 | Featured work: Hydrobot & Aquadetect | What has he helped build? |
| 04 | Internship: Asia United Bank | How has he contributed in a workplace? |
| 05 | Mission | What motivates his engineering direction? |
| 06 | Three pillars | Where could he contribute to our team? |
| 07 | Story | What is the person behind the work like? |
| 08 | Opportunities and final CTA | How do I take the next step? |
| 09 | Footer | Where are the practical links? |

Feature work early. Employers should not need to read the origin story before seeing evidence. The document sections below describe components; this table determines their on-page order.

## 8. Hero section

### Approved-direction copy

**Eyebrow:** VINCENT SANCHEZ / COMPUTER ENGINEERING GRADUATE

**Headline:**

> Curiosity,<br>put to work.

**Supporting copy:**

> From building my own PC to developing software and exploring applied AI, I enjoy figuring out how things work—and making them useful.

**Role line:**

> Seeking entry-level opportunities in AI, automation, development, and technical support.

**Primary action:** Explore my work → `#work`  
**Secondary action:** View résumé → verified résumé file  
**Tertiary text links:** Email / LinkedIn → verified destinations

### Layout

- Desktop: asymmetrical split with a large type block and one cinematic portrait/workbench frame.
- Name remains prominent in the header and eyebrow. The creative headline must not obscure professional identity.
- Add a small, useful “Selected work below” cue; avoid instructions that imply the visitor must scroll slowly.
- Use one hairline divider and a restrained chapter marker, such as `01 / INTRODUCTION`.
- Keep all important text legible over a solid background.
- No loading gate, intro countdown, or “enter site” screen.

### Motion

Reveal the headline by line with a short vertical translation and opacity change. Settle immediately into readable type. The image can have a subtle two-percent scale settle. Respect reduced motion and never leave the heading hidden when scripts fail.

## 9. Animated stats strip

Three editorial cells separated by fine rules:

| Value | Label | Context |
|---|---|---|
| 73.48% | mAP50 | Reported YOLOv8 thesis detection result |
| 6 | Training iterations | Model development for Hydrobot & Aquadetect |
| VB6 → Python | Application migration | Asia United Bank internship |

Render final text in the source HTML. Animate a clipped reveal or underline once on entry; avoid counting through invented intermediate precision. Keep the metrics accessible as complete phrases. Include a small label: “Selected project and internship evidence.”

The mAP50 value describes the reported thesis evaluation. Dataset size, split, annotation procedure, per-class performance, and deployment generalization have not been supplied. Do not imply the result is a universal real-world accuracy guarantee. Include this context in the detailed case study, without burying the main narrative.

## 10. Mission section

**Section label:** WHAT DRIVES ME

**Heading:**

> Understand the problem.<br>Build something useful.

**Body:**

> I want to work on technology that helps people do their jobs, solve practical problems, or understand the world around them. I'm especially interested in AI and automation, and I want to keep building the software, hardware, and support skills that make those systems useful in practice.

Design as a generous typographic pause. Use warm ivory on charcoal, a dusty-pink emphasis on one phrase, and a short supporting paragraph. No video is necessary here.

## 11. Three pillars section

### Pillar 01 — Applied AI & automation

**Copy:**

> Turning data and repetitive tasks into useful tools. My experience includes training a YOLOv8 model for our thesis and building Python tools to automate banking reports during my internship.

**Evidence:** Hydrobot detection work; transaction-log reporting tools.  
**Skills:** Python, computer vision, API integration, AI automation.  
**Tools:** PyTorch, YOLOv8, Ultralytics, OpenCV; OpenAI and Claude listed as tools Vincent uses, without inventing API projects.

### Pillar 02 — Software & connected systems

**Copy:**

> Connecting the parts of a system, from a web dashboard to embedded hardware. Our thesis brought together a React interface, a FastAPI backend, mapping, telemetry, and an ESP32-based boat.

**Evidence:** Monitoring dashboard and embedded thesis integration; VB6-to-Python migration.  
**Skills:** JavaScript, Python, C++, Dart, React, FastAPI, API integration.  
**Tools:** Git, GitHub, VS Code, ESP32, Arduino.

### Pillar 03 — Technical support & troubleshooting

**Copy:**

> I enjoy the hands-on work of getting computers running and helping people understand them. My foundation includes building and repairing PCs, installation, networking, and troubleshooting, supported by experience writing technical guides.

**Evidence:** Personal PC build and self-troubleshooting; internship documentation.  
**Skills:** Computer assembly and repair, installation, networking, troubleshooting, technical documentation.  
**Scope:** Do not invent an enterprise network role, ticket volume, certifications, or specific networking protocols.

### Layout direction

Use three numbered horizontal rows with large titles and compact evidence blocks. On mobile, stack each title above its description. Avoid a standard three-card icon template. Make related work links explicit text links.

## 12. Story section

**Section label:** THE PERSON BEHIND THE PROJECTS

**Heading:**

> It started with Iron Man.<br>It grew through building.

**Draft narrative:**

> As a kid, I loved computers—and watching Iron Man made the idea of building technology feel exciting. That curiosity led me to Computer Engineering.
>
> I first connected with the hardware side. I built my own PC and learned to troubleshoot it myself. At university, I discovered how much the field also depends on software. Learning to code opened up a different way to build and solve problems.
>
> Since then, I've worked on Python automation during my IT internship and helped develop Hydrobot & Aquadetect with my thesis team. I'm still drawn to the same thing: understanding a problem, learning what it takes, and making something work.

Use three short chapters: **The spark / Learning both sides / Putting it into practice**. Do not invent dates, institution, degree classification, or childhood anecdotes beyond the interview.

Use Scene 02 here if it improves pacing. Keep story paragraphs visible beside the imagery. No superhero logos or licensed movie stills.

### Graduation photograph placement

Reserve a prominent portrait frame in this section for Vincent's real graduation photograph. On desktop, pair it with the origin story in an asymmetric two-column composition; on mobile, place it between the heading and narrative. Preserve the gown, face, and meaningful details with a respectful crop, warm neutral treatment, and a small muted-pink caption rule. Suggested caption: “Vincent Sanchez / Computer Engineering graduate.” Add the institution or graduation year only after confirmation.

Keep this photograph still and recognizable. Use a short entrance reveal if motion is enabled, without continuous zooming or AI alteration of the face. It should feel like a personal milestone. A second, casual portrait or workbench image is preferable for the hero so the page shows both the graduate and the builder.

The graduation photograph can also help establish identity for generation if the face is clear, but a separate well-lit portrait without a cap is preferable for desk and outdoor scenes. An image used directly as a starting frame can carry its gown and graduation background into the animation; distinguish a character reference from a scene's starting image.

## 13. Product / Service / Community section

### Adaptation: where I can contribute

Vincent is applying for jobs. The website should not invent products, an agency, paid consulting packages, or a creator community. Fulfill this section's strategic purpose by clarifying the work and teams he wants to join.

**Heading:** Ready to contribute. Ready to keep learning.

**Copy:**

> I'm looking for an entry-level role where I can contribute my current skills and learn from an experienced team—whether that's building AI tools, automating workflows, developing software, or helping people solve technical issues.

Display the four role interests as readable text, not four equal sales offers. This can sit directly above the final CTA to avoid an extra repetitive section.

## 14. Featured work / content section

### Featured case study: Hydrobot & Aquadetect

**Category:** Team thesis / Computer vision / Embedded systems / Web development

**Headline:**

> Connecting computer vision<br>with a real-world prototype.

**Summary:**

> Our thesis combined an autonomous RC boat, an oil-spill detection model, a monitoring dashboard, and a natural-fiber filtration system. It brought together embedded hardware, computer vision, and web development in one project.

**Evidence tiles or annotated rows:**

- **Detection:** YOLOv8 trained through six iterations; reported 73.48% mAP50 on the thesis evaluation.
- **Boat:** ESP32 with GPS and IMU integration for the autonomous RC boat prototype.
- **Monitoring:** React, FastAPI, and Leaflet dashboard for boat telemetry and detection results.
- **Filtration:** Natural-fiber materials with ratios optimized for oil absorption efficiency; no numeric improvement supplied.

**Detailed case-study structure:**

1. Problem and objective: detecting oil spills and exploring filtration through a connected prototype.
2. System overview: two clearly distinct conceptual paths—imagery → detection → dashboard, and boat sensors → telemetry → dashboard.
3. Model development: six iterations and the exact reported metric.
4. Hardware and software integration: named components and technologies only.
5. Filtration work: material-ratio optimization without invented test outcomes.
6. Team and contribution: explicitly label it a team thesis; ask for Vincent's individual responsibilities before writing an exclusive ownership claim.
7. Limitations and next steps: distinguish supplied results from proposals. Improvements such as broader testing may be framed as future ideas, not completed work.

**Important architecture constraint:** The interview mentions aerial imagery and boat telemetry but does not specify where imagery was captured, where inference ran, or which communication transport was used. Do not invent a drone, onboard GPU, wireless protocol, or inference deployment location. Any diagram is a conceptual system overview until more details arrive.

**Media priority:** Real prototype photograph → real dashboard screenshot → real detection output → annotated conceptual diagram. Use generated cinematic material as atmosphere with an appropriate caption, not as a substitute for evidence.

**Action:** “Explore the thesis” opens an in-page detail region or anchors to the full story. Add a repository/demo action only after receiving the actual URL. The portfolio repository is not the Hydrobot repository.

### Workplace feature: Asia United Bank Corporation

**Category:** IT internship / Python / Automation / Documentation

**Headline:**

> Practical software work<br>in a banking environment.

**Summary:**

> During my IT internship at Asia United Bank Corporation, I helped modernize legacy applications and simplify reporting workflows while coordinating requirements and revisions with my supervisors.

**Four responsibility blocks:**

1. **Application migration:** Migrated legacy Visual Basic 6 applications to Python while preserving core business logic and functionality.
2. **Reporting automation:** Built tools to process banking transaction logs and export reports to Microsoft Excel, reducing manual reporting work.
3. **Database improvements:** Worked on data migration, metadata management, and transaction traceability features.
4. **Documentation:** Wrote technical documentation, user guides, and troubleshooting references.

Do not fabricate a percentage saved, number of applications, employment dates, or a client endorsement. Use a restrained migration diagram or typography rather than a fake bank dashboard. Do not reproduce the bank's branding unless there is a clear need and appropriate assets.

### Supporting project: this portfolio

After implementation is verified, a compact footer-adjacent note may describe this website as a static frontend project built with HTML, CSS, vanilla JavaScript, GSAP, ScrollTrigger, and Lenis. Link to the actual portfolio repository. Do not write this as a completed project until it is built.

## 15. Final CTA section

**Heading:**

> Let's talk about<br>what I could help build.

**Supporting copy:**

> If you're looking for a curious graduate who enjoys both hands-on troubleshooting and software development, I'd be happy to connect.

Provide four distinct choices:

| Action | Destination | Availability |
|---|---|---|
| Email Vincent | Confirmed public `mailto:` address | Not supplied |
| View résumé | `./assets/documents/vincent-sanchez-resume.pdf` once provided | Not supplied |
| LinkedIn | Confirmed profile URL | Not supplied |
| Explore projects | `#work` | Can be built from interview content |

Use pink as a large, calm surface here, with dark text and substantial spacing. Keep one action visually dominant, but make all choices obvious. Once an email address is confirmed, email becomes the primary contact action.

Do not infer a public contact email from Git metadata. Do not construct a LinkedIn URL from the user's name. Do not create a résumé PDF that appears to be Vincent's supplied résumé when only excerpts are available.

For a local review, missing destinations can have clearly non-interactive “Link needed” labels. For publication, either resolve them or omit those actions with Vincent's knowledge. Never ship `href="#"` placeholders or pretend a contact form sends messages.

## 16. Footer

- Vincent Sanchez / Computer Engineering graduate.
- Navigation: Work, About, Contact.
- GitHub: https://github.com/PATOTSTI, confirmed by the supplied repository owner.
- Résumé, email, and LinkedIn only when verified.
- Current year and a simple copyright line; no invented studio credit.
- A visible “Reduce motion” control, if custom motion is enabled, with an accessible state.
- Small “Back to top” link using a real anchor.
- Optional repository credit: “Built with HTML, CSS & JavaScript.” Add only after migration.

## 17. Complete visual style guide

### Color system

| Token | Value | Usage |
|---|---|---|
| `--ink` | `#141216` | Primary dark surface, dark text on light panels |
| `--ink-soft` | `#201D22` | Secondary dark surface |
| `--paper` | `#F3EEE8` | Main warm light surface and primary light text |
| `--paper-muted` | `#D8D0CA` | Secondary text on dark surfaces |
| `--rose` | `#D99AAE` | Signature pink, selected accents, contact surface |
| `--rose-light` | `#EAC4D0` | Subtle emphasis on dark surfaces |
| `--rose-deep` | `#7B344D` | Pink-family text or links on ivory where contrast permits |
| `--text-muted-light` | `#625A61` | Supporting text on ivory |
| `--line-dark` | `rgba(243,238,232,.18)` | Decorative dividers on dark |
| `--line-light` | `rgba(20,18,22,.18)` | Decorative dividers on ivory |

Treat values as starting design tokens. Verify text and control contrast in the implemented combinations. Decorative dividers may be quiet; essential control boundaries must remain perceivable. Do not use pale pink text on ivory for body copy.

### Composition and spacing

- Main container: approximately 1440 px max width, fluid side padding from 20 px to 72 px.
- Desktop grid: 12 columns; tablet: 8; mobile: 4.
- Base spacing: 4 px increments with commonly used 8, 12, 16, 24, 32, 48, 64, 96, and 144 px steps.
- Section space: about 96–160 px desktop and 56–88 px mobile, adjusted to content.
- Body measure: 58–68 characters. Long case-study paragraphs should not span the screen.
- Image frames: mostly square-edged or small-radius; rounded pills reserved for compact labels.
- Use two or three substantial compositions rather than ten variations of a card.

### Texture and imagery

- One small static grain texture at low opacity, approximately 2–3%, with `pointer-events: none`.
- Avoid animated full-screen noise and GPU-heavy blur layers.
- Natural skin tones, tactile surfaces, and controlled highlights.
- Actual project media gets neutral treatment so evidence stays clear.
- Captions explain what an image shows and whether it is illustrative.
- Use no decorative image where a well-spaced diagram communicates better.

### Iconography

Use tiny inline SVG arrows, external-link marks, and menu/close icons only where useful. Pair unfamiliar icons with text. Avoid importing a large icon library.

## 18. Typography

### Proposed pairing

- **Display:** Barlow Condensed, semibold/bold, for large editorial headlines and project numbering.
- **Body and navigation:** Manrope, regular/medium/semibold.
- **Technical labels:** system monospace; add another font only if the result clearly needs it.

Use properly licensed, locally stored WOFF2 assets where obtainable. Preserve font license notices. If a font cannot be sourced, use intentional system fallbacks and report the difference rather than blocking rendering.

### Type scale

| Role | Desktop | Mobile |
|---|---|---|
| Hero display | 112–176 px, fluid | 58–86 px, fluid |
| Section display | 64–108 px | 40–60 px |
| Project title | 44–72 px | 32–44 px |
| Body | 17–20 px | 16–18 px |
| Navigation | 14–16 px | 15–17 px |
| Labels | 11–13 px | 11–12 px |

Use `clamp()` with width-aware bounds. Large typography must still wrap sensibly at 320 px and 200% zoom. Heading line-height around 0.98–1.06; body around 1.55–1.7. Keep all-caps tracking for short labels only.

## 19. Animation direction

### Motion vocabulary

- Headline reveal: 500–850 ms, line-based, restrained movement.
- Section entrance: 350–600 ms, 16–28 px translation, short stagger.
- Link or button response: 160–240 ms.
- Photo drift: subtle, at most a few percent of its dimensions.
- Kinetic type: one signature moment in the mission phrase, such as an emphasis line sliding into alignment with scroll.
- Chapter transition: image crop or opacity crossfade in a bounded composition; keep text stable.
- Stats: one-time reveal of final values.

Prioritize transforms and opacity. Avoid animating width, height, or large full-screen filters every frame. Refrain from springy menu motion, letter-by-letter scrambling, looping marquees, or exaggerated magnetic controls.

Every animation must have a readable resting state and an immediate reduced-motion equivalent. Split visual text spans must not cause screen readers to announce letters one at a time.

## 20. Interaction design

- Header: name, Work, About, Contact, and a résumé link when available.
- Desktop navigation remains compact and easy to scan.
- Mobile menu opens with a real button using `aria-expanded` and `aria-controls`; Escape closes it and focus returns to the toggle.
- Use a simple disclosure-style mobile menu where possible; avoid unnecessary focus trapping. If made modal, implement complete dialog focus behavior.
- Project expansion: prefer native `details`/`summary` or a robust disclosure with real buttons; no hover-only content.
- Links receive a small underline or arrow movement on hover and clear `:focus-visible` treatment.
- “View résumé” opens the real PDF; optional separate download link uses the same file.
- Keep normal pointer behavior and text selection.
- External links should have understandable labels; if opening a new tab, communicate it and use `rel="noopener noreferrer"`.
- No contact backend is required. Use a verified email link rather than a nonfunctional form.

## 21. Scroll behavior

The page is a normal vertical document enhanced with GSAP, ScrollTrigger, and Lenis. Readers must retain native navigation, browser find, keyboard scrolling, and direct anchor access.

### Desktop cinematic sequence

Use at most one pinned sequence, approximately 120–160 vh (1.2–1.6 viewport heights) of additional scroll distance, within the Hydrobot chapter. The surrounding work content remains accessible independently. Map progress to an approved short clip or a bounded still transition. Do not pin the whole page or require users to complete an animation before navigation works.

### Video scrubbing implementation intent

- Enable only on suitable desktop devices with normal motion preference and no detected data-saving request.
- Use a paused, muted, inline video with a poster; no audio track or autoplay dependency.
- Attach the source close to the viewport, then wait for metadata and seek readiness.
- Map scroll progress to a clamped timestamp below the duration endpoint.
- Keep one pending target timestamp and avoid overlapping seeks. Update on `seeked` or the next appropriate frame rather than setting `currentTime` repeatedly while the browser is already seeking.
- Use short keyframe intervals in the scrub encode and verify seeking in target browsers.
- Keep the poster visible until a usable frame is available. On loading, decoding, or seeking failure, leave a fully usable still composition.
- Scrolling backward must work. Leaving the section pauses any playback and stops unnecessary work.

Do not default to hundreds of full-resolution decoded images. An image-sequence fallback is optional only after video testing identifies a clear issue and memory use is measured. If used, bound the cache, reduce resolution, and cap device pixel ratio.

### Smooth scrolling

Use one animation loop for Lenis and GSAP, with the documented ScrollTrigger integration. Avoid simultaneously enabling Lenis's automatic RAF and a second manual RAF loop. Preserve native anchors without JavaScript. Disable smoothing for reduced motion and prefer native touch behavior on mobile. [Lenis integration documentation](https://github.com/darkroomengineering/lenis)

## 22. Mobile behavior

- Design mobile compositions, rather than shrinking desktop art direction.
- Stack the hero copy before the portrait; ensure name, background, and first CTA appear early.
- Use static posters by default. Do not automatically download all three clips on mobile.
- If a clip is available, an optional explicit “Play scene” control may request it; keep it muted with usable controls.
- Remove pinned storytelling and use normal document flow below the chosen desktop breakpoint.
- Use at least 44 × 44 px touch targets, generous spacing, and no hover dependency.
- Stack the evidence strip if three columns compromise readability.
- Recompose project diagrams into a vertical order with a text equivalent.
- Account for safe-area insets and mobile browser chrome; prefer stable viewport units where appropriate.
- Keep every employer action available; do not hide the résumé or email behind an animation.

## 23. Asset and content readiness

| Item | Current status | Required treatment |
|---|---|---|
| Name and professional background | Supplied | Use Vincent Sanchez and Computer Engineering graduate |
| Core story | Supplied | Use edited narrative above |
| Thesis description and score | Supplied | Preserve exact score and team context |
| Internship responsibilities | Supplied | Publish qualitative outcomes only |
| GitHub profile and portfolio repository | Supplied | Use verified URLs |
| Personal identity reference | Missing from inspected project | Locate `Media/` image before identity generation |
| Graduation photograph | Requested placement; file not supplied | Feature the real image in the Story section |
| Résumé PDF | Not supplied | Obtain actual file; do not fabricate |
| Public contact email | Confirmed | biceentandreei@gmail.com |
| LinkedIn profile | Confirmed | https://www.linkedin.com/in/vincent-sanchez-875a4b3a8 |
| Real Hydrobot media | Not supplied | Prefer real photos/screenshots; use honest diagrams meanwhile |
| Individual thesis contribution | Not fully separated from team work | Keep team wording until clarified |
| Project repositories/demo URLs | Not supplied | Omit external project links until verified |
| School and graduation dates | Not supplied | Omit rather than guess |
| Generated video | Removed from approved scope | Use lightweight vector and typographic motion |

These missing items should not trigger another long interview. After direction approval, request the smallest useful bundle of assets and links while progressing with independent implementation work.

### Media preparation guide for Vincent

Create `Media/` in this project for original input files. Suggested names below describe files to supply; they do not currently exist:

```text
Media/
  graduation-original.jpg
  portrait-front.jpg
  portrait-three-quarter.jpg        # optional additional identity angle
  pc-workbench.jpg
  hydrobot-prototype.jpg
  hydrobot-dashboard.png
  hydrobot-detection.png
  hydrobot-test.mp4                  # optional real project footage
```

Use original-quality photographs rather than compressed screenshots of photographs. Identity images should show a clear, evenly lit face with no beauty filter. Workbench and boat photographs help preserve the actual environment and equipment. Dashboard and detection screenshots should contain only material suitable for public display. Do not supply internal bank transaction data as website media.

Originals in `Media/` are inputs, not public website assets. During implementation, keep that folder out of Git and deployment before any push, and export only selected, optimized derivatives into `assets/`. Do not rename originals destructively.

### Guided cinematic production workflow

1. Inspect the supplied media and select the identity reference and scene references separately.
2. Prepare each scene's framing before generating motion. Use the same identity reference across scenes; use workbench or prototype references only for the relevant scene.
3. In Higgsfield, select Video and the requested Seedance 2.0 model. For testing, choose a short 720p generation. Use a reference-capable workflow when placing Vincent in a new scene; use image-to-video when animating an already composed starting image.
4. Start with Scene 01 and its prompt above. Refine composition, identity, and motion before producing the other clips. Change one factor at a time.
5. Once the test works, generate the final at 1080p, 16:9, and 8–12 seconds, aiming for 10 seconds. Review the displayed credit cost before generating. Avoid Fast/Mini variants if they do not offer the required final resolution.
6. Inspect the entire result, especially facial consistency, hands, equipment, and the end of the shot. Keep camera movement small and purposeful.
7. Download the approved clip. Repeat for Scenes 02 and 03 with the same identity and visual treatment. Prefer actual Hydrobot footage for project evidence whenever available.
8. Hand the exported MP4s to the coding agent for compression, poster extraction, storage under `assets/videos/`, and responsive integration. The agent must confirm available media-processing tools before claiming these steps are complete.

Higgsfield recommends testing short image-to-video generations at 720p before higher-resolution finals; its guide also explains reference types and reusable character Elements. Interface details and available options can vary, so follow the actual model controls. [Official Seedance workflow](https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-seedance)

Real footage is also a valid source for any cinematic scene: a stable phone recording of the workbench, a clean software screen recording, or real prototype footage can supply more credible detail than synthetic material. Capture landscape clips with steady movement and simple lighting. Do not make video acquisition a prerequisite for a polished still-image implementation, but clearly record whether the approved three-video scope remains outstanding.

---

# Part II — Complete implementation instructions for Claude Code

## 24. Technical implementation

### Non-negotiable stack

Deliver a static website using:

```text
index.html
style.css
script.js
assets/
```

No React, Next.js, Vue, framework-generated static export, Tailwind, component framework, or application backend. The existing Next.js starter is historical setup and must be replaced after approval. React and FastAPI may appear in case-study text because the thesis used them; that does not authorize using them to build this website.

GSAP, ScrollTrigger, and Lenis must use CDN links with exact pinned versions verified during implementation. Load the two matching GSAP files, then Lenis, then `script.js`, in order using `defer`. Include Lenis's matching stylesheet if required by the selected version. Do not use `latest` URLs in the finished site.

### Target project layout

```text
PORTFOLIO/
  index.html
  style.css
  script.js
  vercel.json
  .vercelignore
  .gitignore
  README.md
  BUILD-PLAN.md
  assets/
    images/
      hero-poster.webp                 # only when a real asset exists
      builder-poster.webp              # only when a real asset exists
      hydrobot-poster.webp             # only when a real asset exists
      hydrobot-prototype.webp          # supplied real project media
      hydrobot-dashboard.webp          # supplied real project media
      social-preview.jpg
      grain.png
    videos/
      01-workbench.mp4
      02-builder.mp4
      03-hydrobot.mp4
      03-hydrobot-scrub.mp4             # optional optimized variant
    documents/
      vincent-sanchez-resume.pdf         # supplied file only
    fonts/
      ...licensed-fonts.woff2
      ...license-notices.txt
    icons/
      favicon.svg
```

This is a target manifest, not a claim that these files exist. Do not create empty video files, broken `<img>` sources, or fictional document downloads to match it. Use relative paths such as `./assets/images/hero-poster.webp`. Store all generated site media under `assets/`; keep private input reference images out of the deployed asset folder.

Maintain asset production notes in a non-deployed Markdown file if needed: actual filename, origin, real/generated classification, identity reference path, dimensions, duration, licensing, and approved site placement.

### HTML architecture

- Use semantic `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, and `footer` elements.
- One `h1`; coherent `h2` and `h3` hierarchy.
- Add a skip-to-content link and stable anchors: `#top`, `#work`, `#experience`, `#about`, `#contact`.
- Write content directly in HTML so search engines and no-JavaScript visitors can read it.
- Use descriptive image alternatives; decorative imagery gets empty alt text. Decorative videos are not part of the reading order.
- Include width and height or CSS aspect ratio for all media to avoid layout shifts.
- Use native links for navigation and native buttons for actions.
- Do not require JavaScript to expose the main case-study content.

### CSS architecture

Organize `style.css` into tokens, reset/base, typography, layout, components, section styles, motion states, responsive rules, and accessibility overrides. Use custom properties, Grid, Flexbox, and fluid sizing. Do not import a CSS framework.

Set the initial state to readable and visible. Apply animation-specific hidden states only after successful initialization, and keep recovery behavior if a library fails. Avoid giant fixed overlays, pointer-blocking textures, horizontal body overflow, and excessive `will-change` layers.

### JavaScript architecture

Organize plain functions by responsibility:

```text
initNavigation()
initMotionPreference()
initSmoothScrolling()
initSectionReveals()
initProjectStory()
initLazyMedia()
initVideoScrubbing()
initFooterYear()
```

Functions should be independently guarded. Missing animation libraries must not prevent menu controls or links from working. Register ScrollTrigger only after confirming GSAP and the plugin exist. Use GSAP's responsive lifecycle helpers or equivalent cleanup to remove pins and listeners when breakpoints or motion preferences change. [ScrollTrigger documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

Do not add API keys, tracking scripts, AI chat widgets, or backend dependencies. Avoid optional visual features that create more maintenance than value.

## 25. Video preparation and performance

### Encoding direction

Keep the approved 1080p masters inside an ignored local subfolder of `assets/` if they are too heavy to deploy; publish only the optimized web files. Standard delivery is H.264 MP4, compatible pixel format, no audio, and fast-start metadata. Generate posters from an intentional representative frame.

For the one scrubbed clip, test a short GOP around 0.25–0.5 seconds; choose a measured balance between seek smoothness and transfer size. All-intra encodes may be too large. Do not promise buttery scrubbing from a long-GOP stock export without testing.

### Budgets and targets

| Resource / metric | Target |
|---|---|
| Critical initial page transfer, excluding deferred video | Approximately 1 MB or less where practical |
| Hero poster | Approximately 150–250 KB |
| Below-fold stills | Approximately 100–250 KB each |
| Normal 10-second web clip | Aim for 2–5 MB each; verify visual quality |
| Scrub variant | Aim below 8 MB; fall back to stills if not practical |
| Local authored JavaScript | Prefer below 30 KB minified equivalent |
| Fonts | Two families, minimal files and weights |
| CLS | At or below 0.1 target |
| LCP | At or below 2.5 s target under a documented test profile |
| INP | At or below 200 ms target when field measurement becomes available |

These are engineering targets, not measured results. Record the browser, device or emulation, network profile, and tool when reporting performance.

### Loading strategy

- Prioritize the hero poster, not three video downloads.
- Use `loading="lazy"` and asynchronous decoding for appropriate below-fold images.
- Use responsive image variants when image size warrants them.
- Attach video sources only when the section approaches the viewport and the device is eligible.
- Honor `prefers-reduced-motion`; respect `saveData` where available without assuming every browser reports it.
- Keep the page useful with slow or failed CDN/video requests.
- Pause work when the page is hidden. Remove active media observers and animation work when no longer needed.
- Avoid oversized canvas sequences, repeated large shadows, and continual layout measurement in scroll callbacks.

## 26. Accessibility and search presentation

### Accessibility requirements

- Keyboard navigation with visible focus and sensible focus order.
- Text contrast suitable for normal and large text in the actual rendered color pairs.
- Reduced motion removes smooth scrolling, pinning, scrubbing, and decorative movement; final content remains visible.
- Provide a motion preference control if movement persists beyond a brief entrance. Match the OS default until the user explicitly overrides it; store only that preference.
- Ensure content can reflow at 200% zoom and narrow widths.
- No information communicated solely through color, hover, sound, or animation.
- No continuous auto-playing background clip without an accessible way to stop it. Prefer scroll-controlled or user-initiated video.
- Preserve focus when menus and disclosures close.
- Technical diagrams have a readable text equivalent.

### Metadata

**Page title:** Vincent Sanchez | Computer Engineering Portfolio

**Description:** Computer Engineering graduate exploring AI, automation, and software development. View Vincent Sanchez's thesis, internship experience, and technical skills.

- Canonical URL uses the confirmed production domain, not an invented custom domain.
- Add Open Graph and social metadata with a real local preview asset.
- A simple original VS monogram may serve as the favicon; avoid movie-inspired insignia.
- Person structured data may use only confirmed identity and profile URLs; do not assert a current employer or inflated job title.
- Ensure the page's content is indexable without JavaScript.

## 27. Migration from Next.js to static Vercel hosting

This project currently deploys a Next.js starter from `main`. The approved redesign must migrate the same repository and Vercel project to a plain static site without accidentally deploying an incomplete intermediate state.

### Preparation

1. Inspect the current working tree and preserve user edits.
2. Use the existing Git history to preserve the starter. Prefer a working branch for implementation.
3. Confirm the current Vercel project and source repository. Do not create a duplicate project merely to avoid changing framework settings.
4. Keep `BUILD-PLAN.md` as the implementation contract; report any material deviation.

### Source replacement after approval

- Replace the starter's application files with the required static entry files.
- Remove obsolete Next.js/React dependencies and scripts from the tracked project when no longer needed. A runtime `package.json` and lockfile are unnecessary for a buildless site.
- Remove tracked `app/` starter files only after the new static source is ready and reviewed locally.
- Leave Git history and credentials alone. Do not perform broad recursive cleanup of unrelated local folders.
- Update README instructions for simple static local preview and the actual deployment configuration.

### Vercel configuration intent

Use the **Other** framework preset, the repository root, no application build, and the static project root as output. The `framework: null` setting selects Other. Verify the current schema and existing dashboard overrides before finalizing configuration. [Vercel configuration documentation](https://vercel.com/docs/project-configuration/vercel-json)

Proposed starting configuration, subject to validation:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "framework": null,
  "buildCommand": "",
  "installCommand": "",
  "outputDirectory": "."
}
```

Ensure deployment exclusions keep planning documents, raw `Media/` references, asset production notes, local masters, caches, dependencies, `.next/`, and environment files out of the served output. Preserve required font licenses and web assets. Verify exclusions against an actual preview deployment rather than assuming Git ignore rules alone determine what is served.

No catch-all rewrite to `index.html` is needed for this single-page anchor site. Missing assets should return a true error, not HTML disguised as a successful media response. If security headers are added, validate them against the actual pinned CDNs and media behavior rather than inserting a generic restrictive policy.

### Deployment sequence

1. Finish local implementation and essential checks.
2. Create a preview deployment if the available account connection supports it.
3. Verify homepage, relative assets, CDN scripts, metadata, and static configuration in the preview.
4. Share a concise review of the finished site and remaining asset limitations.
5. Publish through the established repository workflow when authorized. Pushing to `main` updates the live site, so do not treat it as a harmless backup.
6. Verify the production response and representative assets after deployment.

Plan approval authorizes building. Do not assume it also approves paying for external generation or publishing incomplete placeholder contact links.

## 28. Implementation phases

### Phase A — Foundation and content

- Confirm plan approval.
- Request the missing portrait/reference, résumé, email, LinkedIn, and available project media as one concise asset bundle.
- Create semantic HTML with the refined copy and real anchor navigation.
- Establish tokens, typography, layouts, and responsive behavior before animation.
- Build the case-study evidence and conceptual diagrams from verified facts.

**Exit condition:** A complete, readable, navigable static page exists with all facts represented correctly.

### Phase B — Art direction and assets

- Source fonts and record licenses.
- Integrate supplied personal and project imagery.
- Prepare and, where tools/access allow, generate the three approved cinematic scenes.
- Validate identity and truthfulness before using generated imagery.
- Export posters and optimized clips, keeping all deployed assets local and relatively referenced.
- If media is blocked, build the intentional still or typographic treatment and mark the cinematic deliverable as outstanding.

**Exit condition:** The page has a coherent, distinctive visual composition without broken or misleading assets.

### Phase C — Motion and interactions

- Add the three required CDN libraries with pinned versions.
- Implement navigation, project disclosure, motion preference, and restrained transitions.
- Add one tested desktop scroll-scrub section only when the actual media supports it.
- Ensure mobile and reduced-motion modes remain normal, readable documents.

**Exit condition:** Motion improves the presentation without becoming a condition for accessing content.

### Phase D — Validation and deployment readiness

- Test the acceptance matrix below.
- Resolve broken links, console failures, overflow, contrast problems, and resource loading issues.
- Complete static Vercel configuration and preview verification.
- Update README and asset notes to describe the implemented result.
- Provide a reviewable summary, preview location, and any unresolved supplied-asset requirements.

**Exit condition:** A verified static build is ready for the agreed publishing step.

## 29. QA and acceptance matrix

| Area | Required check |
|---|---|
| Content | Name, graduate status, team thesis framing, exact mAP50 metric, six iterations, internship claims |
| Layout | Representative widths of 320, 390, 768, 1024, and 1440 px; no accidental horizontal overflow |
| Navigation | Anchors, sticky header offsets, browser back, skip link, menu state and focus |
| Actions | Verified résumé file, email address, LinkedIn URL, project anchors, GitHub links |
| Accessibility | Keyboard-only walkthrough, focus visibility, reduced motion, 200% zoom, heading order |
| Media | Correct identity, truthful captions, no missing files, posters visible before video readiness |
| Scrubbing | Forward and backward scroll, rapid seek changes, resize, failure fallback, no trapped scroll |
| Mobile | Native touch scrolling, no desktop pinning, no automatic three-video download |
| Resilience | JavaScript disabled; each CDN blocked; video missing or slow; long text and narrow viewport |
| Performance | Network waterfall, image sizing, layout stability, one animation loop, reasonable memory |
| Hosting | Static preset and output verified; no private reference or planning documents publicly served |
| Source | HTML/CSS/vanilla JS only; no framework runtime; local relative media paths |

Use available browser tooling for interaction and visual checks. If a browser or test device is unavailable, explicitly report which checks remain unverified. An HTTP 200 alone does not prove visual or interaction quality. Avoid adding a testing framework merely to test static copy; use targeted checks and real browser behavior.

## 30. Builder handoff: operating instructions

You are implementing Vincent Sanchez's approved creative direction in the existing portfolio repository. Read this file completely before editing website source.

1. Confirm the plan has been approved in the conversation. If not, stop after presenting the plan.
2. Treat the interview facts and the content-readiness table as the source of truth.
3. Build the specified static site in `index.html`, `style.css`, `script.js`, and `assets/`.
4. Preserve existing Git history and unrelated user changes.
5. Use charcoal, ivory, and muted pink with editorial typography and deliberate imagery.
6. Lead with real work and professional clarity. Avoid generic AI-themed decoration and invented accomplishments.
7. Keep required navigation and employer actions functional independently of animation.
8. Use CDN-delivered GSAP, ScrollTrigger, and Lenis, progressively enhanced with failure-safe initialization.
9. Integrate cinematic assets only when actual files exist; never fake completion of missing video generation.
10. Keep personal identity references consistent and use real project media as evidence.
11. Calibrate motion to device capability, accessibility preference, and the available media.
12. Verify responsive layout, links, media, accessibility, and deployment configuration.
13. Report what was built, what was tested, and what remains dependent on Vincent's assets or external generation access.
14. Do not publish an incomplete replacement or push to the production branch without the appropriate publishing authorization.

### Definition of done

The redesigned site is complete when its approved content and visual system are implemented in the required static stack; essential links work; source and assets are organized; motion and fallback behavior are verified; and the agreed deployment is successful. If the three requested videos, identity reference, or key contact assets are still missing, distinguish a completed static implementation from the outstanding deliverables. Do not call the entire cinematic scope complete until those requirements are resolved or Vincent accepts a revised scope.

## 31. Approval summary

**Direction:** A cinematic, welcoming portfolio with charcoal, warm ivory, and muted pink.  
**Message:** Curiosity, put to work.  
**Evidence:** Hydrobot & Aquadetect, Asia United Bank internship, and hands-on technical skills.  
**Visual story:** Three separate, consistent scenes—workbench, software desk, waterside application.  
**Employer choices:** Projects, résumé, email, and LinkedIn.  
**Build:** Plain HTML, CSS, vanilla JavaScript; GSAP, ScrollTrigger, and Lenis through CDNs.  
**Current next step:** Complete the approved static implementation and local verification. Photos and the résumé remain user-supplied assets.


## Approved implementation revision

The video production prompts and requirements in the original planning material are superseded. The delivered design uses scroll-linked vector layers, a conceptual system explorer, gentle text reveals, native mobile scrolling, and an explicit reduced-motion control. Missing résumé and photographs must not be replaced with invented files or claims. No video deliverable is outstanding under the revised scope.


### Implementation record

- Received Media/GRAD PHOTO.JPG and integrated proportionally resized WebP copies in the Story section. Original remains untouched and ignored.
- Confirmed and integrated biceentandreei@gmail.com and the supplied LinkedIn URL.
- Résumé PDF remains unsupplied; no fake résumé link is shown.
- Static Vercel output uses dist/ with a dependency-free Node copy script (scripts/prepare-deploy.mjs) to include only public HTML, CSS, JS, and assets. This supersedes the earlier root-output configuration example. No framework or application runtime is used.
- Browser checks completed at five widths with no overflow, page errors, or axe A/AA violations in the tested states.

## Resume link revision - October 23, 2026

Supersedes earlier missing-resume notes and the full-page section. The supplied PDF is `assets/documents/SANCHEZ_RESUME.pdf`. Navigation and contact links open it in a new tab, with `target="_blank"`, `rel="noopener noreferrer"`, and accessible labels identifying new-tab behavior. No dedicated section or embedded viewer. Keep the document unchanged; replace the same file and rebuild to update it.

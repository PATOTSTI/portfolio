(() => {
  "use strict";
  const root = document.documentElement;
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#main-nav");
  const motionButton = document.querySelector("#motion-toggle");
  const osMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktop = window.matchMedia("(min-width: 761px)");
  let preference;
  let lenis;
  let context;
  let ticker;
  try {
    preference = localStorage.getItem("vincent-motion");
  } catch {
    /* Storage is optional. */
  }

  root.classList.add("js-nav");
  menuButton.hidden = false;
  function closeMenu(returnFocus = false) {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    )
      closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  window
    .matchMedia("(min-width: 481px)")
    .addEventListener("change", () => closeMenu());

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      if (link.dataset.openDetails) target.open = true;
      closeMenu();
      if (lenis) {
        event.preventDefault();
        history.pushState(null, "", link.getAttribute("href"));
        lenis.scrollTo(target, { offset: -35 });
      }
      // Move keyboard focus to the destination without a second scroll.
      if (!target.hasAttribute("tabindex"))
        target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
      window.ScrollTrigger?.refresh();
    });
  });
  document
    .querySelectorAll("details")
    .forEach((details) =>
      details.addEventListener("toggle", () => window.ScrollTrigger?.refresh()),
    );

  document.addEventListener("project-viewer:open", () => lenis?.stop());
  document.addEventListener("project-viewer:close", () => lenis?.start());

  function reducedMotion() {
    return preference ? preference === "reduce" : osMotion.matches;
  }
  function teardownMotion() {
    if (ticker && window.gsap) gsap.ticker.remove(ticker);
    ticker = null;
    lenis?.destroy();
    lenis = null;
    context?.revert();
    context = null;
  }
  function initMotion() {
    teardownMotion();
    const reduced = reducedMotion();
    root.dataset.motion = reduced ? "reduce" : "full";
    motionButton.hidden = false;
    motionButton.setAttribute("aria-pressed", String(reduced));
    motionButton.textContent = reduced ? "Motion reduced" : "Reduce motion";
    if (reduced || !window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);
    if (window.Lenis && desktop.matches) {
      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        syncTouch: false,
      });
      lenis.on("scroll", ScrollTrigger.update);
      ticker = (time) => lenis?.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
    }
    context = gsap.context(() => {
      if (document.querySelector(".hero")) {
        gsap.from(".hero-line", {
          y: 35,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
        });
        gsap.from(".assembly", {
          y: 20,
          opacity: 0,
          duration: 1,
          delay: 0.15,
          clearProps: "all",
        });
        gsap.from(".evidence-strip > div", {
          y: 14,
          opacity: 0.3,
          duration: 0.6,
          stagger: 0.1,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".evidence-strip",
            start: "top 94%",
            once: true,
          },
        });
      }
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 28,
          opacity: 0.25,
          duration: 0.75,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: { trigger: element, start: "top 92%", once: true },
        });
      });
      if (desktop.matches && document.querySelector(".hero")) {
        gsap.to(".layer-top", {
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
        gsap.to(".layer-middle", {
          y: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
        gsap.to(".hero-glow", {
          xPercent: -8,
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.from(".mission-emphasis", {
          opacity: 0.4,
          scrollTrigger: {
            trigger: ".mission",
            start: "top 65%",
            end: "center 55%",
            scrub: 0.6,
          },
        });
      }
      gsap.utils.toArray(".photo-reveal").forEach((frame) => {
        const photo = frame.querySelector(".project-photo");
        if (!photo) return;
        gsap.fromTo(
          photo,
          { scale: 1.055 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top 95%",
              end: "bottom 30%",
              scrub: 0.7,
            },
          },
        );
      });
      if (desktop.matches && document.querySelector(".dashboard-window")) {
        gsap.from(".dashboard-window", {
          y: 24,
          rotateX: 6,
          rotateY: -4,
          opacity: 0.6,
          duration: 1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".aquadetect-cover",
            start: "top 85%",
            once: true,
          },
        });
      }
      if (document.querySelector(".case-heading")) {
        gsap.from(".case-heading", {
          y: 22,
          opacity: 0.3,
          duration: 0.8,
          clearProps: "all",
        });
      }
    });
    if (document.querySelector(".image-viewer[open]")) lenis?.stop();
    document.fonts?.ready.then(() => window.ScrollTrigger?.refresh());
  }
  motionButton.addEventListener("click", () => {
    preference = reducedMotion() ? "full" : "reduce";
    try {
      localStorage.setItem("vincent-motion", preference);
    } catch {
      /* Use the choice for this visit. */
    }
    initMotion();
  });
  osMotion.addEventListener("change", initMotion);
  desktop.addEventListener("change", initMotion);
  document.querySelector("#year").textContent = new Date().getFullYear();
  initMotion();
})();

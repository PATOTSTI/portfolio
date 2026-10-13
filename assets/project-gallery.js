(() => {
  "use strict";
  const dialog = document.querySelector(".image-viewer");
  if (!dialog || typeof dialog.showModal !== "function") return;
  const choices = [...document.querySelectorAll("[data-gallery-item]")];
  const primary = document.querySelector(".gallery-image-link");
  const heroLinks = [...document.querySelectorAll("[data-lightbox]")];
  const entries = (choices.length ? choices : heroLinks).map((link) => ({
    src: link.href,
    title: link.dataset.title,
    caption: link.dataset.caption,
  }));
  const viewerImage = dialog.querySelector(".viewer-image");
  const canvas = dialog.querySelector(".viewer-canvas");
  const zoomButton = dialog.querySelector("[data-viewer-zoom]");
  let selected = 0;
  let opener;

  function selectScreenshot(index) {
    selected = (index + entries.length) % entries.length;
    const entry = entries[selected];
    if (!primary) return;
    const img = primary.querySelector("img");
    img.src = entry.src;
    img.alt = `${entry.title}: ${entry.caption}`;
    primary.href = entry.src;
    primary.dataset.title = entry.title;
    primary.dataset.caption = entry.caption;
    document.querySelector("#gallery-title").textContent = entry.title;
    document.querySelector("#gallery-description").textContent = entry.caption;
    document.querySelector("#gallery-counter").textContent =
      `${String(selected + 1).padStart(2, "0")} / ${String(entries.length).padStart(2, "0")}`;
    choices.forEach((choice, i) => {
      if (i === selected) choice.setAttribute("aria-current", "true");
      else choice.removeAttribute("aria-current");
    });
    if (window.gsap && document.documentElement.dataset.motion !== "reduce") {
      gsap.fromTo(
        img,
        { opacity: 0.4, y: 5 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          overwrite: true,
          clearProps: "opacity,transform",
        },
      );
    }
  }
  choices.forEach((choice, index) => {
    choice.setAttribute("role", "button");
    choice.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      selectScreenshot(index);
    });
    choice.addEventListener("keydown", (event) => {
      if (event.key === " ") {
        event.preventDefault();
        choice.click();
      }
    });
  });
  function resetZoom() {
    canvas.classList.remove("is-zoomed");
    zoomButton.setAttribute("aria-pressed", "false");
    zoomButton.textContent = "Zoom in";
    canvas.scrollTo(0, 0);
  }
  function renderViewer() {
    resetZoom();
    const entry = entries[selected];
    viewerImage.src = entry.src;
    viewerImage.alt = `${entry.title}. ${entry.caption}`;
    dialog.querySelector("#viewer-title").textContent = entry.title;
    dialog.querySelector(".viewer-caption").textContent = entry.caption;
    dialog.querySelector(".viewer-count").textContent =
      `${selected + 1} / ${entries.length}`;
    dialog.querySelector("[data-viewer-original]").href = entry.src;
    dialog.querySelector("[data-viewer-prev]").hidden = entries.length < 2;
    dialog.querySelector("[data-viewer-next]").hidden = entries.length < 2;
  }
  heroLinks.forEach((link) =>
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      opener = link;
      renderViewer();
      dialog.showModal();
      document.documentElement.classList.add("image-viewer-open");
      document.dispatchEvent(new Event("project-viewer:open"));
    }),
  );
  dialog
    .querySelector("[data-viewer-close]")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => {
    resetZoom();
    document.documentElement.classList.remove("image-viewer-open");
    document.dispatchEvent(new Event("project-viewer:close"));
    opener?.focus({ preventScroll: true });
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  });
  zoomButton.addEventListener("click", () => {
    const zoomed = canvas.classList.toggle("is-zoomed");
    viewerImage.style.setProperty(
      "--image-native-width",
      `${viewerImage.naturalWidth}px`,
    );
    zoomButton.setAttribute("aria-pressed", String(zoomed));
    zoomButton.textContent = zoomed ? "Fit to screen" : "Zoom in";
    if (!zoomed) canvas.scrollTo(0, 0);
  });
  function advance(direction) {
    selectScreenshot(selected + direction);
    renderViewer();
  }
  dialog
    .querySelector("[data-viewer-prev]")
    .addEventListener("click", () => advance(-1));
  dialog
    .querySelector("[data-viewer-next]")
    .addEventListener("click", () => advance(1));
  dialog.addEventListener("keydown", (event) => {
    if (canvas.classList.contains("is-zoomed")) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      advance(event.key === "ArrowLeft" ? -1 : 1);
    }
  });
})();

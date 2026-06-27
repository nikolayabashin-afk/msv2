const HERO_SECTION_SELECTOR = "#scrub";
const SCRUB_VIDEO_PATH = "/assets/top-scroll-animation-scrub.mp4";
const POSTER_PATH = "/assets/top-scroll-poster.jpg";

let activeController = null;
let isApplyingPatch = false;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getHeroText(section) {
  const existingCopy = section.querySelector(".hero-content > div:first-child");
  const existingMetrics = section.querySelector(".hero-metrics");
  const cue = section.querySelector(".scroll-cue")?.textContent?.trim() || "Scroll to evaluate";

  return {
    copy: existingCopy ? existingCopy.innerHTML : `
      <p class="eyebrow">Earth remote sensing / geoscience technology</p>
      <h1>See beneath the surface before the first cut</h1>
      <p class="hero-lede">MSS combines remote sensing, adaptive seismic evaluation, magnetic aerotomography, and geoscience expertise to reduce uncertainty, cost, and time.</p>
    `,
    metrics: existingMetrics ? existingMetrics.innerHTML : "",
    cue
  };
}

function patchHero() {
  const section = document.querySelector(HERO_SECTION_SELECTOR);
  if (!section || section.dataset.animationPatch === "ready" || isApplyingPatch) return;

  isApplyingPatch = true;

  if (activeController?.destroy) {
    activeController.destroy();
    activeController = null;
  }

  const { copy, metrics, cue } = getHeroText(section);

  section.dataset.animationPatch = "ready";
  section.classList.add("hero-scroll-upgraded");

  section.innerHTML = `
    <div class="hero-pin hero-upgraded-pin">
      <div class="hero-bg-glow" aria-hidden="true"></div>

      <div class="hero-upgraded-layout">
        <div class="hero-upgraded-copy">
          ${copy}
          <div class="hero-upgraded-actions">
            <a class="primary-button" href="/services.html">Explore MSS Smart Solutions</a>
            <a class="outline-button" href="/contacts.html">Contact experts</a>
          </div>
          ${metrics ? `<div class="hero-metrics hero-metrics-upgraded">${metrics}</div>` : ""}
        </div>

        <div class="hero-animation-card" aria-label="Scroll-controlled exploration animation">
          <video
            class="hero-scroll-video"
            muted
            playsinline
            preload="metadata"
            poster="${POSTER_PATH}"
            data-src="${SCRUB_VIDEO_PATH}">
          </video>
        </div>
      </div>

      <div class="scroll-cue">${cue}</div>
    </div>
  `;

  activeController = setupScrollVideo(section, section.querySelector(".hero-scroll-video"));
  isApplyingPatch = false;
}

function setupScrollVideo(section, video) {
  if (!section || !video) return null;

  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let duration = 0;
  let ticking = false;
  let destroyed = false;

  function loadVideo() {
    if (video.dataset.loaded) return;
    video.src = video.dataset.src;
    video.dataset.loaded = "true";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    try { video.load(); } catch {}
  }

  function updateDuration() {
    duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
  }

  function getProgress() {
    const rect = section.getBoundingClientRect();
    const scrollRange = Math.max(1, section.offsetHeight - window.innerHeight);
    return clamp(-rect.top / scrollRange, 0, 1);
  }

  function setFrame(progress) {
    updateDuration();
    if (!duration) return;
    const target = clamp(progress * duration, 0.02, Math.max(0.02, duration - 0.05));
    if (Math.abs(video.currentTime - target) > 0.016) {
      try { video.currentTime = target; } catch {}
    }
  }

  function update() {
    ticking = false;
    if (destroyed) return;
    setFrame(getProgress());
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  loadVideo();

  video.addEventListener("loadedmetadata", () => {
    updateDuration();
    setFrame(0);
    requestUpdate();
  });

  video.addEventListener("canplay", requestUpdate);
  video.addEventListener("seeked", requestUpdate);

  if (!reducedMotion) {
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    setTimeout(requestUpdate, 180);
    setTimeout(requestUpdate, 700);
  }

  requestUpdate();

  return {
    destroy() {
      destroyed = true;
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    }
  };
}

function watchForRerender() {
  const root = document.querySelector("#site-root");
  if (!root) return;

  const observer = new MutationObserver(() => {
    if (!isApplyingPatch) requestAnimationFrame(patchHero);
  });

  observer.observe(root, { childList: true, subtree: true });
}

window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    patchHero();
    watchForRerender();
  });
});

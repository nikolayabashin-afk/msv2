# MSS scroll animation patch

This ZIP is designed for the GitHub repository:

`nikolayabashin-afk/msv2`

## What it changes

- Adds a premium scroll-controlled MP4 animation at the top of the homepage.
- Keeps the current website structure and existing `src/app.js`.
- Adds a small patch script after the existing app loads.
- Replaces the original canvas/WebGL-style hero with a more reliable direct-video sticky scroll animation.
- Uses an optimized scrub-friendly video:
  - `assets/top-scroll-animation-scrub.mp4`
  - `assets/top-scroll-poster.jpg`

## Files in this ZIP

Upload these files into the repository, preserving folders:

- `index.html` — updated to load the patch CSS and JS
- `src/animation-patch.css`
- `src/animation-patch.js`
- `assets/top-scroll-animation-original.mp4`
- `assets/top-scroll-animation-scrub.mp4`
- `assets/top-scroll-poster.jpg`

## GitHub upload

In GitHub web interface:

1. Open the repository.
2. Upload/replace `index.html` at the root.
3. Upload `animation-patch.css` and `animation-patch.js` into `src/`.
4. Upload the three animation assets into `assets/`.
5. Commit changes.
6. Redeploy / wait for Vercel.

## How the animation works

The video is not played normally. JavaScript maps scroll progress to `video.currentTime`:

- top of section = first frame
- middle of section = middle of video
- bottom of section = last frame

The hero stays sticky while the page scrolls through a tall section.

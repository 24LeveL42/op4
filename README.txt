OPFOR / RED FORCE UMPIRE PLAYBOOK — CLEAN V1

This is a fresh GitHub Pages package designed to avoid the previous embedded-HTML/cache problems.

UPLOAD:
1. Unzip this package.
2. Open the folder Red_Force_Umpire_Playbook_CLEAN_V1.
3. Upload EVERYTHING inside that folder to the ROOT of the GitHub repository.
4. Do not rename the files.
5. Do not upload the ZIP itself.
6. Existing repository contents should be backed up before deleting the old site.

IMPORTANT:
- index.html is a small external-reference HTML file. The GLB models are separate files.
- The page uses Google's model-viewer library from its CDN for the 3D viewers.
- No service worker is registered by index.html, intentionally, to prevent stale GitHub Pages caches during development.
- The obstacle viewers have manual drag rotation and zoom; no auto-rotation.
- Closed Night obstacle file supplied in this rebuild is only 132 bytes and contains no usable geometry. Replace ONLY obstacle_closed_night.glb later when the real model is available; the page already points to that exact filename.
- The supplied LUV E01 trainer model is included from the earlier uploaded file.

Suggested test URL:
https://24level42.github.io/op4/?cleanv1=1

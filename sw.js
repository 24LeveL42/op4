// Optional PWA service worker for OPFOR / Red Force Umpire Playbook.
// The main page intentionally does not register this worker during development
// so GitHub Pages browser caching cannot mask content/model updates.
const CACHE = "rf-umpire-clean-v1";
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));

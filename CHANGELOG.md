# BFit Training Hub — Change Log

## 2026-11-04 — Premium and Elite coaching wording

- Updated the hub, Foundation, Athleticism, and Run Strong to identify two coaching plans: Premium and Elite.
- Removed single-plan claims and kept pricing off public pages; the questionnaire remains the destination for current terms.
- Left programming, workout builder logic, export functions, and exercise IDs intact.
- Gamer Fit still requires direct content inspection because the GitHub connector returned empty file content; its coaching copy was not changed in this pass.
- The Google Form's actual plan descriptions and its email/Zapier follow-up were not accessible for verification.


## 2026-11-04 — Launch audit and testing

- Fixed Foundation's placeholder logo navigation.
- Added clear page descriptions to Athleticism and Gamer Fit.
- Added GitHub Actions source checks and desktop/mobile Chromium smoke tests.
- Checked the Foundation workout builder, browser saving, HTML export, Gamer Fit text download, Athleticism program navigation, and Run Strong offline download.
- Added public-link status checks and a separate [launch audit](LAUNCH_AUDIT_2026-11-04.md) with remaining manual tests.
- Followed the verified library redirect and updated 171 exercise-library host references across the four guides, keeping exercise-ID fragments unchanged.

## 2026-11-04 — Repository cleanup and link consistency

- Replaced the old `Forbfit` README with setup instructions, an accurate repository map, the current free Pages URL, guide links, and an honest release-check checklist.
- Refreshed the hub's first-person introduction and added a low-pressure individual-coaching link.
- Updated all four guides' internal links so Foundation, Athleticism, Gamer Fit, Run Strong, and the hub use `https://vtrackstar.github.io/bfit/` URLs.
- Added canonical URL metadata to the hub and each guide.
- Added a sitemap, an accessible not-found page, and `.nojekyll` for straightforward static hosting.
- Preserved the existing exercise-library links on the separately hosted library; its canonical replacement destination has not been confirmed.
- Did not intentionally alter exercise programming, workout builders, exercise IDs, training prescriptions, or form destinations.

## Prior repository content

- **2026-11-04:** Initial hub and four interactive guides added to GitHub Pages from the November 2 editorial candidates; later first-person coaching and hub navigation updates.
- **Before GitHub:** The site and guide sources were developed across separate BFit guide projects. The files currently in this repository are the source for this GitHub Pages site. Older `CURRENT` or editorial handoff copies elsewhere are not automatically synced.

## Release verification boundary

GitHub Actions deployment success confirms a successful deployment of repository files; it does **not** guarantee a full interactive browser test. Check in particular: mobile menus, generated workouts, exported downloads, saved state after reload, first-workout completion, exercise-library links, and external questionnaire links.

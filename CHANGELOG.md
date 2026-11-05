# BFit Training Hub — Change Log

## 2026-11-04 — BFit Lounge invitation correction

- Added the BFit Lounge public invitation (`https://discord.gg/9yfqjvZPg`) to the hub and all four guides.
- Corrected earlier wording: the BFit Lounge is an open community; Premium and Elite coaching clients have a separate private client area.
- Confirmed all five repository HTML files contain clickable Instagram, TikTok, Twitch, and Discord links.
- Gamer Fit's large source was retrieved through GitHub blob access and its two-plan coaching copy was corrected.
- GitHub Pages published the current five-page commit successfully. The final smoke-test run was still in progress at the time of this note; external profile availability and signed-out Discord joining are not yet independently verified.

## 2026-11-04 — Public BFit Lounge and social-link consistency

- Published the previously supplied [BFit Lounge Discord invitation](https://discord.gg/9yfqjvZPg) alongside Instagram, TikTok, and Twitch on the hub and all four guides.
- Clarified that BFit Lounge is a public community, while Premium and Elite clients have a separate private coaching area.
- Updated Foundation's leftover private-only Discord sentence and corrected the README and launch audit.
- Preserved workout generators, exercise IDs, prescriptions, and the existing coaching inquiry form.
- All five source files contain all four links; signed-out external click-through and post-change automated browser checks are separate release verifications.

## 2026-11-04 — Social links across the hub and guides

- Added Instagram (`@_trainwithbfit`), TikTok (`@_trainwithbfit`), and Twitch (`gamewithbfit`) as clickable links on the hub, Foundation, Athleticism, Gamer Fit, and Run Strong.
- Made the links easier to find: a Connect section on the hub, guide coaching/footer links, and a Foundation sidebar shortcut.
- Initially no invite URL was available in the repository; this was superseded when the public BFit Lounge invite was supplied and linked across all five pages.
- Replaced Gamer Fit's outdated single-coaching-plan copy with Premium and Elite; programming and workbook logic were not intentionally changed.
- Checked that each of the five HTML sources contains all three profile destinations. External account availability and live mobile rendering still require verification.


## 2026-11-04 — Premium and Elite coaching wording

- Updated the hub, Foundation, Athleticism, and Run Strong to identify two coaching plans: Premium and Elite.
- Removed single-plan claims and kept pricing off public pages; the questionnaire remains the destination for current terms.
- Left programming, workout builder logic, export functions, and exercise IDs intact.
- Gamer Fit initially required separate Git blob access; it was subsequently retrieved and its Premium/Elite copy was updated.
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

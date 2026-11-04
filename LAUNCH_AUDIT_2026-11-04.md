# BFit Training Hub — launch audit
**Date:** November 4, 2026  
**Site:** https://vtrackstar.github.io/bfit/  
**Source:** https://github.com/vtrackstar/bfit

## What I checked

I audited the hub and all four current guide HTML files in `main`. The source checker runs automatically in [GitHub Actions](https://github.com/vtrackstar/bfit/actions) whenever the repository is updated.

### Automated results

- **Static source:** 5 pages, 10 executable inline JavaScript blocks, 3 embedded JSON blocks, 1,657 links, and 1,433 static hash anchors checked in the latest source-only run.
- **Source failures:** none in the passing CI run. No duplicate *static HTML* IDs, missing static anchor targets, broken in-repository guide paths, invalid embedded JSON, or JavaScript syntax errors detected.
- **Desktop/mobile:** all 5 pages loaded successfully at 1366px and 390px widths in headless Chromium (10 checks), with no uncaught JavaScript errors or reported significant whole-page horizontal overflow.
- **Foundation:** created a workout using a 2-day bodyweight setup, saved browser choices, opened the export dialog, downloaded the HTML workout file, and reloaded the saved plan.
- **Athleticism:** opened program-building and workout views; verified all 4 program types have 3-day/4-day, four-week schedules, with no missing main workout fields or negative/nonfinite load counts in a separate data inspection.
- **Gamer Fit:** followed the first-workout entry point and downloaded a workout text file.
- **Run Strong:** downloaded the offline HTML guide.
- **Visual reference:** desktop and mobile screenshots from CI are saved in the `bfit-qa-screenshots` artifact of the [browser test run](https://github.com/vtrackstar/bfit/actions/runs/41883774260).

### Fixes made

- Fixed the Foundation logo's placeholder `href="#"` and linked it clearly back to the BFit hub.
- Added missing search/social preview metadata to Athleticism and Gamer Fit.
- Added source, browser, and core-interaction smoke tests. These run on pushes to `main`, and screenshots can be downloaded from the Actions test artifacts.
- The preceding repository cleanup corrected old cross-guide URLs to the current `/bfit/` site paths and documented the repository.

## Still needing confirmation or deeper testing

1. **Exercise library:** The four guides still link to `bfit-exercise-movement-library.stormy-lamp-8931.chatgpt.site`, a separately hosted project. This audit did **not** replace its URLs because the future canonical host and every exercise-ID destination have not been verified. Confirm signed-out access and movement variations before migration.
2. **Coaching form:** Test the form as a visitor, including confirmation emails and Zapier routing. A working URL does not establish that submissions and enrollment follow-ups work.
3. **Exercise demonstrations and reference URLs:** Test external videos, approved source labels, and exercise permalinks separately. A successful site build does not verify third-party content.
4. **Full interaction coverage:** Printing/saving PDF, Athleticism backup import/export, every programming path, every Gamer Fit tool, complex keyboard/screen-reader paths, and different browsers/devices have not all been tested.
5. **Mobile usability:** The 390px screenshots load without page-wide overflow. Gamer Fit has much denser long-form reading than the other guides, so evaluate its navigation and reading flow with actual beginner visitors.
6. **User-data safety:** Browser saved state and exported files need testing with deliberately malformed/older backups and in private-browsing environments. The current smoke tests use temporary browser profiles and do not change visitors' records.
7. **Canonical host:** The free GitHub Pages URL is the current site address. No paid custom domain has been configured.

## Suggested release decision

**Technically usable for a limited soft launch.** Automated source parsing and the main first-workout/download paths passed. Before actively promoting it, personally test the external exercise library, the coaching form, and your most important mobile flows in a normal signed-out browser.

The results above are limited to the exact tests described. A successful GitHub Pages deployment confirms the files were published, not that every guide feature or external destination has been verified.

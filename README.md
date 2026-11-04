# BFit Training Hub

**Live website:** https://vtrackstar.github.io/bfit/  
**Repository:** https://github.com/vtrackstar/bfit  
**Hosting:** GitHub Pages (public `main` branch, repository root)

BFit is a collection of four free, browser-based training guides. Each guide is a standalone HTML page with its own styling and interactions. The hub provides a starting point and links between guides.

## Guides

| Guide | Live link | Source |
| --- | --- | --- |
| Foundation Training | [Open Foundation](https://vtrackstar.github.io/bfit/guides/foundation/) | [`guides/foundation/index.html`](guides/foundation/index.html) |
| Athleticism | [Open Athleticism](https://vtrackstar.github.io/bfit/guides/athleticism/) | [`guides/athleticism/index.html`](guides/athleticism/index.html) |
| Gamer Fit | [Open Gamer Fit](https://vtrackstar.github.io/bfit/guides/gamer-fit/) | [`guides/gamer-fit/index.html`](guides/gamer-fit/index.html) |
| Run Strong | [Open Run Strong](https://vtrackstar.github.io/bfit/guides/run-strong/) | [`guides/run-strong/index.html`](guides/run-strong/index.html) |

The hub homepage is [`index.html`](index.html).

## Repository structure

```text
/
├── index.html                     # BFit hub
├── README.md                      # Project overview and update instructions
├── CHANGELOG.md                   # Changes in this GitHub repository
├── 404.html                       # Not-found page
├── sitemap.xml                    # Site URLs for search engines
├── .nojekyll                      # Serve the project as static HTML
└── guides/
    ├── foundation/index.html
    ├── athleticism/index.html
    ├── gamer-fit/index.html
    └── run-strong/index.html
```

## How updates work

1. Update the appropriate HTML file in this repository. Keep its existing exercise data, IDs, workout logic, form actions, and export behavior intact unless those changes are explicitly planned.
2. Use the GitHub Pages addresses above for links between guides; this keeps navigation usable even from downloaded standalone HTML files. The hub is always https://vtrackstar.github.io/bfit/.
3. Preserve approved exercise-library links unless a verified replacement host exists. The exercise library is a separate site and is **not included in this repository**.
4. Commit to `main`. GitHub Pages builds and deploys automatically using the repository's current Pages settings.
5. Inspect [GitHub Actions](https://github.com/vtrackstar/bfit/actions) for deployment status; after a successful deployment, manually check desktop/mobile navigation, guide controls, saved state after reload, and generated downloads.

### Local preview

Download or clone the repository. For static navigation you can open the HTML files directly; for more realistic behavior (especially browser storage and exports), run a local HTTP server from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`. Offline previews do not guarantee hosted behavior, and external exercise links require internet access.

## Coaching and content notes

- Coaching application: https://forms.gle/f11PGA7PCUKaxrgq9. Pricing/enrollment details are provided by the questionnaire, not by this public repository.
- The four guide sources were brought into this repository from November 2, 2026 editorial candidates, with later first-person coaching and hub-navigation edits.
- These are free educational resources, not individualized medical or rehabilitation plans.
- Existing published HTML may still need full browser QA. A successful GitHub Pages deployment confirms publishing, **not** every interactive feature.
- This repository does not currently manage or purchase a custom domain. Its canonical free address is https://vtrackstar.github.io/bfit/.

## Before promoting a release

Check each guide's first-workout path; major buttons and back navigation; mobile viewports; exercise library links and variation accuracy; storage after refresh; export/print; and links to the coaching questionnaire. Keep launch/QA claims limited to tests actually performed.

If you spot a broken link or content issue, use the [GitHub Issues](https://github.com/vtrackstar/bfit/issues) tab or keep a note in [`CHANGELOG.md`](CHANGELOG.md).

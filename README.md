# BFit Training Hub

**Website:** https://vtrackstar.github.io/bfit/

I built BFit to make training a little easier to figure out. A lot of people want to get stronger, move better, or get back into a routine, but don't know where to start or how to put a week of workouts together.

These guides are my way of sharing what I've learned from coaching. You can use them on your own, whether you're brand new to training or just looking for a better way to organize what you're already doing.

## Pick a guide

- **[Foundation Training](https://vtrackstar.github.io/bfit/guides/foundation/)** — Start here if you want to lift, build a routine, or make a workout that fits your time and equipment.
- **[Athleticism](https://vtrackstar.github.io/bfit/guides/athleticism/)** — For sprinting, jumping, changing direction, and getting more out of your sport.
- **[Gamer Fit](https://vtrackstar.github.io/bfit/guides/gamer-fit/)** — Movement, exercise, and everyday habits for people who spend a lot of time gaming or sitting at a screen.
- **[Run Strong](https://vtrackstar.github.io/bfit/guides/run-strong/)** — Learn what different running workouts are for and how to fit them into your week.

You don't have to read everything in order. Find the guide that matches what you want to work on, try a session, and come back to the explanations whenever you need them.

## About the coaching

I'm a strength and conditioning coach, and I like helping people understand *why* they're doing something instead of just handing them a list of exercises.

The guides are free. For individual coaching, I offer two options: **Premium** for personalized programming with a lighter feedback schedule, and **Elite** for people who want more frequent reviews and support. You can [compare the plans in the coaching questionnaire](https://forms.gle/f11PGA7PCUKaxrgq9); that's where I keep current pricing and full inclusions. Filling it out doesn't commit you to anything.

## Find me online

- [Instagram](https://www.instagram.com/_trainwithbfit/) — @_trainwithbfit
- [TikTok](https://www.tiktok.com/@_trainwithbfit) — @_trainwithbfit
- [Twitch](https://www.twitch.tv/gamewithbfit) — gamewithbfit

I share Discord access privately with coaching clients during onboarding, rather than posting an invitation link here.

## What's in this repo?

This is the code for the website and the four guides. It's a simple static site hosted through GitHub Pages, so there's no separate app or server to run.

- [`index.html`](index.html) — the main BFit homepage
- [`guides/foundation/index.html`](guides/foundation/index.html) — Foundation
- [`guides/athleticism/index.html`](guides/athleticism/index.html) — Athleticism
- [`guides/gamer-fit/index.html`](guides/gamer-fit/index.html) — Gamer Fit
- [`guides/run-strong/index.html`](guides/run-strong/index.html) — Run Strong
- [`CHANGELOG.md`](CHANGELOG.md) — notes on site updates
- [`LAUNCH_AUDIT_2026-11-04.md`](LAUNCH_AUDIT_2026-11-04.md) — what's been tested and what still needs a closer look

The exercise library is hosted separately. Some exercises in these guides link out to it.

### Making changes

Most edits can be made directly in the HTML files. Just be careful with the workout builders: the exercise lists, training calculations, and interactive features are part of the page code, not separate files.

Changes pushed to `main` are published through GitHub Pages. You can check whether a deployment finished on the [Actions page](https://github.com/vtrackstar/bfit/actions).

I also added automatic checks for the page code and basic desktop/mobile workout flows. They're in `scripts/` and run through GitHub Actions whenever I update the site. They're useful for catching mistakes, but I still check the experience in a browser too.

To preview the website on your own computer, clone or download the repo, open a terminal in the folder, and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

I still recommend checking the pages in a real browser after changes, especially on a phone. A successful deployment doesn't necessarily mean every workout button or download works as intended.

If something looks wrong or a link is broken, you can [open an issue](https://github.com/vtrackstar/bfit/issues).

---

*Thanks for checking out BFit. I hope you find something here that helps you train with a little more confidence.*

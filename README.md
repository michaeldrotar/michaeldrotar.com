# michaeldrotar.com

> My personal website

## Tabby

[Projects](https://www.michaeldrotar.com/projects) lists Tabby with links to its website, GitHub repository, and Chrome Web Store listing. Its marketing pages are hosted by this site's Vercel deployment:

- [Companion](https://www.michaeldrotar.com/projects/tabby/companion)
- [Focus](https://www.michaeldrotar.com/projects/tabby/focus)
- [Playground](https://www.michaeldrotar.com/projects/tabby/playground)

The [Tabby repository](https://github.com/michaeldrotar/tabby/tree/main/pages/marketing) owns the marketing source and demo tests. Build it with `pnpm -F @extension/marketing build --base /projects/tabby/`, then replace this repository's `public/projects/tabby/` directory with that build's contents. The routes serve one static export, with the pathname choosing the design. Marketing styles and React run independently from the personal website.

Run `npm ci`, `npm run dev -- --port 5183`, and open [the local Projects page](http://localhost:5183/projects). Check Tabby's links and open each nested route directly; switch designs using the footer, search the sample data, try a batch action, and play the tour video. Run `npm test -- --runInBand --coverage=false` and `npm run build` before publishing.

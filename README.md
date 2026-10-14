# michaeldrotar.com

> My personal website

## Tabby

[Projects](https://www.michaeldrotar.com/projects) lists Tabby with links to [its website](https://www.gettabby.org/), [GitHub repository](https://github.com/michaeldrotar/tabby), and [Chrome Web Store listing](https://chromewebstore.google.com/detail/tabby/jjkakicjobpalhifpeaggabpgdllmmob).

The [Tabby repository](https://github.com/michaeldrotar/tabby/tree/main/pages/marketing) owns the marketing site and demo tests. Its Vercel project deploys the marketing app from `main`. The portfolio's `/projects/tabby` route redirects to the website, and the `/companion`, `/focus`, and `/playground` routes beneath it redirect to the corresponding designs.

Run `npm ci`, `npm run dev -- --port 5183`, and open [the local Projects page](http://localhost:5183/projects). Check Tabby's three links and the redirects to the marketing site. Run `npm test -- --runInBand --coverage=false` and `npm run build` before publishing.

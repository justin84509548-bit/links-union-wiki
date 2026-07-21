# LINKS-UNION S.H.I.E.L.D. Wiki

The LINKS-UNION Wiki presents S.H.I.E.L.D., a pH-responsive hydrogel concept for protecting enamel around orthodontic braces. The current website contains the verified project mechanism and clearly marked placeholders for evidence that the team is still collecting.

Live website: [shield-site.vercel.app](https://shield-site.vercel.app)

## Local development

```bash
pnpm install
pnpm dev
```

Verify content metadata and the production build:

```bash
pnpm run validate:content
pnpm run build
```

## Contributing Wiki content

Each group submits Markdown under `content/` through a pull request. Content moves through `collecting`, `draft`, `review` and `approved`. A teacher reviews scientific and ethical claims before Justin performs the final integration and merges to `main`.

Read [CONTRIBUTING.md](CONTRIBUTING.md) and copy [content/_template.md](content/_template.md) when starting a submission.

Unverified, draft or private material must not be presented as completed results.

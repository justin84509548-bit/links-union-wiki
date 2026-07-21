# LINKS-UNION Wiki contribution workflow

The public website stays deployable while the team collects evidence. New content is submitted as Markdown and is not considered publishable until it has passed teacher review.

## Standard workflow

1. Create a branch named `group/topic`, for example `academic-wet-lab/protein-expression`.
2. Copy `content/_template.md` into the correct group folder.
3. Add text, figures, raw-data links, captions, sources and contributor names.
4. Keep `status: draft` and `publish: false` while editing.
5. Open a pull request to `main` and complete every section of the PR form.
6. After internal checking, change the document to `status: review` and request the teacher's review.
7. After the teacher approves, set `status: approved`, `publish: true`, and fill in `reviewer` and `approval_date`.
8. Justin performs the final integration check and merges the pull request. Vercel then deploys `main`.

Do not merge unfinished, unverified or confidential material. A green automated check confirms file structure and build integrity; it does not replace scientific or ethical review.

## Group folders

- `content/academic/`: project description, design, experiments, results, modeling, safety, parts, notebook and references.
- `content/hp/`: human practices, stakeholder work, education, inclusion, ethics and impact evidence.
- `content/business/`: implementation, entrepreneurship, market research, partnerships and communication evidence.
- `content/art/`: illustrations, diagrams, photography, captions, accessibility text, team presentation and attribution records.
- `content/shared/`: team-wide facts, acknowledgements, awards, joint timelines and material owned by more than one group.

## Assets

Store web-ready images in `public/content/<group>/<topic>/`. Keep editable source files and large raw datasets in the team's approved shared storage, then put the link in the Markdown document. Never commit personal contact details, private interview recordings or identifiable consent documents.

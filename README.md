# Qi Ding — academic website

Source for [dingqi01.github.io](https://dingqi01.github.io/), an independent academic website for Qi Ding.

This site is separate from [ding-qi.top](https://ding-qi.top/). It does not share that site's deployment, DNS, server, or content architecture.

## Site structure

- `index.html`: profile, research interests, selected publications, news, and background
- `research.html`: detailed research areas and methods
- `publications.html`: verified outputs grouped by publication status
- `cv.html`: academic CV summary, download, and preview
- `_data/publications.yml`: publication metadata, status, links, and image descriptions
- `_data/research.yml`: research areas and methods
- `_data/news.yml`: dated homepage updates
- `_data/experience.yml`: education, research experience, and recognition
- `assets/images/publications/`: publication-specific research figures
- `ASSET_SOURCES.md`: provenance record for public research images

## Add or update a publication

Edit `_data/publications.yml`. Use one of these groups:

- `published`: peer-reviewed journal or conference papers
- `ongoing`: preprints and manuscripts
- `presentations`: talks and conference presentations
- `reports`: report contributions

Always verify the title, author order, status, venue, year, and public links against a publisher page, DOI record, preprint page, final paper, or other authoritative source. Do not describe a preprint or working paper as published.

For an image, add `image` and a meaningful `image_alt`. Record its source and transformation in `ASSET_SOURCES.md`. A text-only row is preferable to an unrelated or decorative placeholder.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.

## Deployment and rollback

Pushes to `main` build and deploy through `.github/workflows/pages.yml`. Pull requests and manual runs on non-main branches build an artifact without deploying it.

The pre-redesign site is preserved by the annotated tag `v1.0.0-mvp`. To inspect it without changing the current branch:

```bash
git worktree add ../dingqi01-v1 v1.0.0-mvp
```

Do not publish phone numbers, credentials, server details, private repository links, internal file paths, or non-public research data.

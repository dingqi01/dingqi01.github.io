# Qi Ding — academic website

Source for [dingqi01.github.io](https://dingqi01.github.io/), an independent academic website for Qi Ding.

This site is separate from [ding-qi.top](https://ding-qi.top/). It does not share that site's deployment, DNS, server, or content architecture.

## Site structure

- `index.html`: profile, research interests, selected publications, news, and background
- `research.html`: connected research programme, current questions, and concrete analytical toolkit
- `publications.html`: verified outputs grouped by publication status
- `cv.html`: education, selected projects, professional experience, honors, and the single maintained CV
- `_data/publications.yml`: publication metadata, status, links, and image descriptions
- `_data/projects.yml`: selected research projects, roles, periods, methods, and public links
- `_data/research.yml`: homepage research areas, the three-stage programme, current research, and toolkit
- `_data/news.yml`: dated homepage updates
- `_data/experience.yml`: education, research and professional experience, and recognition
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

## Add or update a project

Edit `_data/projects.yml`. Keep the public list selective: every entry should have a verified period, a conservative role description, a concise statement of Qi Ding's own contribution, and a clear public-disclosure boundary. Add an external link only when it points to an authoritative public project or output page.

The downloadable CV is built from `assets/cv/qi-ding-cv.tex`. When project facts change, update the YAML, the TeX source, and the PDF together so that the HTML and document do not diverge.

The site maintains one CV only: a two-page English academic CV. Do not create separate one-page, full, Chinese, or English variants in this repository. The web CV provides the readable page view, while the header offers the maintained PDF as a direct download; the PDF is not duplicated as page previews.

## Update current research

Edit `_data/research.yml`. An ongoing item may state the research question, current status, and methods, but it must not publish non-public numerical results or present a model-development stage as a completed study. Move a result claim to the publication record only after it has an appropriate public source.

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

# Qi Ding — GitHub Pages

Source for [dingqi01.github.io](https://dingqi01.github.io/), an independent personal research website.

This site is separate from [ding-qi.top](https://ding-qi.top/). It does not share that site's deployment, DNS, or server configuration.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.

## Content map

- `_data/publications.yml`: publications, links, status, and selected-work flags
- `_data/research.yml`: research themes
- `_data/news.yml`: homepage updates
- `_data/experience.yml`: education, research experience, and recognition
- `assets/images/publications/`: original publication visuals
- `assets/cv/qi-ding-cv.pdf`: public CV

## Add a publication

Add one record to `_data/publications.yml`. Required fields are `id`, `year`, `type`, `label`, `title`, `authors`, and `venue`. Optional fields include `selected`, `status`, `abstract`, `image`, and `links`.

Do not add private repositories, unpublished data, server details, credentials, phone numbers, or internal research materials.

## Deployment

Pushes to `main` run `.github/workflows/pages.yml`. GitHub Pages publishes the generated `_site` artifact.


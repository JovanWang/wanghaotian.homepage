# Haotian Wang Homepage

Personal academic homepage for Haotian Wang, based on the Academic Pages / Minimal Mistakes Jekyll template.

## Main Content

- Home page: `_pages/about.md`
- Publications: `_pages/publications.html`
- News: `_pages/talks.html`
- CV: `_pages/cv.md`
- Site configuration: `_config.yml`
- Custom styling: `assets/css/main.scss`
- Homepage effects: `assets/js/homepage-effects.js`
- Visitor globe include: `_includes/visitor-globe.html`

## Local Preview

This site is a Jekyll project. A typical local preview workflow is:

```bash
bundle install
bundle exec jekyll serve
```

Then open:

```text
http://127.0.0.1:4000/
```

If Ruby/Jekyll is not installed locally, use the included Docker setup:

```bash
docker compose build
docker compose up
```

## Deployment

The repository is configured for GitHub Pages-style deployment. Before publishing, verify:

- The official job title and affiliation are current.
- Publication metadata matches Google Scholar / DBLP / publisher pages.
- No private contact information or unpublished project details are added.

## Visitor Globe

The homepage includes a Visitors section. To activate a real MapMyVisitors map:

1. Register this site at MapMyVisitors.
2. Copy the `d=...` key from its `map.js` snippet.
3. Paste it into `_config.yml`:

```yaml
visitors:
  mapmyvisitors_id: "YOUR_KEY"
  mapmyvisitors_color: "ffffff"
  mapmyvisitors_width: "a"
  mapmyvisitors_stats_url: "https://mapmyvisitors.com/web/YOUR_ID"
  globe_width: 220
  globe_height: 220
```

`clustrmaps_id` is still supported as a fallback if you switch providers later.

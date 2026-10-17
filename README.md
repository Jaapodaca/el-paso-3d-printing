# El Paso 3D Printing website

Single-page bilingual (English/Spanish) site. Plain HTML, CSS, and JavaScript, no build step.

```
index.html        all content, both languages side by side (lang="en" / lang="es")
css/styles.css    all styles; colors and fonts are variables at the top
js/main.js        language toggle, scroll effects, photo lightbox, quote form
images/           optimized photos (WebP), og-image.jpg for link previews, favicon.svg
```

## Preview locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080. Opening `index.html` directly also works, but the quote form can only send from a real host.

## Fill in the placeholders

Every placeholder is wrapped in `class="ph"` and shows on the page with a dashed outline. Search `index.html` for `ph"` (and `PLACEHOLDER`) to find them all. Remember to fill both the English and the Spanish version.

## Quote form

Works on Netlify as-is through Netlify Forms (`data-netlify="true"`): deploy, turn on form detection under **Forms**, then add an email notification under **Forms > Submission notifications**. Limit: 8 MB per submission.

On another host (GitHub Pages, etc.), set the form's `action` to your form service URL and remove `data-netlify="true"`.

## Edit text

Each sentence appears twice in `index.html`, English then Spanish, right next to each other. Change both. Image descriptions live in `alt` (English) and `data-es-alt` (Spanish).

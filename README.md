# Academic Research Portfolio — GitHub Pages Starter

A bright, responsive, English-language academic portfolio starter for graduate-school applications and research/technical job applications. It uses plain HTML, CSS, and JavaScript. All identifying details are placeholders.

## Included sections

- Hero / research snapshot
- About me
- Research interests
- Selected research and technical projects
- Publications and presentations
- Experience and education
- Contact links

## Files to edit

### `index.html` — content and links
Replace the placeholder text such as `YOUR NAME`, `[RESEARCH AREA]`, `[Project title]`, `[YEAR]`, and `YOUR_USERNAME`. Edit or remove any section that does not apply to you.

Useful areas:
- `<title>` and meta description in `<head>`
- Hero introduction and research snapshot
- Research interest cards
- Project entries and source/report links
- Publications and presentations
- Experience / education timeline
- Contact links

### `styles.css` — visual design
Change CSS variables near the top for colors and layout:
- `--bg`: page background
- `--paper`: cards
- `--soft`: section background
- `--ink`: main text
- `--accent`: accent color
- `--container`: maximum content width

Responsive layouts are handled in the media queries near the bottom.

### `script.js` — small interactions
Controls the mobile navigation and updates the footer year automatically. You usually do not need to edit this file.

## Before publishing

1. Search all files for `YOUR_`, square-bracketed placeholders, `href="#"`, and sample text.
2. Remove sections and contact channels you do not want to publish.
3. Make sure every public link points to the intended destination.
4. Do not upload passwords, API keys, private keys, private documents, or personal information you do not want public.
5. If you add a CV PDF, check that it contains no private phone number, home address, or other details you do not wish to disclose.

## Publish to GitHub Pages

1. Sign in to GitHub and create a new repository named exactly `YOUR_USERNAME.github.io`, replacing `YOUR_USERNAME` with your GitHub username.
2. Upload the four files (`index.html`, `styles.css`, `script.js`, `README.md`) to the repository root. Do not place them inside an extra nested folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then click **Save**.
6. Wait for the deployment to finish. Visit `https://YOUR_USERNAME.github.io` (replace the placeholder with your username).

The first deployment can take several minutes. If the page does not appear, check the Pages deployment status and ensure `index.html` is at the repository root.

Official guide: https://docs.github.com/en/pages/quickstart

## Local preview

Open `index.html` in your browser, or use VS Code with a static preview extension. No build step or package installation is required.

## Academic portfolio tips

- Prefer a few strong projects over a long, unfiltered list.
- Explain the research question, method, your own contribution, and outcome for each project.
- Clearly distinguish published work from work in progress.
- Only link publicly shareable reports, posters, code, or CV files.

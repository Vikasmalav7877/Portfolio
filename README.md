# Portfolio

Run locally with `npm install` and `npm run dev`. Build with `npm run build`.

The contact form uses the public Formspree endpoint in `.env.production`. To
override it locally, copy `.env.example` to `.env.local` and set your endpoint.
Vite includes `VITE_` variables in the browser bundle, so never put secrets in
them. Verify the destination email in Formspree before testing submissions.

For GitHub Pages, set the repository's Pages source to **GitHub Actions**. The
deployment workflow builds and publishes the site on pushes to `main`, or can
be run manually from the Actions tab. Push these files to GitHub before
enabling or running the workflow.

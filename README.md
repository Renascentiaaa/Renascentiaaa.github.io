# Ruixiang (Kevin) Wu — Personal Website

Academic website hosted with GitHub Pages at https://renascentiaaa.github.io/.

## Edit the website

- `index.html`: biography, research, projects, and contact information.
- `styles.css`: colors, typography, spacing, and responsive layout.
- `script.js`: navigation highlighting and the copyright year.
- `assets/Ruixiang_Wu_CV.pdf`: current CV. Replace this file using the same name to preserve the website links.
- `assets/CS554_Project.pdf`: parallel randomized pivoted Cholesky project report.
- `assets/Coordinate_Descent_Final_Project.pdf`: graduate Convex Optimization final project report.

You can edit text files directly on GitHub using the pencil button, or edit a local clone and push your changes. To replace a PDF, use Add file → Upload files inside the assets folder and retain the existing filename.

## Publish updates

In Settings → Pages, use Deploy from a branch, select `main`, and select `/ (root)`. Commits to `main` automatically update the public website. Check the Actions tab for deployment progress.

The `.nojekyll` file lets GitHub serve the existing HTML, CSS, JavaScript, and PDF files directly. No build tools or custom domain are required.

## Preview locally

From this repository folder, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

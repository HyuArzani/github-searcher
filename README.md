# GitHub User Search App

A simple web application that allows users to search for GitHub profiles and view a list of their public repositories.

Built with Vite, TypeScript, and ESLint, and deployed with GitHub Pages.

## Features

- Search for any GitHub user
- View a list of the user’s public repositories

## Scripts

| Script           | Description                                 |
| ---------------- | ------------------------------------------- |
| `yarn dev`       | Start the development server                |
| `yarn build`     | Compile TypeScript and build for production |
| `yarn lint`      | Run ESLint on the codebase                  |
| `yarn preview`   | Preview the production build locally        |
| `yarn predeploy` | Build the project before deployment         |
| `yarn deploy`    | Deploy `dist/` folder to GitHub Pages       |

## Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/HyuArzani/github-searcher.git
   cd github-searcher
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:5173/github-searcher
   ```

## Deploying to GitHub Pages

To deploy the app:

```bash
yarn deploy
```

Make sure your GitHub repository is configured to serve from the `gh-pages` branch.

Demo

You can access the live demo at:

https://hyuarzani.github.io/github-searcher/

## License

This project is licensed under the MIT License.

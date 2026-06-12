# jacobbarazoto-portfolio

A personal portfolio / "trophy room" — a single place for the things I've built.
React + TypeScript + Vite, deployed to Firebase Hosting.

## Add a project

Everything is data-driven. To add a project, append an entry to the `projects`
array in [`src/data/site.ts`](src/data/site.ts) (newest first). Profile info and
links live in the same file.

## Run locally

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Deploy to Firebase Hosting

One-time:

```sh
firebase login
# wire this folder to its Firebase project (create one in the console first):
firebase use --add        # pick the project, alias it "default"
```

Then:

```sh
npm run build && firebase deploy --only hosting
```

# Browse & Sweep

A full-featured Google Drive manager that lets you browse every file in your Drive like a local file explorer, then clean up duplicates, large files, and clutter — all in one place.

## Features (MVP)

- **Google OAuth login** — sign in with your Google account
- **File browser** — browse Drive files in a tree/explorer view
- **Duplicate scanner** — find duplicate files by name, size, and content hash
- **Large file finder** — surface files over a configurable size threshold
- **Cleanup actions** — trash/delete selected files (paid feature)
- **Freemium model** — scanning and browsing are free; executing cleanup actions requires a paid pass

## Tech Stack

- React 19 + Vite + TypeScript
- React Router (routing)
- Tailwind CSS v4 (styling, via `@tailwindcss/vite`)
- Google Drive API v3 + Google OAuth 2.0 (integration coming next)

## Project Structure

```
src/
  api/         # API layer (Google Drive integration)
  components/  # UI components
  hooks/       # custom hooks
  pages/       # page components (Login, Dashboard)
server/        # backend/server code
```

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run lint     # oxlint
```

## Status

This is the initial scaffold: routing, Tailwind, and placeholder Login + Dashboard pages are in place. Google Drive integration and the cleanup engine are next.

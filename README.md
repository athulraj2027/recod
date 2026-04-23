# Riverside Clone

A full-stack Riverside-style recording app built as a monorepo. This project combines a Next.js frontend with an Express backend for local webcam recording, upload, and playback of `.webm` files.

> Current snapshot is based on the repository state as of April 23, 2026.

## Project Overview

- Monorepo managed with `turbo`
- Frontend: `apps/frontend` using Next.js 16, React 19, Tailwind CSS, and shadcn/ui components
- Backend: `apps/http` using Express 5 and TypeScript with `tsx watch`
- Local upload storage under `apps/http/uploads`
- Video streaming endpoint available at `/uploads/:filename`

## What is implemented

### Frontend

- Landing page with hero, features, and pricing sections
- Studio recording page (`app/(mvp)/studio`) that: 
  - accesses camera and microphone
  - renders live preview
  - shows recording controls
  - uploads recorded `.webm` files to the backend
- Recordings vault page (`app/(mvp)/recordings`) that: 
  - fetches recordings from the backend
  - displays videos in cards
  - supports video preview in a modal
  - has UI for export/delete actions (delete is currently UI-only)
- UI components and layout patterns using `@/components` and `@/components/ui`
- Basic auth pages exist under `app/(auth)` for sign in, signup, forgot password, and verify OTP

### Backend

- Express server with CORS enabled for `http://localhost:3000`
- API routes under `/api/v1`
  - `POST /api/upload` to receive a single uploaded video file (`file` field)
  - `GET /api/recordings` to list stored recordings from `uploads`
  - `GET /api/recordings/:id` route stub exists but is not implemented
- Static streaming route for uploaded video files: `/uploads/:filename`
- Video uploads are saved as a unique `.webm` file in `apps/http/uploads`

## Repo Structure

- `apps/frontend`: Next.js frontend application
  - `app/`: Next.js app router pages and layouts
  - `components/`: reusable UI and landing components
  - `hooks/`: custom hooks like recorder logic
  - `services/`: API service helpers
- `apps/http`: Express backend application
  - `src/routes/v1`: API route definitions
  - `src/controllers`: upload and recording controllers
  - `src/lib`: upload middleware config
  - `src/middlewares`: error handling middleware
  - `uploads/`: persisted `.webm` files
- `packages/`: shared UI packages and utilities

## Setup

### Requirements

- Node.js >= 18
- npm 11.8.0 (project uses `packageManager` pinned in the root)

### Install dependencies

From the repository root:

```bash
npm install
```

### Run the project

- Start both apps via Turbo:

```bash
npm run dev
```

This should start:
- frontend on `http://localhost:3000`
- backend on the port configured in `apps/http/.env` or `PORT` environment variable

If you want to run apps individually:

```bash
cd apps/frontend
npm run dev
```

```bash
cd apps/http
npm run dev
```

## Backend Environment

Create an `.env` file inside `apps/http` with at least:

```env
PORT=4000
```

## Useful Scripts

From the repo root:

- `npm run dev` — run Turbo development pipeline
- `npm run build` — run Turbo build pipeline
- `npm run lint` — run Turbo lint pipeline
- `npm run format` — format workspace files with Prettier
- `npm run check-types` — run Turbo type checks

From `apps/frontend`:

- `npm run dev` — start Next.js development server
- `npm run build` — build frontend for production
- `npm run start` — run Next.js production server
- `npm run lint` — run ESLint

From `apps/http`:

- `npm run dev` — start backend with `tsx watch`

## Current Limitations / TODOs

- `GET /api/recordings/:id` is stubbed and not implemented
- Auth UI exists, but real authentication backend is not wired
- Delete/export actions in the recordings UI are currently only placeholders
- No production deployment configuration is included yet
- Upload responses do not currently return the saved file URL
- There is no database; recordings are stored in the local filesystem only

## Notes

- Backend video streaming uses HTTP range requests for playback compatibility
- Uploaded files are saved as `.webm`
- The frontend expects backend API to be available at `http://localhost:4000`

## Recommended next steps

1. implement `GET /api/recordings/:id`
2. return upload metadata and generated file URLs from the upload endpoint
3. add real auth and session management
4. add delete recording support in backend and frontend
5. add deployment and environment-specific configuration

---

If you'd like, I can also add a `CONTRIBUTING` section, API reference, or a more detailed feature roadmap.
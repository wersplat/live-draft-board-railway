# Live Draft Board (Railway Deployment)

This repository contains the modifications required to deploy the Live Draft Board application on Railway.

## Added Files

- **server.js**: Minimal Express server to serve the React build.
- **Procfile**: Railway process declaration.
- **Dockerfile**: Optional containerization for consistent builds.
- **package.json**: Updated scripts for Railway (`start`, `build`, `dev`).

## Deployment Instructions

1. Push this repo to GitHub.
2. On Railway, create a new project from GitHub.
3. Set environment variables: 
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
4. Railway will detect the `start` script and run:
   ```bash
   npm ci
   npm run build
   npm run start
   ```
5. Visit the Railway-provided URL to see your deployed app.

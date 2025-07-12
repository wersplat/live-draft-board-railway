# Railway Deployment Guide

This guide explains how to deploy the Live Draft Board application to Railway.

## Prerequisites

1. A Railway account (sign up at [railway.app](https://railway.app))
2. A Supabase project (sign up at [supabase.com](https://supabase.com))
3. Node.js and npm installed locally
4. Git installed locally

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deploying to Railway

### Option 1: Deploy with Railway CLI

1. Install the Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Link your project:
   ```bash
   railway link
   ```

4. Set environment variables:
   ```bash
   railway env set VITE_SUPABASE_URL=your_supabase_project_url
   railway env set VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. Deploy your application:
   ```bash
   railway up
   ```

### Option 2: Deploy via Railway Dashboard

1. Push your code to a GitHub repository
2. Go to [Railway Dashboard](https://railway.app/dashboard)
3. Click "New Project" and select "Deploy from GitHub repo"
4. Select your repository
5. Add the following environment variables in the Railway dashboard:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase anon/public key
6. Deploy your application

## Setting Up Supabase

1. Create a new project in Supabase
2. Go to Project Settings > API to find your project URL and anon/public key
3. Set up the required tables and RLS policies using the SQL scripts in `supabase/migrations`
4. Enable the necessary authentication providers in Supabase

## Post-Deployment

After deployment, you can:

1. Access your application URL from the Railway dashboard
2. Set up a custom domain in the Railway project settings
3. Enable automatic deployments from your main branch

## Troubleshooting

- If you encounter build errors, check the logs in the Railway dashboard
- Ensure all environment variables are correctly set
- Verify that your Supabase CORS settings include your Railway domain

## Maintenance

- Monitor your application's performance and logs in the Railway dashboard
- Set up alerts for errors or performance issues
- Regularly update dependencies using `npm update`

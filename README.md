# HRMSpark — Human Resource Management System

This repository contains a starter scaffold for HRMSpark — a modern HRMS webapp (Next.js + TypeScript + Tailwind + Bootstrap + shadcn UI placeholders) with a responsive login, dashboard and employee modules.

What's included in this branch:
- Next.js app structure (app router) with simple pages: login, dashboard, employees
- Tailwind + PostCSS config and a Bootstrap placeholder
- Core salary calculation utility with unit tests
- Simple reusable UI components (KPI card, Employee card, Layout)

How to run locally (requires Node.js 18+ / npm/yarn):

1) Install dependencies

```bash
npm install
```

2) Run the dev server

```bash
npm run dev
```

3) Run the salary unit tests

```bash
npm test
```

Note: This is a starting scaffold. To fully run the Next app you should install the real dependencies (next/react/tailwind) — the package.json includes them as placeholders.

Quick notes & next steps built into this scaffold:

- Authentication: A login page placeholder is added. Role-based access (admin / hr / manager / employee) should be implemented in the auth layer (JWT / NextAuth or other) and route guards added.
- Employee import: bulk-import should accept a CSV with headers: id,name,email,branch,title,joiningDate,contractType. Example CSV row:

```
id,name,email,branch,title,joiningDate,contractType
E001,Alice Johnson,alice@example.com,Head Office,Sales Manager,2023-05-01,Full-time
```

- Payroll: The salary calculation logic is implemented at `src/lib/salary.js`. Use `generatePaySlip()` to compute one-day salary, attendance deductions, OT pay, total gross, net payable and final net salary (subtracting outstanding balance).

Next recommended tasks:

1. Add real authentication and roles
2. Hook the UI up to an API and a DB (PostgreSQL / MongoDB) with proper endpoints for employees, attendance, payroll
3. Implement CSV bulk import and secure document uploads/storage (S3 or similar) with preview
4. Add end-to-end tests, CI and Vercel deployment config

If you'd like, I can continue wiring up API routes, authentication, or implement the CSV import + document upload flows next.

---

## Deploying to Vercel (step-by-step)

This project is ready to deploy on Vercel. Follow these steps to deploy from GitHub/GitLab or other Git hosts:

1) Push this repository to a remote (GitHub or similar). If you use GitHub, Vercel can auto-deploy from your repository.

2) Create a Vercel project and connect your repository
- Sign in to https://vercel.com and create a new Project.
- Choose the Git provider (GitHub/GitLab/Bitbucket) and pick the `Studio` repo.

3) Build & Output Settings
- Framework Preset: Next.js (Vercel will auto-detect when it sees `next.config.js`)
- Build command: `npm run build`
- Output directory: (leave default / detected by Vercel)

4) Add Environment Variables
- In your Vercel Project settings add env variables (see `.env.example`). Set values for production/preview as needed.

5) Deploy
- Click `Deploy` — Vercel will run the build and create a deployment.

6) Post-deploy
- Optionally go to `Settings > Git Integration` to enable automatic deployment on every push.

Notes:
- This repo includes `vercel.json` and `.vercelignore` to help Vercel detect and build the Next.js app correctly.
- For authentication or database connection, set environment variables securely in the Vercel dashboard.
- If you use images or file uploads, configure an external storage provider (S3/Cloud Storage) and add secrets accordingly.
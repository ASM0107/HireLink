# HireLink: Contract Staffing & Recruitment Agency Platform

HireLink is a technology-enabled recruitment and contract staffing platform focused on IT hiring. It connects companies with pre-screened candidates, with the long-term vision of evolving into an AI-powered talent acquisition platform.

## Project Structure

This is a monorepo consisting of:

- **`frontend/`**: The web application built with Next.js (React) and Tailwind CSS.
- **`backend/`**: The REST API backend built with Python FastAPI and PostgreSQL.

## Local Development

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # On Windows:
   .\venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install fastapi uvicorn
   ```
4. Run the API server:
   ```bash
   uvicorn app.main:app --reload
   ```
   The API will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Deployment

### Frontend (GitHub Pages)

The frontend is configured for a **static export** (`output: "export"` in `next.config.ts`) and is fully deployable to **GitHub Pages**.

We have included a GitHub Actions workflow in `.github/workflows/nextjs-deploy.yml` that will automatically build and deploy the Next.js app to GitHub Pages whenever you push to the `main` or `master` branches.

**Note on Next.js GitHub Pages:**
If you are deploying this to a project repository (e.g., `https://<username>.github.io/<repo-name>`), you will need to uncomment and update the `basePath` in `frontend/next.config.ts` to match your repository name:
```typescript
// frontend/next.config.ts
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/HireLink", // Replace with your repository name
};
```

### Backend

The backend is a FastAPI application that can be deployed to any cloud provider supporting Python (e.g., Azure App Service, AWS Elastic Beanstalk, Render, or Heroku). You will need to provision a PostgreSQL database and configure the environment variables in your deployment environment.

## Documentation

For a detailed breakdown of the business goals, roadmap, and project requirements, please refer to the [Product Requirements Document (PRD)](PRD.md).

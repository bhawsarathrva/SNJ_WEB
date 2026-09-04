# SNJ Diesel Web (`SNJ_WEB`)

[![CI Pipeline](https://github.com/bhawsarathrva/SNJ_WEB/actions/workflows/ci.yml/badge.svg)](https://github.com/bhawsarathrva/SNJ_WEB/actions/workflows/ci.yml)
[![CD Pipeline](https://github.com/bhawsarathrva/SNJ_WEB/actions/workflows/cd.yml/badge.svg)](https://github.com/bhawsarathrva/SNJ_WEB/actions/workflows/cd.yml)

Enterprise web portal and product catalog for **SNJ Diesel** built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Prisma ORM** with PostgreSQL.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+
- Docker & Docker Compose (optional for local database container)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/bhawsarathrva/SNJ_WEB.git
cd SNJ_WEB
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://snj:snj_local_password@localhost:5432/snj_diesel?schema=public"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3. Database Setup (Docker)
Start the local PostgreSQL container using Docker Compose:
```bash
docker compose up -d db
npx prisma db push
```

### 4. Development Server
Run the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run lint` | Runs ESLint 9 checks across the codebase |
| `npm run typecheck` | Validates TypeScript types across the project |
| `npm run build` | Generates Prisma client and creates an optimized production build |
| `npm run start` | Starts the production server |

---

## 🔄 CI/CD Pipelines (GitHub Actions)

This repository is equipped with fully automated GitHub Actions CI/CD workflows:

### 1. Continuous Integration (`.github/workflows/ci.yml`)
Triggered automatically on:
- Every `push` to `main`
- Every `pull_request` targeting `main`
- Manual trigger (`workflow_dispatch`)

**Jobs:**
1. **Lint & Typecheck**: Runs `npm run lint` and `npm run typecheck` with deterministic `npm ci` and Node.js caching.
2. **Build Application**: Runs `npm run build` with build caching (`.next/cache`) to verify standalone bundle generation and SSG pre-rendering across all static routes.
3. **Verify Docker Container Build**: Tests multi-stage `Dockerfile` compilation using Docker Buildx and GitHub Actions layer caching.

### 2. Continuous Deployment (`.github/workflows/cd.yml`)
Triggered automatically on:
- Merging/pushing to the `main` branch
- Publishing release tags (e.g. `v1.0.0`)
- Manual trigger (`workflow_dispatch`)

**Actions:**
- Builds production-ready multi-platform Docker container image.
- Tags container with `latest`, Git commit SHA (`sha-xxxxxxx`), and SemVer versions.
- Pushes image to **GitHub Container Registry (GHCR)**:
  ```text
  ghcr.io/bhawsarathrva/snj_web:latest
  ```

### 3. Automated Dependency Updates (`.github/dependabot.yml`)
- Weekly automated dependency security and version updates for `npm` packages and GitHub Actions.

---

## 🐳 Docker Deployment

### Run with Docker Compose
To run both the PostgreSQL database and the Next.js standalone container locally:
```bash
docker compose up --build -d
```

### Pull and Run from GitHub Container Registry
```bash
docker pull ghcr.io/bhawsarathrva/snj_web:latest
docker run -p 3000:3000 -e DATABASE_URL="postgresql://..." ghcr.io/bhawsarathrva/snj_web:latest
```

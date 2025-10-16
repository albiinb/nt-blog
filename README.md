# 🚀 NT Blog

## 📝 Project Description

> A modern blog website built with Next.js (App Router) for showing and filtering news.

---

## ⚙️ Local Setup

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/albiinb/nt-blog.git
cd nt-blog
```

### 2. Install dependencies

```
npm install
or
yarn install
or
pnpm install
```

### 3. Create environment variables

Create a .env.local file in the root directory and add your environment variables:

```
NEWS_API_KEY=API_KEY
NEWS_API_BACKEND_URL=https://newsapi.org
APP_ENV=dev
```

🧠 Tip: Never commit your .env.local file to Git. Use .env.example to share only variable
names without secrets.

### 4. Run the development server

```
npm run dev
or
yarn dev
or
pnpm dev
```

Then open http://localhost:3000 to view your app.

---

## 🧩 Technologies Used

This project is built using modern web technologies and libraries:

- Next.js 14+ (App Router) — React framework for full-stack applications

- Tailwind CSS — Utility-first CSS framework

- Zustand — Lightweight state management

- shadcn/ui — Beautiful, accessible UI components

- TypeScript — Type-safe JavaScript

- ESLint & Prettier — Code linting and formatting

- Axios — HTTP client for API requests

---

## 📁 Project Structure

Example folder structure (customize as needed):

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── (routes)/
│   │   ├── post/
│   │   ├── search/
│   │   └── ...
│
├── assets/
│   ├── brand/            # branding images (logo, icon)
│   ├── icons/            # all svg icons
│   └── images/           # other images
│
├── components/
│   ├── ui/               # shadcn components
│   ├── layout/           # header, sidebar, etc.
│   └── shared/           # reusable components
│
├── lib/                  # helper functions, API clients
├── schema/               # typesafe schema interfaces
│
├── screens/              # pages
│   ├── home/
│   ├── not-found/
│   └── post-details/
│   └── search-results/
│   └── ...
│
├── service/              # api calls and configs
├── store/                # zustand stores
└── utils/                # utility methods and constants
```

---

## 🔗 Resources

| Resource               | URL                                                                                              |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| 🧠 **Development URL** | [https://nt-blog-mocha.vercel.app/](https://nt-blog-mocha.vercel.app/)                           |
| 🎨 **Figma Design**    | [http://figma.com/design/i7aCOzHxtlve2x7ngj0WXa](http://figma.com/design/i7aCOzHxtlve2x7ngj0WXa) |

---

## 📜 License

This project is licensed under the MIT License . You’re free to use, modify, and
distribute this software with attribution.

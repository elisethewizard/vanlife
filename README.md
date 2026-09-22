# 🚐 #Vanlife

An online marketplace app for renting vans made with React and Next.js. Features user authentication and protected routes, interacting with a remote database, nested navigation, and dynamic URL parameters. 

## Tech stack

* **React 19** - UI library
* **Next.js 16** (App Router) - server components
* **TypeScript** - type safety
* **Next Auth 5** - authentication with OAuth support
* **PostgreSQL** - Database (Supabase)
* **Zod** - schema validation

## Project structure

```
├── app/
│   ├── (routes)/
│   │   ├── login/
│   │   │   └── page.tsx           # Login page
│   │   ├── host/                  # Host route, locked behind auth
│   │   │   ├── layout.tsx         # Host layout
│   │   │   ├── page.tsx           # Host dashboard
│   │   │   │── income/
│   │   │   │   └── page.tsx       # Host income
│   │   │   ├── reviews/
│   │   │   │   └── page.tsx       # Host review
│   │   │   └── vans/
│   │   │       │── page.tsx       # Host vans overview
│   │   │       └── [id]/
│   │   │           └── page.tsx   # Host van detail
│   │   ├── vans/
│   │   │   │── page.tsx           # Vans list page
│   │   │   └── [id]/
│   │   │       └── page.tsx       # Van detail page
│   │   └── about/
│   │       └── page.tsx           # About page
│   ├── components/                # Reusable components
│   │   ├── login/                 # Used for login page
│   │   ├── host/                  # Used for host pages
│   │   ├── vans/                  # Used for vans list and pages
│   │   └── skeletons/             # Used when content is loading
│   ├── lib/
│   │   ├── data.ts                # Fetching from database
│   │   ├── actions.ts             # Auth actions
│   │   └── types.ts               # TypeScript type definitions
│   ├── style/                     # Styling
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── not-found.tsx              # Catch-all route
│   └── error.tsx                  # Error display
├── public/                        # Image assets
├── proxy.ts                       # Next.js proxy/middleware config
├── auth.ts                        # Next Auth credentials provider setup
└── auth.config.ts                 # Next Auth config
```

## Screenshots

![Screenshot of home page.](/public/screenshots/screenshot-1.png)

![Screenshot of about page.](/public/screenshots/screenshot-2.png)

![Screenshot of host dashboard.](/public/screenshots/screenshot-3.png)

![Screenshot of a detailed card for a van hosted by a user.](/public/screenshots/screenshot-4.png)

![Screenshot of a list of available vans.](/public/screenshots/screenshot-5.png)
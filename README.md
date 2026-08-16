# 🛒 FreshCart — 100% Organic Grocery & E-Commerce Platform

FreshCart is a modern, high-performance e-commerce web application designed for online grocery ordering and express delivery. Built with Next.js 16, React 19, Tailwind CSS v4, Prisma ORM, and Better-Auth, FreshCart delivers a rich shopping experience complete with product categories, interactive cart/wishlist drawers, authentication flows, a user profile management route, and a production-grade analytics dashboard.

---

## 🚀 Key Features

### 🛍️ E-Commerce & Shopping Experience
- **Interactive Home Page**: Features animated hero banners, category grids, daily deals, popular organic items, customer reviews, delivery steps, app download promotions, and newsletter subscriptions.
- **Cart & Wishlist Drawers**: Slide-out cart drawer with live subtotal calculation, free shipping progress indicator ($35 threshold), and quick item quantity controls.
- **Quick View & Search Modals**: Instant search overlay and product preview modal for detailed item view without navigating away.
- **Toast Notifications**: Built-in notification toasts for user actions (adding items to cart/wishlist, copying user ID, sign out).

### 📊 Production-Grade User Dashboard (`/dashboard`)
- **Responsive Layout**: Collapsible left sidebar on desktop and a mobile drawer menu.
- **Top Header**: Search bar, notification popover with badge, user profile menu dropdown.
- **Overview Stat Cards**: Metrics for Total Orders (24), Pending Orders (3), Completed Orders (18), and Cart Items (5) with trend indicators.
- **Interactive SVG Analytics Charts**:
  - **Orders Overview**: Monthly order volume bar chart.
  - **Monthly Spending**: Gradient-filled smooth curve area chart.
  - **Order Status Breakdown**: Interactive Donut chart with status legend (Delivered, Processing, Shipped, Cancelled).
- **Recent Orders Table**: Detailed order table with search filter, status badges, and action buttons.
- **Cart & Profile Overview**: Integrated cart preview, profile summary card, and real-time activity timeline.

### 👤 Profile & Authentication (`/profile`, `/login`, `/register`)
- **Better-Auth Integration**: Secure authentication with email/password and social login (Facebook).
- **User Profile Page (`/profile`)**: Displays authenticated user details including Full Name, Email, Role, Email Verification Status, Terms Acceptance, User ID (with copy-to-clipboard functionality), and account creation/update timestamps.
- **Registration Flow**: Split visual layout featuring feature checklists, password match validation, and terms agreement.

---

## 🛠️ Technology Stack

### **Core Framework & Runtime**
- **[Next.js 16 (App Router & Turbopack)](https://nextjs.org/)**: React framework for server-side rendering, API routes, and fast builds.
- **[React 19](https://react.dev/)**: Component-based UI library.
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe code throughout the application.

### **Database & Authentication**
- **[Prisma ORM (v7)](https://www.prisma.io/)**: Next-generation database toolkit and query builder.
- **[PostgreSQL](https://www.postgresql.org/)**: Relational database provider connected via `@prisma/adapter-pg`.
- **[Better-Auth](https://www.better-auth.com/)**: Modern authentication framework with Prisma adapter support for sessions, credentials, and social OAuth providers.

### **Styling & Icons**
- **[Tailwind CSS (v4)](https://tailwindcss.com/)**: Utility-first CSS framework with custom color tokens, glassmorphism, and responsive utilities.
- **[Lucide React](https://lucide.dev/)**: Icon set for UI elements.
- **[Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)**: Google typography integration.

---

## 🔮 Future Production Architecture & Roadmap

For step-by-step guidance on scaling **FreshCart** into an enterprise production-grade platform with a decoupled **NestJS** backend, extended **Prisma ORM** PostgreSQL database schemas, Redis caching, real-time WebSockets, idempotency, and DevOps pipelines, see:

👉 **[FUTURE_ROADMAP.md](file:///home/tanvir-hassan/projects/fresh-cart/FUTURE_ROADMAP.md)**

### Key Upgrades Included in the Roadmap:
1. **NestJS Modular Architecture**: Transition from monolithic Next.js API routes to a decoupled NestJS REST/GraphQL microservices backend.
2. **Production Database & Concurrency**: Complete Prisma schema for inventory locks, stock reservations, order state machine, audit logs, and payments.
3. **Enterprise Security**: JWT rotation, NestJS RBAC Guards (`CUSTOMER`, `ADMIN`, `VENDOR`), Redis Rate Limiting, and DTO sanitization.
4. **Real-time Order & Delivery Tracking**: NestJS WebSocket Gateways for live order status updates and GPS driver tracking.
5. **Search Engine & Redis Caching**: Meilisearch fuzzy auto-complete search + Redis/BullMQ async background worker queues.
6. **DevOps & QA**: Docker Compose environment, automated Sentry logging, and GitHub Actions CI/CD workflows.

---

## 📂 Project Structure

```text
fresh-cart/
├── src/
│   ├── app/
│   │   ├── api/             # Better-Auth endpoints
│   │   ├── dashboard/       # User & Admin Dashboard route (/dashboard & /dashboard/[role])
│   │   ├── login/           # User Sign In route
│   │   ├── profile/         # User Profile route (/profile)
│   │   ├── register/        # Account Creation route
│   │   ├── globals.css      # Global Tailwind v4 styles & keyframe animations
│   │   ├── layout.tsx       # Root layout with fonts & metadata
│   │   └── page.tsx         # E-commerce Landing page
│   ├── components/
│   │   ├── dashboard/       # Dashboard components (Sidebar, TopHeader, StatCard, Charts, RecentOrders, etc.)
│   │   ├── Navbar.tsx       # Main navigation header
│   │   ├── Footer.tsx       # Application footer
│   │   ├── CartDrawer.tsx   # Slide-out cart drawer
│   │   ├── SearchModal.tsx  # Search modal overlay
│   │   ├── WishlistModal.tsx# Saved items drawer
│   │   └── QuickViewModal.tsx # Product detail modal
│   ├── context/
│   │   └── CartContext.tsx  # Global state provider for cart, wishlist, & modals
│   ├── data/
│   │   └── products.ts      # Product catalog data
│   └── lib/
│       ├── auth.ts          # Server authentication config (Better-Auth + Prisma)
│       ├── auth-client.ts   # Client auth hooks (useSession, signIn, signOut)
│       └── core/
│           └── session.ts   # Server session retrieval helper
├── prisma/                  # Database schema & migrations
├── public/                  # Static assets & images
├── package.json             # Dependencies & script configurations
├── README.md                # Main project documentation
└── FUTURE_ROADMAP.md        # Enterprise NestJS + Prisma + Postgres upgrade blueprint
```

---

## ⚙️ Getting Started

### 1. Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v18.x or later)
- **npm** or **yarn** / **pnpm**
- **PostgreSQL** database instance

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/your-username/fresh-cart.git
cd fresh-cart
npm install
```

### 3. Environment Variables
Create a `.env` file in the project root directory and configure your database and authentication credentials:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/freshcart_db"
BETTER_AUTH_SECRET="your-super-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# Social Authentication Providers (Optional)
FACEBOOK_CLIENT_ID="your-facebook-client-id"
FACEBOOK_CLIENT_SECRET="your-facebook-client-secret"
```

### 4. Database Setup & Migration
Generate the Prisma Client and sync your database schema:
```bash
npx prisma db push
# Or for Prisma migrations:
npx prisma migrate dev
```

### 5. Run Development Server
Start the development server with Next.js Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧪 NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Compiles and builds the production application bundle |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint checks across the codebase |

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

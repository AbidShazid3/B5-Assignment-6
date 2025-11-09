# 💳 PayNex - A Digital Wallet Frontend (React + Redux Toolkit + RTK Query)

A **secure, modern, and responsive PayNex a digital wallet system** built with **React, TypeScript, Redux Toolkit, and RTK Query** — inspired by mobile money platforms like **bKash, Nagad, or Rocket**.  
This project provides a complete **role-based experience** for **Users**, **Agents**, and **Admins**, supporting wallet transactions, authentication, and data visualization.

---

## 🚀 Live Demo

- 🔗 **Frontend:** [https://paynex.vercel.app]
- 🔗 **Backend API:** [https://digital-wallet-backend-kappa.vercel.app]

---

## 🧾 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Role-Based Functionalities](#role-based-functionalities)
- [Screenshots](#screenshots)
- [Admin Credentials](#admin-credentials)
- [License](#license)

---

## 🪄 Overview

This application allows users to:
- Manage wallets
- Send and receive money
- Deposit or withdraw via agents
- Administer the system with full control (admin panel)
- Access clean and responsive dashboards based on their role

It integrates **secure JWT authentication**, **RESTful APIs**, and a **smooth UX/UI** with real-time data updates via **RTK Query**.

---

## ✨ Features

### 🏠 Public Pages
- Home, About, Features, Contact, FAQ pages
- Responsive, theme-based navigation
- Hero section with CTA buttons
- Smooth transitions and loading
- Footer with contact info and links

### 🔐 Authentication
- Login, registration (User or Agent)
- JWT authentication + persisted state
- Role-based redirection
- Logout and auto-refresh token support

### 👤 User Dashboard
- Wallet overview (balance, actions, history)
- Deposit / Withdraw / Send money
- Filterable, paginated transaction table
- Profile management
- Toast notifications and guided tour

### 🧍‍♂️ Agent Dashboard
- Cash-in / Cash-out functionality
- Transaction and commission tracking
- Wallet summary cards
- Profile update options

### 👨‍💼 Admin Dashboard
- Manage Users (block/unblock)
- Manage Agents (approve/suspend)
- View transactions with filters (type, date, status)
- System overview and performance insights

### ⚙️ General
- Role-based routing and menus
- Dark/Light mode toggle
- Form validation and loading states
- Global error handling
- Reusable UI components (Cards, Charts, Tables)

---

## 🧰 Tech Stack

### Frontend
- **React 18 + TypeScript**
- **Redux Toolkit + RTK Query**
- **React Router v6**
- **Tailwind CSS**
- **Shadcn/UI + Lucide Icons**
- **Framer Motion** (animations)
- **Sonner Toasts** (notifications)

### Backend
- **Node.js / Express**
- **MongoDB + Mongoose**
- **JWT Authentication**
- **Bcrypt Password Hashing**
- **Stripe Integration (optional for payments)**

---

## 🧱 Project Structure

```ts
src/
├── assets/ # Images, icons, and static files
├── components/ # Reusable UI components
├── layouts/ # Shared layouts (Dashboard, Public)
├── pages/ # Route pages for User, Agent, Admin
├── redux/
│ ├── baseApi.ts # RTK Query base API config
│ ├── store.ts # Redux store setup
│ └── features/ # Entity-based slices and APIs
├── routes/ # Protected and role-based routes
├── types/ # TypeScript types and interfaces
├── utils/ # Helper functions and error handlers
└── App.tsx # Root component

```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
1.Backend
git clone https://github.com/AbidShazid3/B5-Assignment-5.git
cd file name

2.Frontend
git clone https://github.com/AbidShazid3/B5-Assignment-6.git
cd file name

```

### 2️⃣ Set Environment Variables

Create a .env file in the project root:

```ts
1.Backend
PORT=5000
DB_URL=mongodb+srv://(url)
NODE_ENV=development

# JWT 
JWT_ACCESS_SECRET=dkdfiekcmcnvdjepi
JWT_ACCESS_EXPIRES=1d
JWT_REFRESH_SECRET=kdfhiekdfnie
JWT_REFRESH_EXPIRES=30d

# BCRYPT
BCRYPT_SALT_ROUND=10

# Frontend URL
FRONTEND_URL=http://localhost:5173

2.Frontend
VITE_API_BASE_URL=https://your-backend-api.onrender.com/api

```

### 3️⃣ Install Dependencies
```ts
npm install
```

4️⃣ Run the Application
```ts
npm run dev
```

## ⚡ Available Scripts
```ts
| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Run in development mode      |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint checks            |

```

## 🧩 Role-Based Functionalities
```ts
| Role      | Capabilities                                                |
| --------- | ----------------------------------------------------------- |
| **User**  | Deposit, withdraw, send money, view transactions            |
| **Agent** | Cash-in/out, manage user wallets, commission history        |
| **Admin** | Manage users/agents, view transactions, dashboard analytics |

```

## 🧠 Future Enhancements

- Add biometric login simulation (PIN/FaceID)
- Implement system-wide fee & commission configuration
- Real-time transaction notifications with WebSockets
- Integrate more payment gateways
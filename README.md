# 🏕️ The Wild Oasis

A hotel management app for employees to manage cabins, bookings, and guests.

## What is this app?

**The Wild Oasis** is a dashboard for hotel staff. It helps them:

- ✅ See all **cabins** (rooms) and their prices
- ✅ Manage **bookings** (who is staying when)
- ✅ **Check guests in and out**
- ✅ View **dashboard** with charts and stats
- ✅ Change **settings** (breakfast price, min/max nights, etc.)
- ✅ Create new **user accounts** for staff
- ✅ Switch between **dark mode** and light mode

## Tech Stack

| What          | Tool Used                    |
| ------------- | ---------------------------- |
| Framework     | React 19                     |
| Routing       | React Router                 |
| Styling       | Styled Components            |
| Data Fetching | React Query (TanStack Query) |
| Forms         | React Hook Form              |
| Charts        | Recharts                     |
| Backend       | Supabase (database + auth)   |
| Build Tool    | Vite                         |

## Project Structure

```
src/
├── features/        # Main features (cabins, bookings, dashboard, etc.)
├── pages/           # Page components (one per route)
├── ui/              # Reusable UI components (buttons, tables, etc.)
├── services/        # API calls to Supabase
├── hooks/           # Custom React hooks
├── context/         # React Context (dark mode)
├── styles/          # Global CSS styles
└── utils/           # Helper functions
```

## How to Run

1. **Install packages**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npm run dev
   ```

3. **Open in browser**  
   Go to `http://localhost:5173`

## Other Commands

| Command           | What it does         |
| ----------------- | -------------------- |
| `npm run build`   | Build for production |
| `npm run preview` | Preview built app    |
| `npm run lint`    | Check code quality   |

## Pages

| Page      | URL          | What it shows                   |
| --------- | ------------ | ------------------------------- |
| Dashboard | `/dashboard` | Stats, charts, today's activity |
| Bookings  | `/bookings`  | List of all bookings            |
| Cabins    | `/cabins`    | List of all cabins              |
| Users     | `/users`     | Create new staff accounts       |
| Settings  | `/settings`  | Hotel settings                  |
| Account   | `/account`   | Update your own profile         |
| Login     | `/login`     | Login page                      |

## Features

### 🏠 Cabins

- View all cabins in a table
- Filter by discount (all, with discount, no discount)
- Sort by name or price
- Add, edit, or delete cabins

### 📅 Bookings

- See all guest bookings
- Filter by status (checked-in, checked-out, unconfirmed)
- View booking details

### ✅ Check-in / Check-out

- Check guests in when they arrive
- Add breakfast option during check-in
- Check guests out when they leave

### 📊 Dashboard

- View stats (bookings, sales, check-ins, occupancy)
- See today's arrivals and departures
- View sales chart
- See stay duration chart

### ⚙️ Settings

- Set breakfast price
- Set minimum and maximum nights
- Set maximum guests per booking

### 👤 Authentication

- Login with email and password
- Protected routes (must login first)
- Update account details and password

---

Made as part of Jonas Schmedtmann's React course 🎓

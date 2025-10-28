# Movie Management App (MMS)

A responsive **Movie Management Web Application** built with React.js, Redux Toolkit, and Tailwind CSS that allows users to explore, manage, and personalize movie data fetched from **TMDb API**. Users can filter, sort, and save their favorite movies, with persistent customization using `localStorage`.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Project Structure](#project-structure)
- [Evaluation Criteria](#evaluation-criteria)

---

## Project Overview

This application allows users to:

- Browse movies fetched from **TMDb API**.
- View detailed movie information with multiple posters carousel.
- Filter movies by genre or rating
- Manage personal favorite movies and “Watch Next” list.
- Created a “Recently added ” list.
- Register, login, and access protected routes.
- Persist user preferences in `localStorage` even after logout.

The UI is responsive

---

## Tech Stack

- **Frontend:** React.js, React Router DOM
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **HTTP Requests:** Axios
- **Carousel:** Swiper.js
- **Icons:** Lucide React


---

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── AuthGuard.jsx
│   ├── Sidebar.jsx
│   ├── MovieCard.jsx
│   ├── Loading.jsx
│   └── ...
│
├── features/
│   └── Movies/
│       ├── movieSlice.js
│       └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Profile.jsx
│   ├── Movies.jsx
│   ├── MovieDetail.jsx
│   ├── TVSeries.jsx
│   ├── TvDetail.jsx
│   ├── SearchResults.jsx
│   └── PageNotFound.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## Features

### Core Features

- **Authentication:** Login/Signup using `localStorage`, logout, and protected routes.
- **Routing:**  
  `/login`, `/signup`, `/movies`, `/movies/:id`, `/profile`, `404` page.
- **Movie List Page:**  
  Filter by Genre.
- **Movie Details Page:**  
  Full movie information
- **User Profile Page:**  
  Edit favorite movies
- **Responsive Design:** Fully mobile-friendly UI with Tailwind CSS.
  .

### Bonus / Optional Features

- Live **Search** for movies using TMDb API.
- Pagination for movie lists.
- **Theme Switcher** (dark/light mode).
- Recently viewed section on profile page.

---





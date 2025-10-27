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
- Filter movies by genre or rating and sort by title, year, or rating.
- Manage personal favorite movies and “Watch Next” list.
- Register, login, and access protected routes.
- Persist user preferences in `localStorage` even after logout.

The UI is responsive, modern, and includes smooth transitions using **Framer Motion**.

---

## Tech Stack
- **Frontend:** React.js, React Router DOM  
- **State Management:** Redux Toolkit  
- **Styling:** Tailwind CSS  
- **HTTP Requests:** Axios  
- **Carousel:** Swiper.js  
- **Icons:** Lucide React  

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
- Pagination or infinite scrolling for movie lists.
- **Theme Switcher** (dark/light mode).
- Recently viewed section on profile page.
- Smooth **Framer Motion** animations.

---

## Folder structure




### Folder Descriptions

- **public/**: Static files like `index.html`, images, and icons.  
- **src/components/**: Reusable UI components to keep the code modular.  
- **src/pages/**: Components representing entire pages in the app.  
- **src/redux/**: Redux store setup and slices for state management.  
- **src/App.jsx**: Root component that sets up routing and layout.  
- **src/main.jsx**: Entry point that renders the App component.  

---

This structure keeps the project organized and easy to maintain as it scales.

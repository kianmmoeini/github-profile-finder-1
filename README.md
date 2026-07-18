# GitHub Profile Finder

A modern React application for searching GitHub users, viewing profile information, and exploring public repositories.

This project was built to practice modern React development concepts such as API requests, React Query, Axios, React Router, MUI, React Hook Form, and data management.

---

## 🚀 Features

- 🔍 Search GitHub users by username
- 👤 Display GitHub user profile information
- 📦 View public repositories
- 🔗 Visit GitHub profiles and repositories
- ⚛️ React Query for API request management
- 🌐 Axios for API requests
- 🧭 React Router for page navigation
- 🎨 Material UI for a modern user interface
- 📝 Contact form with React Hook Form
- 💾 Store contact form data locally using JSON Server
- 🔔 Toastify notifications for success and error messages
- ⏳ Loading state management
- ❌ Error handling for invalid usernames and API errors
- 📱 Clean and responsive layout

---

## 🛠️ Technologies

### Frontend

- React
- JavaScript
- Vite
- Material UI (MUI)

### Data & API

- Axios
- React Query
- GitHub REST API
- JSON Server

### Forms & Notifications

- React Hook Form
- React Toastify

### Routing

- React Router DOM

---

## 📁 Project Structure

```text
src/
│
├── api/
│   ├── Githubapi.js
│   └── contactApi.js
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── SearchBar.jsx
│   ├── UserCard.jsx
│   ├── RepoList.jsx
│   └── Loading.jsx
│
├── hooks/
│   └── useGithub.js
│
├── Layouts/
│   └── MainLayouts.jsx
│
├── Pages/
│   ├── Home.jsx
│   ├── Contact.jsx
│   └── reactquery-post.jsx
│
├── App.jsx
├── main.jsx
└── index.css
| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm install`     | Install project dependencies      |
| `npm run dev`     | Start the Vite development server |
| `npm run server`  | Start the JSON Server             |
| `npm run build`   | Build the project for production  |
| `npm run preview` | Preview the production build      |

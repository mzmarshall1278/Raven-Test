
```md
# 🛠 Raven Test – Fullstack Web App

This project is a full-stack application built with:

- 🖥 **Frontend**: React + TypeScript + Material UI  
- 🔐 **Backend**: NestJS + MySQL + JWT Authentication

It features secure email/password login and protected routes for authenticated users.

---

## 📁 Folder Structure

```
raven-test/
├── frontend/     # React app with Material UI and auth context
├── backend/      # NestJS backend with MySQL and JWT auth
└── README.md     # You're here!
```

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v18+ recommended)
- MySQL (local or remote instance)
- Git

---

### 🔧 Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/Raven-Test.git
cd Raven-Test
```

---

## ⚙️ Backend Setup (NestJS)

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies and run the server:
   ```bash
   npm install
   npm run start:dev
   ```

---

## 💻 Frontend Setup (React + TypeScript)

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the dev server:
   ```bash
   npm run dev
   ```

4. Visit the app at:
   ```
   http://localhost:5173
   ```

> ✅ Make sure the frontend's API requests are pointed to the correct backend URL (e.g., `http://localhost:3000`).

---

## 🔐 Authentication Flow

- Signup and login via email/password.
- JWT tokens stored in `localStorage`.
- React Context handles authentication state.
- Navbar dynamically updates to show "Sign In" or "Logout" based on user state.
- Protected routes using a `<ProtectedRoute />` wrapper.

---

## 🛠 Tech Stack

| Layer      | Tech                             |
|------------|----------------------------------|
| Frontend   | React, TypeScript, Material UI   |
| Backend    | NestJS, TypeORM, MySQL           |
| Auth       | JWT (Token-based authentication) |
| Styling    | Material UI Theme + Custom Styles |
| State Mgmt | React Context API                |

---

## ✨ Features

- 🧠 Clean UI with MUI and Google Fonts  
- 🔐 Secure login/signup  
- 🔁 Auth state persisted via local storage  
- ⚡ Fast dev workflow + NestJS  

---

## 👨‍💻 Author

Made with 💙 by [@mzmarshall1278](https://github.com/mzmarshall1278)

---

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
```

---

# Pen-Editor

A simple and elegant online code editor built with React and Node.js. Pen-Editor allows you to write and preview HTML, CSS, and JavaScript in real-time, similar to CodePen.

## 🚀 Tech Stack

### Frontend
- **React**: Modern UI library for building the interface.
- **Vite**: Ultra-fast frontend build tool.
- **Monaco Editor**: The code editor that powers VS Code.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: For client-side navigation.
- **React Icons**: Comprehensive icon library.

### Backend
- **Node.js**: JavaScript runtime for the server.
- **Express**: Fast, unopinionated, minimalist web framework.
- **MongoDB**: NoSQL database for storing user data and projects.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **JWT**: Secure authentication using JSON Web Tokens.

## 📂 Directory Structure

```text
Pen-Editor/
├── Frontend/           # React frontend application
│   ├── src/
│   │   ├── Components/ # Reusable UI components
│   │   ├── Context/    # React Context (Theme, Auth, etc.)
│   │   ├── Pages/      # Main application pages
│   │   └── App.jsx     # Main App component
│   └── ...
├── backend/            # Node.js backend API
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── app.js          # Entry point for the server
└── README.md           # Project documentation
```

## 🛠️ Local Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/ShivanshTiwari613/Pen-Editor.git
cd Pen-Editor
```

### 2. Setup Backend
```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```
Start the backend server:
```bash
npm start
```

### 3. Setup Frontend
```bash
cd ../Frontend
npm install
```
Start the frontend development server:
```bash
npm run dev
```

The application should now be running at `http://localhost:5173`.

## 🎨 Professional Features Added
- **Theme Context**: Replaced direct DOM manipulation with an idiomatic React Theme Context for dark/light mode switching.
- **Consolidated Backend**: Simplified the server initialization logic into a single entry point (`app.js`).
- **Improved Security**: Integrated Helmet and CORS for better security practices.
- **Scalable Architecture**: Organized codebase for better developer onboarding and maintainability.

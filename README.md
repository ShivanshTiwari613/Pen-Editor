# Pen-Editor

A professional, full-stack online code editor built with React and Node.js. Pen-Editor allows users to write and preview HTML, CSS, and JavaScript in real-time, similar to popular platforms like CodePen.

## 🚀 Tech Stack

### Frontend
- **React**: Functional components and Hooks.
- **Context API**: For global state management (Theme).
- **Tailwind CSS**: For modern, responsive styling.
- **Monaco Editor**: High-performance code editor powering the UI.
- **Vite**: Ultra-fast build tool and dev server.

### Backend
- **Node.js & Express**: Scalable backend architecture.
- **MongoDB & Mongoose**: Secure data persistence for users and projects.
- **JWT & Bcrypt**: Robust authentication and password hashing.
- **Helmet & CORS**: Industry-standard security middleware.

## 📁 Project Structure

```text
.
├── Frontend/           # React application (Vite-based)
│   ├── src/
│   │   ├── Components/ # Reusable UI components
│   │   ├── Context/    # React Context providers (Theme)
│   │   ├── Pages/      # Main application views
│   │   └── Helper.js   # Utility functions
│   └── ...
└── backend/            # Express.js server
    ├── models/         # Mongoose data models
    ├── routes/         # API endpoints
    ├── app.js          # Unified server entry point
    └── ...
```

## 🛠️ Local Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/ShivanshTiwari613/Pen-Editor.git
cd Pen-Editor
```

### 2. Backend Configuration
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your credentials:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### 3. Frontend Configuration
1. Navigate to the Frontend directory:
   ```bash
   cd ../Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔐 Key Features
- **Real-time Preview**: Instantly see changes as you type.
- **Multi-language Support**: Dedicated tabs for HTML, CSS, and JS.
- **Theme Switching**: Seamless transition between Light and Dark modes using React Context.
- **Project Persistence**: Save your work and access it from any device.
- **Responsive Design**: Fully functional on various screen sizes.

---
Built with ❤️ by Team Crux.

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login"
import Editor from "./Pages/editor";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="Editor/:projectId" element={<Editor />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
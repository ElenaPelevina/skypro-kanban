import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "./pages/Main";
import { LoginPage } from "./pages/Login";
import { RegistrationPage } from "./pages/Registration";
import { BrowsePage } from "./pages/Browse";
import { AddNewTaskPage } from "./pages/AddNewTask";
import { ExitPage } from "./pages/Exit";

function AppRoutes() {
     const [loading, setLoading] = useState(true)

 useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 3000)
 }, [])

 return (
    <Routes>
        <Route path="/" element = {<MainPage loading = {loading}/>}  />
        <Route path="/login" element = {<LoginPage/>} />
        <Route path="/registration" element = {<RegistrationPage/>} />
        <Route path="/browsepage" element = {<BrowsePage />} />
        <Route path="/addnewtask" element = {<AddNewTaskPage />} />
        <Route path="/exit" element = {<ExitPage />} />
    </Routes>

 )
} 

export default AppRoutes;
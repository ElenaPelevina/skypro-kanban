import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "./pages/Main";
import { LoginPage } from "./pages/Login";
import { RegistrationPage } from "./pages/Registration";
import { BrowsePage } from "./pages/Browse";
import { AddNewTaskPage } from "./pages/AddNewTask";
import { ExitPage } from "./pages/Exit";
import { NotFoundPage } from "./pages/NotFund";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
     const [isAuth, setIsAuth] = useState(false)
     const [loading, setLoading] = useState(true)

 useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 3000)
 }, [])

 return (
    <Routes>
      <Route element = {<PrivateRoute isAuth = {isAuth} />}>
        <Route path="/" element = {<MainPage setIsAuth = {setIsAuth} loading = {loading}/>} >
          <Route path="/browsepage/:id" element = {<BrowsePage />} />
          <Route path="/addnewtask" element = {<AddNewTaskPage />} />
          <Route path="/exit" element = {<ExitPage setIsAuth={setIsAuth} />} />
        </Route>
        </Route>
        <Route path="/login" element = {<LoginPage setIsAuth = {setIsAuth}/>} />
        <Route path="/registration" element = {<RegistrationPage/>} />
        <Route path ="/*" element={<NotFoundPage />} />
    
    </Routes>

 )
} 

export default AppRoutes;
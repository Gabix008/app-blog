import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from '../pages/Home/home'
import LogIn from'../pages/LogIn/logIn'
import Register from'../pages/Register/register'
import Private from "./Private"

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<Private><Home/></Private>}> </Route>
            <Route path="/entrar" element={<LogIn/>}> </Route>
            <Route path="/registrar" element={<Register/>}> </Route>
        </Routes>
    )
}
export default RoutesApp
import React from 'react';
import { Routes, Route } from "react-router-dom";
import {Form1} from "./Pages/Form1";
import {Form2} from "./Pages/Form2";
import {Users} from "./Pages/Users";



function App(){
    return(
        <>
        <Routes>
        <Route path="/" element = {<Form1 />}></Route>
        <Route exact path="/registration/one" element = {<Form1 />}></Route>
        <Route exact path="/registration/two" element = {<Form2 />}></Route>
        </Routes>
        </>
    );
}

export default App;
import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>     
        <Route path="/" element={<Home />} />  
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search/>} />
        </>
    
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

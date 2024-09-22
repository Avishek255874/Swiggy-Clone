import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hearder from "./Components/Header/Hearder";
import Catogory from "./Components/Catogory";
import Footer from "./Components/Footer/Footer";
import CardItems from "./Components/Card/CardItems";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hearder />
      <Catogory />
      <CardItems />
      <Footer />
    </>
  );
}

export default App;

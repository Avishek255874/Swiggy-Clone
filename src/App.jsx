import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hearder from './Components/Header/Hearder';
import Catogory from './Components/Catogory';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hearder/>
    <Catogory/>
     
    </>
  )
}

export default App

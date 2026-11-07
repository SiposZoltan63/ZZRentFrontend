import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Cards from "./components/Cards";
import Home from './pages/Home'

function App() {
  return (
    <div>
    {/*Header*/}
    <Header/>
    {/*Home*/}
    <Home/>
    </div>
  )
}

export default App

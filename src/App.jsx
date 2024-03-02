import React, { useEffect } from "react"
import "./App.css"
import PdfButtons from "./components/PdfButtons"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Naama from "./components/Naama"
import ModeButtonBox from "./components/ModeButtonBox"
import Contact from "./components/Contact"
import Info from "./components/Info"

function App() {
  useEffect(() => {
    if (
      !document.body.classList.contains("body-dark") &&
      !document.body.classList.contains("body-light")
    )
      document.body.classList.add("body-dark")
  }, [])

  return (
    <div className="page-container">
      <div className="all-content">
        <div className="intro-and-info">
          <Introduction />
          <Info />
        </div>
        <div className="side">
          <Naama />
          <Contact />
          <PdfButtons />
          <ModeButtonBox />
        </div>
      </div>
      <About />
    </div>
  )
}

export default App

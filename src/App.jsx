import React, { useEffect } from "react"
import "./App.css"
import Info from "./components/Info"
import PdfButtons from "./components/PdfButtons"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Naama from "./components/Naama"
import ModeButtonBox from "./components/ModeButtonBox"

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
      <div className="IntroAndInfo">
        <Introduction />
        <div className="NaamaAndInfo">
          <Naama />
          <Info />
          <PdfButtons />
          <ModeButtonBox />
        </div>
      </div>
      <About />
    </div>
  )
}

export default App

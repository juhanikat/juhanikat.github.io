import React, { useEffect, useState } from "react"
import "./App.css"
import Info from "./components/Info"
import PdfButtons from "./components/PdfButtons"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Naama from "./components/Naama"

function App() {
  const changeMode = () => {
    document.body.classList.toggle("body-light")
    document.body.classList.toggle("body-dark")
    if (modeButtonText === "Light Mode") {
      setModeButtonText("Dark Mode")
    } else {
      setModeButtonText("Light Mode")
    }
  }

  const [modeButtonText, setModeButtonText] = useState("Light Mode")

  useEffect(() => {
    if (
      !document.body.classList.contains("body-dark") &&
      !document.body.classList.contains("body-light")
    )
      document.body.classList.add("body-dark")
  }, [])

  let modeButton = (
    <button onClick={() => changeMode()}>{modeButtonText}</button>
  )

  return (
    <div className="page-container">
      {modeButton}
      <div className="IntroAndInfo">
        <Introduction />
        <div className="NaamaAndInfo">
          <Naama />
          <Info />
          <PdfButtons />
        </div>
      </div>
      <About />
    </div>
  )
}

export default App

import React from "react"
import "./App.css"
import Info from "./components/Info"
import PdfButtons from "./components/PdfButtons"
import Introduction from "./components/Introduction"
import About from "./components/About"
import Naama from "./components/Naama"

function App() {
  return (
    <div>
      <div className="IntroAndInfo">
        <Introduction />
        <div className="NaamaAndInfo">
          <Naama />
          <Info />
        </div>
      </div>
      <PdfButtons />
      <About />
    </div>
  )
}

export default App

import React from "react"
import "./App.css"
import naama from "../images/naama.png"
import Info from "./components/Info"
import PdfButtons from "./components/PdfButtons"
import Introduction from "./components/Introduction"
import { Fade } from "@mui/material"
import { Box } from "@mui/material"

function App() {
  return (
    <div>
      <Box>
        <Fade in={true} timeout={1000}>
          <img src={naama}></img>
        </Fade>
      </Box>
      <Info />
      <Introduction />
      <PdfButtons />
    </div>
  )
}

export default App

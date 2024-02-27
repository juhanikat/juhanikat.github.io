import React from "react"
import { Fade } from "@mui/material"
import { Paper } from "@mui/material"
import { useState } from "react"

const ModeButtonBox = () => {
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

  let modeButton = (
    <button onClick={() => changeMode()}>{modeButtonText}</button>
  )
  return (
    <Fade in={true} timeout={1000}>
      <Paper className="modebuttonbox" elevation={3}>
        {modeButton}
      </Paper>
    </Fade>
  )
}

export default ModeButtonBox

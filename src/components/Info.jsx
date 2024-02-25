import React from "react"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import { Email } from "@mui/icons-material"
import { Paper } from "@mui/material"

const Info = () => {
  return (
    <Paper className="info" elevation={3}>
      <a
        href="https://www.linkedin.com/in/juhani-kataja-1b211b2aa"
        target="_blank"
        rel="noreferrer"
      >
        www.linkedin.com/in/juhani-kataja-1b211b2aa
      </a>
      <br></br>
      <PhoneAndroidIcon /> +358 45 275 5102
      <br></br>
      <Email /> juhani.kataja@gmail.com
    </Paper>
  )
}

export default Info

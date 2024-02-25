import React from "react"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Email } from "@mui/icons-material"
import { Paper } from "@mui/material"
import { Fade } from "@mui/material"

const Info = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Paper className="info" elevation={3}>
        <LinkedInIcon className="icons"></LinkedInIcon>
        <a
          href="https://www.linkedin.com/in/juhani-kataja-1b211b2aa"
          target="_blank"
          rel="noreferrer"
        >
          www.linkedin.com/in/juhani-kataja-1b211b2aa
        </a>
        <br></br>
        <GitHubIcon className="icons" />
        <a href="https://github.com/juhanikat">https://github.com/juhanikat</a>
        <br></br>
        <PhoneAndroidIcon className="icons" /> +358 45 275 5102
        <br></br>
        <Email className="icons" /> juhani.kataja@gmail.com
      </Paper>
    </Fade>
  )
}

export default Info

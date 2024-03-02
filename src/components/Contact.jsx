import React from "react"
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { Email } from "@mui/icons-material"
import { Paper } from "@mui/material"
import { Fade } from "@mui/material"

const Contact = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Paper className="contact" elevation={3}>
        <p>
          <LinkedInIcon className="icons"></LinkedInIcon>
          <a
            href="https://www.linkedin.com/in/juhani-kataja-1b211b2aa"
            target="_blank"
            rel="noreferrer"
          >
            www.linkedin.com/in/juhani-kataja-1b211b2aa
          </a>
        </p>
        <p>
          <GitHubIcon className="icons" />
          <a href="https://github.com/juhanikat">
            https://github.com/juhanikat
          </a>
        </p>
        <p>
          <PhoneAndroidIcon className="icons" /> +358 45 275 5102
        </p>
        <p>
          <Email className="icons" /> juhani.kataja@gmail.com
        </p>
      </Paper>
    </Fade>
  )
}

export default Contact

import React from "react"
import { Fade } from "@mui/material"

const introText =
  "Hello! I'm Juhani, a 21-year old computer science student from Helsinki. "
const Introduction = () => {
  return (
    <Fade in={true} timeout={1000}>
      <div className="introduction">
        <p>{introText}</p>
      </div>
    </Fade>
  )
}

export default Introduction

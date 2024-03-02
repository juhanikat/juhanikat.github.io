import React from "react"
import { Fade } from "@mui/material"

const introText =
  "Hello! I'm Juhani, a 21-year old computer science student from Helsinki. I'm currently studying computer science in University of Helsinki."
const experience =
  "I know Python and JavaScript well and I have some experience with Fullstack development (React, Redux, Node.js, etc.)"
const source = "You can find the source code for this website "
const Introduction = () => {
  return (
    <Fade in={true} timeout={1000}>
      <div className="introduction">
        <p>{introText}</p>
        <p>{experience}</p>
        <p>{source}<a href="https://github.com/juhanikat/juhanikat.github.io">here.</a></p>
      </div>
    </Fade>
  )
}

export default Introduction

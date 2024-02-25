import React from "react"
import { Box } from "@mui/material"
import { Fade } from "@mui/material"
import naama2 from "../../images/naama2.jpeg"

const Naama = () => {
  return (
    <Box className="naama">
      <Fade in={true} timeout={1000}>
        <img className="portrait" width="256" src={naama2}></img>
      </Fade>
    </Box>
  )
}

export default Naama

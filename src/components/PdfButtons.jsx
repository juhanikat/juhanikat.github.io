import React from "react"
import CVEnglish from "../pdfs/Juhani Kataja CV English.pdf"
import CVFinnish from "../pdfs/Juhani Kataja CV Finnish.pdf"
import { Paper } from "@mui/material"
import { Fade } from "@mui/material"

const PdfButtons = () => {
  return (
    <Fade in={true} timeout={1000}>
      <Paper className="pdfbuttons" elevation={3}>
        My CVs:
        <br></br>
        <button onClick={() => window.open(CVEnglish, "_blank")}>
          English CV
        </button>
        <button onClick={() => window.open(CVFinnish, "_blank")}>
          Finnish CV
        </button>
      </Paper>
    </Fade>
  )
}

export default PdfButtons

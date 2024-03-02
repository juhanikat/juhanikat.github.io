import React from "react"
import { Paper } from "@mui/material"
import { Fade } from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"

const Info = () => {
  return (
    <div className="info">
      <Fade in={true} timeout={1000}>
        <Paper className="info-box" elevation={3}>
          <h2>Studies</h2>
          <h3>
            <SchoolIcon className="icons" />
            {"University of Helsinki, Computer Science, Bachelor's Degree"}
          </h3>
          <p>2021-2026</p>
        </Paper>
      </Fade>
      <Fade in={true} timeout={1000}>
        <Paper className="info-box-hidden" elevation={3}>
          <h2>Studies</h2>
          <h3>
            <SchoolIcon className="icons" />
            {"University of Helsinki, Computer Science, Bachelor's Degree"}
          </h3>
          <p>2021-2026</p>
        </Paper>
      </Fade>
      <Fade in={true} timeout={1000}>
        <Paper className="info-box-hidden" elevation={3}>
          <h2>Studies</h2>
          <h3>
            <SchoolIcon className="icons" />
            {"University of Helsinki, Computer Science, Bachelor's Degree"}
          </h3>
          <p>2021-2026</p>
        </Paper>
      </Fade>
      <Fade in={true} timeout={1000}>
        <Paper className="info-box-hidden" elevation={3}>
          <h2>Studies</h2>
          <h3>
            <SchoolIcon className="icons" />
            {"University of Helsinki, Computer Science, Bachelor's Degree"}
          </h3>
          <p>2021-2026</p>
        </Paper>
      </Fade>
    </div>
  )
}

export default Info

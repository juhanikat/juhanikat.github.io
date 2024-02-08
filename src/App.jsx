import React from "react"
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import naama from "../images/naama.png"
import Info from "./components/Info"
import { Fade } from "@mui/material"
import { Box } from "@mui/material"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Box>
          <Fade in={true} timeout={1000}>
            <img src={naama}></img>
          </Fade>
        </Box>
        <Info />
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

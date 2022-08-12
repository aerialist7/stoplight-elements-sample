import { StrictMode } from "react"
import { API } from "@stoplight/elements"
import "@stoplight/elements/styles.min.css"

function App() {
  return (
    <StrictMode>
      <div style={{height: "100vh"}}>
        <API
          apiDescriptionUrl="https://raw.githubusercontent.com/stoplightio/Public-APIs/master/reference/zoom/openapi.yaml"
        />
      </div>
    </StrictMode>
  )
}

export default App

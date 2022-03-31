import '@stoplight/elements/web-components.min.js'
import '@stoplight/elements/styles.min.css'
import './App.css'

function App() {
  return (
    <div className="App">
      {/*@ts-ignore*/}
      <elements-api
        apiDescriptionUrl="https://raw.githubusercontent.com/stoplightio/Public-APIs/master/reference/zoom/openapi.yaml"
      />
    </div>
  )
}

export default App

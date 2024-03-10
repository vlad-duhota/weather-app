import AppStructure from "./components/mainPage/appStructure"
import { BrowserRouter } from 'react-router-dom'

const App = (props) => {
  return (
    <BrowserRouter>
      <AppStructure />
    </BrowserRouter>
  )
}

export default App

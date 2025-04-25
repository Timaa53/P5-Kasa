import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Logement from '../pages/Logement/Logement'
import Error404 from '../pages/Error404/Error404'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement" element={<Logement />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
    </>
  )
}

export default App

import '../App.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Header from '../components/Header/Header'
// import About from '../pages/About/About'
// import Logements from '../pages/Logements/Logements'
// import Error404 from '../pages/Error404/Error404'

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/logements" element={<Logements />} />
      <Route path="*" element={<Error404 />} /> */}
    </Routes>
    </>
  )
}

export default App

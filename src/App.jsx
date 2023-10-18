
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Notification from './pages/Notification/Notification'
function App() {

  return (
    <>
<Router>
  <Navbar/>
  <Routes>
    <Route path='/'  exact element={ <Home/>}></Route>
    <Route path='/notification' exact element= {<Notification/>} ></Route>
    
  </Routes>
</Router>

 </>
  )
}

export default App

import{BrowserRouter,Route,Routes, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import Home from './Home'
import About from './About'
import Academics from './Academics'
import Contact from './Contact'
function App() {
    return(
        
        <>
        <BrowserRouter>
        <div className='container-fluid'>
            <div className='row'>
                <div classNme='col-md=12'>
<nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand text-warning" to="#">VJIT CAMPUS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/Academics">Academics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/Academics" element={<Academics/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            
        </Routes>
        
      </div>
    </div>
 </div>

        </BrowserRouter>
        </>

    ) 
 }
 export default App

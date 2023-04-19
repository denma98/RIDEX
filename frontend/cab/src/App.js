import './App.css';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { BrowserRouter as  Router,Route, Routes,} from "react-router-dom";

function App() {
  return (  

  <>     

      <Router>

        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/Login'  element = {<LogIn/>}/>
          <Route path='/SignUp'  element = {<SignUp/>}/>
        </Routes>
      </Router>


 
  </>
  )
}

export default App;

import ChooseVehicle from './pages/ChooseVehicle';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUpDriver from './pages/SignUpDriver';
import SignUpUser from './pages/SignUpUser';
import { BrowserRouter as  Router,Route, Routes,} from "react-router-dom";

function App() {
  return (  
    
    <>     
    
      <Router>

        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/Login'  element = {<LogIn/>}/>
          <Route path='/SignUpUser'  element = {<SignUpUser/>}/>
          <Route path='/SignUpDriver'  element = {<SignUpDriver/>}/>
          <Route path='/ChooseVehicle'  element = {<ChooseVehicle/>}/>
          
        </Routes>
      </Router> 
  </>
  )
}

export default App;

import './App.css';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { BrowserRouter, Route, Routes,} from "react-router-dom";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
          <Route exact path="/" Component={LogIn} />
          {/* <Route path="/Login" Component={LogIn} /> */}
          <Route path="/SignUp" Component={SignUp} />
         
      </Routes>
  </BrowserRouter>
  )
}

export default App;

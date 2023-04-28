import React from "react";
import "../pages/styles/LoginStyles.css"
import { Link } from "react-router-dom";


const LogIn = () => {
     
    
  return ( 
    
  <div  className="container">
    
  <div className="screen">
      <div className="screen__content">
          <form className="login">
              <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" placeholder="User name / Email" />
              </div>
              <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" placeholder="Password" />
              </div>
              <button className="button login__submit">
                  <span className="button__text">Log In Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
              </button>	

              <div className="newUser">

                <p style={{fontSize: "11px"}}>If not registered Sign Up as<Link type="submit" style={{textDecoration: "none", }} to="/signupUser"> User</Link> here.</p>
                <p style={{fontSize: "11px"}}>If not registered Sign Up as<Link type="submit" style={{textDecoration: "none"}} to="/signupDriver"> Driver</Link> here.</p>
                
                </div>
          </form>
          
      </div>
      <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>		
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
      </div>		
  </div>
</div>
)
};

export default LogIn;

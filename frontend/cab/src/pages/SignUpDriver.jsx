import React from "react";
import "../pages/styles/LoginStyles.css"


const SignUpDriver = () => {
  return (

    <div  className="container">
        <h1 style={{marginRight : "20%" , marginBottom : "32%"}}>SignUp as Driver</h1>
  <div className="screen">
      <div className="screen__content">
          <form className="login">
              <div className="signup__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" placeholder="Fullname " />
              </div>                
              <div className="signup__field">
                  <i className="login__icon fas fa-user"></i>
                  <input type="text" className="login__input" placeholder="Email" />
              </div>

              <div className="signup__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input type="password" className="login__input" placeholder="Password" />
              </div>
              <button className="button login__submit">
                  <span className="button__text">Sign up</span>
                  <i className="button__icon fas fa-chevron-right"></i>
              </button>	


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

export default SignUpDriver;

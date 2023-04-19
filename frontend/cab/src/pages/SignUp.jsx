import React from "react";
import "../pages/LoginStyles.css"
  


const SignUp = () => {
  return (

    <div  className="container">
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
          <div className="social-login">
              <h3>sign up via</h3>
              <div className="social-icons">
              <i className="fa-brands fa-instagram"></i>
                  <a href="#" className="social-login__icon fab fa-facebook"></a>
                  <a href="#" className="social-login__icon fab fa-twitter"></a>
              </div>
          </div>
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

export default SignUp;

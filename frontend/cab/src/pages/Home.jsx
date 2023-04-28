import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Map from "./Map.jsx";

const Total = styled.div `

margin-top : 50px;
position: absolute;
width: 1536px;
height: 2045px;
left: 0px;
top: 0px;

background: #070A12;
`

const Back = styled.div`
  background-image: url('./img/Frame.png');
  height: 100vh;
  width: 1536px;
  background-size: 100%;
`

const Heading = styled.div`
  
  /* display: flex;  */

  font-size: 44px;
  /* font-weight: 520; */
  color: white;
  text-align: center;
  margin-left: 25%;
  margin-right:20% ;
  margin-top: 55px;
  height: 150px;
  width: 800px;
`



const SubHeading = styled.p`
  
  color: #D679B1;
  margin-left: -40px;
  /* margin-right:10% ; */
  margin-top: 10%px;
  width: 900px;
`

const LocationButton = styled.button`

width: 600px;
padding: 10px;
height: 70px;
cursor: pointer;
border: none;
border-radius: 23px;
font-size: 20px;
font-weight: 600;
background-color: white;
margin-left: 10%;
`
const ButtonContainer = styled.div`
  
  display: flex; 
  color: white;
  text-align: center;
  margin-left: 12%;
  margin-right:auto ;
  margin-top: 150px;
  height: 100px;
  width: 1200px;
  
`

const Text = styled.div`
  
  font-size: 44px;
  color: white;
  text-align: center;
  margin-left: -5%;
  margin-top: 55px;
  height: 150px;
  width: 800px;
    
`

  const SignContainer = styled.div`
    position: absolute;
    width: 1537px;
    height: 192px;
    left: 0px;
    margin-top: 35%;
    background: #131823;   
  `

const SignButton = styled.button`
  color: white;
  margin-top: 5%;
  margin-left: 10%;
  font-size: 40px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 20%;
  
`

const Home = () => {

  const handleClick = (route) => {
    console.log("Button clicked");
    window.location = route;
  }

  return (   

    
    
      <>
      
      <Total>
      <Back>

      <Heading>
      Wherever you need to go, <p></p> we've got you covered.
      <SubHeading>
        Book a cab in just a few clicks!
      </SubHeading>

    </Heading>
    
    <ButtonContainer>

        <LocationButton>Current Location</LocationButton>
        <LocationButton>Destination</LocationButton>
        <LocationButton type = "submit"   style={{backgroundColor : '#D679B1'}} onClick={ () => {handleClick("/LogIn")}} >Request Ride</LocationButton>

        
      </ButtonContainer>
      
      </Back>

      <Map/>

      

      <Text>
        Rides we provide -
      <img src="./img/Cars.png" style={{height: "600px"  , width : "1200px", marginLeft: "30%"}}/>
      </Text>      
      <p>If not registered Sign Up as<Link type="submit" style={{textDecoration: "none"}} to="/signup"> User</Link> here.</p>
      <SignContainer>
        <SignButton> <Link type="submit" style={{textDecoration: "none"}} to="/SignupUser"> Sign up as a Rider </Link> </SignButton>
        <SignButton> <Link type="submit" style={{textDecoration: "none"}} to="/SignUpDriver"> Sign up as a Driver </Link> </SignButton>
      </SignContainer>

      </Total>
      
      </>
      
      

      
  )
};

export default Home;

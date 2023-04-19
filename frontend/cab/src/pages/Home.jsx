import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Back = styled.div `
  
  background-image: url(https://images.unsplash.com/photo-1653287886626-ebd9af889e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80);

  /* display: flex; */
  margin-top: -60px;
  height: 100vh;
  width: 1536px;
`

const Heading = styled.div`
  
  /* display: flex;  */

  font-size: 60px;
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
  margin-left: -30px;
  /* margin-right:10% ; */
  margin-top: 0px;
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


const Home = () => {

  const handleClick = (route) => {
    console.log("Button clicked");
    window.location = route;
  }

  return (   
    
      <>
      
      <Back>

      <Heading>
      Wherever you need to go, we've got you covered.
      <SubHeading>
        Book a cab in just a few clicks!
      </SubHeading>

    </Heading><ButtonContainer>

        <LocationButton>Current Location</LocationButton>
        <LocationButton>Destination</LocationButton>
        <LocationButton type = "submit"   style={{backgroundColor : '#D679B1'}} onClick={ () => {handleClick("/LogIn")}} >Request Ride</LocationButton>

      </ButtonContainer>
      </Back>
      
      </>
      
      

      
  )
};

export default Home;

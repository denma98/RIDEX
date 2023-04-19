import React from "react";
import styled from "styled-components";

const Back = styled.div `
  
  background-image: url(https://images.unsplash.com/photo-1653287886626-ebd9af889e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80);

  display: flex;
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
  height: 30hv;
  width: 800px;
`



const SubHeading = styled.p`
  
  color: #D679B1;
  margin-left: -30px;
  /* margin-right:10% ; */
  margin-top: 0px;
  width: 900px;
`
const ButtonContainer = styled.div`
  
  /* display: flex;  */
  text-align: center;
  margin-left: 25%;
  margin-right:20% ;
  margin-top: 55px;
  height: 30hv;
  width: 800px;
`

const LocationButton = styled.button`

width: 100px;
padding: 10px;
cursor: pointer;
border: none;
border-radius: 5px;
background-color: #da4ea2;
`

const Home = () => {
  return (
    <Back>
      <Heading>
        Wherever you need to go, we've got you covered.
        <SubHeading>
        Book a cab in just a few clicks!
      </SubHeading>
      </Heading>
      

      
    </Back>
  )
};

export default Home;

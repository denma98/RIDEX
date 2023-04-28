import React from 'react'
import styled from 'styled-components'


const Total = styled.div `

margin-top : 50px;
position: absolute;
width: 1536px;
height: 2045px;
left: 0px;
top: 0px;

background: #070A12;
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


const ChooseVehicle = () => {
  return (
    <>
    
    <Total>
        <h1 style={{marginLeft: "10%", color: "white", marginTop: "5%", fontSize: "48px", fontWeight: "200"}}>Choose Vehicle</h1>

        <ButtonContainer>
            
        </ButtonContainer>

    </Total>
    
    </>
  )
}

export default ChooseVehicle
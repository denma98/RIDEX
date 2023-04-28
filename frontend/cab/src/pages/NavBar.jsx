import React from "react";
import { useRef } from 'react'
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  padding: 25px 0px;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  scroll-snap-align: start;

`

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`
const Logo = styled.img`
  width: 120px;
  height: 22px;
  margin-left: 10%;
`
const List = styled.ul`
  margin-left: 20%;
  display: flex;
  gap: 20px;
  list-style: none;
`
const ListItem = styled.li`
  cursor: pointer;
  margin-left: 20%;
  font-weight: 600;
  &:hover {
    color: #8a447f;
    text-decoration: underline;
  }
`

export const NavBar = () => {
    const handleClick = (route) => {
        window.location = route;
    }

    return (
      <Section>
        <Container>
          <Links>
            <Logo src="./img/Ridex.png"  alt="Logo" />
            <List>
              <ListItem >Company</ListItem>
              <ListItem >Saftey</ListItem>
              <ListItem >Help</ListItem>
 
            </List>
          </Links>

        </Container>
      </Section>
    )
  }


export default NavBar

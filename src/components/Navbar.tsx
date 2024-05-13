import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.img`
  height: 50px;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li``;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  background-color: fuchsia;
  font-weight: bold;
  font-size: 15px;
`;

const ListAnchor = styled.a`
  text-decoration: none;
  color: white;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/images/logoEli.png" alt="logo" />
          <List>
            <ListAnchor href="#about">
              <ListItem>About</ListItem>
            </ListAnchor>

            <ListAnchor href="#experience">
              <ListItem>Experience</ListItem>
            </ListAnchor>

            <ListAnchor href="#projects">
              <ListItem>Projects</ListItem>
            </ListAnchor>

            <ListAnchor href="#contact">
              <ListItem>Contact</ListItem>
            </ListAnchor>
          </List>
        </Links>

        <Icons>
          <a
            href="https://www.linkedin.com/in/elijah-brown-henderson-983768144/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Hire Me</Button>
          </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;

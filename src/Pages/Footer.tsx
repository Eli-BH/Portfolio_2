import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Section = styled.div`
  height: 20svh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #19376d;
  @media only screen and (max-width: 768px) {
    height: 100svh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  height: 100%;

  //mobile
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;

  padding-left: 20px;
`;

const ContactTitle = styled.h1`
  font-size: 4rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
`;

const ContactText = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
  letter-spacing: 1.5px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  height: 30px;
  gap: 15px;
  font-size: 2rem;

  cursor: pointer;
`;

const LinkText = styled.a`
  color: white;
  font-size: 1.2rem;
  text-decoration: none;

  //mobile
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <Section id="contact">
      <Container>
        <Left>
          <ContactTitle>Contact</ContactTitle>
          <ContactText>Feel free to reach out!</ContactText>
        </Left>
        <Right>
          <LinkList>
            <LinkItem>
              <MdEmail />

              <LinkText
                target="_blank"
                rel="noopener"
                href="mailto:eli.i.henderson95@gmail.com"
              >
                Eli.i.henderson95@gmail.com
              </LinkText>
            </LinkItem>
            <LinkItem>
              <BsLinkedin />

              <LinkText
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/elijah-brown-henderson-983768144"
              >
                linkedin.com/in/elijah-brown-henderson-983768144
              </LinkText>
            </LinkItem>
            <LinkItem>
              <FaGithub />

              <LinkText
                target="_blank"
                rel="noopener"
                href="https://www.github.com/Eli-BH"
              >
                github.com/Eli-BH
              </LinkText>
            </LinkItem>
          </LinkList>
        </Right>
      </Container>
    </Section>
  );
};

export default Footer;

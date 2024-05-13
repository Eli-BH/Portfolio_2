import React from "react";
import styled from "styled-components";
import Badge from "../components/Badge";
import { experienceCards, experienceIcons } from "../utils/arrays";
import ExperienceCard from "../components/ExperienceCard";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 60%;
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 20px;

  text-align: left;
  height: 100%;

  @media only screen and (max-width: 768px) {
  }
`;

const Right = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;

  height: 100%;
`;

const IconsContainer = styled.div`
  display: grid; //
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  height: 100%;
  width: 100%;

  place-items: left;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ExperiencePage = () => {
  return (
    <Section id="experience">
      <Title>Experience</Title>
      <Container>
        <Left>
          <IconsContainer>
            {experienceIcons?.map((icon, index) => (
              <Badge key={index} title={icon.title} frontImage={icon.icon} />
            ))}
          </IconsContainer>
        </Left>
        <Right>
          {experienceCards?.map((cardItem, index) => (
            <ExperienceCard item={cardItem} />
          ))}
        </Right>
      </Container>
    </Section>
  );
};

export default ExperiencePage;

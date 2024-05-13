import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 75svh;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;

    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: 1.5px;
  font-weight: 700;
  color: white;
  flex: 1;
  width: 100%;
  justify-self: flex-start;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    margin-top: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex: 11;
  height: 100%;
  width: 1400px;
  overflow: auto;
  align-items: center;

  //mobile
  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 20px;
  }

  &::-webkit-scrollbar {
    display: block;
    width: 2px;
  }

  &::-webkit-scrollbar-track {
    background-color: #04152d;
    border-radius: 14px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #153060;
    border-radius: 14px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #0c2859;
  }
`;

const Card = styled.div`
  width: 400px;
  height: 550px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  padding-bottom: 20px;

  background: linear-gradient(#455ba1, #102344);

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.4);

  //mobile
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 450px;
  }
`;
const CardImage = styled.img`
  border-radius: 10px;
`;
const CardTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;

  //mobile
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: white;
  margin-bottom: 10px;

  //mobile
  @media only screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const CardPillContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  height: 50px;
  align-items: center;
  overflow: auto;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const CardPill = styled.div`
  background-color: rgba(0, 0, 0, 0.261);
  border-radius: 25px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
const CardPillText = styled.p`
  font-weight: semibold;
  letter-spacing: 1px;

  //mobile
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const CardLinkContainer = styled.div`
  width: 100%;

  display: flex;
  height: 50px;

  justify-content: center;
  align-items: center;
  gap: 30px;

  //mobile
`;

const CardLinkPill = styled.div`
  background-color: rgba(255, 0, 255);
  border-radius: 25px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(53, 3, 153, 0.1);
  width: 150px;

  &:hover {
    background-color: rgba(255, 0, 255, 0.5);
    cursor: pointer;
  }

  //mobile
  @media only screen and (max-width: 768px) {
    width: 100px;
  }
`;

const CardLinkText = styled.p`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 25px;

  //mobile
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const ProjectPage = () => {
  return (
    <Section id="projects">
      <Container>
        <Title>Projects</Title>

        <CardContainer>
          <Card>
            <CardImage src="https://source.unsplash.com/300x200" />
            <CardTitle>Project 1</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ac.
            </CardDescription>
            <CardPillContainer>
              <CardPill>
                <CardPillText>React</CardPillText>
              </CardPill>
              <CardPill>
                <CardPillText>Typescript</CardPillText>
              </CardPill>
              <CardPill>
                <CardPillText>Css</CardPillText>
              </CardPill>
              <CardPill>
                <CardPillText>Three.js</CardPillText>
              </CardPill>
            </CardPillContainer>
            <CardLinkContainer>
              <CardLinkPill>
                <CardLinkText>Link</CardLinkText>
              </CardLinkPill>
              <CardLinkPill>
                <CardLinkText>Source</CardLinkText>
              </CardLinkPill>
            </CardLinkContainer>
          </Card>
          <Card>
            <CardImage src="https://source.unsplash.com/300x200" />
            <CardTitle>Project 1</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ac.
            </CardDescription>
            <CardPillContainer>
              <CardPill>
                <CardPillText>React</CardPillText>
              </CardPill>
              <CardPill>
                <CardPillText>Typescript</CardPillText>
              </CardPill>
              <CardPill>
                <CardPillText>Css</CardPillText>
              </CardPill>
              <CardPill>
                <CardPillText>Three.js</CardPillText>
              </CardPill>
            </CardPillContainer>
            <CardLinkContainer>
              <CardLinkPill>
                <CardLinkText>Link</CardLinkText>
              </CardLinkPill>
              <CardLinkPill>
                <CardLinkText>Source</CardLinkText>
              </CardLinkPill>
            </CardLinkContainer>
          </Card>
          <Card>
            <CardImage src="https://source.unsplash.com/300x200" />
            <CardTitle>Project 1</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ac.
            </CardDescription>
            <CardPillContainer>
              <CardPill>
                <CardPillText>React</CardPillText>
              </CardPill>
              <CardPill>
                <CardPillText>Typescript</CardPillText>
              </CardPill>
              <CardPill>
                <CardPillText>Css</CardPillText>
              </CardPill>
              <CardPill>
                <CardPillText>Three.js</CardPillText>
              </CardPill>
            </CardPillContainer>
            <CardLinkContainer>
              <CardLinkPill>
                <CardLinkText>Link</CardLinkText>
              </CardLinkPill>
              <CardLinkPill>
                <CardLinkText>Source</CardLinkText>
              </CardLinkPill>
            </CardLinkContainer>
          </Card>
        </CardContainer>
      </Container>
    </Section>
  );
};

export default ProjectPage;

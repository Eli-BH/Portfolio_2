import { useState } from "react";
import styled from "styled-components";
import ModelSwitch from "../components/ModelSwitch";
import { aboutArrs } from "../utils/arrays";
import { returnAboutPassage } from "../utils/switches";

enum AboutSectionEnum {
  Photography = "Photography",
  Full = "Full",
  Mobile = "Mobile",
  Default = "",
}

const AboutPage = () => {
  const [selected, setSelected] = useState<AboutSectionEnum>(
    AboutSectionEnum.Full
  );

  return (
    <Section id="about">
      <Title>About Me</Title>
      <Container>
        <Card>
          <Left>
            <ModelContainer>
              <ModelSwitch selected={selected} />
            </ModelContainer>

            <AboutCardContainer>
              <AboutCard>
                <AboutSubText>{returnAboutPassage(selected)}</AboutSubText>
              </AboutCard>
            </AboutCardContainer>
          </Left>
          <Right>
            {aboutArrs?.map((about) => (
              <AboutSection
                onClick={() => setSelected(about.section)}
                className={selected === about.section ? "selected" : ""}
              >
                <AboutImage>
                  <AboutIcon src={about.icon} />
                </AboutImage>

                <AboutText>
                  <AboutTitle>{about.title}</AboutTitle>
                  <AboutDescription>{about.description}</AboutDescription>
                </AboutText>
              </AboutSection>
            ))}
          </Right>
        </Card>
      </Container>
    </Section>
  );
};

export default AboutPage;

const AboutSubText = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 400;
`;

const ModelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 5;
  width: 100%;
`;

const AboutCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
  padding-bottom: 20px;
`;

const AboutCard = styled.div`
  display: flex;

  width: 30rem;
  height: 15rem;
  border-radius: 15px;
  padding: 20px;

  background: linear-gradient(
    to left,
    rgba(7, 27, 55, 0.5) 0%,
    rgba(21, 48, 96, 0.8) 80%
  );
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-bottom: 25px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 100vh;
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

const Card = styled.div`
  width: 1400px;
  height: 70%;
  background-color: rgba(0, 0, 0, 0.6);
  background: linear-gradient(
    to right,
    rgba(7, 27, 55, 0.5) 0%,
    rgba(21, 48, 96, 0.8) 80%
  );
  border-radius: 15px;
  display: flex;

  box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 90%;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const AboutSection = styled.div`
  width: 100%;
  display: flex;
  height: 200px;
  overflow: hidden;
  justify-content: center;

  align-items: center;

  border-radius: 15px;

  @media only screen and (max-width: 768px) {
    height: 200px;
    padding: 10px;
    gap: 10px;
  }

  &:hover {
    background: linear-gradient(
      to right,
      rgba(188, 188, 288, 0.2) 0%,
      transparent 70%
    );

    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.1);
  }

  &.selected {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 70%
    );

    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.1);
  }
`;
const AboutIcon = styled.img`
  width: 100px;
  height: 100px;

  @media only screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 30px;
  flex: 5;

  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const AboutImage = styled.div`
  flex: 2;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const AboutTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
const AboutDescription = styled.p``;

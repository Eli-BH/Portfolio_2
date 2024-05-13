import React from "react";
import styled from "styled-components";
import { ExperienceCardI } from "../utils/interfaces";

const ExperienceCard = ({ item }: { item: ExperienceCardI }) => {
  return (
    <Card>
      <CardImageContainer>
        <CardImage src={item?.image} />
      </CardImageContainer>

      <CardTextContainer>
        <CardTitleText>
          <CardTitle>{item?.title}</CardTitle>
          <CardSubtitle>{item?.subtitle}</CardSubtitle>
        </CardTitleText>

        <CardList>
          {item?.list.map((item, index) => (
            <CardListItem key={index}>{item}</CardListItem>
          ))}
        </CardList>
      </CardTextContainer>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  background: linear-gradient(
    to right,
    rgb(43, 89, 175, 0.5) 0%,
    transparent 95%
  );
`;

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 3;
`;

const CardList = styled.ul`
  list-style-type: disc;
  padding: 0;
  flex: 3;
  margin-top: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    list-style-type: none;
  }
`;

const CardListItem = styled.li`
  color: white;
  margin-left: 20px;
  font-size: 13px;
  margin: 10px 0;
  margin-left: 20px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;

    margin-left: 10px;
  }
`;

const CardTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: white;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    letter-spacing: 0.5px;
  }
`;

const CardSubtitle = styled.p`
  font-size: 18px;
  color: white;
  letter-spacing: 1px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    letter-spacing: 0.5px;
  }
`;

const CardTitleText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CardImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
    margin-right: 10px;
  }
`;

export default ExperienceCard;

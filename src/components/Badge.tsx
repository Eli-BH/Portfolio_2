import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const CoinWrapper = styled(motion.div)`
  width: 170px;
  height: 170px;
  perspective: 1000px;
  cursor: pointer;

  // mobile
  @media only screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const CoinFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FrontFace = styled(CoinFace)`
  background-color: #19376d;
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: semibold;
  margin-top: 10px;
  letter-spacing: 1px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Badge = ({
  title,
  frontImage = "/images/logoEli.png",
}: {
  title: string;
  frontImage: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCoin = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container>
      <CoinWrapper
        onClick={flipCoin}
        animate={{ rotateY: isFlipped ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <FrontFace>
          <img src={frontImage} alt="Front" />
        </FrontFace>
      </CoinWrapper>

      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
    </Container>
  );
};

export default Badge;

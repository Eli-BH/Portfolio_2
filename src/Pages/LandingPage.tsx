import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100svh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1440px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;revers
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 50px;

  text-align: left;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 1; //
  position: relative;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Headline = styled.h1`
  font-size: 68px;
  font-weight: bold;
  color: white;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Introduction = styled.p`
  font-size: 24px;
  color: white;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 200px;
  padding: 10px;
  height: 50px;
  border: none;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  background-color: fuchsia;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: 1px;

  transition: all 0.5s ease;
  &:hover {
    background-color: #ba28ba;
    transform: scale(0.95);
  }
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const LandingPage = () => {
  return (
    <Section id="hero">
      <Navbar />
      <Container>
        <Left>
          <Headline>Hi, I'm Eli</Headline>
          <Introduction>
            Hi, I'm Elijah Brown-Henderson, a Full-stack Developer and
            Photographer passionate about creating innovative software solutions
            that enhance user experiences and streamline operations. Explore my
            portfolio to see how I connect technology and everyday life, one
            line of code (and one photo) at a time.
          </Introduction>

          <a href="/docs/Elijah_Brown-Henderson_Resume.pdf" download>
            <Button>Contact Me</Button>
          </a>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} intensity={1.5} />
            <Sphere args={[1, 100, 200]} scale={1.6}>
              <MeshDistortMaterial
                color="#3d095d"
                attach="material"
                distort={0.5}
                speed={1}
              />
            </Sphere>
          </Canvas>

          <Img src="/images/avataaars.png" alt="avatar" />
        </Right>
      </Container>
    </Section>
  );
};

export default LandingPage;

import styled from "styled-components";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ExperiencePage from "./Pages/ExperiencePage";
import ProjectPage from "./Pages/ProjectPage";
import Footer from "./Pages/Footer";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  overflow: auto;
  color: white;
  background-image: url("./images/tumblr_ovv15g1TTw1qeyvpto1_500.gif");
  background-size: cover;
  position: relative;
`;

const GlassmorphicOverlay = styled.div`
  width: 100%;
  min-height: 100vh; /* Ensure at least the viewport height */
  backdrop-filter: blur(20px);
  background: rgba(7, 27, 55, 0.4);

  border: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(
    to right,
    rgba(7, 27, 55, 0.4) 0%,
    rgba(21, 48, 96, 0.8) 80%
  );
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <GlassmorphicOverlay>
        <PageWrapper>
          <LandingPage />
          <AboutPage />
          <ExperiencePage />
          <ProjectPage />
          <Footer />
        </PageWrapper>
      </GlassmorphicOverlay>
    </Container>
  );
}

export default App;

import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowToStrike } from './components/HowToStrike';
import { ReasonsToStrike } from './components/ReasonsToStrike';
import { SectionLabel } from './components/SectionLabel';
import { SocialMedia } from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <Container>
        <Hero />
        <div style={{ marginBottom: "128px" }} />
        <SectionLabel number={1} heading="Reasons To Strike" startColor="#007CF0" endColor="#00DFD8" />
        <div style={{ marginBottom: "64px" }} />
        <ReasonsToStrike />
        <div style={{ marginBottom: "64px" }} />
        <SectionLabel number={2} heading="How To Strike" startColor="#7928CA" endColor="#FF0080" />
        <div style={{ marginBottom: "64px" }} />
        <HowToStrike />
        <div style={{ marginBottom: "64px" }} />
        <SectionLabel number={3} heading="Social Media" startColor="#FF4D4D" endColor="#F9CB28" />
        <div style={{ marginBottom: "64px" }} />
        <SocialMedia />
        <div style={{ marginBottom: "64px" }} />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

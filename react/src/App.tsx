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
        <SectionLabel number={1} heading="Reasons To Strike" startColor="#007CF0" endColor="#00DFD8" />
        <ReasonsToStrike />
        <SectionLabel number={2} heading="How To Strike" startColor="#7928CA" endColor="#FF0080" />
        <HowToStrike />
        <SectionLabel number={3} heading="Social Media" startColor="#FF4D4D" endColor="#F9CB28" />
        <SocialMedia />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

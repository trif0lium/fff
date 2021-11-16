import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HowToStrike } from './components/HowToStrike';
import { ReasonsToStrike } from './components/ReasonsToStrike';
import { SocialMedia } from './components/SocialMedia';

function App() {
  return (
    <div className="App">
      <Container>
        <Hero />
        <ReasonsToStrike />
        <HowToStrike />
        <SocialMedia />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

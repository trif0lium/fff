import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowToStrike } from './components/HowToStrike'
import { ReasonsToStrike } from './components/ReasonsToStrike'
import { SocialMedia } from './components/SocialMedia'

function App() {
  return (
    <div className="App">
      <Hero />
      <ReasonsToStrike />
      <HowToStrike />
      <SocialMedia />
      <Footer />
    </div>
  )
}

export default App

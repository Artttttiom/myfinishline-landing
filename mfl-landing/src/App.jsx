import Header from './components/Header'
import Hero from './components/Hero'
import ChooseQuest from './components/ChooseQuest'
import HowItWorks from './components/HowItWorks'
import Participation from './components/Participation'
import Trusted from './components/Trusted'
import Guarantee from './components/Guarantee'
import FAQ from './components/FAQ'
import LevelUp from './components/LevelUp'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ChooseQuest />
        <HowItWorks />
        <Participation />
        <Trusted />
        <Guarantee />
        <FAQ />
        <LevelUp />
      </main>
      <Footer />
    </div>
  )
}

export default App

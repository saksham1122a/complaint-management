
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <FeatureSection/>
    <Footer/>
    </>                                                                                                                                                                                                                                          
  )
}

export default App

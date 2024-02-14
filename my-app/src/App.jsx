import './App.css'
import { Form } from './components/Form/Form'
import { FormImage } from './components/FormImage/FormImage'
import { Gallery } from './components/Gallery/Gallery'
import { LandingPage } from './components/LandingPage/LandingPage'
import { Pricing } from './components/Pricing/Pricing'

function App() {
  return (
    <>
      <LandingPage />
      <Gallery />
      <Pricing />
      <FormImage />
      <Form />
    </>
  )
}

export default App

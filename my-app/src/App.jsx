import { Form } from './components/Form/Form'
import { FormImage } from './components/FormImage/FormImage'
import { Gallery } from './components/Gallery/Gallery'
import { LandingPage } from './components/LandingPage/LandingPage'
import { Pricing } from './components/Pricing/Pricing'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.main}>
      <LandingPage />
      <Gallery />
      <Pricing />
      <Form />
      <FormImage />
    </main>
  )
}

export default App

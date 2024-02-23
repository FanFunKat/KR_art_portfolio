import styles from './App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form } from './components/Form/Form'
import { FormImage } from './components/FormImage/FormImage'
import { Gallery } from './components/Gallery/Gallery'
import { LandingPage } from './components/LandingPage/LandingPage'
import { Pricing } from './components/Pricing/Pricing'
import { Navigation } from './components/Navigation/Navigation'
import { Woopsie } from './components/Woopsie/Woopsie'

function App() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<><LandingPage /></>} />
          <Route path="/gallery" element={<Gallery />} >
            <Route path=":id" element={<FormImage />} />
            <Route path=":whatever" element={<Woopsie />} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

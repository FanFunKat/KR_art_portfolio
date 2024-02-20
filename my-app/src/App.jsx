import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Form } from './components/Form/Form'
import { FormImage } from './components/FormImage/FormImage'
import { Gallery } from './components/Gallery/Gallery'
import { LandingPage } from './components/LandingPage/LandingPage'
import { Pricing } from './components/Pricing/Pricing'
import styles from './App.module.css'
import { Navigation } from './components/Navigation/Navigation'

function App() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<><LandingPage /></>} />
          <Route path="/gallery" element={<Gallery />} >
            <Route path=":id" element={<FormImage />} />
          </Route>
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

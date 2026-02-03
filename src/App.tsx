import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import TripDetails from './pages/TripDetails'
import { LanguageProvider } from './lib/i18n'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/Travel-Dapp/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trip/:id" element={<TripDetails />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

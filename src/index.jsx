import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './scss/main.scss'
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import APropos from './pages/APropos'
import Error404 from './pages/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

export const BASENAME = 'Kasa'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes basename={BASENAME}>
        <Route path={BASENAME + '/'} element={<Home />}></Route>
        <Route
          path={BASENAME + '/fiche-logement/:id'}
          element={<FicheLogement />}
        ></Route>
        <Route path={BASENAME + '/a-propos'} element={<APropos />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

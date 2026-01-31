import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import App from './App.jsx'
import ReservarPage from './pages/ReservarPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import Profile from './pages/Profile.jsx'
import Novetats from './pages/Novetats.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/reservar' element={<ReservarPage />} />
      <Route path='/login'  element={<LoginPage />}/>
      <Route path='/sign-up' element={<SignUpPage />}/>
      <Route path='/profile' element={<Profile />} />
      <Route path='/novetats' element={<Novetats />} />
    </Routes>
  </BrowserRouter>,
)

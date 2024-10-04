import { useState } from 'react'
import Busca from './components/Busca/Busca'
import './App.css'
import RoutesApp from './Routes'
import AuthProvider from './Contexts/auth'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import ModalProvider from './components/modal'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <BrowserRouter>
      <AuthProvider>
      <ModalProvider>
      <ToastContainer autoClose={3000}/>
      <RoutesApp/>
      </ModalProvider>
      </AuthProvider>
      </BrowserRouter>
  )
}
export default App

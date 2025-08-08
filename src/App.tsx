import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import ListaFuncionarios from './components/funcionarios/listafuncionarios/ListaFuncionarios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
            <Navbar />
            <div className='min-h-[80vh]'>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/funcionarios' element={<ListaFuncionarios />} />
                {/* <Route path='/' element={< />} /> */}
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
    </>
  )
}

export default App

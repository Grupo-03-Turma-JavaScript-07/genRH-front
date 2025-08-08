import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className='grid grid-cols-[0.25fr_1.50fr] min-h-screen'>
          <div className='h-full'>
            <Navbar />
          </div>
          <div className='flex flex-col'>
            <div className='flex-1'>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                {/* <Route path='/' element={< />} /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

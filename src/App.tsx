import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import ListaFuncionarios from './components/funcionarios/listafuncionarios/ListaFuncionarios'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Manutencao from './pages/manutencao/Manutencao'
import Deletardepartamento from './components/departamentos/deletardepartamento/Deletardepartamento'
import Formdepartamento from './components/departamentos/formdepartamento/Formdepartamento'
import Listadepartamento from './components/departamentos/listadepartamento/Listadepartamento'


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
                <Route path='/funcionarios' element={<ListaFuncionarios />} />
                <Route path='/manutencao' element={<Manutencao />} />
                <Route path="/departamentos" element={<Listadepartamento />} />
                <Route path="/departamentos/editar/:id" element={< Formdepartamento/>} />
                <Route path="/departamentos/deletar/:id" element={< Deletardepartamento/>} />
                <Route path="/departamentos/cadastrar" element={<Formdepartamento />} />
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

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Deletardepartamento from './components/departamentos/deletardepartamento/Deletardepartamento'
import Listadepartamento from './components/departamentos/listadepartamento/Listadepartamento'
import Footer from './components/footer/Footer'
import ListaFuncionarios from './components/funcionarios/listafuncionarios/ListaFuncionarios'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Manutencao from './pages/manutencao/Manutencao'
import DeletarFuncionario from './components/funcionarios/deletarfuncionario/DeletarFuncionario'
import FormFuncionario from './components/funcionarios/formfuncionarios/FormFuncionario'
import Landing from './pages/landing/Landing'
import FormDepartamento from './components/departamentos/formdepartamento/Formdepartamento'


function AppRoutes() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/land' || '/login';

  return (
    <>
      {!isLoginPage ? (
        <div className='grid grid-cols-[0.25fr_1.50fr] min-h-screen'>
          <div className='h-full'>
            <Navbar />
          </div>
          <div className='flex flex-col'>
            <div className='flex-1'>
              <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/funcionarios' element={<ListaFuncionarios />} />
                <Route path='/manutencao' element={<Manutencao />} />
                <Route path="/departamentos" element={<Listadepartamento />} />
                <Route path="/departamentos/editar/:id" element={< FormDepartamento />} />
                <Route path="/departamentos/deletar/:id" element={< Deletardepartamento />} />
                <Route path="/departamentos/cadastrar" element={<FormDepartamento />} />
                <Route path="/funcionarios" element={<ListaFuncionarios />} />
                <Route path="/cadastrarfuncionario" element={<FormFuncionario />} />
                <Route path="/editarfuncionario/:id" element={<FormFuncionario />} />
                <Route path="/deletarfuncionario/:id" element={<DeletarFuncionario />} />
                {/* <Route path='/' element={< />} /> */}
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        // Rotas que não possuem a Navbar (Login)
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
        </Routes>
         )}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App

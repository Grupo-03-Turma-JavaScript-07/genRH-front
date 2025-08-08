import './Login.css';

function Login() {

    return (
        <>
            <div className="container flex flex-col items-center justify-center mx-auto fundoLogin lg:block">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4 mx-auto p-20 " >
                
                    <h2 className="text-white text-5xl ">Login</h2>
                    <div className="flex flex-col w-full text-white">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-white rounded p-2"

                        />
                    </div>
                    <div className="flex flex-col w-full text-white">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-white rounded p-2"

                        />
                    </div>
                    <button 
                        type='submit' 
                        className="rounded-xl bg-[#A81616] flex justify-center
                                  hover:bg-[#750A1F] text-white w-1/2 py-2">
                        <span>Entrar</span>
                    </button>

                    <hr className="border-white w-full" />
                  
                </form>
                
            </div>
        </>
    );
}

export default Login;
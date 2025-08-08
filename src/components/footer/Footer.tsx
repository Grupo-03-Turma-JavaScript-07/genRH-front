import { GithubLogoIcon } from "@phosphor-icons/react"


function Footer() {

  const data = new Date().getFullYear()
  
  return (
    <>
      <div className="flex justify-center bg-red-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            GenRH - Grupo 03 | Copyright: {data}
          </p>
          <p className="text-lg">
            Acesse nossas redes sociais
          </p>
          <div className="flex gap-2 py-2">
            <a href="https://github.com/Grupo-03-Turma-JavaScript-07" target="_blank" ><GithubLogoIcon size={32} weight="fill" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
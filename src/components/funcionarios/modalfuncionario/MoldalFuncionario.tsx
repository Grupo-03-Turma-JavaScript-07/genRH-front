import FormFuncionario from "../formfuncionarios/FormFuncionario";

function ModalFuncionario() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
            Nova Funcionário
          </button>
        }
        modal
      >
        <FormFuncionario />
      </Popup>
    </>
  );
}

export default ModalFuncionario;
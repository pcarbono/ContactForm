function Form() {
    return (
      <main className="bg-gray-800 p-10">
        <form className="container max-w-md mx-auto text-white" >
          <input className="p-3 w-full mb-2 bg-gray-800 border-b" placeholder="Nombre*" />
          <input className="p-3 w-full mb-2 bg-gray-800 border-b" placeholder="Apellidos*" />
          <input className="p-3 w-full mb-2 bg-gray-800 border-b" placeholder="Email*" />
          <input className="p-3 w-full mb-2 bg-gray-800 border-b" placeholder="Pais*" />
          <input className="p-3 w-full mb-2 bg-gray-800 border-b" placeholder="Empresa / Organismo" />
          <input className="p-3 w-full mb-2 bg-gray-800 border-b" placeholder="Cargo*" />
          <input className="p-3 w-full mb-2 bg-gray-800 border-b" placeholder="Teléfono*" />
          <textarea
            className="p-3 w-full mb-2 bg-gray-800 border rounded-lg"
            placeholder="Cuentanos como podemos ayudarte"
          />
          <li className="list-none">
            <div className="flex items-center pl-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="w-full py-3 ml-2 text-sm font-medium text-white">
                He leído y acepto la política de privacidad y datos personales.*
              </label>
            </div>
          </li>
  
          <li className="list-none">
            <div className="flex items-center pl-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="w-full py-3 ml-2 text-sm font-medium text-white">
                {" "}
                Acepto el envío de mi dirección de correo electrónico de
                comunicaciones relacionadas con eventos, productos e iformacipones
                de intereés de VASS.
              </label>
            </div>
          </li>
          <spam className="flex justify-center mt-4">
          <button className="bg-red-500 py-2 px-5 rounded-md hover:bg-red-400 animate-bounce">Enviar</button>
          </spam>
        </form>
      </main>
    );
  }
  
  export default Form;
  
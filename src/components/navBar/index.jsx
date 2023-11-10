const NavBar = () => {
  return (
    <>
      <header className="flex items-center flex-col md:flex-row bg-slate-100 p-5 xl:flex-row justify-between h-full sm:h-full md:h-full xl:h-24">
        <div className="mb-3 md:mb-0">
          <img
            src="../../../public/imgs/logo.png"
            alt="Logotipo Ecommerce"
            className="w-60 md:w-30"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <ul className="flex gap-7 md:gap-12">
            <li className="cursor-pointer font-bold text-green-500 hover:text-green-700 transition-all">
              INICIO
            </li>
            <li className="cursor-pointer font-bold text-green-500 hover:text-green-700 transition-all">
              CATEGORIAS
            </li>
            <li className="cursor-pointer font-bold text-green-500 hover:text-green-700 transition-all">
              SOBRE
            </li>
            <li className="cursor-pointer font-bold text-green-500 hover:text-green-700 transition-all">
              CONTATO
            </li>
          </ul>
          <div className="flex items-center gap-5 w-[300px] border border-green-500 rounded-lg py-3 px-5 shadow-sm">
            <span className="flex-shrink-0 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="w-full bg-transparent border-none outline-none focus:outline-none placeholder-green-500"
              placeholder="Insira a busca aqui..."
            />
          </div>
        </div>
        <div className="flex-none items-center text-green-500 hover:text-green-700 transition-all hidden xl:flex pr-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.4em"
            viewBox="0 0 448 512"
            className="cursor-pointer fill-green-500"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <span className="px-2 text-xs">Entrar/Cadastrar</span>
        </div>
      </header>
    </>
  );
};

export default NavBar;

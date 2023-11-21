const categorias = [
  {
    titulo: "Street Wear",
    subTitulo: "Roupas casuais e urbanas para um estilo descontraído",
    img: "https://images.pexels.com/photos/1036396/pexels-photo-1036396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    titulo: "Indie",
    subTitulo: "Uma abordagem alternativa com um toque artístico.",
    img: "https://images.pexels.com/photos/3807093/pexels-photo-3807093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    titulo: "Summer Wear",
    subTitulo: "Roupas leves e confortáveis perfeitas para o verão.",
    img: "https://images.pexels.com/photos/9712019/pexels-photo-9712019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    titulo: "Formal Wear",
    subTitulo: "Vestimenta elegante adequada para ocasiões formais.",
    img: "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const CatalogMenu = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <div className="relative flex items-center justify-center w-full lg:w-1/3 ">
          <div className="z-20 flex flex-col text-center">
            <h1 className="text-lg font-bold text-white">CATEGORIAS</h1>
            <span className="font-thin text-white">
              Encontre a categoria ideal para formar seu estilo
            </span>
          </div>
          <div className="absolute inset-0 z-0">
            <div className="bg-purple-800 bg-opacity-90 absolute inset-0"></div>
            <img
              src="https://images.pexels.com/photos/1868471/pexels-photo-1868471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row">
          {categorias.map((cat, index) => {
            return (
              <>
                <div
                  aria-label="card-item-v3"
                  className="flex flex-col w-[320px] rounded-xl p-5"
                  key={index}
                >
                  <div className="relative flex-shrink-0 mb-5 h-[250px]">
                    <img
                      src={cat.img}
                      alt={"imagem " + index}
                      className="object-cover w-full h-full rounded-md hover:scale-105 transition-all"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <h3 className="mb-3 text-lg font-bold">{cat.titulo}</h3>
                    <span className="font-sans">{cat.subTitulo}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CatalogMenu;

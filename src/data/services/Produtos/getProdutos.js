const getProdutos = async () => {
  try {
    const response = await fetch("http://localhost:3000/Products");

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na requisição:", error.message);
    throw error;
  }
};

const fetchDataProdutos = async (setProdutos) => {
  try {
    const pullProdutos = await getProdutos();
    setProdutos(pullProdutos);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
};

export default fetchDataProdutos;

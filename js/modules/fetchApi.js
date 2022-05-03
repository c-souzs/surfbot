export default async function fetchApi(url) {
  let response;
  let rJson;
  const carregando = document.querySelector(".carregando");

  // Ativa a modal de carregando
  carregando.classList.add("js-ativo-flex");
  try {

    // Extrai os dados em json
    response = await fetch(url);
    rJson = await response.json();

    if (!response.ok) throw new Error("Erro ao acessar a api :(");
    carregando.classList.remove("js-ativo-flex");
  } catch (erro) {
      
    // Alerta o usuário do erro
    carregando.innerHTML = "Erro ao acessar a api :(";
    setTimeout(() => {
      carregando.classList.remove("js-ativo-flex");
    }, 5000);
  }
  return { response, rJson };
}

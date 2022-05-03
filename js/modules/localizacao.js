import fetchApi from "./fetchApi.js";

export default async function localizacao(cep) {
  // Contém todos os estados com a sigla e nome para exibir no dom
  const nomesEstados = {
    AC: "Acre - AC",
    AL: "Alagoas - AL",
    AP: "Amapá - AP",
    AM: "Amazonas - AM",
    BA: "Bahia - BA",
    CE: "Ceará - CE",
    ES: "Espírito Santo - ES",
    GO: "Goiás - GO",
    MA: "Maranhão - MA",
    MT: "Mato Grosso - MT",
    MS: "Mato Grosso do Sul - MS",
    MG: "Minas Gerais - MG",
    PA: "Pará - PA",
    PB: "Paraíba - PB",
    PR: "Paraná - PR",
    PE: "Pernanmbuco - PE",
    PI: "Piauí - PI",
    RJ: "Rio de Janeiro - RJ",
    RN: "Rio Grande do Norte - RN",
    RS: "Rio Grande do Sul - RS",
    RO: "Rondônia - RO",
    RR: "Roraima - RR",
    SC: "Santa Catarina - SC",
    SP: "São Paulo - SP",
    SE: "Sergipe - SE",
    TO: "Tocantins -TO",
    DF: "Distrito Federal - DF",
  };
  const inputEstado = document.querySelector('[data-localizacao="estado"]');
  const selectCidades = document.querySelector('[data-localizacao="cidades"]');
  const campoCep = document.querySelector('[data-localizacao="cep"]');
  let uf;

  // Busca na api o estado baseado no cpe e armazena o uf
  const dadosCep = await fetchApi(`https://viacep.com.br/ws/${cep}/json/`);

  if (dadosCep.rJson) {
    uf = dadosCep.rJson.uf;
  } else {
    campoCep.value = "";
    return;
  }

  inputEstado.value = nomesEstados[uf];

  // Busca as cidades baseado no uf e lista no select
  const cidades = await fetchApi(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
  );

  const options = cidades.rJson.reduce((acumulador, item, index) => {
    const option = item.nome;
    const optionValue = item.nome.toLocaleLowerCase().replace(/\s/g, "");
    let htmlLi;

    index === 0
      ? (htmlLi = `<option value="" disabled selected>${option}</option>`)
      : "";

    htmlLi !== undefined
      ? (htmlLi += `<option value="${optionValue}">${option}</option>`)
      : (htmlLi = `<option value="${optionValue}">${option}</option>`);

    return (acumulador += htmlLi);
  }, "");

  selectCidades.removeAttribute("disabled");
  selectCidades.innerHTML = options;

  console.log(cidades);
}

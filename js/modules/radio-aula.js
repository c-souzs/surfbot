export default function radioAula(i) {
  const aulas = document.querySelectorAll("div[data-aula]");
  const liAulas = document.querySelectorAll(".matricula-esquerda .opcs li");

  // Calcula a margin para deixar o elemento visivel ao usuário, limpa/desativa o elemento anterior e ativa o elemento clicado
  const margin = aulas[1].clientWidth + 40;
  aulas.forEach((aula) => aula.classList.remove("marcado-aula"));
  aulas[i].classList.add("marcado-aula");
  document.querySelector(".matricula .aulas-lista").style.marginLeft = `-${
    margin * i
  }px`;

  // Atualizar aula selcionada, opc
  liAulas.forEach((li) => li.classList.remove("marcado-aula"));
  liAulas[i].classList.add("marcado-aula");

  // Atualiza o preço que será debitado no cartão
  const span = document.querySelector(".confirmar span");
  const precoAtual = document.querySelector(".marcado-aula > span").innerText;
  const precoLimpo = precoAtual.replace("/ Aula", "");

  span.innerText = `Seu cartão será debitado em ${precoLimpo}`;
}

export default function radioPagemento(i) {
  const liPagamento = document.querySelectorAll('.pagamento .opcs li');
  const sectionsPagamento = document.querySelectorAll("div[data-pagamento]");

  liPagamento.forEach((li) => li.classList.remove("marcado-pagamento"));
  sectionsPagamento.forEach((section) => section.classList.add("js-inativo"));
  liPagamento[i].classList.add("marcado-pagamento");
  sectionsPagamento[i].classList.remove("js-inativo");
}

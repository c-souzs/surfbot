import radioAula from "./radio-aula.js";
import radioPagemento from "./radio-pagamento.js";

export default function radioAcoes() {
  const eventos = ["click", "touchstart"];
  const inputsAula = document.querySelectorAll('[data-aula="opc"]');
  const inputsPagamento = document.querySelectorAll('[data-pagamento="opc"]');

  if (inputsPagamento.length && inputsAula.length) {
    // Adiciona os eventos nos inputs de pagamento
    inputsPagamento.forEach((input, index) => {
      eventos.forEach((evento) =>
        input.addEventListener(evento, () => {
          radioPagemento(index);
        })
      );
    });

    // Adiciona o evento nos inputs de aula
    inputsAula.forEach((input, index) => {
      eventos.forEach((evento) =>
        input.addEventListener(evento, () => {
          radioAula(index);
        })
      );
    });
  }
}

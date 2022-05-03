import validaInput from "./validaInput.js";

export default function validacaoForm() {
    const inputs = document.querySelectorAll('[data-validar]');

    // Adiciona o evento ao input e chama o callback, que valida o campo
    inputs.forEach(input => {
        input.addEventListener('blur', () => validaInput(input.getAttribute('data-validar'), input.value, input));
    });

}
export default function validaInput(tipoDado, valor, elemento) {

    // Armazena as regex e a mensage mde erro baseado em cada tipo de validacao
    const validacao = {
        email: {
            regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
            mensagemErro: 'Email inválido'
        },
        cpf: {
            regex: /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
            mensagemErro: 'Preencha um cpf válido'
        },
        cep: {
            regex: /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/,
            mensagemErro: 'Cep incorreto'
        }
    }

    // Adiciona a mensagem do erro
    const error = m => {
        const pai = elemento.parentNode;
        const divErro = pai.querySelector('p');
        divErro.innerText = m;
    } 

    // Remove a validação e verifica se está validado
    elemento.removeAttribute('validado');
    const acesso = validacao[tipoDado];

    if(valor.length === 0){
        error('Preencha um valor');
    } else if (!acesso.regex.test(valor)) {
        error(acesso.mensagemErro);
    } else{
        error('');
        elemento.setAttribute('validado', '');
    }

    // Adiciona o evento de clique para que não seja mostrado a mensagem de erro quando o usário está digitando
    elemento.addEventListener('click', () => error(''));
}
import cliqueFora from './clique-fora.js';

export default function menuMobile(){
    const eventos = ['click', 'touchstart'];
    const btnMenu = document.querySelector('[data-menu="menu-btn"]');
    const listaMenu = document.querySelector('[data-menu="menu-lista"]');
    if (btnMenu !== null && listaMenu !== null) {

        const abrirMenu = e => {
            e.preventDefault();
            // Mostra as opções do menu
            listaMenu.classList.add('js-ativo');
            btnMenu.classList.add('js-ativo-flex');

            // Ativa o event bubble para verificar cliques fora do menu
            cliqueFora(listaMenu, eventos, () => {
                listaMenu.classList.remove('js-ativo');
                btnMenu.classList.remove('js-ativo-flex');
            });
        }

        // Adiciona o evento no botoao
        eventos.forEach(evento => btnMenu.addEventListener(evento, abrirMenu));
    }
}
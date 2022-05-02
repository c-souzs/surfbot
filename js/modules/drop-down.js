import cliqueFora from "./clique-fora.js";

export default function dropDown(){
    const btnsMenu = document.querySelectorAll('[data-drop-down]');
    const eventos = ['click', 'touchstart'];

    if(btnsMenu.length){
        const cliqueBtn = e => {
            e.preventDefault();
            const elementoThis = e.currentTarget;
            
            // Mostra o menu
            elementoThis.classList.add('js-ativo-flex');

            // Ativa o event bubble para verificar cliques fora do menu
            cliqueFora(elementoThis, eventos, () => {
                elementoThis.classList.remove('js-ativo-flex');
            });
        }
        // Adiciona o evento no botao de menu
        btnsMenu.forEach(btn => {
            eventos.forEach(evento => btn.addEventListener(evento, cliqueBtn));
        });
    }
}
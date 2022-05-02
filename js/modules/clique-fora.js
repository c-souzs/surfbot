export default function cliqueFora(elemento, eventos, callBack) {
    const html = document.documentElement;

    if (elemento !== null || elemento !== undefined && eventos.length && callBack !== null) {
        const cliqueForaHtml = e => {
            if (!elemento.contains(e.target)) {
                // Caso o elemento já esteja ativo é removido o evento do html e o atributo que mostra que o elemento está ativo
                elemento.removeAttribute('data-clique-fora');
                eventos.forEach(evento => html.removeEventListener(evento, cliqueForaHtml));
                // Função passada que esconde o elemento da tela
                callBack();
            }
        }
        if (!elemento.hasAttribute('data-clique-fora')) {
            // Caso o elemento não esteja ativo é adiciona o evento do html via event bubble e o atributo que mostra que o elemento está ativo
            eventos.forEach(evento => setTimeout(() => html.addEventListener(evento, cliqueForaHtml)));
            elemento.setAttribute('data-clique-fora', '');
        }
    }
}
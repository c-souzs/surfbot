export default function funcionamento(){
    const campoDias =  document.querySelector('[data-dias]');
    const campoHorarios =  document.querySelector('[data-horarios]');

    const objData = new Date();
    const diaAtual = objData.getDay().toString();
    const horaAtual = objData.getHours();

    const diasFuncionamento = campoDias.getAttribute('data-dias').split(',');
    const horariosFuncionamento = campoHorarios.getAttribute('data-horarios').split(',');

    // Verifica se o horario ou o dia está aberto, retornando um boolean
    const verificaHorario = horaAtual > (+horariosFuncionamento[0]) && horaAtual < (+horariosFuncionamento[1]);
    const verificaDias = diasFuncionamento.includes(diaAtual);

    const mudarCor = (e, c) => e.style.color = c;

    // Verifica se o dia e o horario estão aberto
    if(verificaDias && verificaHorario){
        mudarCor(campoDias, '#16C70B');
        mudarCor(campoHorarios, '#16C70B');
    } else {
        // Descobre qual elemento já fechamando o sistema e mostra ao usuário
        if(!verificaDias){
            mudarCor(campoDias, '#EE2211');
            campoHorarios.style.opacity = '.5';
        } else {
            mudarCor(campoHorarios, '#EE2211');
            campoDias.style.opacity = '.5';
        }
    }

}
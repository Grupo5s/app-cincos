import api from '../../service/api';

function verificarCpf(cpf) {
    return api.get('verificarCpf', { Cpf: cpf, isResponsavel: false });
}

function atualizarUid(uid, email) {
    return api.post('paciente/atualizarFirebaseUid', {
        Email: email,
        Uid: uid
    });
}

function obterFicha(usuario) {
    return api.post('paciente/ficha', usuario);
}

function obterResumoTratamento(codigoPaciente) {
    return api.get(`relatorioTratamento/resumo/${codigoPaciente}`);
}

function obterBioimpedancia(uid) {
    console.log(uid);
    return api.post(`paciente/bioimpedancia`, { Uid: uid });
}

function obterPerimetria(codigoPaciente) {
    return api.get(`ultimasTresPerimetrias/${codigoPaciente}`);
}


function enviarMensagemOuvidoria(codigoPaciente, mensagem) {
    return api.post(`paciente/enviarContato/${codigoPaciente}`, mensagem);
}

function atualizarPlayerID(usuario) {
    return api.post(`paciente/atualizarPlayerID`, usuario);
}

export { verificarCpf, obterFicha, obterResumoTratamento, obterBioimpedancia, enviarMensagemOuvidoria, atualizarUid, atualizarPlayerID, obterPerimetria }
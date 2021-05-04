const INITIAL_STATE = {
    versao: 13,
    conectado: false,
    uid: '',
    codigoPaciente: 0,
    userData: {},
    resumoTratamento: {},
    playerId: 'playerId'
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_CONECTADO':
            return { ...state, conectado: action.conectado };
        case 'CHANGE_CODIGOPACIENTE':
            return { ...state, codigoPaciente: action.codigoPaciente };
        case 'CHANGE_UID':
            return { ...state, uid: action.uid };
        case 'CHANGE_USERDATA':
            return { ...state, userData: action.userData };
        case 'CHANGE_RESUMOTRATAMENTO':
            return { ...state, resumoTratamento: action.resumoTratamento };
        case 'CHANGE_PLAYERID':
            return { ...state, playerId: action.playerId };
        default:
            return state;
    }
}

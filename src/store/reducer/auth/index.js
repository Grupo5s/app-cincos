const INITIAL_STATE = {
    versao: 13,
    conectado: false,
    uid: '',
    codigoPaciente: 0,
    userData: {},
    resumoTratamento: {},
    playerId: 'playerId',
    current: -1,
    sound: null,
    soundOrigem: ''
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
        case 'CHANGE_SOUND':
            return { ...state, sound: action.sound };
        case 'CHANGE_CURRENT_SOUND_INDEX':
            return { ...state, current: action.current };
        case 'CHANGE_SOUND_ORIGEM':
            return { ...state, soundOrigem: action.soundOrigem };

        default:
            return state;
    }
}

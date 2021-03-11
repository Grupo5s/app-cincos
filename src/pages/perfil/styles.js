import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        width: '100%', 
        marginTop: 5, 
        flex: 4
    },
    viewUserPhoto: { 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    viewPhoto: { 
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    viewContent: { 
        flex: 3, 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    viewPacienteInfo: { 
        width: '100%', 
        flexDirection: 'column', 
        backgroundColor: '#ffffff' 
    },
    viewPacienteInfoItem: { 
        padding: 10 
    },
    textAlterarFoto: { 
        fontSize: 16, 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: '#666666', 
        marginTop: 25 
    },
    viewData: { 
        width: '100%', 
        flexDirection: 'row' 
    },
    viewDataInicio: { 
        padding: 10, 
        backgroundColor: '#ffffff', 
        width: '49%', 
        marginRight: 5 
    },
    viewDataFim: { 
        padding: 10, 
        backgroundColor: '#ffffff', 
        width: '50%' 
    },
    btnAlterarSenha: { 
        flexDirection: 'column', 
        backgroundColor: '#676838', 
        padding: 10, 
        color: '#ffffff', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    btnAlterarSenhaIcon: { 
        color: '#ffffff', 
        fontSize: 20 
    },
    btnAlterarSenhaLabel: {
        color: '#ffffff',
        marginTop: 10
    }
});

export default styles;
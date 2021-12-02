import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        marginTop: 5
    },
    viewContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '100%'
    },
    aba: {
        padding: 10,
        color: '#ffffff',
        backgroundColor: '#bbbe00'
    },
    btn: {
        padding: 20,
        backgroundColor: '#bbbe00',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    textBotao: {
        fontWeight: 'bold',
        fontSize: 16
    },
    audioBonus: {
        marginTop: 10,
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#e4e4e4',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#e4e4e4',
        borderRadius: 10,
        padding: 10
    },
    audioOff: {
        marginTop: 10,
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#e4e4e4',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#e4e4e4',
        borderRadius: 10,
        padding: 10
    },
    audioOn: {
        marginTop: 10,
        flexDirection: 'row',
        width: 250,
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#ffffff',
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: '#bbbe00',
        borderColor: '#bbbe00',
        borderRadius: 10,
        padding: 10
    },
    buttonPlayStopOn: {
        backgroundColor: '#ffffff',
        color: '#bbbe00',
        padding: 5,
        borderRadius: 100
    },
    buttonPlayStopOff: {
        backgroundColor: '#bbbe00',
        color: '#ffffff',
        padding: 5,
        borderRadius: 100
    }
});

export default styles;
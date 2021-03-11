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
    btnEnviarPeso: { 
        flexDirection: 'row', 
        backgroundColor: '#676838', 
        padding: 10, 
        color: '#ffffff', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    btnEnviarPesoIcon: { 
        color: '#ffffff', 
        fontSize: 18 ,
        marginRight: 5
    },
    btnEnviarPesoLabel: {
        color: '#ffffff',
        marginTop: 3
    }
});

export default styles;
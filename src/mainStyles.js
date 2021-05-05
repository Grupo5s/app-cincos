import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 250,
        height: 250
    },
    textDefault: {
        color: '#bbbe00'
    },
    buttonDefault: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        backgroundColor: '#bbbe00',
        padding: 10,
        marginBottom: 10
    },
    buttonDefaultOutline: {
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#e4e4e4',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#e4e4e4',
        padding: 10
    },
    buttonEntrar: {
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        backgroundColor: '#bbbe00',
        padding: 10,
        marginBottom: 10
    },
    inputDefault: {
        width: 250,
        padding: 5,
        color: '#333333',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#e4e4e4',
        padding: 10
    },
    inputPesoFull: {
        width: '100%',
        padding: 5,
        color: '#333333',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#e4e4e4',
        padding: 10,
        fontSize: 18,
        backgroundColor: '#FFFFFF'
    },
    viewRecuo: {
        flex: 1,
        marginTop: 0,
        padding: 10,
        paddingLeft: 10,
        backgroundColor: '#f4f4f4'
    },
    viewRecuoImg: {
        flex: 1,
        marginTop: 0,
        padding: 10,
        paddingLeft: 10,
        backgroundColor: '#f4f4f4'
    },
    verticalMenu: {
        marginTop: 0,
        backgroundColor: '#676838',
        width: 40
    },
    layout: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: 0
    },
    iconActive: {
        width: 40,
        height: 40,
        padding: 10,
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BCBF00'
    },
    iconInactive: {
        width: 40,
        height: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#BCBF00',
        backgroundColor: '#676838'
    },
    iconLogout: {
        width: 40,
        height: 40,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        backgroundColor: '#676838',
        marginTop: 0
    },
    textGrayLight: {
        color: '#707070',
        fontWeight: 'bold'
    },
    textGrayLightNormal: {
        color: '#707070',
        width: 170
    },
    nomeDestaque: {
        color: '#BCBF00',
        fontWeight: '700'
    },
    nomeNormal: {
        color: '#BCBF00'
    },
    cardWelcome: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOpacity: 0
    },
    cardInfo: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#BCBF00',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOpacity: 0
    },
    cardFoto: {
        flexDirection: 'column',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 40,
        borderRadius: 50,
        shadowColor: '#000000',
        shadowOpacity: 0
    },
    line: { 
        width: '100%', 
        marginTop: 10, 
        marginBottom: 10 
    }
});


export default mainStyles;
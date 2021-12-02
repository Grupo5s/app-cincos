import React, { useEffect, useState } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import logo from '../../assets/logo.png';
import mainStyles from '../../mainStyles';
import { singleAlert } from '../../utils/alerts';
import OneSignal from 'react-native-onesignal';
import { useDispatch, useSelector } from 'react-redux';
import { alterarSenha, autenticarComEmailSenha, obterDados, enviarEmailRedefinicaoSenha, setDados } from '../../service/firebase';
import { atualizarPlayerID, atualizarUid, obterFicha } from '../../service/paciente';
import Loading5S from '../../component/Loading5S';
import { translate } from '../../i18n/src/locales';
import DialogInput from 'react-native-dialog-input';
import global from '../../constants';

const Login = (props) => {

    const { navigation } = props;

    const authReducer = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    //const [email, setEmail] = useState('dev1@5sgrupo.com.br');
    //const [senha, setSenha] = useState('123456');
    //const [email, setEmail] = useState('bruno@linhaequilibre.com.br');
    //const [senha, setSenha] = useState('123456');

    //const [email, setEmail] = useState('rosisan_10@hotmail.com');
    //const [senha, setSenha] = useState('Felipe1010');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [playerID, setPlayerID] = useState('playerID');

    const [isOpen, setIsOpen] = useState(false);

    async function initOneSignal() {
        OneSignal.setAppId('fdb8cb61-1ef7-407a-8efc-8383cab9a4f4');
        const deviceState = await OneSignal.getDeviceState();
        setPlayerID(deviceState.userId);
        dispatch({ type: 'CHANGE_PLAYERID', playerId: deviceState.userId });
    }

    async function continuar() {
        if (email === '') {
            singleAlert('Login', translate('TYPE_EMAIL'));
        } else if (senha === '') {
            singleAlert('Login', translate('TYPE_PASSWORD'));
        } else {
            setLoading(true);
            autenticarComEmailSenha(email, senha)
                .then(async response => {

                    const credentials = response;

                    atualizarUid(credentials.user.uid, email).then(response => { }).catch(error => { });

                    obterFicha({
                        Email: email,
                        Uid: credentials.user.uid
                    }).then(response => {

                        const paciente = response.data;

                        if (paciente.StatusPaciente == 2) {
                            atualizarPlayerID({
                                Uid: credentials.user.uid,
                                PlayerID: playerID
                            }).then(response => { });

                            obterDados(`Paciente/${paciente.Codigo}`).once('value', (snapshot) => {

                                const pc = snapshot.val();
                                console.log('login => paciente ', pc);
                                dispatch({ type: 'CHANGE_CONECTADO', conectado: true });
                                dispatch({ type: 'CHANGE_UID', uid: credentials.user.uid });
                                dispatch({ type: 'CHANGE_CODIGOPACIENTE', codigoPaciente: paciente.Codigo });
                                dispatch({ type: 'CHANGE_USERDATA', userData: pc });
                                setLoading(false);

                                setDados(`Paciente/${paciente.Codigo}/Conectado`, true).then(response => {
                                    navigation.navigate('Dashboard');
                                });
                            });

                        } else {

                            dispatch({ type: 'CHANGE_CONECTADO', conectado: false });
                            dispatch({ type: 'CHANGE_UID', uid: '' });
                            dispatch({ type: 'CHANGE_CODIGOPACIENTE', codigoPaciente: 0 });
                            dispatch({ type: 'CHANGE_USERDATA', userData: {} });
                            setLoading(false);

                            if (paciente.StatusPaciente == 3) {
                                singleAlert('5S', 'Que pena que você desistiu! Sentiremos a sua falta. Estamos de braços abertos aguardando o seu retorno!!');
                            } else if (paciente.StatusPaciente == 4) {
                                singleAlert('5S', 'Parabéns, você já concluiu o seu tratamento. Te esperamos no Clube Eu Saudável!!');
                            } else if (paciente.StatusPaciente == 6) {
                                singleAlert('5S', 'Seu tratamento está pausado.');
                            } else {
                                singleAlert('5S', 'Seu tratamento ainda não foi iniciado! Entre em contato com sua Coach.');
                            }

                        }

                    }).catch(error => {
                        setLoading(false);
                        singleAlert('5S', translate('MSG_FICHA_ERROR'));
                    });
                })
                .catch(error => {
                    setLoading(false);
                    if (error.toString().includes('no user record corresponding')) {
                        singleAlert('5S', translate('FIREBASE_WRONG_EMAIL'));
                    }
                    else if (error.toString().includes('badly')) {
                        singleAlert('5S', translate('FIREBASE_INVALID_EMAIL'));
                    }
                    else if (error.toString().includes('password is invalid')) {
                        singleAlert('5S', translate('FIREBASE_WRONG_PASSWORD'));
                    }
                    else if (error.toString().includes('many unsuccessful')) {
                        singleAlert('5S', translate('FIREBASE_MANY_UNSUCCESSFUL'));
                    } else if (error.toString().includes('network error')) {
                        singleAlert('5S', translate('FIREBASE_NETWORK_ERROR'));
                    } else {
                        alert(JSON.stringify(error));
                    }
                });
        }
    }

    function openDialog() {
        setIsOpen(true);
    }

    useEffect(() => {
        if (authReducer.conectado) {
            navigation.navigate('Dashboard');
        } else {
            initOneSignal();
        }
    }, [])

    return <View style={styles.view}>
        <Image source={logo} style={styles.logo} />
        <View>
            <TextInput
                name="email"
                value={email}
                placeholder={translate('PLACEHOLDER_EMAIL')}
                style={mainStyles.inputDefault}
                onChangeText={(text) => setEmail(text)} />
            <TextInput
                name="senha"
                value={senha}
                secureTextEntry={true}
                keyboardType="default"
                placeholder={translate('PLACEHOLDER_PASSWORD')}
                style={mainStyles.inputDefault}
                onChangeText={(text) => setSenha(text)} />
            <Loading5S
                visible={loading}
                color="#bbbe00"
                overlayColor="rgba(255,255,255,0.80)" />
            <TouchableOpacity
                onPress={() => continuar()}
                style={mainStyles.buttonEntrar}>
                <Text>{translate('BTN_LOGIN')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={mainStyles.buttonDefaultOutline}
                onPress={() => openDialog()}>
                <Text>{translate('BTN_REMEMBER_ME')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Linking.openURL('https://www.5sestilodevida.com.br/termos-de-uso-e-politica-de-privacidade')}
                style={mainStyles.buttonDefaultOutline}>
                <Text>{translate('PRIVACY_TERMS')}</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: 'transparent', padding: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 12, color: '#999999', textAlign: 'center' }}>{global.versao}</Text>
            </View>
        </View>
        <DialogInput isDialogVisible={isOpen}
            title={"Redefinir senha"}
            message={"Informe seu e-mail e em alguns minutos você vai receber um link para redefinir sua senha."}
            hintInput={"E-mail"}
            cancelText="Cancelar"
            submitText={"Redefinir"}
            submitInput={(email) => {
                setIsOpen(false);
                setLoading(true);
                enviarEmailRedefinicaoSenha(email).then(response => {
                    setLoading(false);
                    singleAlert('Redefinir Senha', 'E-mail de redefinicação de senha enviado com sucesso.');
                }).catch(error => { });
            }}
            closeDialog={() => { setIsOpen(false) }}>
        </DialogInput>
    </View>
};


export default Login;
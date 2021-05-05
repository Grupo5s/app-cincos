import React, { useEffect, useState, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import linha from '../../assets/linha.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { singleAlert } from '../../utils/alerts';
import api from '../../service/api';
import PageTitle from '../../component/PageTitle';
import Loading5S from '../../component/Loading5S';
import { obterDados } from '../../service/firebase';
import { sanitizeData } from '../../utils';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

function MeusResultados(props) {

    const { navigation } = props;
    const authReducer = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const [paciente, setPaciente] = useState({});
    const [pesoHoje, setPesoHoje] = useState('');
    const [loading, setLoading] = useState(false);
    const [pesos, setPesos] = useState([]);

    function atualizarPesos(codigoPaciente) {

        obterDados(`Paciente/${codigoPaciente}`).on('value', snapshot => {
            var pc = snapshot.val();

            var peso = 0;
            var ultimoPeso = 0;
            var pesoLista = [];
            if (pc.Pesos !== undefined) {
                if (pc.Pesos.length > 0) {
                    pc.Pesos.reverse().forEach((peso, i) => {
                        var peso = parseFloat(pc.Pesos[i].Peso);

                        pc.Pesos[i].id = i;
                        pc.Pesos[i].textColor = '#bbbe00';
                        pc.Pesos[i].text = 'Parabéns, continue assim!';

                        if (ultimoPeso == 0) {
                            if (peso > pc.PesoAtual) {
                                pc.Pesos[i].textColor = '#e63946';
                                pc.Pesos[i].text = 'Podemos melhorar!';
                            } else if (peso == pc.PesoAtual) {
                                pc.Pesos[i].textColor = '#e85d04';
                                pc.Pesos[i].text = 'Mesmo peso!';
                            }
                        } else {
                            if (peso > ultimoPeso) {
                                pc.Pesos[i].textColor = '#e63946';
                                pc.Pesos[i].text = 'Podemos Melhorar!';
                            } else if (peso == ultimoPeso) {
                                pc.Pesos[i].textColor = '#e85d04';
                                pc.Pesos[i].text = 'Mesmo peso!';
                            }
                        }
                        ultimoPeso = pc.Pesos[i].Peso;
                        pesoLista.push(pc.Pesos[i]);
                    });

                    setPesos(pesoLista.reverse());
                }
            }
            setLoading(false);
        });
    }

    useEffect(() => {
        setLoading(true);
        setPaciente(authReducer.userData);
        atualizarPesos(authReducer.codigoPaciente);
    }, []);

    useEffect(() => {
        setLoading(true);
        setPaciente(authReducer.userData);
        atualizarPesos(authReducer.codigoPaciente);
    }, [authReducer.userData]);

    function enviarPeso() {

        setLoading(true);

        const regex = /[.]/g;
        const peso = pesoHoje.toString().search(regex);

        if (peso != -1) {

            var historioPeso = {
                Paciente: authReducer.codigoPaciente,
                Modalidade: authReducer.userData.CodModalidade,
                Peso: pesoHoje
            };

            api.post('historicopeso/cadastrar', historioPeso).then(response => {

                obterDados(`Paciente/${authReducer.codigoPaciente}`).once('value', snapshot => {
                    var pc = snapshot.val();
                    dispatch({
                        type: 'CHANGE_USERDATA',
                        userData: pc
                    });
                    atualizarPesos(authReducer.codigoPaciente);
                });

                setPesoHoje('');
                setLoading(false);
                singleAlert('Envio de Peso', 'Peso enviado com sucesso.');
                //atualizarPesos();
            });

        } else {
            setLoading(false);
            Alert.alert('Ops', 'Informe o seu peso no formato: 80.65');
        }
    }

    return <View style={mainStyles.layout}>
        <VerticalMenu page="meusresultados" navigation={navigation} />
        <View style={mainStyles.viewRecuo}>
            <PageTitle title="MEUS RESULTADOS" showLogo={true} />

            <View style={styles.viewContent}>
                <View style={{ padding: 10, width: '100%' }}>
                    <TextInput
                        placeholder="Peso"
                        style={mainStyles.inputPesoFull}
                        keyboardType="numeric"
                        value={pesoHoje}
                        onChangeText={(text) => { setPesoHoje(text); }} />
                    <View style={{ flexDirection: 'row', backgroundColor: '#fdffb6', padding: 10, marginBottom: 10, color: 'orange' }}>
                        <Icon name="warning" style={{ padding: 10, color: 'orange' }} size={25} />
                        <View style={{ flexDirection: 'column', marginLeft: 8 }}>
                            <Text style={{ fontSize: 14, color: 'orange', fontWeight: 'bold' }}>Mandou o peso errado!</Text>
                            <Text style={{ fontSize: 12, color: 'orange', fontWeight: 'bold' }}>Basta enviar novamente para corrigir.</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => { enviarPeso() }} style={styles.btnEnviarPeso}>
                        <Icon name="send" style={styles.btnEnviarPesoIcon} />
                        <Text style={styles.btnEnviarPesoLabel}>Enviar Peso</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={linha} style={mainStyles.line} />
            <Text style={{ marginBottom: 14, fontSize: 12, color: '#666666', textAlign: 'center' }}>Histórico de paciente</Text>
            <ScrollView>
                {pesos.length > 0 && pesos.map(item => <View key={item.id} style={{ padding: 10, backgroundColor: '#ffffff', marginBottom: 5 }}>
                    <Text style={{ color: item.textColor, fontSize: 16, fontWeight: 'bold' }}>{parseFloat(item.Peso).toFixed(2)}</Text>
                    <Text style={{ color: item.textColor, fontSize: 14, fontWeight: 'bold' }}>{item.text}</Text>
                    <Text style={{ fontSize: 12 }}>{sanitizeData('T', '-', item.DataCadastro)}</Text>
                </View>)}
            </ScrollView>
        </View>
        <Loading5S
            color=""
            visible={loading}
            color="#bbbe00"
            overlayColor="rgba(255,255,255,0.80)" />
    </View>
}

export default MeusResultados;
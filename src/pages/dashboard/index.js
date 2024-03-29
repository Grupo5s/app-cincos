import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import linha from '../../assets/linha.png';
import Icon from 'react-native-vector-icons/Feather';
import { atualizarPlayerID, obterResumoTratamento } from '../../service/paciente';
import PageTitle from '../../component/PageTitle';
import Loading5S from '../../component/Loading5S';
import { useSelector } from 'react-redux';
import global from '../../constants';
import { obterDados } from '../../service/firebase';

function Dashboard(props) {

    const { navigation } = props;

    const authReducer = useSelector(state => state.authReducer);

    const [paciente, setPaciente] = useState({});
    const [pesoAtual, setPesoAtual] = useState(0);

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState(new Date().toISOString().split('T')[0].split('-').reverse().join('/'));
    const [resumoTratamento, setResumoTratamento] = useState('');

    useEffect(() => {
        setLoading(true);
        setPaciente(authReducer.userData);
        console.log('dashboard=> paciente ', paciente);
        atualizarPlayerID({
            Uid: authReducer.uid,
            PlayerID: authReducer.playerId
        }).then(response => { });

        obterResumoTratamento(authReducer.codigoPaciente).then(response => {
            const resumo = response.data;
            setResumoTratamento(resumo);

            obterDados(`Paciente/${authReducer.codigoPaciente}`).on('value', snapshot => {
                var pc = snapshot.val();
                setPesoAtual(pc.PesoAtual);
            });

            setLoading(false);
        });
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    useEffect(() => {
        setLoading(true);
        setPaciente(authReducer.userData);
        obterResumoTratamento(authReducer.codigoPaciente).then(response => {
            const resumo = response.data;
            setResumoTratamento(resumo);
            setLoading(false);
        });
    }, [authReducer.userData])

    return <View style={mainStyles.layout}>
        <VerticalMenu page="home" navigation={navigation} />
        <ScrollView style={mainStyles.viewRecuo}>
            <PageTitle title="Dashboard" showLogo={true} />
            <View style={mainStyles.cardWelcome}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 16 }}>Olá <Text style={mainStyles.nomeDestaque}>{paciente.NomeCompleto}</Text>.</Text>
                    <Text style={{ fontSize: 14, color: '#666666' }}>Seu código é <Text style={mainStyles.nomeDestaque}>{authReducer.codigoPaciente}</Text></Text>
                    <Text style={{ fontSize: 13, color: '#666666' }}>{data}</Text>
                </View>
            </View>
            <Image source={linha} style={mainStyles.line} />
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
                <Icon name="calendar" style={{ marginRight: 10, fontSize: 35, color: '#cccccc' }} />
                <View style={mainStyles.textGrayLight}>
                    <Text style={{ fontWeight: 'bold', color: '#BCBF00', fontSize: 30 }}>{resumoTratamento.DiasEmTratamento}</Text>
                    <Text style={mainStyles.textGrayLightNormal}>dias em tratamento.</Text>
                </View>
            </View>
            <Image source={linha} style={mainStyles.line} />
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, }}>
                <Icon name="search" style={{ marginRight: 10, fontSize: 35, color: '#cccccc' }} />
                <Text style={mainStyles.textGrayLightNormal}>
                    Você está na <Text style={{ fontWeight: 'bold', color: '#BCBF00' }}>{paciente.NomeSemana}</Text> da <Text style={{ fontWeight: 'bold', color: '#BCBF00', }}>{paciente.NomeFase}</Text>
                </Text>
            </View>
            <Image source={linha} style={mainStyles.line} />
            <View style={mainStyles.cardInfo}>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginRight: 5, borderRightColor: '#f4f4f4', borderRightWidth: 2 }}>
                    <Text style={{ fontSize: 13 }}>Peso Inicial</Text>
                    <Text style={{ fontSize: 20, color: '#ffffff' }}>{paciente.PesoInicial}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, }}>Peso Atual</Text>
                    <Text style={{ fontSize: 20, color: '#ffffff' }}>{pesoAtual}</Text>
                </View>
            </View>
            <View style={mainStyles.cardInfo}>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', borderRightColor: '#f4f4f4', borderRightWidth: 2 }}>
                    <Text style={{ fontSize: 13, color: '#000000' }}>Meta Kg</Text>
                    <Text style={{ fontSize: 20, color: '#ffffff' }}>{paciente.MetaKg}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ fontSize: 13, color: '#000000' }}>Peso Previsto</Text>
                    <Text style={{ fontSize: 20, color: '#ffffff' }}>{(parseFloat(paciente.PesoInicial) - (parseFloat(paciente.MetaKg) * -1)).toFixed(2)}</Text>
                </View>
            </View>
            <Loading5S
                visible={loading}
                color="#bbbe00"
                overlayColor="rgba(255,255,255,0.80)" />
            <View style={{ backgroundColor: 'transparent', padding: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 12, color: '#999999', textAlign: 'center' }}>{global.versao}</Text>
            </View>
        </ScrollView>
    </View>
}

export default Dashboard;
import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, Image, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PageTitle from '../../component/PageTitle';

function GuiaAlimentar(props) {
    const { navigation } = props;
    const authReducer = useSelector(state => state.authReducer);
    const obesoSobrepeso = {
        Desintoxicacao1: 'http://clubeeusaudavel.azurewebsites.net/cardapio/Sobrepeso_Obeso/Guia_alimentar_Sobrepeso_e_obeso_FASE_1_DESINTOXICACAO.jpg',
        Desintoxicacao2: 'http://clubeeusaudavel.azurewebsites.net/cardapio/Sobrepeso_Obeso/Guia_alimentar_Sobrepeso_e_obeso_FASE_2_DESINTOXICACAO.jpg',
        Reprogramacao: 'http://clubeeusaudavel.azurewebsites.net/cardapio/Sobrepeso_Obeso/Guia_alimentar_Sobrepeso_e_obeso_REPROGRAMACAO.jpg',
    }

    const falsoMagro = {
        Desintoxicacao1: 'http://clubeeusaudavel.azurewebsites.net/cardapio/Falso_Magro/Guia_Alimentar_Falso_Magro_FASE_1_DESINTOXICACAO.jpg',
        Reprogramacao: 'http://clubeeusaudavel.azurewebsites.net/cardapio/Falso_Magro/Guia_Alimentar_Falso_Magro_FASE_2_REPROGRAMACAO.jpg',
        Livre: 'http://clubeeusaudavel.azurewebsites.net/cardapio/Falso_Magro/Guia_alimentar__falso_magro_livre.jpg',
    }

    const criancaAdolescente = {
        Desintoxicacao1: 'http://clubeeusaudavel.azurewebsites.net/cardapio/Crianca_Adolescente/Guia_Alimentar_Criancas_E_Adolescentes_FASE_1_DESINTOXICACAO.jpg',
        Desintoxicacao2: 'http://clubeeusaudavel.azurewebsites.net/cardapio/Crianca_Adolescente/Guia_Alimentar_Criancas_E_Adolescentes_FASE_2_DESINTOXICACAO.jpg',
        Reprogramacao: 'http://clubeeusaudavel.azurewebsites.net/cardapio/Crianca_Adolescente/Guia_Alimentar_Criancas_E_Adolescentes_FASE_3_REPROGRAMACAO.jpg',
    }

    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        setPaciente(authReducer.userData);
    }, []);

    return <View style={mainStyles.layout}>
        <VerticalMenu page="guiaalimentar" navigation={navigation} />
        <View style={mainStyles.viewRecuo}>
            <PageTitle title="GUIA ALIMENTAR" showLogo={true} />
            {/*Obeso/Sobrepeso*/}
            {(paciente.CodModalidade == 8 || paciente.CodModalidade == 9 || paciente.CodModalidade == 22 || paciente.CodModalidade == 23 || paciente.CodModalidade == 26) && <>
                <TouchableOpacity
                    onPress={() => Linking.openURL(obesoSobrepeso.Desintoxicacao1)}
                    style={styles.btn}>
                    <Icon name="search" style={{ marginRight: 10 }} />
                    <Text>Desintoxicação 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL(obesoSobrepeso.Desintoxicacao2)}
                    style={styles.btn}>
                    <Icon name="search" style={{ marginRight: 20 }} />
                    <Text>Desintoxicação 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL(obesoSobrepeso.Reprogramacao)}
                    style={styles.btn}>
                    <Icon name="search" style={{ marginRight: 10 }} />
                    <Text>Reprogramação</Text>
                </TouchableOpacity>
            </>}
            {/*Falso Magro*/}
            {(paciente.CodModalidade == 10 || paciente.CodModalidade == 11 || paciente.CodModalidade == 24 || paciente.CodModalidade == 25 || paciente.CodModalidade == 27) && <>
                <TouchableOpacity
                    onPress={() => Linking.openURL(falsoMagro.Desintoxicacao1)}
                    style={styles.btn}>
                    <Icon name="search" style={{ marginRight: 10 }} />
                    <Text>Desintoxicação</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL(falsoMagro.Reprogramacao)}
                    style={styles.btn}>
                    <Icon name="search" style={{ marginRight: 10 }} />
                    <Text>Reprogramação</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL()}
                    style={styles.btn}>
                    <Icon name="search" style={{ marginRight: 10 }} />
                    <Text>Guia Alimentar Livre</Text>
                </TouchableOpacity>
            </>}

            {/*Criança e Adolescente*/}
            {(paciente.CodModalidade == 12 || paciente.CodModalidade == 13 || paciente.CodModalidade == 14 || paciente.CodModalidade == 15 || paciente.CodModalidade == 16 || paciente.CodModalidade == 17) && <>
                <TouchableOpacity
                    onPress={() => Linking.openURL(criancaAdolescente.Desintoxicacao1)}
                    style={styles.btn}>
                    <Icon name="search" style={{ marginRight: 10 }} />
                    <Text>Desintoxicação 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL(criancaAdolescente.Desintoxicacao2)}
                    style={styles.btn}>
                    <Icon name="search" style={{ marginRight: 20 }} />
                    <Text>Desintoxicação 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL(criancaAdolescente.Reprogramacao)}
                    style={styles.btn}>
                    <Icon name="search" style={{ marginRight: 10 }} />
                    <Text>Reprogramação</Text>
                </TouchableOpacity>
            </>}
        </View>
    </View>
}

export default GuiaAlimentar;
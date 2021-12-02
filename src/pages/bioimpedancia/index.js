import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import linha from '../../assets/linha.png';
import * as apiPaciente from '../../service/paciente';
import PageTitle from '../../component/PageTitle';
import { Dimensions } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'
import Loading5S from '../../component/Loading5S';
import { useSelector } from 'react-redux';

const screenWidth = Dimensions.get("window").width;

function Bioimpedancia(props) {

    const { navigation } = props;

    const authReducer = useSelector(state => state.authReducer);

    const [uid, setUid] = useState('');

    const arrAguaCorporal = [];
    const arrGorduraVisceral = [];
    const arrIdadeMetabolica = [];
    const arrImc = [];
    const arrMassaGorda = [];
    const arrMassaMagra = [];
    const arrPesoKg = [];
    const arrTaxaMetabolicaBasal = [];


    const [aguaCorporalData, setAguaCorporalData] = useState([0, 0, 0]);
    const [gorduraVisceralData, setGorduraVisceralData] = useState([0, 0, 0]);
    const [idadeMetabolicaData, setIdadeMetabolicaData] = useState([0, 0, 0]);
    const [imcData, setImcData] = useState([0, 0, 0]);
    const [massaGordaData, setMassaGordaData] = useState([0, 0, 0]);
    const [massaMagraData, setMassaMagraData] = useState([0, 0, 0]);
    const [pesoKgData, setPesoKgData] = useState([0, 0, 0]);
    const [taxaMetabolicaBasalData, setTaxaMetabolicaBasalData] = useState([0, 0, 0]);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setUid(authReducer.uid);
    }, []);

    useEffect(() => {
        async function loadBioimpedancia(callback) {

            await apiPaciente.obterBioimpedancia(uid).then(response => {
                const bios = response.data;
                console.log(bios);
                bios.forEach(bio => {
                    arrAguaCorporal.push(parseFloat(bio.AguaCorporal));
                    arrGorduraVisceral.push(parseFloat(bio.GorduraVisceral));
                    arrIdadeMetabolica.push(parseFloat(bio.IdadeMetabolica));
                    arrImc.push(parseFloat(bio.Imc));
                    arrMassaGorda.push(parseFloat(bio.MassaGorda));
                    arrMassaMagra.push(parseFloat(bio.MassaMagra));
                    arrPesoKg.push(parseFloat(bio.PesoKg));
                    arrTaxaMetabolicaBasal.push(parseFloat(bio.TaxaMetabolicaBasal));
                });
                //console.log(arrImc);
                setLoading(false);
                if (callback)
                    callback.call(this, arrAguaCorporal, arrGorduraVisceral, arrIdadeMetabolica, arrImc, arrMassaGorda, arrMassaMagra, arrPesoKg, arrTaxaMetabolicaBasal);

            });

        }

        loadBioimpedancia((arrAguaCorporal, arrGorduraVisceral, arrIdadeMetabolica, arrImc, arrMassaGorda, arrMassaMagra, arrPesoKg, arrTaxaMetabolicaBasal) => {
            setImcData(arrImc);
            setPesoKgData(arrPesoKg);
            setMassaGordaData(arrMassaGorda);
            setMassaMagraData(arrMassaMagra);
            setAguaCorporalData(arrAguaCorporal);
            setGorduraVisceralData(arrGorduraVisceral);
            setTaxaMetabolicaBasalData(arrTaxaMetabolicaBasal);
            setIdadeMetabolicaData(arrIdadeMetabolica);
            setLoading(false);
        });
    }, [uid]);

    return <View style={mainStyles.layout}>
        <VerticalMenu page="bioimpedancia" navigation={navigation} />
        <View style={mainStyles.viewRecuo}>
            <PageTitle title="BIOIMPEDÂNCIA" showLogo={true} />
            <ScrollView>
                <Text>IMC</Text>
                <LineChart
                    data={{
                        labels: [1, 2, 3],
                        datasets: [{
                            data: imcData
                        }]
                    }}
                    width={Dimensions.get('window').width - 60} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#BCBF00',
                        backgroundGradientTo: '#4F4C25',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }} />
                <Image source={linha} style={mainStyles.line} />
                <Text>Peso</Text>
                <LineChart
                    data={{
                        labels: [1, 2, 3],
                        datasets: [{
                            data: pesoKgData
                        }]
                    }}
                    width={Dimensions.get('window').width - 60} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#BCBF00',
                        backgroundGradientTo: '#4F4C25',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }} />
                <Image source={linha} style={mainStyles.line} />
                <Text>Massa Gorda</Text>
                <LineChart
                    data={{
                        labels: [1, 2, 3],
                        datasets: [{
                            data: massaGordaData
                        }]
                    }}
                    width={Dimensions.get('window').width - 60} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#BCBF00',
                        backgroundGradientTo: '#4F4C25',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }} />
                <Image source={linha} style={mainStyles.line} />
                <Text>Massa Magra</Text>
                <LineChart
                    data={{
                        labels: [1, 2, 3],
                        datasets: [{
                            data: massaMagraData
                        }]
                    }}
                    width={Dimensions.get('window').width - 60} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#BCBF00',
                        backgroundGradientTo: '#4F4C25',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }} />
                <Text>Agua Corporal</Text>
                <LineChart
                    data={{
                        labels: [1, 2, 3],
                        datasets: [{
                            data: aguaCorporalData
                        }]
                    }}
                    width={Dimensions.get('window').width - 60} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#BCBF00',
                        backgroundGradientTo: '#4F4C25',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }} />
                <Text>Gordura Visceral</Text>
                <LineChart
                    data={{
                        labels: [1, 2, 3],
                        datasets: [{
                            data: gorduraVisceralData
                        }]
                    }}
                    width={Dimensions.get('window').width - 60} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#BCBF00',
                        backgroundGradientTo: '#4F4C25',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }} />
                <Text>Taxa Metabólica Basal</Text>
                <LineChart
                    data={{
                        labels: [1, 2, 3],
                        datasets: [{
                            data: taxaMetabolicaBasalData
                        }]
                    }}
                    width={Dimensions.get('window').width - 60} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#BCBF00',
                        backgroundGradientTo: '#4F4C25',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }} />
                <Text>Idade Metabólica</Text>
                <LineChart
                    data={{
                        labels: [1, 2, 3],
                        datasets: [{
                            data: idadeMetabolicaData
                        }]
                    }}
                    width={Dimensions.get('window').width - 60} // from react-native
                    height={220}
                    chartConfig={{
                        backgroundColor: '#ffffff',
                        backgroundGradientFrom: '#BCBF00',
                        backgroundGradientTo: '#4F4C25',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 10
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 10
                    }} />
            </ScrollView>
            <Loading5S
                color=""
                visible={loading}
                color="#bbbe00"
                overlayColor="rgba(255,255,255,0.80)" />
        </View>
    </View>
}

export default Bioimpedancia;
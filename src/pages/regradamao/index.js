import React from 'react';
import { useSelector } from 'react-redux';
import { View, Image, Text, ScrollView } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import linha from '../../assets/linha.png';
import styles from './styles';
import PageTitle from '../../component/PageTitle';
import ImgMaoBoi from '../../assets/regradamao/regra_da_mao_boi.jpg';
import ImgMaoFrango from '../../assets/regradamao/regra_da_mao_frango.jpg';
import ImgMaoPorco from '../../assets/regradamao/regra_da_mao_porco.jpg';
import ImgMaoCamaraoLula from '../../assets/regradamao/regra_da_mao_camarao.jpg';
import ImgMaoPeixeBranco from '../../assets/regradamao/regra_da_mao_peixes_brancos.jpg';
import ImgMaoPeixesOleosos from '../../assets/regradamao/regra_da_mao_peixes_oleosos.jpg';
import ImgMaoChocolate from '../../assets/regradamao/regra_da_mao_chocolate.jpg';
import ImgMaoGordura from '../../assets/regradamao/regra_da_mao_gordura.jpg';
import ImgMaoFrutasPequenas from '../../assets/regradamao/regra_da_mao_frutas_pequenas.jpg';
import ImgMaoFrutasMedias from '../../assets/regradamao/regra_da_mao_maca.jpg';
import ImgMaoFatiasFrutasBolas from '../../assets/regradamao/regra_da_mao_melancia.jpg';
import ImgMaoMassasPaes from '../../assets/regradamao/regra_da_mao_massa.jpg';
import ImgMaoOleoaginosas from '../../assets/regradamao/regra_da_mao_oleaginosas.jpg';
import ImgMaoOvosDeCodorna from '../../assets/regradamao/regra_da_mao_ovos_codorna.jpg';
import ImgMaoQueijos from '../../assets/regradamao/regra_da_mao_queijos.jpg';
import ImgMaoVegetais from '../../assets/regradamao/regra_da_mao_vegetais.jpg';
import ImgMaoVegetaisFolheosos from '../../assets/regradamao/regra_da_mao_vegetais_folhas.jpg';
import ImgMaoRegraDaColherParSal from '../../assets/regradamao/regra_da_mao_colher_de_cafe_sal.jpg';
import ImgMaoRegraDaColherParaSobremesas from '../../assets/regradamao/regra_da_mao_colher_de_sobremesa_sementes.jpg';

function RegraDaMao(props) {
    const { navigation } = props;

    return <View style={mainStyles.layout}>
        <VerticalMenu page="regradamao" navigation={navigation} />
        <View style={mainStyles.viewRecuo}>
            <PageTitle title="REGRA DA MÃO" showLogo={true} />
            <ScrollView>
                <View>
                    <Text style={styles.aba}>Boi</Text>
                    <Image source={ImgMaoBoi} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Frango</Text>
                    <Image source={ImgMaoFrango} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Porco</Text>
                    <Image source={ImgMaoPorco} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Camarão, lula, ostra, polvo, mexilhão, siri e caranguejo desfiado</Text>
                    <Image source={ImgMaoCamaraoLula} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Peixe branco, ovo caipira e cogumelos</Text>
                    <Image source={ImgMaoPeixeBranco} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Peixes oleosos</Text>
                    <Image source={ImgMaoPeixesOleosos} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Chocolate</Text>
                    <Image source={ImgMaoChocolate} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Gordura</Text>
                    <Image source={ImgMaoGordura} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Frutas Pequenas</Text>
                    <Image source={ImgMaoFrutasPequenas} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Frutas Médias</Text>
                    <Image source={ImgMaoFrutasMedias} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Fatias de frutas e bolos</Text>
                    <Image source={ImgMaoFatiasFrutasBolas} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Massas e Pães</Text>
                    <Image source={ImgMaoMassasPaes} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Oleoaginosas e Azeitonas</Text>
                    <Image source={ImgMaoOleoaginosas} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Ovos de Codorna</Text>
                    <Image source={ImgMaoOvosDeCodorna} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Queijos</Text>
                    <Image source={ImgMaoQueijos} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Vejetais</Text>
                    <Image source={ImgMaoVegetais} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Vejetais Folhosos</Text>
                    <Image source={ImgMaoVegetaisFolheosos} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Regra da Colher para Sal(Colher de café)</Text>
                    <Image source={ImgMaoRegraDaColherParSal} style={styles.img} />
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View>
                    <Text style={styles.aba}>Regra da Colher para Sobremesas e Sementes(Colher de sobremesa)</Text>
                    <Image source={ImgMaoRegraDaColherParaSobremesas} style={styles.img} />
                </View>
            </ScrollView>
        </View>
    </View>
}

export default RegraDaMao;
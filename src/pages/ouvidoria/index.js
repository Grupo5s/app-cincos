import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking  } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import styles from './styles';
import PageTitle from '../../component/PageTitle';
import { translate } from '../../i18n/src/locales';
import Loading5S from '../../component/Loading5S';

function Ouvidoria(props) {

    const { navigation } = props;
    const [loading, setLoading] = useState(false);

    return <View style={mainStyles.layout}>
        <VerticalMenu page="ouvidoria" navigation={navigation} />
        <Loading5S
            visible={loading}
            color="#bbbe00"
            overlayColor="rgba(255,255,255,0.80)" />
        <View style={mainStyles.viewRecuo}>
            <PageTitle title="Ouvidoria" showLogo={true} />
            <ScrollView style={styles.scrollView}>
                <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Que bom você por aqui!</Text>
                <Text style={{ marginBottom: 20, textAlign: 'justify' }}>Temos certeza de que você pode contribuir muito para o nosso crescimento, evolução e melhoria contínua.</Text>
                <TouchableOpacity
                    onPress={() => Linking.openURL('https://nwdsk.co/AvyCE')}
                    style={mainStyles.buttonDefault}>
                    <Text>{translate('CHANNEL_SUPPORT')}</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
}

export default Ouvidoria;
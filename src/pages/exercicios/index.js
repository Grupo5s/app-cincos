import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, Image, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import PageTitle from '../../component/PageTitle';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
function Exercicios(props) {
    const { navigation } = props;

    return <View style={mainStyles.layout}>
        <VerticalMenu page="exercicios" navigation={navigation} />
        <View style={mainStyles.viewRecuoImg}>
            <PageTitle title="EXERCÍCIOS" showLogo={true} />
            <ScrollView>
                <Image source={img1} style={{ width: '100%', height: 320 }} />
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => Linking.openURL('https://freefitness.com.br/grupo-5s')}>
                    <Image source={img2} style={{ width: '100%', height: 120 }} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => Linking.openURL('https://ptgustavo.com.br/grupo-5s')}>
                    <Image source={img3} style={{ width: '100%', height: 120 }} />
                </TouchableOpacity>
                <Image source={img4} style={{ width: '100%', height: 120 }} />
            </ScrollView>
        </View>
    </View>
}

export default Exercicios;
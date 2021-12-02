import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, Image, Text, TouchableOpacity, ScrollView, Linking, Touchable } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import TopoTela01 from '../../assets/meditacao/topo_tela_03.png';
import BotaoVideo from '../../assets/meditacao/botao_video.png';
import BotaoAudio from '../../assets/meditacao/botao_audio.png';
import Logo from '../../assets/meditacao/logo5s.png';
function Meditacao(props) {
    const { navigation } = props;

    return <View style={mainStyles.layout}>
        <VerticalMenu page="meditacao" navigation={navigation} />
        <View style={mainStyles.viewRecuoImg2}>
            <ScrollView>
                <Image source={TopoTela01} style={{ width: '100%', height: 340, resizeMode: 'contain', marginTop: -10 }} />
                <TouchableOpacity onPress={() => navigation.navigate('MeditacaoVideo')}>
                    <Image source={BotaoVideo} style={{ width: '100%', height: 120, resizeMode: 'cover', marginTop: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('MeditacaoAudio', { pathAudio: 'audios' })}>
                    <Image source={BotaoAudio} style={{ width: '100%', height: 120, resizeMode: 'cover', marginTop: 20 }} />
                </TouchableOpacity>
                <Image source={Logo} style={{ width: '100%', height: 120, resizeMode: 'cover', marginTop: 20 }} />
            </ScrollView>
        </View>
    </View >
}

export default Meditacao;
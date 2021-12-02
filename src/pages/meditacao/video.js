import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, Image, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import TopoTela01 from '../../assets/meditacao/topo_tela_video.png';
import btn_introducao from '../../assets/meditacao/btn_introducao.png';
import styles from './styles';
function MeditacaoVideo(props) {
    const { navigation } = props;

    return <View style={mainStyles.layout}>
        <VerticalMenu page="meditacao" navigation={navigation} />
        <View style={mainStyles.viewRecuoImg2}>
            <Image source={TopoTela01} style={{ width: '100%', height: 220, resizeMode: 'cover' }} />
            <ScrollView>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zzFgaRMSA14&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=1')}>
                    <Image source={btn_introducao} style={{ width: '100%', height: 68, resizeMode: 'cover' }} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=K_FP2ydkjAA&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=2')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Introdução a <Text style={styles.textBotao}>Meditação</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=K_FP2ydkjAA&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=2')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Meditação <Text style={styles.textBotao}>01</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ryuR4Zwxteg&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=3')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Meditação <Text style={styles.textBotao}>02</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=y7zyU7pI-u4&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=4')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Meditação <Text style={styles.textBotao}>03</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=o3h7PbEGf7w&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=5')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Meditação <Text style={styles.textBotao}>04</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=xPwOMiN9hoQ&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=6')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Meditação <Text style={styles.textBotao}>06</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=IKUZkfEBP_g&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=7')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Meditação <Text style={styles.textBotao}>07</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=Bbhd9bRJ4Qo&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=8')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Meditação <Text style={styles.textBotao}>08</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-snDE6vF5WA&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=9')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Meditação <Text style={styles.textBotao}>09</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.youtube.com/watch?v=gPLtrUtOdfo&list=PLCQb1V9ViuU6K48gr6h2GG4xwqpYZmwWi&index=10')}
                        style={mainStyles.buttonDefaultOutline2}>
                        <Text>Meditação <Text style={styles.textBotao}>10</Text></Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    </View >
}

export default MeditacaoVideo;
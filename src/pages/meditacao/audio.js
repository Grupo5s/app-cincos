import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Image, Text, TouchableOpacity, ScrollView, Linking, Alert } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import TopoTela01 from '../../assets/meditacao/topo_tela_audio.png';
import TopoTela02 from '../../assets/meditacao/topo_tela_audio_bonus.png';
import styles from './styles';
import Sound from 'react-native-sound';
import Loading5S from '../../component/Loading5S';
import * as FirebaseService from '../../service/firebase';
import FEIcon from 'react-native-vector-icons/Feather';
import authReducer from '../../store/reducer/auth';
function MeditacaoAudio(props) {
    const { navigation, route } = props;
    const params = route.params;

    console.log(params);

    const pathAudio = params.pathAudio;

    const [audios, setAudios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState(-1);

    const authReducer = useSelector(state => state.authReducer);

    const [sound, setSound] = useState(null);

    const dispatch = useDispatch();

    const playSound = (audio, index) => {
        setLoading(true);
        if (sound != null && current !== index) {
            sound.stop();

            setSound(null);
            setCurrent(-1);

            dispatch({ type: 'CHANGE_CURRENT_SOUND_INDEX', current: -1 });
            dispatch({ type: 'CHANGE_SOUND', sound: null });
        }
        audio.getDownloadURL().then(url => {
            var newSound = new Sound(url, null, (e) => {
                if (e) {
                    console.log('error loading track:', e)
                } else {
                    newSound.play();
                    setCurrent(index);
                    dispatch({ type: 'CHANGE_CURRENT_SOUND_INDEX', current: index });
                    dispatch({ type: 'CHANGE_SOUND', sound: newSound });

                    setSound(newSound);
                    setLoading(false);
                }
            });
        }).catch(error => {
            setLoading(false);
            Alert.alert('5S', 'Ops! Algo deu errado. Tente mais tarde novamente!!');
            console.log(error);
        });
    }

    const stopSound = () => {
        setCurrent(-1);
        sound.stop();
    }

    useEffect(() => {
        setLoading(true);

        if (authReducer.sound !== undefined && authReducer.sound !== null) {
            console.log(authReducer.sound);
            if (pathAudio === 'audios-bonus') {
                authReducer.sound.stop();
                setCurrent(-1);
            } else {
                if (authReducer.sound !== null) {
                    setSound(authReducer.sound);
                    setCurrent(authReducer.current);
                }
            }

        } else {
            if (authReducer.sound !== null) {
                authReducer.sound.stop();
            } else {
                setCurrent(-1);
            }
        }

        async function loadAudios() {
            const audiosResponse = await FirebaseService.obterAudiosMeditacao();
            const bucket = audiosResponse.bucket;

            const audios = (await audiosResponse.storage.refFromURL(`gs://${bucket}/meditacao`).child(pathAudio).listAll()).items;
            setAudios(audios);
            setLoading(false);
        }

        loadAudios();
    }, []);

    return <View style={mainStyles.layout}>
        <VerticalMenu page="meditacao" navigation={navigation} />
        <View style={mainStyles.viewRecuoImg2}>
            <Image source={(pathAudio === 'audios') ? TopoTela01 : TopoTela02} style={{ width: '100%', height: 220, resizeMode: 'cover' }} />
            <ScrollView>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    {audios !== null && audios !== undefined && audios.length > 0 && audios.map((audio, index) => <TouchableOpacity
                        key={index}
                        onPress={current == index ? () => stopSound() : () => playSound(audio, index)}
                        style={(current == index ? styles.audioOn : styles.audioOff)}>
                        <Text style={{ textAlign: 'left' }}>Meditação <Text style={styles.textBotao}>{index + 1 < 10 ? '0' : ''}{index + 1}</Text></Text>
                        {current != index && <FEIcon name="play" style={styles.buttonPlayStopOff} />}
                        {current == index && <FEIcon name="pause" style={styles.buttonPlayStopOn} />}
                    </TouchableOpacity>)}
                    {pathAudio === 'audios' && <TouchableOpacity
                        onPress={() => { navigation.push('MeditacaoAudio', { pathAudio: 'audios-bonus' }) }}
                        style={styles.audioBonus}>
                        <Text style={{ textAlign: 'left' }}>Áudio <Text style={styles.textBotao}>Bônus</Text></Text>
                        <FEIcon name="chevron-right" />
                    </TouchableOpacity>}
                    {audios !== null && audios !== undefined && audios.length == 0 && <Text>Nenhum conteúdo nesta seção</Text>}
                </View>
            </ScrollView>
        </View>
        <Loading5S
            visible={loading}
            color="#bbbe00"
            overlayColor="rgba(255,255,255,0.80)" />
    </View >
}

export default MeditacaoAudio;
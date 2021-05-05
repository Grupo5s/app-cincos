import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { obterDados, setFoto } from '../../service/firebase';
import { singleAlert } from '../../utils/alerts';

export default function CameraView({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(RNCamera.Constants.Type.front);
    const [camera, setCamera] = useState();
    const [paciente, setPaciente] = useState({});

    const authReducer = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        setPaciente(authReducer.userData);
    }, []);

    
    function changeCamera() {
        setType(type === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back);
    }

    async function takePicture() {
        if (camera) {
            const options = { quality: 0.5, base64: true };
            await camera.takePictureAsync(options).then(async (photo) => {
                const photoUri = photo.base64;
                setFoto(`Paciente/${authReducer.codigoPaciente}`,`${photoUri}`).then(result=> {
                    obterDados(`Paciente/${authReducer.codigoPaciente}`).once('value',(snapshot)=>{
                        var pc = snapshot.val();
    
                        dispatch({
                            type:'CHANGE_USERDATA',
                            userData: pc
                        });
    
                        navigation.navigate('Perfil');
                    });
                });
            });

        }
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <RNCamera
                ratio="5:3"
                ref={ref => setCamera(ref)}
                style={{ flex: 19, width: 450, height: 450 }}
                type={type}>
                <View
                    style={{
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                </View>
            </RNCamera>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#000000'
                    }}
                    onPress={() => changeCamera()}>
                    <Icon name="rotate-ccw" style={{ fontSize: 20, color: '#ffffff', marginTop: 10, marginBottom: 10 }} /><Text style={{ marginTop: 10, marginBottom: 10, color: 'white' }}>  Mudar câmera </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: '50%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#000000'
                    }}
                    onPress={() => takePicture()}>
                    <Icon name="camera" style={{ fontSize: 20, color: '#ffffff', marginTop: 10, marginBottom: 10 }} /><Text style={{ marginTop: 10, marginBottom: 10, color: 'white' }}>  Tirar Foto </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
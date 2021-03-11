import React, { useState, useEffect, useContext } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, Button } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import userNoPhoto from '../../assets/user.png';
import linha from '../../assets/linha.png';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { singleAlert } from '../../utils/alerts';
import DialogInput from 'react-native-dialog-input';
import { alterarSenha } from '../../service/firebase';
import PageTitle from '../../component/PageTitle';
import { useSelector } from 'react-redux';


function Perfil(props) {
    const { navigation } = props;
    const authReducer = useSelector(state => state.authReducer);
    const [paciente, setPaciente] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    function showDialog(show) {
        setIsOpen(show);
    }

    useEffect(() => {
        setPaciente(authReducer.userData);
    }, []);

    useEffect(()=>{
        setPaciente(authReducer.userData);
    },[authReducer.userData]);

    return <View style={mainStyles.layout}>
        <VerticalMenu page="perfil" navigation={navigation} />
        <View style={mainStyles.viewRecuo}>
            <PageTitle title="MEUS DADOS" showLogo={true} />
            <View style={styles.viewUserPhoto}>
                <TouchableOpacity onPress={() => navigation.navigate('CameraView')} style={styles.viewPhoto}>
                    <View style={mainStyles.cardFoto}>
                        {paciente.UrlFoto == '' && <Image source={userNoPhoto} />}
                        {paciente.UrlFoto != '' && <Image source={{ uri: `data:image/gif;base64,${paciente.UrlFoto}` }} style={{ width: 76, height: 76, borderRadius: 100 }} />}
                    </View>
                </TouchableOpacity>
                <Text style={styles.textAlterarFoto}>Toque para  alterar a foto.</Text>
            </View>
            <View style={styles.viewContent}>
                <Image source={linha} style={mainStyles.line} />
                <View style={{ padding: 10, width: '100%' }}>
                    <TouchableOpacity onPress={() => { showDialog(true) }} style={styles.btnAlterarSenha}>
                        <Icon name="lock" style={styles.btnAlterarSenhaIcon} />
                        <Text style={styles.btnAlterarSenhaLabel}>Alterar Senha</Text>
                    </TouchableOpacity>
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View style={styles.viewData}>
                    <View style={styles.viewPacienteInfo}>
                        <View style={styles.viewPacienteInfoItem}>
                            <Text style={mainStyles.textGrayLightNormal}>Seu código</Text>
                            <Text style={mainStyles.nomeDestaque}>{authReducer.codigoPaciente}</Text>
                        </View>
                    </View>
                </View>
                <Image source={linha} style={mainStyles.line} />
                <View style={styles.viewData}>
                    <View style={styles.viewDataInicio}>
                        <Text style={mainStyles.textGrayLightNormal}>Início</Text>
                        <Text style={mainStyles.nomeDestaque}>{paciente.DataInicioTratamento}</Text>
                    </View>
                    <View style={styles.viewDataFim}>
                        <Text style={mainStyles.textGrayLightNormal}>Termino</Text>
                        <Text style={mainStyles.nomeDestaque}>{paciente.DataFimTratamento}</Text>
                    </View>
                </View>
                <Image source={linha} style={mainStyles.line} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.viewPacienteInfo}>
                        <View style={styles.viewPacienteInfoItem}>
                            <Text style={mainStyles.textGrayLightNormal}>Nome</Text>
                            <Text style={mainStyles.nomeDestaque}>{paciente.NomeCompleto}</Text>
                        </View>
                        <Image source={linha} style={mainStyles.line} />
                        <View style={styles.viewPacienteInfoItem}>
                            <Text style={mainStyles.textGrayLightNormal}>E-mail</Text>
                            <Text style={mainStyles.nomeDestaque}>{paciente.Email}</Text>
                        </View>
                        <Image source={linha} style={mainStyles.line} />
                        <View style={styles.viewPacienteInfoItem}>
                            <Text style={mainStyles.textGrayLightNormal}>Modalidade</Text>
                            <Text style={mainStyles.nomeDestaque}>{paciente.NomeModalidade}</Text>
                        </View>
                        <Image source={linha} style={mainStyles.line} />
                        <View style={styles.viewPacienteInfoItem}>
                            <Text style={mainStyles.textGrayLightNormal}>Fase</Text>
                            <Text style={mainStyles.nomeDestaque}>{paciente.NomeFase}</Text>
                        </View>
                        <Image source={linha} style={mainStyles.line} />
                        <View style={styles.viewPacienteInfoItem}>
                            <Text style={mainStyles.textGrayLightNormal}>Semana</Text>
                            <Text style={mainStyles.nomeDestaque}>{paciente.NomeSemana}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
        <DialogInput isDialogVisible={isOpen}
            title={"Alterar Senha"}
            message={"Informe a nova senha"}
            hintInput={"Senha"}
            cancelText="Cancelar"
            submitText={"Alterar"}
            submitInput={(senha) => {
                alterarSenha(senha).then(() => {
                    showDialog(false);
                    singleAlert('Dados', 'Senha alterada com sucesso.');
                })
                    .catch(error => {
                        console.log(error);
                    });
            }}

            closeDialog={() => { showDialog(false) }}>
        </DialogInput>
    </View>
}

export default Perfil;
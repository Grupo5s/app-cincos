import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import mainStyles from '../mainStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { setDados } from '../service/firebase';

function VerticalMenu(props) {

    const { navigation, page } = props;
    const authReducer = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    function openTelegram() {
        Linking.openURL(authReducer.userData.LinkGrupoTelegram + '&app=5S');
    }

    function sair() {
        dispatch({
            type: 'CHANGE_CONECTADO',
            conectado: false
        });

        dispatch({
            type: 'CHANGE_CODIGOPACIENTE',
            codigoPaciente: 0
        });

        dispatch({
            type: 'CHANGE_USERDATA',
            userData: {}
        });

        setDados(`Paciente/${authReducer.codigoPaciente}/Conectado`,false).then(response=> {   
            navigation.navigate('Login');
        });
    }

    return <>
        <View style={mainStyles.verticalMenu}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <Icon name="home" size={20} style={page == 'home' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                <Icon name="user" size={23} style={page == 'perfil' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('GuiaAlimentar')}>
                <Icon name="wpforms" size={22} style={page == 'guiaalimentar' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('RegraDaMao')}>
                <Icon name="hand-paper-o" size={20} style={page == 'regradamao' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MeusResultados')}>
                <Icon name="pie-chart" size={20} style={page == 'meusresultados' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Bioimpedancia')}>
                <Icon name="bar-chart" size={22} style={page == 'bioimpedancia' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Receitas')}>
                <Icon name="book" size={22} style={page == 'receitas' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Exercicios')}>
                <Icon name="heartbeat" size={22} style={page == 'exercicios' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LivrosReceitas')}>
                <Icon name="address-book" size={22} style={page == 'livros' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            {/*<TouchableOpacity onPress={() => openTelegram() }>
                <Icon name="comments" size={22} style={mainStyles.iconInactive} />
                </TouchableOpacity>*/}
            {/*<TouchableOpacity onPress={() => navigation.navigate('Ouvidoria')}>
                <Icon name="bullhorn" size={20} style={page == 'ouvidoria' ? mainStyles.iconActive : mainStyles.iconInactive} />
                </TouchableOpacity>*/}
            <TouchableOpacity onPress={() => navigation.navigate('Duvidas')}>
                <Icon name="question-circle" size={22} style={page == 'duvidas' ? mainStyles.iconActive : mainStyles.iconInactive} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { sair() }}>
                <Icon name="power-off" size={20} style={mainStyles.iconLogout} />
            </TouchableOpacity>
        </View>
    </>
}

export default VerticalMenu;
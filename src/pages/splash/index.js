import React, { useEffect } from 'react';
import {
    View,
    Image
} from 'react-native';
import logo from '../../assets/logo_2.png'
import mainStyles from '../../mainStyles';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 300);
    }, []);

    return <View style={mainStyles.view}>
        <Image source={logo} style={mainStyles.logo} />
    </View>
};

export default Splash;
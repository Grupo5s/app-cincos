import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import mainStyles from '../mainStyles';
import logo from '../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import linha from '../assets/linha.png';

function PageTitle({ title, showLogo = false }) {
    return <>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: '50%' }}><Text style={{ fontSize: 16, color: '#666666', fontWeight: 'bold', marginLeft: 5 }}>{title}</Text></View>
            <View style={{ width: '50%', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity style={{ marginRight: 20, marginTop: 16 }} >
                    <Icon name="bell" size={16} style={{ color: 'gray' }} />
                </TouchableOpacity>
                {/*<TouchableOpacity style={{marginRight: 20, marginTop: 16}}>
                    <Icon name="envelope" size={16} style={{color: 'gray'}}/>
                </TouchableOpacity>*/}
                {showLogo && <Image source={logo} style={{ width: 50, height: 50 }} />}
            </View>
        </View>
        <Image source={linha} style={mainStyles.line} />
    </>
}

export default PageTitle;
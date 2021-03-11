import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, Image, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import PageTitle from '../../component/PageTitle';
function LivrosReceitas(props) {
    const { navigation } = props;

    return <View style={mainStyles.layout}>
        <VerticalMenu page="livros" navigation={navigation} />
        <View style={mainStyles.viewRecuo}>
            <PageTitle title="Livros de Receitas" showLogo={true} />
            <ScrollView>
                <TouchableOpacity
                    onPress={() => Linking.openURL('http://clubeeusaudavel.azurewebsites.net/LivrosDeReceitas/Volume1.pdf')}
                    style={styles.btn}>
                    <Icon name="book" size={30} style={{ marginRight: 10, marginBottom: 10 }} />
                    <Text>Livro de Receitas - Volume 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL('http://clubeeusaudavel.azurewebsites.net/LivrosDeReceitas/Volume2.pdf')}
                    style={styles.btn}>
                    <Icon name="book" size={30} style={{ marginRight: 10, marginBottom: 10 }} />
                    <Text>Livro de Receitas - Volume 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Linking.openURL('http://clubeeusaudavel.azurewebsites.net/LivrosDeReceitas/Volume3.pdf')}
                    style={styles.btn}>
                    <Icon name="book" size={30} style={{ marginRight: 10, marginBottom: 10 }} />
                    <Text>Livro de Receitas - Volume 3</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
}

export default LivrosReceitas;
import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import PageTitle from '../../component/PageTitle';
import Loading5S from '../../component/Loading5S';
import { getOlderPost } from '../../service/wp';
import HTMLView from 'react-native-htmlview';

function Duvidas(props) {

    const { navigation, page } = props;

    const [post, setPost] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getOlderPost(3367).then(response => {
            const texto = response.data;
            setPost(texto);
            setLoading(false);
        }).catch(error => { })
    }, []);

    return <>
        <View style={mainStyles.layout}>
            <VerticalMenu page="duvidas" navigation={navigation} />
            <View style={mainStyles.viewRecuo}>
                <PageTitle title="DÚVIDAS" showLogo={true} />
                <ScrollView>
                    {post != '' && <HTMLView value={post.content.rendered.trim().replace(/\n/g, '')} />}
                </ScrollView>
            </View>
            <Loading5S
                color=""
                visible={loading}
                color="#bbbe00"
                overlayColor="rgba(255,255,255,0.80)" />
        </View>
    </>
}

export default Duvidas;
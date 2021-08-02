import React, { useEffect, useState, useRef, useContext } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import mainStyles from '../../mainStyles';
import VerticalMenu from '../../component/VerticalMenu';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { getSubcategorias, getPosts, getFeaturedMedia, getPost } from '../../service/wp';
import PageTitle from '../../component/PageTitle';
import almoco from '../../assets/almoco.png';
import capaCafeManha from '../../assets/cafe.png';
import chas from '../../assets/chas.png';
import jantar from '../../assets/jantar.png';
import sobremesas from '../../assets/sobremesas.png';
import sopas from '../../assets/sopas.png';
import sucos from '../../assets/sucos.png';
import { obterDados } from '../../service/firebase/index';
import PostPreview from '../../component/PostPreview';
import PostBody from '../../component/PostBody';
import Loading5S from '../../component/Loading5S';
import { useSelector } from 'react-redux';

function Receitas(props) {
    const { navigation } = props;

    const authReducer = useSelector(state=>state.authReducer);

    const [paciente,setPaciente] = useState({});

    const imageRef = useRef('');

    const [showFases, setShowFases] = useState(true);
    const [showSubcategorias, setShowSubcategorias] = useState(false);
    const [showPosts, setShowPosts] = useState(false);
    const [showPost, setShowPost] = useState(false);

    const [receitasFaseID, setReceitasFaseID] = useState({});
    const [receitasFaseSubCategoriasID, setReceitasFaseSubCategoriasID] = useState([]);
    const [receitasFaseSubCategoriasPosts, setReceitasFaseSubCategoriasPosts] = useState([]);
    const [receitasFaseSubCategoriasPost, setReceitasFaseSubCategoriasPost] = useState({});

    const [loading,setLoading] = useState(false);

    const [imagens, setImagens] = useState([]);

    function obterReceitasFaseID() {
        obterDados(`Receitas/${paciente.Receitas}`).on('value', snapshot => {
            var infoReceita = snapshot.val();
            setLoading(false);
            setReceitasFaseID(infoReceita);
        });
    }

    function obterSubCategoriasFase(categoriaID) {
        setLoading(true);
        getSubcategorias(categoriaID).then(response => {
            var subcategorias = response.data;
            setReceitasFaseSubCategoriasID(subcategorias);
            setShowFases(false);
            setShowSubcategorias(true);
            setLoading(false);
        });
    }

    function getSubcategoriaPosts(subcategoriaID) {
        setLoading(true);
        getPosts(subcategoriaID).then(response => {
            var posts = response.data;
            setReceitasFaseSubCategoriasPosts(posts);
            setShowSubcategorias(false);
            setShowPosts(true);
            setLoading(false);
        });
    }

    function getSubcategoriaPost(postID) {
        setLoading(true);
        getPost(postID).then(response => {
            var post = response.data;
            setReceitasFaseSubCategoriasPost(post);
            getFeaturedMedia(post.featured_media).then(response => {
                var featuredMedia = response.data;
                imageRef.current = `https://www.5sgrupo.com.br${featuredMedia.source_url}`;
            });

            setShowSubcategorias(false);
            setShowPosts(false);
            setShowPost(true);
            setLoading(false);
        });
    }

    function hideReceitas() {
        setShowFases(true);
        setShowSubcategorias(false);
    }

    function hidePosts() {
        setShowFases(false);
        setShowSubcategorias(true);
        setShowPosts(false);
        setShowPost(false);
    }

    function hidePost() {
        setShowSubcategorias(false);
        setShowPosts(true);
        setShowPost(false);
    }

    useEffect(() => {
        setLoading(true);
        setPaciente(authReducer.userData);

        console.log(authReducer.userData);
    }, []);

    useEffect(()=>{
        obterReceitasFaseID();
    },[paciente])

    return <View style={mainStyles.layout}>
        <VerticalMenu page="receitas" navigation={navigation} />
        <Loading5S
                color=""
                visible={loading}
                color="#bbbe00"
                overlayColor="rgba(255,255,255,0.80)"/>
        <View style={mainStyles.viewRecuo}>
            <PageTitle title="RECEITAS" showLogo={true} />
            {showFases && <View>
                {(paciente.CodModalidade == 8 || paciente.CodModalidade == 9 || paciente.CodModalidade == 22 || paciente.CodModalidade == 23) && <>
                    <Text style={{ marginBottom: 10 }}>Receita por fase para:</Text>
                    <Text style={mainStyles.textGrayLight}>{paciente.NomeModalidade}</Text>
                    <Text></Text>
                    <TouchableOpacity
                        style={mainStyles.buttonDefault}
                        onPress={() => { obterSubCategoriasFase(receitasFaseID.WP_CAT_DESINTOXICACAO1_ID) }}>
                        <Text>Desintoxicação 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={mainStyles.buttonDefault}
                        onPress={() => { obterSubCategoriasFase(receitasFaseID.WP_CAT_DESINTOXICACAO2_ID) }}>
                        <Text>Desintoxicação 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={mainStyles.buttonDefault}
                        onPress={() => { obterSubCategoriasFase(receitasFaseID.WP_CAT_REPROGRAMACAO_ID) }}>
                        <Text>Reprogramação</Text>
                    </TouchableOpacity>
                </>}
                {(paciente.CodModalidade == 10 || paciente.CodModalidade == 11 || paciente.CodModalidade == 24 || paciente.CodModalidade == 25) && <>
                    <Text style={{ marginBottom: 10 }}>Receitar por fase para:</Text>
                    <Text style={mainStyles.textGrayLight}>{paciente.NomeModalidade}</Text>
                    <Text></Text>
                    <TouchableOpacity
                        style={mainStyles.buttonDefault}
                        onPress={() => { obterSubCategoriasFase(receitasFaseID.WP_CAT_DESINTOXICACAO_ID) }}>
                        <Text>Desintoxicação</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={mainStyles.buttonDefault}
                        onPress={() => { obterSubCategoriasFase(receitasFaseID.WP_CAT_REPROGRAMACAO_ID) }}>
                        <Text>Reprogramação</Text>
                    </TouchableOpacity>
                </>}
                {(paciente.CodModalidade == 12 || paciente.CodModalidade == 13 || paciente.CodModalidade == 14 || paciente.CodModalidade == 15 || paciente.CodModalidade == 16 || paciente.CodModalidade == 17) && <>
                    <Text style={{ marginBottom: 10 }}>Receita por fase para:</Text>
                    <Text style={mainStyles.textGrayLight}>{paciente.NomeModalidade}</Text>
                    <Text></Text>
                    <TouchableOpacity
                        style={mainStyles.buttonDefault}
                        onPress={() => { obterSubCategoriasFase(receitasFaseID.WP_CAT_DESINTOXICACAO1_ID) }}>
                        <Text>Desintoxicação 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={mainStyles.buttonDefault}
                        onPress={() => { obterSubCategoriasFase(receitasFaseID.WP_CAT_DESINTOXICACAO2_ID) }}>
                        <Text>Desintoxicação 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={mainStyles.buttonDefault}
                        onPress={() => { obterSubCategoriasFase(receitasFaseID.WP_CAT_REPROGRAMACAO_ID) }}>
                        <Text>Reprogramação</Text>
                    </TouchableOpacity>
                </>}
            </View>}
            {showSubcategorias && <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', marginBottom: 12 }}
                    onPress={() => hideReceitas()}>
                    <Text> <Icon name="arrow-left" style={{ color: '#bbbe00' }} /> Voltar </Text>
                </TouchableOpacity>
                <ScrollView style={styles.scrollView}>
                    <View style={{ flex: 1, width: '100%', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        {receitasFaseSubCategoriasID.length > 0 && receitasFaseSubCategoriasID.map(subcategoria => {
                            /* https://www.5sgrupo.com.br/wp-content/uploads/2020/10/ */
                            var slug = subcategoria.slug;
                            var arrSlug = slug.split('-');
                            return <TouchableOpacity
                                key={subcategoria.id}
                                onPress={() => getSubcategoriaPosts(subcategoria.id)}>
                                {(arrSlug[0] == 'cafe') && <Image resizeMode="stretch" source={capaCafeManha} style={{ width: 490, height: 250, marginBottom: 10 }} />}
                                {(arrSlug[0] == 'almoco') && <Image resizeMode="stretch" source={almoco} style={{ width: 490, height: 250, marginBottom: 10 }} />}
                                {(arrSlug[0] == 'jantar') && <Image resizeMode="stretch" source={jantar} style={{ width: 490, height: 250, marginBottom: 10 }} />}
                                {(arrSlug[0] == 'sucos') && <Image resizeMode="stretch" source={sucos} style={{ width: 490, height: 250, marginBottom: 10 }} />}
                                {(arrSlug[0] == 'sobremesas') && <Image resizeMode="stretch" source={sobremesas} style={{ width: 490, height: 250, marginBottom: 10 }} />}
                                {(arrSlug[0] == 'chas') && <Image resizeMode="stretch" source={chas} style={{ width: 490, height: 250, marginBottom: 10 }} />}
                                {(arrSlug[0] == 'sopas') && <Image resizeMode="stretch" source={sopas} style={{ width: 490, height: 250, marginBottom: 10 }} />}
                            </TouchableOpacity>;
                        })}
                    </View>
                </ScrollView>
            </View>}
            {showPosts && <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', marginBottom: 12 }}
                    onPress={() => hidePosts()}>
                    <Text> <Icon name="arrow-left" style={{ color: '#bbbe00' }} /> Voltar </Text>
                </TouchableOpacity>
                <ScrollView style={styles.scrollView}>
                    <View style={{ width: '100%' }}>
                        {receitasFaseSubCategoriasPosts.length > 0 && receitasFaseSubCategoriasPosts.map((post, index) => {
                            return <PostPreview key={post.id} id={post.id} title={post.title} featuredMediaID={post.featured_media} image={imageRef.current} styles={styles.aba} onPress={() => getSubcategoriaPost(post.id)} />;
                        })}
                    </View>
                </ScrollView>
            </View>}
            {showPost && <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'transparent', marginBottom: 12 }}
                    onPress={() => hidePost()}>
                    <Text> <Icon name="arrow-left" style={{ color: '#bbbe00' }} /> Voltar </Text>
                </TouchableOpacity>
                <PostBody post={receitasFaseSubCategoriasPost} styles={styles.scrollView} />
                {/*<ScrollView style={styles.scrollView}>
                    <Image resizeMode="stretch" source={{ uri: imageRef.current }} style={{ width: 300, height: 180 }} />
                    <HTMLView value={receitasFaseSubCategoriasPost.content.rendered.trim().replace(/\n/g,'')}/>
                    </ScrollView>*/}
            </View>}
        </View>
    </View>
}

export default Receitas;
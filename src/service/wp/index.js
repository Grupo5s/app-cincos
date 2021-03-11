import axios from 'axios';

const wpApiOld = axios.create({
    baseURL: 'https://www.5sestilodevida.com.br/wp-json/wp/v2/'
});

const wpApi = axios.create({
    baseURL: 'https://www.5sgrupo.com.br/wp-json/wp/v2/'
});

const wpApiFeaturedMedia = axios.create({
    baseURL: 'https://www.5sgrupo.com.br/wp-json/wp/v2/media/'
});

const getCategories = function() {
    return wpApi.get('categories');
}

const getSubcategorias = function(categoriaID) {
    return wpApi.get(`categories/?parent=${categoriaID}`);
}

const getPosts = function(subcategoriaID) {
    return wpApi.get(`posts/?categories=${subcategoriaID}`);
}

const getPost = function(postID) {
    return wpApi.get(`posts/${postID}`);
}

const getOlderPost = function(postID) {
    return wpApiOld.get(`posts/${postID}`);
}

const getFeaturedMedia = function(id)  {
    return wpApiFeaturedMedia.get(`${id}`);
}

export { getCategories,getSubcategorias, getPosts, getFeaturedMedia, getPost, getOlderPost };
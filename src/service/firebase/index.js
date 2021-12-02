import firebaseApp from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

const exists = firebaseApp.apps.filter(app => app._name === '[DEFAULT]');
console.log('exists', exists.length);
if (exists.length === 0) {
    firebaseApp.initializeApp({
        apiKey: "AIzaSyDvanfZRjdbrBKuwA6N_uoyq9plLBaAbeg",
        authDomain: "app5s-ac366.firebaseapp.com",
        databaseURL: "https://app5s-ac366-53d98.firebaseio.com",
        projectId: "app5s-ac366",
        storageBucket: "app5s-ac366.appspot.com",
        messagingSenderId: "851896440244",
        appId: "1:851896440244:web:4cc375d6be928029"
    });
}

const fireAuth = auth();
const fireData = database();
const fireStorage = storage();

const autenticarComEmailSenha = function (email, password) {
    return fireAuth.signInWithEmailAndPassword(email, password);
}

const alterarSenha = function (senha) {
    var usuario = fireAuth.currentUser;
    return usuario.updatePassword(senha);
}

const fbLogout = function () {
    return fireAuth.signOut();
}

const obterDados = function (ref) {
    return fireData.ref(ref);
}

const setFoto = function (ref, foto) {
    return fireData.ref(ref).child('UrlFoto').set(foto);
}

const setDados = function (ref, obj) {
    return fireData.ref(ref).set(obj);
}

const setConectado = function (codigoPaciente, conectado) {
    return fireData.ref(`Paciente/${codigoPaciente}`).child('conectado').set(conectado);
};

const enviarEmailRedefinicaoSenha = function (email) {
    return fireAuth.sendPasswordResetEmail(email);
}

const obterAudiosMeditacao = () => {
    return fireStorage.ref();
}

export {
    alterarSenha,
    autenticarComEmailSenha,
    fbLogout,
    obterDados,
    setFoto,
    setDados,
    setConectado,
    enviarEmailRedefinicaoSenha,
    obterAudiosMeditacao
}
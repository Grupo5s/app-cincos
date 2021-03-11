import firebase from 'firebase';

if(firebase.apps.length==0) {
    firebase.initializeApp({
        apiKey: 'AIzaSyDtTgx7YII7UJ9fPtTu6NjWL89hjfoUsH8',
        //databaseURL: 'https://app5s-ac366-48a38.firebaseio.com/',
        databaseURL: 'https://app5s-ac366-53d98.firebaseio.com/',
        projectId: 'app5s-ac366',
        storageBucket: 'app5s-ac366.appspot.com',
        messagingSenderId: '851896440244'
    });
};

const fireAuth = firebase.auth();
const fireData = firebase.database();

const autenticarComEmailSenha = function (email, password) {
    return fireAuth.signInWithEmailAndPassword(email,password);
}

const alterarSenha = function (senha) {
    var usuario = fireAuth.currentUser;
    return usuario.updatePassword(senha);
}

const fbLogout = function() {
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

const setConectado = function(codigoPaciente,conectado) {
    return fireData.ref(`Paciente/${codigoPaciente}`).child('conectado').set(conectado);
};

const enviarEmailRedefinicaoSenha = function(email) {
    return fireAuth.sendPasswordResetEmail(email);
}

export {
    alterarSenha,
    autenticarComEmailSenha,
    fbLogout,
    obterDados,
    setFoto,
    setDados,
    setConectado,
    enviarEmailRedefinicaoSenha
}
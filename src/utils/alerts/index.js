import { Alert } from 'react-native';

function singleAlert(title, message) {
    Alert.alert(title,message);
}

export { singleAlert }
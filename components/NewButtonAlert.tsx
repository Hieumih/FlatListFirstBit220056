import { Button, StyleSheet, Alert } from 'react-native';


type Options = {
    btnTitle?: string;
    alertTitle?: string;
    alertMessage?: string;
}




const NewButtonAlert = (options: Options) => {
    return (
        <Button title={options.btnTitle ?? 'Alert'} onPress={() => {
            Alert.alert(options.alertTitle ?? 'Alert Title', options.alertMessage ?? 'Alert Message');
        }} />
    )
}


export default NewButtonAlert;




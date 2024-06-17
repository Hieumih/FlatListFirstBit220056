import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons/faInfo'
import { faWarning } from '@fortawesome/free-solid-svg-icons/faWarning'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'


export type NofificationsType = 'Info' | 'Warning' | 'Error' | 'Success';

export type GreetingProps = {
    title?: string;
    message?: string;
    type?: NofificationsType;
}


const NotificationItem = (props: GreetingProps) => {
    let icon;
    switch (props.type) {
        case 'Info':
            icon = faInfo;
            break;
        case 'Warning':
            icon = faWarning;
            break;
        case 'Error':
            icon = faXmark;
            break;
        case 'Success':
            icon = faCheck;
            break;
        default:
            icon = faInfo;
            break;
    }


    return (
        <View style={styles.container}>
            <View style={styles.icon_container}>
                <FontAwesomeIcon icon={icon} size={24} color='black' />
            </View>
            <View>
                <Text style={styles.title}>{props?.title ?? 'New Notification'}:</Text>
                <Text>{props?.message ?? 'You have a new notification'}</Text>
            </View>
        </View>
    );
}


export default NotificationItem;


const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    icon_container: {
        marginRight: 10,
        // border right
        borderRightWidth: 1,
        borderColor: 'gray',
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
    }
});
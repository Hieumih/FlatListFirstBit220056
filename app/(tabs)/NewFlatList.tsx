import { FlatList, View } from 'react-native';

import NotificationItem, {NofificationsType} from '@/components/NotificationItem';



export default function TestScreen() {
    let nofifications = [
        { title: 'Notification 1', message: 'You have a new notification', type: 'Info'}, 
        { title: 'Notification 2', message: 'You have a new notification', type: 'Warning'},
        { title: 'Notification 3', message: 'You have a new notification', type: 'Error'},
        { title: 'Notification 4', message: 'You have a new notification', type: 'Success'},
        
    ];

    return (
        <View>
            <FlatList
                data= {nofifications}
                renderItem={({ item }) => <NotificationItem title={item.title} message={item.message} type={item.type as NofificationsType} />}
                keyExtractor={item => item.title}
            />

        </View>
    );
}


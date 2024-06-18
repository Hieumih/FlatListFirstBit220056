import { Text, StyleSheet, View } from 'react-native'
import Square from '@/components/Square';


const BaiTap3 = () => {
    return (
        <View style={styles.container}>
            <Square title='Square 1' bgcolor='#7ce0f9'/>
            <Square title='Square 2' bgcolor='#4cc2c2'/>
            <Square title='Square 3' bgcolor='ff637c'/>

        
        </View>
    )
}


export default BaiTap3;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'red',
        // width: 40,
        // height: 40,
        display: 'flex',
        flexDirection: 'row',

    }
})
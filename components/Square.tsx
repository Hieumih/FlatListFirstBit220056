import { Text, View, StyleSheet } from 'react-native'



type SquareProps = {
    title?: string;
    bgcolor?: string;
}

const Square = (prop: SquareProps) => {

    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: prop?.bgcolor ?? 'red',
            width: 100,
            height: 100,
            margin: 10
    
        }
    })

    return (
        <View style={styles.container}>
            <Text>{prop?.title ?? 'title'}</Text>
        </View>
    )
}

export default Square;




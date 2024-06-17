import { Image, StyleSheet, Platform, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

import NewInput from '@/components/NewInput';







// const NewInput = (props: GreetingProps) => {
//   const { text } = props;
//   return (
//     <View>

//       <Text>{props?.tilte ?? 'Enter Something'}:</Text>

//       <TextInput style={styles.ipt} defaultValue={text} placeholder='Enter text' onChangeText={newText => {
//         props.onChange(newText);
//       }}/>
//       <Button
//         title='Click me'
//       />
//     </View>
//   );
// }

export default function HomeScreen() {
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    return (
        <View style={styles.mid}>
            <Text style={styles.text}>Login</Text>
            <NewInput
                text={username}
                onChange={newtext => setUsername(newtext)}
                tilte='Username'
                placeholder='Enter username'
                options={{ hideTitle: true }}
            />
            <NewInput
                text={pass}
                secureTextEntry
                onChange={newtext => setPass(newtext)}
                tilte='Password'
                placeholder='Enter password'
                options={{ hideTitle: true }}
            />

            <Button
                title='Login'
                disabled={pass.length < 8 || username === ''}
                onPress={() => {
                    console.log('Login', {username, pass});
                }}
            />
            { __DEV__ ?             
            <View>
                <Text>username: {username} </Text>
                <Text>password: {pass}</Text>
            </View> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    mid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
    }
});

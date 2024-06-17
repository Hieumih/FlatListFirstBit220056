import { Image, StyleSheet, Platform, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

type KeyboardType = 'numeric' | 'default';

type Options = {
    hideTitle?: boolean;
}

export type GreetingProps = {
    text: string;
    onChange: (text: string) => void;
    tilte?: string;
    placeholder?: string;
    keyboardType?:  KeyboardType;
    secureTextEntry?: boolean;
    options?: Options;
};



const NewInput = (props: GreetingProps) => {
    const { text, onChange } = props;
    return (
        <View>

            {!props.options?.hideTitle && <Text>{props?.tilte ?? 'Enter Something'}:</Text>}

            <TextInput style={styles.ipt} defaultValue={text} 
                placeholder={props?.placeholder ?? ''} 
                keyboardType= {props?.keyboardType ?? 'default'}
                secureTextEntry={props?.secureTextEntry ?? false}
                onChangeText={newText => {
                onChange(newText);
            }} />

        </View>
    );
}


export default NewInput;

const styles = StyleSheet.create({
    ipt: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 10,
    }
});
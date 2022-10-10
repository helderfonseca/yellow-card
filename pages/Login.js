import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View, Image, StyleSheet, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import cardImage from '../src/assets/card.png';

const Login = () => {

    const [text, setText] = useState('');

    return (
       <KeyboardAvoidingView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={cardImage} style={{width: 200, height: 200, resizeMode: 'contain'}}/>
            </View>
            <View style={styles.containerSignIn}>
                <Text style={styles.signInTitle}>Login</Text>
                <Icon name='envelope' style={{position: 'absolute', top: 180, left: 10}} size={17} color='#1e1e1e' />
                <Icon name='lock' style={{position: 'absolute', top: 245, left: 10}} size={20} color='#1e1e1e' />
                <TextInput
                    style={{height: 40, margin: 12, borderBottomWidth: 1, paddingLeft: 30}}
                    placeholder="Email"
                    placeholderTextColor="darkgrey"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
                <TextInput
                    style={{height: 40, margin: 12, borderBottomWidth: 1, paddingLeft: 30}}
                    placeholder="Palavra passe"
                    placeholderTextColor="darkgrey"
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style='auto' backgroundColor='red'/>
       </KeyboardAvoidingView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: "column"
    },
    containerLogo: {
        flex: 1,
        //paddingTop: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    containerSignIn: {
        flex: 2,
        //paddingTop: 80,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    signInTitle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#fef200',
        marginHorizontal: 12,
        marginVertical: 15,
        padding: 10,
    }
});

export default Login;

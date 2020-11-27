import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { api } from '../global';

function CreateUsers({ navigation }) {
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const createUser = async () => {
        try {
            const response = await fetch(api +'adduser', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: userName,
                    password: userPassword,                    
                }),
            });
            const json = await response.json();
            Alert.alert("User created successfuly");
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert("An error has ocurred: " + error);            
        }
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Username" onChangeText={text => setUserName(text)} />
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true} onChangeText={text => setUserPassword(text)} />
            <TouchableHighlight style={styles.createUserButton} onPress={createUser}>
                <Text style={styles.textStyleButton}>Create User</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        padding: 20,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        width: Dimensions.get('screen').width * 0.9
    },
    createUserButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#125512',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center'
    },
    textStyleButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    }
});

export default CreateUsers;
import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, Alert, Image } from 'react-native';
import { TouchableHighlight,  TextInput } from "react-native-gesture-handler";
import { tan } from "react-native-reanimated";
import { api } from '../global';

// funcion principal para los usuarios loguearse 

function Login({ navigation }) {
  const [username, setUsername] = useState("");    
  const [password, setPassword] = useState("");
  const getUser = async () => {
    
    try {
        const api_php = "http://localhost/Momento2_Aplicativos_Moviles/citas_php/api.php";
        const api_nodejs_mongo = api + "validateuser";
        const response = await fetch(api_nodejs_mongo, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }, 
           
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const json = await response.json();        
        if(json.user){
          navigation.navigate('ListAppointments',{
            userid: json.user._id
          });
        }else{
          Alert.alert("Authentication Error",json.response);
        }
    } catch (error) {
        Alert.alert("An error has ocurred: " + error);            
    }
}
  
  return (
    <View style={styles.loginScreenContainer}>
      <View style={styles.loginFormView}>
        <Text style={styles.logoText}>Citas medicas</Text>
        <Image source={require('../assets/logo-citas.png')} style={{height: 150, width:200, 
        }} />
        <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginTextInput} onChangeText={text => setUsername(text)}/>
        <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginTextInput} secureTextEntry={true} onChangeText={text => setPassword(text)} />
        <TouchableHighlight style={styles.loginButton} onPress={getUser}>
          <Text style={styles.loginButtonText}>Ingresar</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.registerButton} onPress={()=>navigation.navigate('CreateUsers')}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableHighlight>
      </View>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginTop: 100,
    marginBottom: 10,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1
  },
  loginTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0F0F0F',
    backgroundColor: '#fafafa',
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  loginButton: {
    backgroundColor: '#0EC833',
    fontSize: 16,
    borderRadius: 5,
    height: 40,
    margin: 15,
    padding: 10,
    width: Dimensions.get('screen').width * 0.93,
    alignItems: 'center'
  },
  loginButtonText: {
    color: 'white'
  },
  registerButton: {
    fontSize: 5,    
    alignItems: 'center'
  },
  registerButtonText: {
    color: '#1C1D1C'
  },

});

export default Login;

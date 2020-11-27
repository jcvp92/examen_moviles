import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { api } from '../global';

// funcion para actualizar todas nuestras citas 
function UpdateAppointment({ route, navigation }) {
    const { itemId, itemDate, itemTitle, userid } = route.params;    
    const [appointmentTitle, setAppointmentTitle] = useState(itemTitle);    
    const [appointmentDate, setAppointmentDate] = useState(itemDate);
    const updateAppointment = async () => {

        try {
            const response = await fetch(api + '/updateAppointment', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: itemId,
                    title: appointmentTitle,
                    date: appointmentDate,
                    user: userid
                }),
            });
            const json = await response.json();
            Alert.alert("Appointment updated successfuly");
            navigation.navigate('ListAppointments',{
                userid: userid
              });
        } catch (error) {
            Alert.alert("An error has ocurred: " + error);            
        }
    }


    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="appointment description" onChangeText={text => setAppointmentTitle(text)}>{itemTitle}</TextInput>
            <TextInput style={styles.textInput} placeholder="appointment date" onChangeText={text => setAppointmentDate(text)}>{itemDate}</TextInput>
            <TouchableHighlight style={styles.createAppointmentButton} onPress={updateAppointment}>
                <Text style={styles.textStyleButton}>Update Appointment</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
    },
    textInput: {
        padding: 20,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        width: Dimensions.get('screen').width * 0.9
    },
    createAppointmentButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#0288d1',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center'
    },
    textStyleButton: {
        color: 'white',
        fontSize: 16
    }
});
export default UpdateAppointment;	
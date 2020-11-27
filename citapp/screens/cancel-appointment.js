import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { api } from '../global';



function CancelAppointment({ route, navigation }) {
    const { itemId, itemDate, itemTitle, userid} = route.params;
    const updateAppointment = async () => {

        try {
            const response = await fetch( api + 'deleteappointment', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: itemId,
                }),
            });
            const json = await response.json();
            Alert.alert("Appointment deleted successfuly");
            navigation.navigate('ListAppointments');
        } catch (error) {
            Alert.alert("An error has ocurred: " + error);            
        }
    }


    return (
        <View style={styles.container}>                        
            <Text style={styles.text}>Description: {itemTitle}</Text>
            <Text style={styles.text}>Date: {itemDate}</Text>
            <TouchableHighlight style={styles.createAppointmentButton} onPress={()=>
            Alert.alert(
                'Cancel Appointment',
                'Are you sure you want to cancel this appointment?',
                [
                    { text: 'Cancel', style: 'cancel', },
                    {
                        text: 'OK', onPress: updateAppointment
                    },
                ],
                { cancelable: false },
            )}>
                <Text style={styles.textStyleButton}>Cancel Appointment</Text>
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
    text: {
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
export default CancelAppointment;	
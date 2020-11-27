import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import CardComponent from './card-component'
import { api } from '../global' ;


// funion para listar citas 
function ListAppointments({ route, navigation }) {
    const { userid } = route.params;    
    const isFocused = useIsFocused();
    const [appointments, setAppointments] = useState([]);

    /* Data for the flatlist */
    const fetchAppointments = async () => {
        //let response = await fetch('http://192.168.0.3:80/citapp_api_php/api/listappointments');
        let response = await fetch( api + 'listappointments?userid='+userid);
        let jsonResponse = await response.json();
        setAppointments(jsonResponse.appointments);
    }
    useEffect(() => {
        fetchAppointments();
    }, [isFocused]);

    return (
        <View style={styles.container}>
            <TouchableHighlight style={styles.createAppointmentButton} onPress={() =>
                navigation.navigate('CreateAppointment', {
                    userid: userid
                })}>
                <Text style={styles.createAppointmentButtonText}>Create Appointment</Text>
            </TouchableHighlight>
            <FlatList
                data={appointments}
                renderItem={({ item }) => <CardComponent appointment={item} />}
                keyExtractor={item => item._id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    createAppointmentButton: {
        backgroundColor: '#54B254',
        padding: 20,
        margin: 10,
        alignItems: 'center',
    },
    createAppointmentButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    },
    title: {
        fontSize: 16,
        color: '#000'
    },
});


export default ListAppointments;

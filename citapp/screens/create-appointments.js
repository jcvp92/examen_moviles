import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, ScrollView } from 'react-native';
import {TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import { api } from '../global';

function validate(appointmentName, appointmentDate, name, lastname, identity, borndate, city, suburb, phone) {
    var error = "";
    var error_type = "";
    if (appointmentName.length < 1) { error = error + "appointmentName, " }
    if (appointmentDate.length < 1) { error = error + "appointmentDate, " }
    if (name.length < 1) { error = error + "name, " }
    if (lastname.length < 1) { error = error + "lastname, " }
    if (isNaN(identity)) { error_type = error_type + "Identity is not a number " }
    if (identity.length < 1) { error = error + "identity, " }
    if (borndate.length < 1) { error = error + "borndate, " }
    if (city.length < 1) { error = error + "city, " }
    if (suburb.length < 1) { error = error + "suburb, " }
    if (phone.length < 7) { error = error + "phone" }
    if (isNaN(phone)) { error_type = error_type + "Phone is not a number " }


    if (error.length > 0) {
        Alert.alert("Form failed","The following items require your attention: " + error);
        return false;
    } else {
        if (error_type.length < 1) {
            Alert.alert("Form failed","The following items require your attention: " + error_type);
            return true;
        } else {
            return false;
        }

    }

}

function CreateAppointments({ route, navigation }) {
    const { userid } = route.params;
    const [appointmentName, setAppointmentName] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [identity, setIdentity] = useState("");
    const [borndate, setBorndate] = useState("");
    const [city, setCity] = useState("");
    const [suburb, setSuburb] = useState("");
    const [phone, setPhone] = useState("");
    const createAppointment = async () => {
        if (validate(appointmentName, appointmentDate, name, lastname, identity, borndate, city, suburb, phone)) {
            try {
                const response = await fetch(api +'addappointment', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: appointmentName,
                        date: appointmentDate,
                        user: userid,
                        name: name,
                        lastname: lastname,
                        identity: identity,
                        borndate: borndate,
                        city: city,
                        suburb: suburb,
                        phone: phone,
                    }),
                });
                const json = await response.json();
                Alert.alert("Appointment created successfuly");
                navigation.navigate('ListAppointments', {
                    userid: userid
                });
            } catch (error) {
                Alert.alert("An error has ocurred: " + error);
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Appointment description" onChangeText={text => setAppointmentName(text)} />
            <TextInput style={styles.textInput} placeholder="Appointment date" onChangeText={text => setAppointmentDate(text)} />

            <TextInput style={styles.textInput} placeholder="Name" onChangeText={text => setName(text)} />
            <TextInput style={styles.textInput} placeholder="Lastname" onChangeText={text => setLastname(text)} />
            <TextInput style={styles.textInput} placeholder="Identity" onChangeText={text => setIdentity(text)} />
            <TextInput style={styles.textInput} placeholder="Born date" onChangeText={text => setBorndate(text)} />
            <TextInput style={styles.textInput} placeholder="City of residence" onChangeText={text => setCity(text)} />
            <TextInput style={styles.textInput} placeholder="Suburb" onChangeText={text => setSuburb(text)} />
            <TextInput style={styles.textInput} placeholder="Phone" onChangeText={text => setPhone(text)} />

            <TouchableHighlight style={styles.createAppointmentButton} onPress={createAppointment}>
                <Text style={styles.textStyleButton}>Create Appointment</Text>
            </TouchableHighlight>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'column',
       // alignItems: 'center'
    },
    textInput: {
        padding: 10,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        width: Dimensions.get('screen').width * 0.7
    },
    createAppointmentButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#54B254',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center'
    },
    textStyleButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        
    }
});

export default CreateAppointments;
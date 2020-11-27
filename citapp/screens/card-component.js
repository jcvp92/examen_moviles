import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function CardComponent(props) {
    const navigation = useNavigation();
    const { title, date, _id, user } = props.appointment;

    return (
        <View style={styles.container}>
            <Text style={styles.appointmentTitleText}>Appointment:</Text>
            <Text style={styles.appointmentText}>Title: {title}</Text>
            <Text style={styles.appointmentText}>Date: {date}</Text>
            <View style={styles.containerButtons}>
                <TouchableHighlight style={styles.updateButton} onPress={() =>
                    navigation.navigate('UpdateAppointment', {
                        itemId: _id,
                        itemDate: date,
                        itemTitle: title,
                        userid: user,
                    })}>
                    <Text style={styles.updateButtonText}>Update</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.cancelButton} onPress={() => {
                    navigation.navigate('CancelAppointment', {
                        itemId: _id,
                        itemDate: date,
                        itemTitle: title,
                        userid: user,
                        
                    })
                }}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        padding: 20
    },
    containerButtons: {
        flex: 1,
        flexDirection: "row",        
        top: 10,
        position: "absolute",
        right: 10 
    },
    appointmentTitleText: {
        fontWeight: 'bold',
        fontSize: 19,
        alignItems: 'center',
        padding: 2,
        margin: 2
    },
    appointmentText: {        
        fontSize: 18,
        alignItems: 'center',
        padding: 2,
        margin: 2
    },
    updateButton: {
        backgroundColor: '#03a9f4',
        padding: 1,
        margin: 1,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.2
    },
    updateButtonText: {
        color: 'white'
    },
    cancelButton: {
        backgroundColor: '#03a9f4',
        padding: 1,
        margin: 1,
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.2
    },
    cancelButtonText: {
        color: 'white'
    }

});

export default CardComponent;
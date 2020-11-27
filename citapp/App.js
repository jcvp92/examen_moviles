import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import ListAppointments from './screens/list-appointments';
import CreateAppointment from './screens/create-appointments';
import UpdateAppointment from './screens/update-appointment';
import CancelAppointment from './screens/cancel-appointment';
import CreateUsers from './screens/create-users';
import { asin } from 'react-native-reanimated';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="ListAppointments" component={ListAppointments} options={{ title: 'Appointments' }} />
        <Stack.Screen name="CreateAppointment" component={CreateAppointment} options={{ title: 'Create Appointment' }} />
        <Stack.Screen name="UpdateAppointment" component={UpdateAppointment} options={{ title: 'Update Appointment' }} />
        <Stack.Screen name="CancelAppointment" component={CancelAppointment} options={{ title: 'Cancel Appointment' }} />
        <Stack.Screen name="CreateUsers" component={CreateUsers} options={{ title: 'Users Registration' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
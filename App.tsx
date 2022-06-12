import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import {Feather, EvilIcons} from '@expo/vector-icons';
import EditScreen from './src/screens/EditScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blogs" component={IndexScreen} options={({navigation}) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>)
        }) } />
        <Stack.Screen name="Show" component={ShowScreen} options={({navigation, route}) => ({
           headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: route.params} )}>
              <EvilIcons name="pencil" size={35} />
            </TouchableOpacity>)
          }) } />
        <Stack.Screen name="Create"
         component={CreateScreen} 
          />
         <Stack.Screen name="Edit"
         component={EditScreen} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default () => {
  return <Provider><App /></Provider>
};
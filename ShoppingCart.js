import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Containers/HomeScreen';
import ElectronicsScreen from './Containers/ElectronicsScreen';
import BooksScreen from './Containers/BooksScreen';
import ShoppingCartIcon from './Containers/ShoppingCartIcon';


const Stack = createStackNavigator();

export default class ShoppingCart extends Component {
    render() {
        return(
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} 
              options={{
                  headerTitle: (
                     <ShoppingCartIcon/>
                  )
              }}/>
              <Stack.Screen name="Electronics" component={ElectronicsScreen}
 />
              <Stack.Screen name="Books" component={BooksScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        );
    }
};




const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
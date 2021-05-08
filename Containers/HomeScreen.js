import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { render } from 'react-dom';




export default class HomeScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
               <Button title="Electronics" onPress={() => this.props.navigation.navigate('Electronics')} />
               <Button title="Books" onPress={() => this.props.navigation.navigate('Books')} />
            </View>
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
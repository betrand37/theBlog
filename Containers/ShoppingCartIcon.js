import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { render } from 'react-dom';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'; 



const ShoppingCartIcon =(props) => 
    (
        <View style={{padding:5, flexDirection:'row'}}>
            <Text> Shopping App          \\\</Text>
            <View style={{
                position: 'absolute',height:30 , width:30 , borderRadius:15, backgroundColor:'green'
                ,right:15, bottom:15, alignItems:'center',justifyContent:'center',zIndex: 2000
            }}>
                <Text style={{ color:'white', fontWeight:'bold'}}>
                    {props.cartItems.length}
                </Text>
            </View>
            <Icon name="ios-cart" size={30} />
        </View>
)

const mapStateToProps = (state) => {
    return{
        cartItems: state
    }
}

export default  connect(mapStateToProps)(ShoppingCartIcon);




const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
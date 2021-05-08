import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { render } from 'react-dom';

import {electronics } from '../Data';
import Products from '../components/Products';
import { connect } from 'react-redux';
import ShoppingCartIcon from './ShoppingCartIcon'





 class ElectronicsScreen extends Component {
    
    render() {
        return(
            <View>
               <Products products={electronics} onPress={this.props.addItemToCart} />
               
            </View>

        );
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        addItemsToCart:(product) => dispatch({type:'ADD_TO_CART', payload:product})
    }
}

export default connect(null, mapDispatchToProps)(ElectronicsScreen);





const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
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





 class CartScreen extends Component {
    
    render() {
        return(
            <View style={styles.container}>
             {this.props.cartItems.length > 0 ?
             <Products
             onPress={this.props.removeItem}
             products={this.props.cartItems} />
                : <Text>No items in your cart</Text>
                }

            </View>

        );
    }
};

const mapStateToProps = (state) => {
    return{
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (product) => dispatch({ type:
        'REMOE_FROM_CART', payload: product})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
import React ,{Component}from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { render } from 'react-dom';
import {books} from '../Data';
import Products from '../components/Products';
import { connect } from 'react-redux';




class BooksScreen extends Component {
    render() {
        return(
            <View>
                <Products products={books} onPress={this.props.addItemToCart} />
            </View>
        );
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        addItemsToCart:(product) => dispatch({type:'ADD_TO_CART', payload:product})
    }
}

export default connect(null, mapDispatchToProps)(BooksScreen);




const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});
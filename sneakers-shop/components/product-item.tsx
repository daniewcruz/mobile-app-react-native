import { View, Text, StyleSheet, Image, Button } from 'react-native'
import{ Product } from '../types/products'


type Props = {
    product: Product, 
    aoAdicionar: () => void 
    

}



export const ProductItem = (props: Props) => {

    const { product, aoAdicionar } = props;

    const adicionarAoCarrinho = () => {
        aoAdicionar();
        alert('Foi adicionado ao carrinho: ' + product.name);
    };

    return (
        <View style={styles.container}>

            <Image source={{uri: props.product.image}} style={styles.image}/>
            <View style={styles.info}>

                <Text style={styles.name}>{props.product.name}</Text>
                <Text style={styles.price}>R$ {props.product.price.toFixed(2)}</Text>
                <View style={styles.button}>
                <Button color={'#000000'} title="Comprar" onPress={adicionarAoCarrinho} />
                </View>

            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 350,
        margin: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
        borderRadius: 8,

       
    },
    image: {
        width: 190,
        height: 210,
        borderBottomRightRadius: 60,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
        
    },
    info: {
        
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        
      
        
    },
    name: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,

    },
    price: {
        fontSize: 20,
        color: '#a2c700',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10,
        
        
    },
    button: {
        padding: 5,
        borderRadius: 8,
        backgroundColor: '#000000',
        alignSelf: 'center',
        marginBottom: 5,
        marginRight: 10,
        marginLeft: 10,
        width: 130,
        

    }

    
    
});
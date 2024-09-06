import { View, Text, StyleSheet, Image, Button, Linking } from 'react-native'
import { Product } from '../types/products' 



type Props = {
    product: Product;
}

export const ProductItem = (props: Props) => {
    
    const carrinho = () => {
        //alert('Foi adicionado ao carrinho: ' + props.product.name);
        const url = 'https://wa.me/55' + props.product.id;
        Linking.openURL(url).catch(err =>{
             console.error('Failed to open URL:', err);
             alert("Não foi possivel abrir o WhatsApp");
        });

    }


    return (
        <View style={styles.container}>
            <Image source={{uri: props.product.image}} style={styles.image}/>

            <View style={styles.info}>
            <Text style={styles.name}>{props.product.name}</Text>
            <Text style={styles.price}>R$ {props.product.price.toFixed(2)}</Text>
            <Button title="Comprar" onPress={carrinho}/>

            </View>

        </View>


    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    image: {
        width: 100,
        height: 100
    },
    info: {
        flex: 1,
        marginLeft: 20
    },
    name: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5
    },
    price: {
        fontSize: 17,
        color: '#adca29',
        fontWeight: 'bold',
        marginBottom: 20
    },

    
    
});
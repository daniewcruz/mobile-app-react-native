import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, FlatList } from 'react-native';
import { list } from './data';
import { ProductItem } from './components/product-item';
import { Product } from './types/products';

export default function App() {

  const [itensCarrinho, setItensCarrinho] = useState(0);

  const adicionarAoCarrinho = () => {
    setItensCarrinho(itensCarrinho + 1);
  };





  return (
    <SafeAreaView style={styles.container}>
     <StatusBar/>
    <View style={styles.area1}>
    <Text style={styles.h2}>Sneakers Shop</Text>
    <View style={styles.car}>
    <Image source={require('./assets/icon_carrinho.png')} style={styles.img} />
    <Text style={styles.txt}>{itensCarrinho}</Text>
    </View>
    </View>


     <Image source={require('./assets/hero.webp')}
     resizeMode='cover'
     style={styles.hero}
     />

    <View style={styles.area}>
    <Text style={styles.h1}>Exclusivos</Text>
    </View>

    <View style={styles.area2}>
      <View style={styles.area3}>
      <FlatList 
      data={list}
      renderItem={({item}: {item:Product}) => <ProductItem product={item} aoAdicionar={adicionarAoCarrinho}/>}
      keyExtractor={item => item.id.toString()}
      />

      </View>

    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  hero: {
    width: '100%',
    height: 160 ,
  },
  area:{
    padding: 3,
    backgroundColor: '#000000',
    
    
    
  },
  h1: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#ffffff',
    
    
  },

  h2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#ffffff',
    marginLeft: 100
    
  },

  area1: {
    padding: 2,
    backgroundColor: '#000000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',

    
  },

  area2: {
    padding: 10,
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    flexWrap: 'wrap', 

  },

  area3: {
    flex: 1,
    backgroundColor: '#ffffff',
    
  },

  img: {
    width: 28,
    height: 28,
    marginRight: 2,
  
  },

  txt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#a2c700',
    paddingHorizontal: 3,
    borderRadius: 200,
    marginBottom: 14,

  },

  car: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 13,
    
  },
 
  


});

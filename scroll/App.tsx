
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView, Pressable, TouchableOpacity, Image, TextInput,  } from 'react-native';
import { useState } from 'react';
export default function App() {


  const [nome, setNome,] = useState('');
  const [preco, setPreco,] = useState('');
  const [descricao, setDescricao,] = useState('');
  const [imagem, setImagem,] = useState('');

  const mostrar = () => {
    alert( 'nome do Produto: ' + nome + '\n' + 'preço do Produto: ' + preco + '\n' + 'descrição do Produto: ' + descricao + '\n' + 'imagem do Produto: ' + imagem);
    
  }


  


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar/>
      
      <Image source={require('./assets/hero.webp')} style={styles.hero}/>
     
      <ScrollView>
      
      <Text style={styles.h1}>Cadastrar Produtos:</Text>
      <Text style={styles.h2}>Nome do produto:</Text>
      <TextInput style={styles.input} placeholder='digite o nome' value={nome} onChangeText={setNome}></TextInput>

      <Text style={styles.h2}>Preço do produto:</Text>
      <TextInput style={styles.input} placeholder='digite o preço' value={preco} onChangeText={setPreco}></TextInput>

      <Text style={styles.h2}>Descrição do produto:</Text>
      <TextInput style={styles.input} placeholder='digite a descrição' value={descricao} onChangeText={setDescricao}></TextInput>

      <Text style={styles.h2}>Imagem do produto:</Text>
      <TextInput style={styles.input} placeholder='digite o link da imagem'  value={imagem} onChangeText={setImagem}></TextInput>



      </ScrollView>

 <View style={styles.row}>

 <TouchableOpacity style={styles.btn}>
    <Text style={styles.btnText}>Cancelar</Text>
    </TouchableOpacity>

    <Pressable onPress={() => mostrar()} style={({pressed}) => [

          {
            backgroundColor: pressed  ? '#c5e970' : '#018b2f',
          },
          styles.pressable
          
        ]}>
          
    <Text style={styles.btnText}>Cadastrar</Text>
    </Pressable>

   
    </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaad',
    alignItems: 'center',
    justifyContent: 'center',

    
   
  }, 

 
 
  hero: {
    width: '100%',
    height: 160 ,
    marginBottom: 20
  },

 

  btn: {
    backgroundColor: '#be2d2d',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginRight: 20,
    

  },

  btnText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  pressable: {
   
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input: {
    borderWidth: 1,
    borderColor: '#000000',
    width: 300,
    height: 40,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignSelf: 'center',
    marginTop: 5,

  },

  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#000000',   
  },

  h2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',   
  },








  

});

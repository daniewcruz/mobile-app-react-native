// import { useState } from 'react';
// import { SafeAreaView, StyleSheet,StatusBar, Text, View, Button } from 'react-native';

// export default function App() {
// //renderizacao condicional de aparecer ou desaparecer uma area de texto 
// //a partir de um botão  
// const [areaShow,setAreaShow] = useState(false);


//   const mostrar = ()=>{
//     setAreaShow(!areaShow);
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar/>
//       <Button title='Apareça / Desapareça' onPress={mostrar}/>

//       {areaShow &&
//       <View style={styles.area}>
//        <Text style={styles.txt}>AREA SECRETA!</Text> 
//       </View>
//       }
//     </SafeAreaView>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//    padding: 10,
//   },
//   area:{
//     margin: 20,
//     padding: 20,
//     backgroundColor: '#000000',
//     borderRadius: 10,
//   },
//   txt: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#ffffff',
//     textAlign: 'center',
//   }
// });

import { SafeAreaView, StyleSheet, StatusBar, Text, View, Button, Image, TextInput } from 'react-native';
import { useState } from 'react';
export default function App() {

  const [armazena, atualiza] = useState(false);
  const mostrar = () => {
    atualiza(!armazena);
  }


 const [email, setEmail,] = useState('');
  const [nome, setNome,] = useState('');
 const [senha, setSenha,] = useState('');
 const [endereco, setEndereco,] = useState('');
 const [dataNascimento, setDataNascimento,] = useState('');
const [sexo, setSexo,] = useState('');
const [telefone, setTelefone,] = useState('');



  const mostrar1 = () => {
    alert( 'nome: ' + nome + '\n' + 'email: ' +email+ '\n' + 'senha: ' + senha+ '\n' + 'endereco: ' + endereco+ '\n' + 'data de nascimento: ' + dataNascimento+ '\n' + 'sexo: ' + sexo+ '\n' + 'telefone: ' + telefone); 

  }




  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
     
      <Button title='NIKE Air Max SNDR' onPress={mostrar} />

      {armazena &&
        <View style={styles.area}>
          <Image source={{ uri: "https://imgnike-a.akamaihd.net/768x768/046564P1A2.jpg" }} style={styles.image} />

          <Text style={styles.h1}>Hyper Pink and Black {'\n'}
          R$ 1299,99</Text>

          <Text style={styles.txt}>

            Produto com grade feminina
            À frente de seu tempo em 99,
            o inovador Air Max SNDR está de volta e mais barulhento do que nunca.


          </Text>
        </View>
      }
      <View style={styles.form}>
        <Text style={styles.h1}>Digite seus dados:</Text>
      <TextInput style={styles.input} placeholder=' Digite seu nome:' value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder=' Digite seu email:' value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder=' Digite sua senha:'  value={senha} onChangeText={setSenha} secureTextEntry={true} />
      <TextInput style={styles.input} placeholder=' Digite seu endereço:' value={endereco} onChangeText={setEndereco} />
      <TextInput style={styles.input} placeholder=' Digite sua data de nascimento:' value={dataNascimento} onChangeText={setDataNascimento} />
      <TextInput style={styles.input} placeholder=' Digite seu telefone:' value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder=' Digite seu sexo:' value={sexo} onChangeText={setSexo} />
      <View style={styles.botao}>
      <Button color='#000000' title='mostrar tudo' onPress={mostrar1} />
      </View>
      </View>
      
    </SafeAreaView>
  );
}
 

const styles = StyleSheet.create({
  container: {
    padding: 10,
    
  },
  h1: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row'
  },
  txt: {
    marginTop: 10,
    fontSize: 14,
    
    color: '#ffffff',
    textAlign: 'center',
  },
  area: {
    margin: 20,
    padding: 20,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 200,
    alignSelf: 'center'
  },
  input: {
    width: 330,
    height: 40,
    backgroundColor: '#fff5f0',
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderColor: '#000000',
    borderWidth: 1,
  },
  form: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#ff8800c1',
    borderRadius: 10,
    padding: 10,
    width: 360,
    borderColor: '#000000',
    borderWidth: 2,
    
  },
  botao: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#000000',
    padding: 10,
    width: 330,
    borderRadius: 10,
    alignSelf: 'center',
   
  }
});
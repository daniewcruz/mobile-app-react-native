// Importa os componentes necessários do React Native
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Image, Button } from "react-native";

// Importa componentes personalizados que foram definidos em outros arquivos
import { Welcome } from './componentes/welcome';
import { Profissao } from './componentes/profissao';



function apertar() {
  alert("Clicou");
}

// Função principal do aplicativo que define a interface do usuário
function App() {
  return (
    // SafeAreaView é usado para garantir que o conteúdo seja exibido em uma área segura da tela
    <SafeAreaView>
      {/* StatusBar gerencia a exibição da barra de status do dispositivo */}
      <StatusBar/>
      {/* View é um contêiner básico que pode conter outros componentes */}
      <View>
      
        {/* Text exibe um texto na tela, com o estilo aplicado a partir do objeto styles */}
        <Text style={styles.vermelho}>Olá, mundo</Text>
        
        {/* Componente Welcome é usado aqui, passando props (name e idade) para personalizar o conteúdo */}
        <Welcome name="Jorge" idade={25}/>
        <Welcome name="Vitor" idade={30}/>
        <Welcome name="David" idade={40}/>
        {/* Componente Profissao exibe a profissão, passando a prop profissao */}
        <Profissao profissao="Programador"/>
        
        <View style={styles.bola} >
        <Text style={styles.vermelho}>MOBILE</Text>
        <View style={styles.conteiner}>
      <Button title="Clique" onPress={apertar}/>
      </View>
        </View>
        <Image source={require('./assets/img.png')} 
        style={styles.img} 
        resizeMode="cover"/>
        <Text style={styles.vermelho}>VS</Text>
        <Image source={{uri: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/07/05/887946240-juliette-instagram.jpg'}} style={styles.img}
        resizeMode="cover"/>
      </View>

    </SafeAreaView>
  );
}

// Exporta o componente App como padrão para ser usado em outras partes do aplicativo
export default App;

// Define os estilos que serão aplicados aos componentes
const styles = StyleSheet.create({
  conteiner: {
    backgroundColor: '#000000', // Define a cor de fundo como preta (#000000)
  },
  // Estilo chamado "vermelho" que define a cor do texto como vermelho e o tamanho da fonte como 24
  vermelho: {
    color: '#ff0000', // Define a cor do texto como vermelho (#ff0000)
    fontSize: 24,     // Define o tamanho da fonte como 24
    textAlign: 'center', // Centraliza o texto

  },


  bola: {
    width: 100, // Define a largura como 90
    height: 100, // Define a altura como 90
    backgroundColor: "yellow", // Define a cor de fundo como azul
    borderRadius: 50, // Define o raio da borda como 45
    alignSelf: 'center', // Centraliza o componente
    justifyContent: 'center', // Centraliza o componente
    alignItems: 'center', // Centraliza o componente

  },

  img: {
    width: 220, // Define a largura como 90
    height: 220, // Define a altura como 90
    alignSelf: 'center', // Centraliza o componente
    marginTop: 10
  }


});

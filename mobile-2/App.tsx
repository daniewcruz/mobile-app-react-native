import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import {UserItem} from './componentes/user-item'



type User = {
  id: number;
  name: string;
  idade: number;
}
export default function App() {
  // const [count, setCount] = useState(0);

  // function somar() {
  //   setCount(count + 1);
  // }

  // function subtrair() {
  //   if (count > 0) {
  //     setCount(count - 1 );
  //   }
  // }

  const list: User[] = [
    {id: 1, name: 'Joaquim', idade: 22},
    {id: 2, name: 'Jorge', idade: 25},
    {id: 3, name: 'Vitor', idade: 30},
    {id: 4, name: 'David', idade: 40},
    {id: 5, name: 'Joaquim', idade: 22},
    {id: 6, name: 'Maria', idade: 25},
    {id: 7, name: 'Vitoria', idade: 30},
  ]


  return ( 
    <View style={styles.container}>

      <StatusBar style="auto" />
      <FlatList
      //1 prop 
      //data é onde está minha fonte de dados
      data={list}
      //2 prop 
    //função que renderiza cada item da lista, vai mostrar um por um
    renderItem={({item}) => (<UserItem  
      name={item.name} 
      idade={item.idade} 
      id={item.id}
      />)}
      //3 prop 
      //key para identificar cada item no FlatList e o id para identificar o item no array
      //especificar o item  e evitar problemas de memoria
      keyExtractor={(item) => item.id.toString()}
      //o keyExtractor sempre precisa ser retornado em string 
      />
    
      
      {/* Não é uma opção viável para renderizar listas!!!!!!!!!!!!!!!!!!!!!!!!!!
       {list.map((user) => (
        //O key é necessario em listas, para identificar os itens, unicamente para evitar problemas de memoria 
        <View key={user.id}>
        <Text style={styles.texto}>Nome: {user.name} - Idade: {user.idade}</Text>
        </View>
      ))} */}

      
      {/* <View style={styles.conteiner1}>
      <Button title='Aumente a contagem' onPress={somar}/> 
      <Button title='Diminua a contagem' onPress={subtrair}/>
      </View>
       */}
    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9ffbb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
 
});



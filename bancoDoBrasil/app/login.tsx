import { StatusBar, Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    return (
       <SafeAreaView style={styles.container}>
        <StatusBar />
     <View >
     <Text style={styles.h1}>Pessoa fisica</Text>
     <Text style={styles.subtitulo}>Informe seus dados para acessar a conta:</Text>
     
     <Text style={styles.txt}>Agência:</Text>
     <TextInput style={styles.input} placeholder='digite a sua agência' />

     <Text style={styles.txt}>Conta:</Text>
     <TextInput style={styles.input} placeholder='digite a sua conta' />

     <Text style={styles.txt}>Senha:</Text>
     <TextInput style={styles.input} placeholder='digite a sua senha' />

     <Pressable style={styles.btn}>
         <Text style={styles.txt}>Acessar conta</Text>
     </Pressable>
     
     </View>
       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcfdff',
        padding: 20,
        

        
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
         color: '#445BF7'
        
        
    },
    subtitulo: {
        fontSize: 18,
        marginBottom: 25,
         color: '#445BF7'
        
        
    },
    txt: {
        fontSize: 18,
        marginBottom: 5,
        color: '#445BF7',
        fontWeight: 'bold',   
    },
    input: {
        
        padding: 10,
        backgroundColor: '#f5f9ff',
        borderWidth: 1,
        borderTopColor: '#ccc',
        borderLeftColor: '#ccc',
        borderRightColor: '#ccc',
        borderBottomWidth: 2,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomColor: '#445BF7',

        borderRadius: 5,
        marginBottom: 30,
        
    },
    btn: {
        width: 350,
        height: 50,
        backgroundColor: '#F4F42E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
        marginTop: 30,
        shadowColor: "#0051ff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
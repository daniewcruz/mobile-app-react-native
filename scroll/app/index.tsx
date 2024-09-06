import { Link, router } from "expo-router";
import { StatusBar, Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const click = () => {
    router.navigate('/about')
}

export default function Screen() {
    return(
        <SafeAreaView style={styles.container}>
           <StatusBar/>
           <Pressable style={styles.btn} onPress={click}>
           <Text style={styles.txt} >Ir para Sobre</Text>  
           </Pressable>
           <Text>Olá, tudo bem?</Text>
           
           
           
        
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 200,
        height: 40,
        backgroundColor: '#bfffbc',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 20,
        margin: 20
        
    },
    txt: {
        fontSize: 20,
        color: '#000000'
    }
})
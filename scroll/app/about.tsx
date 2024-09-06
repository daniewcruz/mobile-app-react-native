import { StatusBar, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link,  } from "expo-router";
export default function about() {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <Text>tela sobre</Text>
            <Link href="/" asChild>
           <Pressable style={styles.btn}>
               <Text>Ir para Sobre</Text>
           </Pressable>
           </Link>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        width: 200,
        height: 40,
        backgroundColor: '#bcffee',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 20,
        margin: 20
        
    },
   
})
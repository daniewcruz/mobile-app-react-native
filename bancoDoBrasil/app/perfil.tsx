import { router } from "expo-router";
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function click() {
    router.navigate('/login')
}

export default function Perfil() {
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Text style={styles.h1}>Qual o tipo de perfil quer acessar?</Text>
            
            <Pressable style={styles.container2} onPress={click}>
                <Image style={styles.img} source={require('../assets/icon_Pfisica.png')} />
                <Text style={styles.txt}>Pessoa fisica</Text>
                <Image style={styles.seta} source={require('../assets/seta-esquerda.png')} />
            </Pressable>
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
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#445BF7',
    },
    container2: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
        alignItems: 'center',
        borderTopColor: '#fcfdff',
        borderRightColor: '#fcfdff',
        borderLeftColor: '#fcfdff',
        borderBottomColor: '#445BF7',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
      
        
    },
    img: {
        width: 30,
        height: 30,  
        
    },
    seta: {
        width: 24,
        height: 22,  
        marginLeft: 135,
        
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        
        marginLeft: 10,
        marginRight: 10,
        color: '#445BF7',


    }
})
import { router } from "expo-router";
import { StatusBar, View, Text, Pressable, StyleSheet, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



function click() {
    router.navigate('/perfil')
}

export default function App() {
    return (
        <SafeAreaView>
        <StatusBar />
        <ImageBackground source={require('../assets/capa.jpg')} style={styles.capa}>
       
        <View style={styles.container} >
      
        <Image source={require('../assets/logo.png')} style={styles.logo} />

         <View style={styles.container2}>
            <Pressable style={styles.btn} onPress={click}>
                <Text style={styles.txt}>ACESSA SUA CONTA</Text>
            </Pressable>

            <Pressable style={styles.btn1}>
                <Text style={styles.txt1}>QUERO SER CLIENTE</Text>
            </Pressable>
         </View>

        </View>

        </ImageBackground>




        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         padding: 20,
         
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 450
    },
    capa: {
        width: '100%',
        height: '100%',       
    },
    logo: {
        width: 60,
        height: 60,
        padding: 10
    },
    btn: {
        width: 350,
        height: 50,
        borderColor: '#ffffff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#445cf72f' ,




    
    },
    txt: {
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
        textShadowColor: '#000946',
        textShadowRadius: 0.5,
        textShadowOffset: { width: 1, height: 1 }
        
    },
    btn1: {
        width: 350,
        height: 50,
        backgroundColor: '#F4F42E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20
       

    },
    txt1: {
        fontSize: 20,
        color: '#445BF7',
        fontWeight: 'bold'
    }
})

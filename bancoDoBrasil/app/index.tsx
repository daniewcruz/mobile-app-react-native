
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View, ImageBackground, StatusBar, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


function click(){
    router.navigate('/perfil')
}   




export default function Screen(){

    return(
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <ImageBackground source={require('../assets/capa.jpg')} style={styles.backgroundImage} >
            
            <View style={styles.cabecalho} >
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            </View>


            <View style={styles.container} >
            <View style={styles.container2} >
            <Pressable style={styles.btn} onPress={click} >
            <Text style={styles.txt}>ACESSAR SUA CONTA</Text>
            </Pressable>
            <Pressable style={styles.btn2} >
            <Text style={styles.txt2}>QUERO SER CLIENTE</Text>
            </Pressable>
            </View>
            
            </View>
            
            </ImageBackground>

            
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },

    cabecalho:{
        padding: 20,
    },

    logo:{
        width: 60,
        height: 60,
       
    },
    container:{
        flex:1,   
    },
    container2:{
        flex:1,   
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 400,
    },
    btn:{
        width: 350,
        height: 45,
        borderColor: '#fff',
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,

    },
    btn2:{
        width: 350,
        height: 50,
        backgroundColor: '#F4F42E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        margin: 10,
    },
    txt:{
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    txt2:{
        fontSize: 18,
        color: '#445BF7',
        fontWeight: 'bold',    
      
    },
   

})
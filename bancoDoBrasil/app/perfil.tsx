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
                <View style={styles.dois}>
                    <Image style={styles.img} source={require('../assets/icon_Pfisica.png')} />
                    <Text style={styles.txt}>Pessoa fisica</Text>
                </View>

                <Image style={styles.seta} source={require('../assets/seta-esquerda.png')} />
            </Pressable>

            <Pressable style={styles.container2}>
                <View style={styles.dois}>
                    <Image style={styles.img} source={require('../assets/robo.png')} />
                    <Text style={styles.txt}>BB Cash</Text>
                </View>

                <Image style={styles.seta} source={require('../assets/seta-esquerda.png')} />
            </Pressable>

            <Pressable style={styles.container2}>
                <View style={styles.dois}>
                    <Image style={styles.img} source={require('../assets/icon_pj.png')} />
                    <Text style={styles.txt}>Pessoa juridica</Text>
                </View>

                <Image style={styles.seta} source={require('../assets/seta-esquerda.png')} />
            </Pressable>

            <Pressable style={styles.container2}>
                <View style={styles.dois}>
                    <Image style={styles.img} source={require('../assets/private.png')} />
                    <Text style={styles.txt}>Private</Text>
                </View>

                <Image style={styles.seta} source={require('../assets/seta-esquerda.png')} />
            </Pressable>

            <Pressable style={styles.container2}>
                <View style={styles.dois}>
                    <Image style={styles.img} source={require('../assets/rural.png')} />
                    <Text style={styles.txt}> Produtor Rural</Text>
                </View>

                <Image style={styles.seta} source={require('../assets/seta-esquerda.png')} />
            </Pressable>

            <Pressable style={styles.container2}>
                <View style={styles.dois}>
                    <Image style={styles.img} source={require('../assets/icon_pj.png')} />
                    <Text style={styles.txt}>Governo</Text>
                </View>

                <Image style={styles.seta} source={require('../assets/seta-esquerda.png')} />
            </Pressable>

            <Pressable style={styles.container2}>
                <View style={styles.dois}>
                    <Image style={styles.img} source={require('../assets/international.png')} />
                    <Text style={styles.txt}>Conta Internacional</Text>
                </View>

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
        marginBottom: 5,
        marginTop: 10,
        alignItems: 'center',
        borderTopColor: '#fcfdff',
        borderRightColor: '#fcfdff',
        borderLeftColor: '#fcfdff',
        borderBottomColor: '#445BF7',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        justifyContent: 'space-between',

    },
    dois: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },



    img: {
        width: 23,
        height: 23,

    },
    seta: {
        width: 20,
        height: 20,
        marginLeft: 10,



    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',

        marginLeft: 10,
        marginRight: 10,
        color: '#445BF7',
    },


})
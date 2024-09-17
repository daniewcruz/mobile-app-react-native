import { ChatL } from "../types/chat";
import { View, Text, Image, StyleSheet } from "react-native";


type Props = {
    chat: ChatL
}


export const ChatList = (props: Props) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.chat.image }} style={styles.image} />

            <View style={styles.info} >
                <Text style={styles.name}>{props.chat.name}</Text>


                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../assets/vizualizado.png')} style={{ width: 16, height: 17, marginRight: -6, marginTop: 3 }} />
                    <Image source={require('../assets/vizualizado.png')} style={{ width: 16, height: 17, marginTop: 3, marginRight: 2 }} />
                    <Text style={styles.lastMessage}>{props.chat.lastMessage}</Text>
                </View>


            </View>

            <View style={styles.seta}>
                <Image source={require('../assets/seta.png')} />
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20

    },
    info: {
        flex: 1,

    },
    name: {
        fontWeight: 'bold',
        fontSize: 17
    },
    lastMessage: {
        color: '#8e8e93',
        fontSize: 15,
    },
    seta: {
        width: 15,
        height: 15,
        marginRight: 5
    }
})
import { SafeAreaView } from "react-native-safe-area-context"
import { Image, Pressable, StatusBar, Text, View, StyleSheet, FlatList } from "react-native"
import { Tabs } from "expo-router"

import { ChatList } from "../../components/chat-list";
import { ChatL} from "../../types/chat";
import { Chats } from "../../data/data";





export default function chats() {


    return (
        <SafeAreaView style={styles.container} >
            <StatusBar />

            <Tabs.Screen options={{
                title: "Chats",
                headerTitleAlign: 'center', headerStyle: { backgroundColor: '#F6F6F6', }, headerTitleStyle: { fontWeight: 'bold', fontSize: 17,  },
                headerLeft: () => <Pressable style={{ marginLeft: 20, }} ><Text style={{ color: '#007AFF', fontSize: 17, }} >Edit</Text>
                </Pressable>, headerRight: () => <Pressable><Image source={require('../../assets/editar.png')} style={{ width: 23, height: 23, marginRight: 20 }} /></Pressable>,

            }} />

            <View>
                <Pressable style={styles.ct}>
                <Text style={styles.txt} >Broadcast List</Text>
                <Text style={styles.txt}>New Group</Text>
                </Pressable>
            </View>
            
            <FlatList
                data={Chats}
                renderItem={({ item }) => <ChatList chat={item} />}
                keyExtractor={item => item.id.toString()}        
                
            />
            




            {/* <View style={styles.chat} >

                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Fulano de Tal</Text>
                <Text style={{ color: '#8e8e93' }}>Conversa de Fulano blá blá</Text>

            </View> */}

           

        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    ct: {
        marginTop: -10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,

    },

    txt: {
        color: '#007AFF', 
        fontSize: 17, 

    },


    chat: {
        width: 400,
        height: 50,
        backgroundColor: '#fff',
        marginLeft: 20,
        borderBottomColor: '#8e8e9345',
        borderBottomWidth: 1,
    }


})
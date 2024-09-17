import { Tabs } from "expo-router";
import FontAwesome  from "@expo/vector-icons/FontAwesome";


export default function TabLayout() {

    return ( <Tabs screenOptions={{ headerShown: true, tabBarStyle: { backgroundColor: '#F6F6F6' }, headerTitleAlign: 'center', headerTitleStyle: { fontWeight: 'bold', fontSize: 17,  }    } }>

<Tabs.Screen name="chats" options={{ 
            title: "Chats", 
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="comments" color={color} /> }} />
        
        <Tabs.Screen name="status" options={{ 
            title: "Status", 
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="circle-o-notch" color={color} /> }} />
       
        <Tabs.Screen name="calls" options={{ 
            title: "Calls", 
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="phone" color={color} /> }} />
        
        <Tabs.Screen name="camera" options={{ 
            title: "Camera", 
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="camera" color={color} /> }} />
        
        <Tabs.Screen name="settings" options={{ 
            title: "Settings", 
            tabBarIcon: ({ color }) => <FontAwesome size={24} name="gear" color={color} /> }} />
        
    
    </Tabs>
    )
}

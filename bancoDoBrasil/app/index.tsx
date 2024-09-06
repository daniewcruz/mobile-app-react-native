import { StatusBar, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
    return (
        <SafeAreaView>
        <StatusBar />
        <View >
            <Text>Open up App.tsx to start working on your app!</Text>
           
        </View>
        </SafeAreaView>
    );
}
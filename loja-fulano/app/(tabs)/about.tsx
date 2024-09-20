import { View, StyleSheet, Text } from "react-native";

export default function Screen() {

    return (
        <View style={styles.container}>
            <Text>Sobre mim</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
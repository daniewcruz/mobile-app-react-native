import { Stack } from "expo-router";

export default function RootLayout() {
    return(
        <Stack screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: '#bfffbc',
                
            }
            }}>
            <Stack.Screen name='index' options={{title: 'Home' }}/>
            <Stack.Screen name='about' options={{title: 'Sobre', animation: 'ios'}}/>
        </Stack>
    );
}


import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack>

            <Stack.Screen name="index" options={{ headerShown: false, animation: 'ios' }} />
            <Stack.Screen name="perfil" options={{ title: 'Perfil',headerShown: true, animation: 'ios', 
                headerStyle: { backgroundColor: '#F4F42E' }, 
                headerTintColor: '#445BF7', headerTitleStyle: { fontWeight: 'bold' } }} />


            <Stack.Screen name="login" options={{title: 'Acessar conta',  
                headerStyle: {
                    backgroundColor: '#F4F42E',
                },
                headerTintColor: '#445BF7',
                headerTitleStyle: {
                    fontWeight: 'bold',

                },

                headerTitleAlign: 'center',
                animation: 'ios'  

            }} />
        </Stack>
    );
}

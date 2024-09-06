import{View, Text, StyleSheet} from 'react-native'

type Props = {
    id: number;
  name: string;
  idade: number;
}


export const UserItem = (props: Props) => {

    return (
        <View style={styles.container} > 
            <Text style={styles.txt}>{props.name} {props.idade}</Text>   
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        
    },
    txt: {
        fontSize: 24,
        fontWeight: 'bold',
        

    }


})


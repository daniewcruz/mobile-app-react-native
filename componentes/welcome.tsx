// Importa o componente Text do React Native, que é usado para exibir texto na tela
import { Text } from 'react-native';

// Define o tipo para as props que serão passadas para o componente Welcome
// Isso é útil para garantir que os valores passados tenham o tipo correto
type Props = {
    name: string; // A prop 'name' deve ser uma string
    idade: number; // A prop 'idade' deve ser um número
}

// Define e exporta o componente funcional Welcome
// O componente recebe as props do tipo definido anteriormente
export const Welcome = (props: Props) => {
    return (
        // Retorna um componente Text que exibe uma mensagem personalizada
        // As props 'name' e 'idade' são usadas para personalizar o texto exibido
        <Text>Oi, {props.name}, tudo bem? Você tem quantos anos? {props.idade} anos</Text>
    )
}

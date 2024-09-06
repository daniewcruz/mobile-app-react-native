// Importa o componente Text do React Native, que é usado para exibir texto na tela
import { Text } from "react-native";

// Define o tipo para as props que serão passadas para o componente Profissao
// Isso garante que a prop 'profissao' seja sempre uma string
type Props = {
    profissao: string; // A prop 'profissao' deve ser uma string
}

// Define e exporta o componente funcional Profissao
// O componente recebe as props do tipo definido anteriormente
export const Profissao = (props: Props) => {
    return (
        // Retorna um componente Text que exibe o valor da prop 'profissao'
        <Text>Profissão: {props.profissao}</Text>
    )
}

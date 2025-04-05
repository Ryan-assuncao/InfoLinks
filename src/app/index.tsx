import { Text, View, StyleSheet } from "react-native"
export default function Index () {
    return (
        // Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
        <View>
        <Text style={{ color: "red", fontSize: 22}}> eu sou o milhor </Text>
        <Text style={{color: "gray", fontSize: 30}}>em minha cabeça eu sou o milhor </Text>
        <Text style={Styles.title}>luis espalha </Text>
        <Text style={Styles.title2}>fernadinho beira mar </Text>
        <Text style={Styles.title3}>que fase ta o curinthians </Text>
        <Text style={Styles.title4}>flamengo melhor do mundo</Text>
        </View>
        
    );
}
const Styles = StyleSheet.create({
   

    title:{
        color: "blue",
        fontSize: 22,
    },

    title2:{
     color: "orange",
     fontSize: 24,   
    },

    title3:{
        color:"yellow",
        fontSize: 26
    },

    title4:{
        color: "red",
        fontSize: 28
    }
})
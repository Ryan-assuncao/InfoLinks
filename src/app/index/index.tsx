import { Text, View, StyleSheet } from "react-native"
import{colors} from "../../styles/colors"
export default function Index () {
    return (
        // Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
        <View style={Styles.container} >
        <Text style={{ color: "red", fontSize: 22}}> eu sou o milhor </Text>
        <Text style={{color: "gray", fontSize: 30}}>em minha cabeça eu sou o milhor </Text>
        <Text style={Styles.title}>luis espalha </Text>
        <Text style={Styles.title2}>fernadinho beira mar </Text>
        <Text style={Styles.title3}>que fase ta o curinthians </Text>
        <Text style={Styles.title4}>flamengo melhor do mundo</Text>
        <Text style={Styles.title5}>vem pro ifam</Text>
        </View>
        
    );
}
const Styles = StyleSheet.create({
   
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems:"flex-start",
        flexDirection:"column",
        //codigo para identificar as extremidades do container
        borderColor:"red",
        borderWidth:2
        
    },

   
    title:{
        color: colors.green[900],
        fontSize: 22,
        borderColor:"red",
    },

    title2:{
     color: colors.gray[400],
     fontSize: 24,   
    },
  
    title3:{
        color:"yellow",
        fontSize: 26
    },

    title4:{
        color: "red",
        fontSize: 28
    },

    title5:{
        color: "green",
        fontSize: 28
    },
    
})
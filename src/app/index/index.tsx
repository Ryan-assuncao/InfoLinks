import { Text, View, StyleSheet } from "react-native"

import { styles } from "./styles"// ou @/app/index/styles

export default function Index () {
    return (
        // Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
        <View style={styles.container} >
        <Text style={{ color: "red", fontSize: 22}}> eu sou o milhor </Text>
        <Text style={{color: "gray", fontSize: 30}}>em minha cabeça eu sou o milhor </Text>
        <Text style={styles.title}>luis espalha </Text>
        <Text style={styles.title2}>fernadinho beira mar </Text>
        <Text style={styles.title3}>que fase ta o curinthians </Text>
        <Text style={styles.title4}>flamengo melhor do mundo</Text>
        <Text style={styles.title5}>vem pro ifam</Text>
        </View>
        
    );
}
    
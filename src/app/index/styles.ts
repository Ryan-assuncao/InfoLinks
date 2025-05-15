import { StyleSheet } from "react-native"

import{colors} from "@/styles/colors"


export const styles = StyleSheet.create({
   
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
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
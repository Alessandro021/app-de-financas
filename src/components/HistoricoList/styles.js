import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        marginBottom: 5,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#FFF',
        backgroundColor: '#E1E1E1'
    },
    tipo:{
        flexDirection: "row",
        
    },
    iconView:{
        flexDirection: "row",
        paddingVertical: 3,
        paddingHorizontal: 8,
        borderRadius: 10
    },
    tipoText:{
        color: '#FFF',
        fontSize: 16,
        fontStyle: "italic",
    },
    valorText:{
        color: '#222',
        fontSize: 22,
        fontWeight: "bold"
    },

})
export default styles;
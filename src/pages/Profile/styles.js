import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131313',
        alignItems: "center"
    },
    nome:{
        textAlign: "center",
        fontSize: 28,
        marginVertical: 25,
        color: '#FFF'
    },
    newLink:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#00b94a',
        width: '90%',
        height: 55,
        borderRadius: 10,
        marginBottom: 30
    },
    newText:{
        fontSize: 20,
        color: '#FFF',
        fontWeight: "bold"
    },
    logout:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#c64c36',
        width: '90%',
        height: 55,
        borderRadius: 10,
    },
    logoutText:{
        fontSize: 20,
        color: '#FFF',
        fontWeight: "bold"
    },
})

export default styles;
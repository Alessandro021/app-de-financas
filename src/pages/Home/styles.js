import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: "#131313"
    },
    container:{
        marginLeft: 20,
        marginBottom: 25
    },
    nome:{
        fontSize: 22,
        color: '#FFF',
        fontStyle: "italic"
    },
    saldo:{
        marginTop: 5,
        fontSize: 30,
        color: '#FFF',
        fontWeight: "bold"
    },
    title:{
        marginLeft: 15,
        color: '#00b94a',
        marginBottom: 10
    },
    area:{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginBottom: 20,
    },
    list:{
        paddingTop: 15,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginHorizontal: 15
    }
})

export default styles;
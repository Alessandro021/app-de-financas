import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: '#131313'
    },
    input:{
        height: 60,
        width: "90%",
        backgroundColor: '#FFFFF1',
        marginTop: 30,
        fontSize: 18
    },
    submitButton:{
        height: 60,
        width: '90%',
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#00b94a'
    },
    submitText:{
        fontSize: 22,
        fontWeight: "bold",
        color: '#FFF'
    },
})

export default styles;
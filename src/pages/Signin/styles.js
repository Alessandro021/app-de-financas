import React from "react";
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: "#131313"
    },
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo:{
        marginBottom: 30,
    },
    areaInput:{
        flexDirection: "row",
    },
    input:{
        backgroundColor: '#000000',
        width: "90%",
        fontSize: 20,
        color: '#FFF',
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
    },
    btnsubmit:{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#00b94a',
        width: '90%',
        height: 55,
        borderRadius: 10,
        marginTop: 10
    },
    btnText:{
        fontSize: 22,
        color: '#131313'
    },
    btnLink:{
        marginTop: 20,
        marginBottom: 10
    },
    linkText:{
        color: "#FFF",
        fontSize: 18
    }

})

export default styles;
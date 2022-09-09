import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: Platform.OS === 'ios' ? '#00000066' : 'trasparent',
        position: "absolute",
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%',
    },
    header:{
        width: '100%',
        padding: 16,
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    text:{
        fontSize: 22,
        fontWeight: "bold",
        paddingRight: 30
    }
})

export default styles;
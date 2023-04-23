import firebase from "../server/firebaseConection";
import { useState,createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


export const AuthContext = createContext({});

export default function AuthProvider({ children}){

    const [ user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const navigation = useNavigation();


    useEffect(() =>{
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('@USER')

            if(storageUser){

                setUser(JSON.parse(storageUser))
                setLoading(false)
            }

            setLoading(false)
        }

        loadStorage()
    }, [])

    //Função para logar o usuario
    async function signIn(email, password){
        setLoadingAuth(true)
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value)=>{
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                }
                setUser(data)
                storageUser(data)
                setLoadingAuth(false)
            })
        })
        .catch((error)=>{
            alert(error.code)
            setLoadingAuth(false)

        })
    }

    //cadastrar usuario
    async function signUp(email, password, nome){
        setLoadingAuth(true)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(value) => {
            let uid = value.user.uid;
            await firebase.database().ref('users').child(uid).set({
                saldo: 0,
                nome: nome
            })

            navigation.navigate('SigIn');
            setLoadingAuth(false)
            
        })
        .catch((error)=>{
            console.log("deu errado")
            alert(error.code)
            setLoadingAuth(false)

        })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('@USER', JSON.stringify(data))
    }

    async function signOut(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null)
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, loading, user, signUp, signIn, signOut, loadingAuth}}>
            {children}
        </AuthContext.Provider>

    )
}
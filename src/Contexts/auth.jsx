import { useEffect, useState } from "react"
import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { db, auth } from "../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import { FaBullseye } from "react-icons/fa6";

export  const AuthContext = createContext({});

function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    const [isAdm, setIsAdm] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        async function loadUser(){
        const storageUser = localStorage.getItem('@blogPRO')
        if(storageUser){
            setUser(JSON.parse(storageUser))
            setLoading(false)
        }
        setLoading(false)
        }
        loadUser();
    },[])

    async function logIn(email,senha){
        setLoadingAuth(true)

        await signInWithEmailAndPassword(auth, email,senha)
        .then(async(value)=>{
            let uid = value.user.uid;
            const docRef = doc(db, 'users', uid);
            const docSnap = await getDoc(docRef);

            let data = {
                nome: docSnap.data().nome,
                email: value.user.email,
            }

            // if(email == 'gabrielly@gabrielly.com'){
            //     console.log('voce é o adm')
            // }

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            toast.success('Seja bem vindo(a) ao nosso blog! ')
            navigate('/')
        })
        .catch((error)=>{
            toast.error('Algo deu errado!')
            console.log(error)
            setLoadingAuth(false)
        })
    }

    async function register(nome,email,senha, isAdm){
        setLoadingAuth(true)
        await createUserWithEmailAndPassword(auth, email, senha, isAdm)
        .then(async(value)=>{
            let uid = value.user.uid;

            await setDoc(doc(db, 'users', uid),{
                nome,
                isAdm:false
            })

            .then(()=>{
                let data = {
                    nome: value.user.nome,
                    email: value.user.email,
                    isAdm: false
                }
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success('Cadastro realizado com sucesso!')
                navigate('/entrar')
            })
        })
        .catch((error)=>{
            toast.error('Algo deu errado')
            console.log(error)
            setLoadingAuth(false)
        })

    }
    function storageUser(data) {
        localStorage.setItem('@blogPRO', JSON.stringify(data))
    }

    async function logout() {
        await signOut(auth);
        localStorage.removeItem('@blogPRO');
        setUser(null);
        // navigate('/entrar')
    }
    return(
        <AuthContext.Provider value={{ signed: user, user, register, logIn, logout, loadingAuth, loading, storageUser, setUser }}>
        {children}
        <ToastContainer/>
    </AuthContext.Provider>
    )
}
export default AuthProvider;


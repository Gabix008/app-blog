import React, { useEffect, useState } from "react";
import { BuscaContainer } from "./busca";
import logo from '../../imagens/logo.png'
import { AuthContext } from "../../Contexts/auth";
import { useContext } from "react";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ModalCriar from '../ModalCriar/criar.jsx'
import { getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";
import { doc } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";


const Busca = () =>{
    const {signed, logout} = useContext(AuthContext) 
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [user, setUser] = useState(null)
    
    useEffect(()=>{
        async function loadUser(){
            auth.onAuthStateChanged(async (userAuth) => {
                if (userAuth) {
                    const userRef = doc(db, 'users', userAuth.uid);
                    const docSnapshot = await getDoc(userRef);
        
                    if (docSnapshot.exists()) {
                        const userData = docSnapshot.data(); 
                        setUser(userData)
                        console.log(userData.isAdm)
                    }
                    
                }
            })
        }
    
        loadUser()
    },[])
  
    return (
        <BuscaContainer className="container-busca">
            
            <Link to='/' ><img src={logo} alt='logo' className='logo' /></Link>
            {signed && <button className="botaoSair"  onClick={() => logout()}  ><IoExitOutline size={33}/></button>}
            

                {user && user.isAdm &&(
                    <>
                     <button className="botaoCriar" onClick={() => setIsModalVisible(true)}>Criar</button>
                    </>
                   
                )}

                {isModalVisible ? (<ModalCriar onClose={() => setIsModalVisible(false)}> </ModalCriar>):null}
            

            {/* <ModalCriar/> */}
        </BuscaContainer>

    )
}

export default Busca;
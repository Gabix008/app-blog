import React, { useState, useEffect } from "react"
import Busca from '../../components/Busca/Busca'
import { IoTrashOutline } from "react-icons/io5";
import { auth } from "../../firebaseConfig";
// import ModalCriar from "../../components/ModalCriar/criar";
import { Container } from "./Home";
import { ComponentText } from "./Home";
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import './Home'
import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { deleteDoc } from "firebase/firestore";
import { useContext } from "react";
import { ModalContext } from "../../components/modal"
import ModalUpdate from "../../components/ModalEdit/edit.jsx"
import { RiEditBoxLine } from "react-icons/ri";
import { getDoc } from "firebase/firestore";
import { BsFillPostcardFill } from "react-icons/bs";
import { onAuthStateChanged} from "firebase/auth";


export default function Home() {
    const [post, setPost] = useState([])
    const {openUpdatePostModal, closeUpdatePostModal} = useContext(ModalContext)
    const [selectedPost, setSelectedPost] = useState(null); 
    const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false)
    const [user, setUser] = useState(null)



    

    async function handleDelete(id){
        const docRef = doc(db, 'posts', id)
        console.log(docRef)
        await deleteDoc(docRef)
    }

    useEffect(()=>{
        async function loadPost(){
            const postRef = collection(db, 'posts')
            const q = query (postRef, orderBy('created', 'desc'))
            const unsub = onSnapshot(q,(snapshot)=>{
                let lista = []

                snapshot.forEach((doc) =>{
                    const data = doc.data()
                    const createdDate = doc.data().created.toDate()
                    const formattedDate = format(createdDate, "dd  MMM'.' 'de' yyyy", { locale: ptBR })

                    lista.push({
                        titulo: data.titulo,
                        descricao:data.descricao,
                        created: formattedDate,
                        id:doc.id,
                        topico:data.topico
                    })
                    
                }) 
                setPost(lista)
                
               
            })
        }

        async function loadUser(){
            auth.onAuthStateChanged(async (userAuth) => {
                if (userAuth) {
                    const userRef = doc(db, 'users', userAuth.uid); // Referência para o documento do usuário
                    const docSnapshot = await getDoc(userRef); // Obter o snapshot do documento
        
                    if (docSnapshot.exists()) {
                        const userData = docSnapshot.data(); // Dados do documento do usuário
                        setUser(userData)
                    }
                }
            })
        }
    
        loadPost()
        loadUser()
    },[])

   function handleEdit(post){
    setSelectedPost(post)
    setIsModalUpdateVisible(true)
   }
   


    return (
        <div>
            <Busca/>
            <div >

            {post.length === 0 ? (
                
                <ComponentText >
                    <BsFillPostcardFill size={85}/>
                    <h2>Não há publicações aqui!</h2>
               
                </ComponentText>
            ) :(
                post.map((item)=>(
                    <Container>
                    <div className="data"><p>{item.created}</p></div>
                    <div className="container-text" key={item}>
                    
                    <h1>{item.titulo}</h1>
                    
                    <p>Postado em <span>{item.topico}</span></p>
                    </div>
                
                        {user && user.isAdm && (
                            
                            <div className="container-acoes">
                                <button onClick={() => handleDelete(item.id)}><IoTrashOutline size={25}/></button>
                                <button onClick={() => handleEdit(item)}><RiEditBoxLine size={25}/></button>
                            </div>

                        )}
                    
                    <h2 className="descricao">{item.descricao}</h2>
                    
                </Container>
                    
                ))
            )}
            {isModalUpdateVisible ? (<ModalUpdate onClose={() => setIsModalUpdateVisible(false)} selectedPost={selectedPost} />) : null }
             {/* <ModalUpdate/> */}
            </div>
           
        </div>
    )
}
import React, { useContext, useEffect, useState } from "react"
// import './edit.js'
import {  ModalEdit} from "./edit.js";
import { ContainerEdit } from "./edit.js";
import { db } from "../../firebaseConfig.js";
import { ToastContainer, toast } from "react-toastify";
import { collection, doc } from "firebase/firestore";
import { updateDoc } from "firebase/firestore";

export default function ModalUpdate({onClose = () => {},selectedPost }) {
    // const {showPostModal, closePostModal} = useContext(ModalContext)
    const [inputTitle, setInputTitle] = useState(selectedPost.titulo)
    const [inputDescription, setInputDescription] = useState(selectedPost.descricao)
    const [idCustomer, setIdCustomer] = useState(false)
    const [topico, setTopico] = useState(selectedPost.topico)
    const [posts, setPosts] = useState([])
    
    async function UpdatePost(e){
        e.preventDefault();
           
                const docRef = doc(db, "posts", selectedPost.id)
    
                await updateDoc(docRef, {
                    titulo: inputTitle,
                    descricao: inputDescription,
                    topico:topico,
                })
                    .then(() => {
                        toast.success('Chamado atualizado com sucesso')
                        onClose()
                    })
                    .catch((error) => {
                        toast.error('erro ao atualizar esse chamado')
                        console.log(error)
                    })
                return;
                
    }
   

    function handleChangeSelect(e) {
        setTopico(e.target.value)
        console.log(e.target.value)
    }
    

    return (
        <ModalEdit>
            <ContainerEdit> 
                <form onSubmit={UpdatePost}>
                    <button className="close" onClick={onClose}>X</button>
                    <h2>Edite a publicação</h2>
                    <input type="text" placeholder="Titulo" value={inputTitle}  onChange={(e) => setInputTitle(e.target.value)}></input>

                    <select value={topico} onChange={handleChangeSelect}>
                    <option value="Selecione o topico" disabled>Selecione o topico</option>
                    <option value="Viagem">Viagem</option>
                    <option value="Livros">Livros</option>
                    <option value="Filmes">Filmes</option>
                    <option value="Séries">Séries</option>
                    </select>
                    <textarea className="textarea" rows="30" cols="60" value={inputDescription}  onChange={(e) => setInputDescription(e.target.value)}></textarea>
                    <button className="atualizar">Editar</button>
                </form>
            </ContainerEdit>
        </ModalEdit>
    )
}

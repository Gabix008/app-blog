import React, { useContext, useEffect, useState } from "react"
import Busca from '../Busca/Busca.jsx'
import './Criar.js'
import { useNavigate, Navigate } from "react-router-dom";
import {  Modal } from "./Criar.js";
import { Container } from "./Criar.js";
import { ModalContext } from "../../components/modal.jsx";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";
import { ToastContainer, toast } from "react-toastify";

export default function ModalCriar({onClose = () => {}}) {
    const {showPostModal, closePostModal} = useContext(ModalContext)

    const [inputTitle, setInputTitle] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [topico, setTopico] = useState('Selecione o topico')
    const [idCustomer, setIdCustomer] = useState(false)
    const {posts, setPosts} = useState([])

    
    
    async function CriarPost(e){
        e.preventDefault();

        if (inputTitle === '' || inputDescription ==='' || topico === ''){
            toast.info('Não foi possivel concluir a publicação!')
            return;
        }

        let docRef;
        docRef =  addDoc(collection(db, 'posts'),{
            titulo: inputTitle,
            descricao: inputDescription,
            created: new Date(),
            topico:topico,
        })

        .then(() => {
            toast.success('Publicação concluida com sucesso!')
            onClose()

        })
        .catch((err)=>{
            console.log(err)
        })
        

    }

    function handleChangeSelect(e) {
        setTopico(e.target.value)
        console.log(e.target.value)
    }

    return (
        <Modal>
            <Container> 
                <form onSubmit={CriarPost}>
                    <button className="close" onClick={onClose}>X</button>
                    <h2>Crie uma nova publicação</h2>
                    <input type="text" placeholder="Titulo" value={inputTitle}  onChange={(e) => setInputTitle(e.target.value)}></input>

                    <select name="option" value={topico} onChange={handleChangeSelect}>
                    <option value="Selecione o topico" disabled >Selecione o topico</option>
                    <option value="Viagem">Viagem</option>
                    <option value="Livros">Livros</option>
                    <option value="Filmes">Filmes</option>
                    <option value="Séries">Séries</option>
                    </select>
                    <textarea className="textarea" placeholder="Digite seu texto aqui..." rows="30" cols="60"  onChange={(e) => setInputDescription(e.target.value)}></textarea>
                    <button className="criar">Publicar</button>
                </form>
            </Container>
        </Modal>
    )
}
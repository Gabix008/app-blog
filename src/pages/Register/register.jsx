import React, { useContext, useState } from "react"
import Busca from '../../components/Busca/Busca'
import { Link } from "react-router-dom"
import { AuthContext } from "../../Contexts/auth"
import {Container} from './Register'
import logo1 from '../../imagens/logo1.png'


export default function register() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isAdm, setIsAdm] = useState(false)
    const {register, loadingAuth} = useContext(AuthContext)


    async function handleRegister(e){
        e.preventDefault();

        if(nome !=='' && email !=='' && senha !==''){
            await register(nome,email,senha, isAdm)
        }
    }

    return (
        <div>
        
        
        <Container>
            <h1>Que bom ter você por aqui! </h1> 
            <h3>Acesse sua conta agora mesmo</h3>
           <Link to='/entrar' className="link">Entre</Link>
            <img src={logo1} alt='logo' className='logo'/>

                <div>
                <form onSubmit={handleRegister}>
                <h2>Crie sua conta</h2>
                <input type="text" placeholder="Nome" onChange={(e)=>setNome(e.target.value)}></input>    
                <input type="email" placeholder="email@email.com" onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="************" onChange={(e)=>setSenha(e.target.value)}></input> 
                <button>Cadastrar</button>     
                </form >
                </div>
        </Container>
        </div>

    )
}
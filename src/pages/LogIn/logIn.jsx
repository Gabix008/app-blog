import React from "react"
import { useState, useContext } from "react"
import Busca from '../../components/Busca/Busca'
import { Link } from "react-router-dom"
import { AuthContext } from "../../Contexts/auth"
import'../Register/Register'
import {Container} from '../Register/Register'
import logo1 from '../../imagens/logo1.png'

export default function logIn() {
        const [email, setEmail] = useState('')
        const[senha, setSenha] = useState('')

        const {logIn, loadingAuth} = useContext(AuthContext)

        async function handleLogIn(e){
            e.preventDefault();

            if(email !== '' && senha !== ''){
                await logIn(email,senha)
            }
        }

    return (
        <div>
       
        <Container>
            <h1>Que bom ter você por aqui! </h1> 
            <h3>Crie sua conta agora mesmo</h3>
            <Link to='/registrar' className="link">Cadastre</Link>
            <img src={logo1} alt='logo' className='logo'/>

        <div>
            <form onSubmit={handleLogIn}>
            <h2>Faça o login</h2>
                <input type="Text" placeholder="Digite seu email" onChange={(e)=> setEmail(e.target.value)}></input>
                <input type="password" placeholder="Digite sua senha" onChange={(e)=> setSenha(e.target.value)}></input>
                <button>Entrar</button>
            </form>
        </div>
        </Container>
        </div>
    )
}
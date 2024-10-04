import styled from "styled-components";

export const Container = styled.div` 
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 3px;
    max-width: 1%; // Define um limite máximo para a largura do container
    padding: 15%;
    margin-top: 5%;
    width: auto; // Deixa a largura do container se ajustar ao conteúdo
    height: auto;
    overflow: auto; 
    display: flex;
    position: relative;
    left: 35%;
    word-wrap: break-word; // Faz com que palavras longas sejam quebradas para se ajustarem ao container
    height: auto;

    .container-text{
        color: #000;
        text-align: left;  
        position: absolute;
        margin-left: 22%;
        left: 0;
        top: 5%;
        width: 65%;
    }
    .container-text span{
        color: #C72E53;
    }

    .data {
        position: relative;
        background-color: #F77390;
        font-weight: bold;
        color: #fff;
        left: 0;
        position: absolute;
        left: 30px;
        top: 4%;
        width: 120px;
        height: 120px;
        border-radius: 999px;
    }
    .data p{
        margin-top: 50px;
        margin-left: 10px;
        
    }
    .container-acoes{
        right: 55px;
        top: 78px;
        position: absolute;
        display: flex;
        gap: 10px;
    }

    .descricao{
        font-family:Noto Sans, sans-serif;
        color:#6A6A6A;
        position: absolute;
        top: 25%;
        left: 22%;
        width: 70%;
        font-size: 20px;
    }
    .container-text h2{
        left: 0;
    
    }
    .textarea{
        left: 15%;
        position: absolute;
        margin-top: 10%;
    }
    .btn-comentario{
        margin-top: 28%;
        margin-left: 8%;
        width: 15%;
        position: absolute;
        background-color: red;
    } 
    button{
        background-color: transparent;
        color: #C72E53;
        border-radius:5px;
        padding: 4px;
        cursor: pointer;
        border: none;
        display: flex;
    }
    h1{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: #000;
        text-transform: capitalize;
    }
    
`
export const ComponentText = styled.h2`
        color: #CECECE;
        /* display: flexbox; */
        text-align: center;
        justify-content: center;
        margin-top: 10%;
        font-family:Noto Sans, sans-serif;

        svg{
            color: #d9d9d9;
        }

`
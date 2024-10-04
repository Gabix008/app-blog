import styled, { createGlobalStyle } from "styled-components";

export const ModalEdit = styled.div` 
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    z-index: 99;

`

export const ContainerEdit = styled.div`
    position:absolute;
    max-width: 850px;
    top: 15%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 4em 2em;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    
    h2{
        margin-bottom: 1.5em;
        font-family:Arial, Helvetica, sans-serif;
        text-align: center;
        color: #F77390;
    }
    textarea{
        margin-left: 20%;
        margin-bottom: 3%;
        border-radius: 5px;
        margin-top: 15px;
        padding: 15px;
    }
    input{
        margin-left: 25%;
        margin-bottom: 15px;
        padding: 10px;
        border: 0;
        background-color: #F2F2F2;
        border-radius: 5px;
        padding: 8px 30px;
        font-size: 15px;
        font-weight: 500;
    }
    select{
        border: 0;
        position: absolute;
        margin-left: 15px;
        background: rgba(247, 115, 144, 0.8);
        border-radius: 5px;
        box-shadow: #F77390 0 10px 22px -13px;
        color: #FFFFFF;
        cursor: pointer;
        font-size: 15px;
        font-weight: 500;
        padding: 8px 30px;
        border: 0;
    }
    option{
        background-color: #ffff;
        color: rgba(0, 0, 0, 0.7);
    }

    .close{
        background-color: red;
        border: 0;
        border-radius: 5px;
        position: absolute;
        top: 15px;
        left: 93%;
        padding: 4px 15px;
        color: #fff;
        cursor: pointer;
    }
    .atualizar{
        border: 0;
        background: #F77390;
        border-radius: 999px;
        box-shadow: #F77390 0 10px 20px -10px;
        box-sizing: border-box;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px; 
        opacity: 1;
        outline: 0 solid transparent;
        padding: 8px 50px;
        user-select: none;
        -webkit-user-select: none;
        display: block;
        margin-left: 45%;
        color: #fff;
    }

`
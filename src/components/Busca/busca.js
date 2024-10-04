import styled from "styled-components";

export const BuscaContainer = styled.div`
    background-color: #ffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1%;
    box-shadow: rgba(50, 50, 93, 0.15) 0px 13px 27px -5px, rgba(0, 0, 0, 0.1) 0px 8px 16px -8px;
    img{
        width: 97%;
    }

    .botaoCriar{
        background-color: #d27892;
        color: #fff;
        margin-left: 73%;
        border-radius: 7px;
        padding: 10px 19px;
        border: navajowhite;
        position: absolute;
        cursor: pointer;
    }

    .botaoSair{
        position: absolute;
        border: none;
        background-color: transparent;
        margin-left: 80%;
        cursor: pointer;
    }
    button :hover{
        color: #d27892;
    }
    
`



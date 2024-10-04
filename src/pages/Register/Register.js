import styled from "styled-components";

export const Container = styled.div`
   background-color: #d27892;
   /* background-color: #f580ea; */
   width: 50vw;
   height: 70vh;
   display: flex;
   margin-left: 25%;
   position: relative;
   border-radius: 5px;
   margin-top: 5%;
   /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
   box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
   div{
      background-color: #ffff;
      border-left: 1px solid #cccc;
      border-radius: 5px;
      margin-left: 38%;
      width: 31vw;
      height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
   }
   input{
      
      margin-bottom: 10px;
      margin-top: 12px;
      display: flex;
      flex-direction: column;
   }
   img{
      /* background-color: red; */
      margin-top: 3%;
      margin-left:9%;
      position: absolute;
      width: 20%;
      height: 30%;
   }
   h1 {
      margin-top: 23%;
      margin-left: 50px;
      color: #fff;
      display:block; 
      position: absolute;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   }


   h3{
      margin-top: 30%;
      margin-left: 100px;
      color: #fff;
      display:block; 
      position: absolute;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   }
   .link{
      color: #ccc;
      /* background-color: red; */
      color: #fff;
      width: 100px;
      
      height: 9px;
      border-radius: 20px;
      margin-top: 33%;
      padding: 15px;
      margin-left: 14%;
      border: 1px solid #fff;
      text-align: center;
      text-decoration: none;
   }

   h2{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: #d27892;
      margin-left: 25%;
      margin-bottom: 25px;
      
   }
   input{
      width: 350px;
      height: 50px;
      border: none;
      background-color: #F5F5F5;
      border-radius: 3px; 
      padding-left: 20px;
   }
   button{
      width: 300px;
      height: 40px;
      background-color: #d27892;
      border: none;
      border-radius: 15px;
      margin-top: 15px;
      margin-left: 40px;
      color: #fff;
      cursor: pointer;
   }
`


export const Link = styled`
   color: black;
`
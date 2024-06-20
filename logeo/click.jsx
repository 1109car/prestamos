"use client"
import React, { useState } from "react"
import "./clickes.css"


export default function click({cambia, espera}){
const onsubmit = async(e)=>{
    // const router = useRouter()

    e.preventDefault()
    console.log(e)
    const username = e.target.username.value
    const password = e.target.password.value
    console.log(username,password)
    const res =await fetch("http://localhost:8080/usuarios", {
      method:"POST",
      body: JSON.stringify({username,password}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data =await res.json()
    console.log(data)

    // router.push("/vehiculo")
  }
 
return (
    <>
    <div className={cambia?"nombresq":null} onClick={espera}>
        <form onSubmit={onsubmit}>
    <input className="innombre input" type="text" name="username" placeholder="Nombre..." id="username"/>                      
    <input type="password" placeholder="Contraseña..." name="password" className="input uu" id="password"/>
    <button  className="env">Enviar</button>
    </form>
    </div>
    </>                
    )
}

//  class Click extends React.Component   nombresq
// {
//     state ={
//         divcontainer:false,   
//     }
//     render()
//     {
    
//         let Handlechange = () =>{
//             this.setState({divcontainer :!this.state.divcontainer})
//         }
//         const x=this.state.divcontainer

//         return(
//             <div>
//             <a className="cliques" onClick={Handlechange}>{x?"Cerrar":"SI aun no te has registrado"}</a>
//             {
//                 x &&(
//                       <div className="nombresq">
//                        <input className="innombre input" type="text" name="username" placeholder="Nombre..."/>                      
//                        <input type="password" placeholder="Contraseña..." name="password" className="input uu"/>
//                        <button href="#" className="env">Enviar</button>
//                        </div>
                       

                                 
//                     )
//             }
//            </div>
//         )
//     }

// }
// export default Click;



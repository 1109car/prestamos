import Naves from "../Naves"
import "../vehiculo.css"
import "./ver.css"
export default function page() {
  return (
    <div>
   
        <Naves></Naves>
       
        <div className="contenedor">
            <div className="imagenes">
                <img className="numer" src="https://www.interseguro.pe/vehicular/images/beneficios/banner.png" alt="" />
            </div> 
            <div className="gridd">
                <div className="colum aaaa">
                    <div className="filas g">
                        <h2 className="cliente">Datos del Cliente</h2>
                    </div>
                    <div className="filas g">
                        <h3>Nombre</h3>
                    </div>
                    <div className="filas g">
                        <h3>Centro de Trabajo</h3>
                    </div>
                    <div className="filas g">
                        <h3>Telefono</h3>
                    </div>
                    </div>
                <div className="colum bbbb">
                    <div className="filas h">
                        <input type="text"className="qq" id="input"  placeholder="Escribe Aqui..." />
                    </div>
                    <div className="filas h">
                        <input type="text" className="inputtt w"id="input" placeholder="Escribe aqui..."/>
                    </div>
                    <div className="filas h">
                        <input type="text" className="hh" id="input" placeholder="Escribe Aqui..." />
                        </div>    
            </div>
            </div>
            <div className="griddd">
            <div className="colum aaaa">
                    <div className="filas g">
                        <h2 className="cliente">Datos Del Vehiculo</h2>
                    </div>
                    <div className="filas g">
                        <h3>Marca / Modelo</h3>
                    </div>
                    <div className="filas g">
                        <h3>Concesionario</h3>
                    </div>
                    <div className="filas g">
                        <h3>Vendedor</h3>
                    </div>
                    </div>
                <div className="colum bbbb">
                    <div className="filas h">
                   
                    </div>
                    <div className="filas h">
                        <input type="text" className="inputtt vv"id="input" placeholder="Escribe aqui..."/>
                    </div>
                    <div className="fila">
                        <input type="text" className="pp"id="input" placeholder="Escribe Aqui..."/>
                    </div>
                    <div className="filas h">
                        <input type="text" className="mm"id="input" placeholder="Escribe Aqui..."/>
                        </div>    
            </div>

            </div>
             
        </div>
    </div>
  )
}

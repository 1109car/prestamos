"use client"

import { useRouter } from "next/router"
import Naves from "../Naves"
import "../vehiculo.css"
import "./cuotas.css"

export default function ({oferta,fecha,input}) {
  // const router = useRouter()
   const sube =async(e)=>{
    e.preventDefault()
    const moneda = e.target.moneda.value;
    const plazosGraciaTotal=e.target.plazosGraciaTotal.value;
    // const plazoGraciaParcial=e.target.plazoGraciaParcial.value; 
    // const ingresoMensual=e.target.ingresoMensual.value;
    // const precioVehiculo=e.target.precioVehiculo.value;
    // const porcentajeCuotaInicial=e.target.porcentajeCuotaInicial.value;
    // const plazo =e.target.plazo.value;
    // const tea =e.target.tea.value;
    // const cok=e.target.cok.value;
    // const seguroVehicularAnual=e.target.seguroVehicularAnual.value;

    const respuesta = await fetch("http://localhost:8080/ofertas/registrar",{
      method:"POST",
      body:JSON.stringify({moneda,plazosGraciaTotal,plazoGraciaParcial,
                            ingresoMensual,precioVehiculo,porcentajeCuotaInicial,
                            plazo,tea,cok,seguroVehicularAnual}),
      headers:{
        'Content-Type':'application/json'
      }
    })
     const dato = await respuesta.json()
     console.log(dato)
    //  router.push("/cronograma")

   }
    
  //   const [values,setvalues] = useState({
  //     moneda:"",
  //     plazosGraciaTotal:0,
  //     plazoGraciaParcial: 0,
  //     ingresoMensual:0,
  //     precioVehiculo:0,
  //     porcentajeCuotaInicial:0.00,
  //     plazo:0,
  //     tea:0,
  //     cok: 0,
  //     seguroVehicularAnual: 0
  //   });
    
  
  // const changeinput =(event) =>{
  //   const [name,value] = event.target;
  //   setvalues({
  //     ...values,
  //     [name]:value
  //   });
  // };
  return (
    <div>
        <Naves></Naves>
        <form onSubmit={sube} className="wlw">
    <div className="container">
      <div className="col">
        <h2 className="h2">INGRESA TUS DATOS</h2>
        <label  className="fechad">Plazos Gracia Total</label>
        <input type="number"  className="inputtres" id="plazosGraciaTotal" />
        <h3 className="h3">Proteccion contra robos</h3>
        <input type="text" className="numbe-cinco" placeholder="moneda..." id="moneda"/>
        // <button className="cotizalo">Cotizalo</button>
        <span className="span">TEA</span>
        <input type="number" name="plazosGraciaTotal" className="check" placeholder="...." id="tea"/>
        // <button className="cotizalo">Cotizalo</button>
        </div>
      <div className="col">

        <label  className="fechadd">Ingreso Mensual</label>
        <input type="number" name="ingresoMensual"  className="number" placeholder="Ingresa el monto..." id="ingresoMensual"/>
        <h3 className="h33">Cuota de Inicio</h3>
        <p className="pp">Plazo Gracia Parcial</p>
        <span className="spann">Cualquier duda hacercarse al centro de atencion en la avenida messi</span>
         <input type="number" name="precioVehiculo" className="number2" placeholder="Ingresa l monto..." id="plazoGraciaParcial"/>
      </div>
      <div className="col">
      
        <label  className="fech">plazo</label>
        <input type="number" name="porcentajeCuotaInicial"  className="numbe" placeholder="Interes..." id="porcentajeCuotaInicial"/> 
        <h3 className="h33 t">Seguro Anual Vehicular</h3>
        <p className="pn">Porcentaje cuota inicial</p>
        <span className="spa">No pierdas mas esta oportunidad</span>
         <input type="number" name="plazo" className="numbe-dos" placeholder="Cok..." id="plazo"/>
         <input type="number" name="tea" className="numbe-tres" placeholder="Seguro vehicular anual..." id="tea"/>
         <input type="number" name="cok" className="numbe-cuatro" placeholder="Precio Vehiculo..." id="cok"/>
        
      </div>
      </div>
    </form>
    </div>
  )
}

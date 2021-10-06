
import { useState, useEffect } from "react";
import "../CargaDatos/CargaDatos.css"
import {errorCargaDatos, mensajeError, mensajeErrorOculto} from "./errorCargaDatos"
import estiloCargaDatos from "./estiloCargaDatos"

// Agregar los props necesarios, junto con las proptypes
//
const CargaDatos = (props) => {
    // En caso que el usuario presione el botón "Agregar al carrito"
    // Valida lo siguiente:
    //    La Herramienta no puede ser vacía
    //    El precio unitario no puede:
    //        Ni estar vacío
    //        Ni ser cero
    //    La cantidad no puede:
    //        Ni estar vacía
    //        Ni estar en cero
    // Si ocurre alguna de éstas, mostrá el error SOLO en la ubicación pertinente.
    // Si había un error pero se solucionó entonces no debe quedar ninguna advertencia

    // Estados:
  const [herramienta, setHerramienta] = useState({
    // Agregar los campos necesarios
    herramienta: "",
    precio: 0,
    cantidad: 0
  });

  

  /* useEffect(() => {
    console.log(herramienta)
  },[herramienta]) */
  
    const onChangeHerramienta = (e) => {
        
      setHerramienta({
        ...herramienta,
        [e.target.name]: e.target.value
      });
    };

    //herramienta.herramienta === "" || herramienta.precio === "" || herramienta.cantidad === 0
  
    const [carrito, setCarrito] = useState([]);

    const [error, setError] = useState(false)

    const agregarAlCarrito = () => {
        
        if (herramienta.herramienta === "") {
          setError("hola")
            
        } else {
          setError(false)
          setCarrito([...carrito, herramienta]);
          setHerramienta({ herramienta: "", precio: "", cantidad: "" });
        }

        
        
    }

    const borrarCarrito = (herramienta) => {
        const arrayFiltrado = carrito.filter((a) => a.herramienta !== herramienta);
        setCarrito([...arrayFiltrado]);
    }
  
    
    
    return (
      <>
        <div id = "div-facturacion">
            <span>Herramienta: </span>
            <input style = {error ? errorCargaDatos : estiloCargaDatos} name="herramienta" onChange={(e) => onChangeHerramienta(e)} placeholder="Llave de tubo" /> <br/>
            <span>Precio Unitario: </span>
            <input type = "number" name="precio" onChange={(e) => onChangeHerramienta(e)} placeholder="2500" /><br/>
            <span>Cantidad: </span>
            <input type = "number" name="cantidad" onChange={(e) => onChangeHerramienta(e)} placeholder="1" /><br/>
            <button onClick={agregarAlCarrito}> Agregar al carrito</button>
        </div>

        <div id = "div-facturacion">
            <p className="errores" style = {error ? mensajeError : mensajeErrorOculto}>El campo no puede estar vacío</p>
            <p className="errores" style = {error ? mensajeError : mensajeErrorOculto}>El campo no puede estar vacío o valer 0</p>
            <p className="errores" style = {error ? mensajeError : mensajeErrorOculto}>El campo no puede estar vacío o valer 0</p>
        </div>

       

        <div id="div-carrito">
            <ul>
                {carrito &&
                carrito.map((a) => {
                    return (
                    <>
                    
                        <li key={a.herramienta} style={{ listStyle: "none" }}>
                            <p>Herramienta: {a.herramienta}</p>
                            <p>Precio: ${a.precio}</p>
                            <p>Cantidad: {a.cantidad} uni.</p>
                            <p>Total: ${a.precio * a.cantidad} </p>
                        <button
                            onClick={() => borrarCarrito(a.herramienta)}
                        >
                            X
                        </button>
                        </li>
                    
                    </>
                    );
                })}
            </ul>
      </div>
      </>
    )
  };


export default CargaDatos;


import { useState, useEffect } from "react";
import "../CargaDatos/CargaDatos.css"
import {errorCargaDatos, mensajeError, mensajeErrorOculto, estiloCargaDatos} from "./errorCargaDatos"
import Axios from "axios"

// Agregar los props necesarios, junto con las proptypes
//
const CargaDatos = (props) => {
    // VALIDACIONES 
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

    const [errorHerramienta, setErrorHerramienta] = useState(false)
    const [errorPrecio, setErrorPrecio] = useState(false)
    const [errorCantidad, setErrorCantidad] = useState(false)

    const agregarAlCarrito = () => {
        if (herramienta.herramienta === "") {
          setErrorHerramienta(true)
          setErrorCantidad(false)
          setErrorPrecio(false)
          
        } else if (herramienta.precio === "" || herramienta.precio === 0) {
          setErrorPrecio(true)
          setErrorHerramienta(false)
          setErrorCantidad(false)
            
        } else if(herramienta.cantidad === 0 || herramienta.cantidad === "") {
          setErrorCantidad(true)
          setErrorHerramienta(false)
          setErrorPrecio(false)
        }
        
        else if (herramienta) {
          setErrorHerramienta(false)
          setErrorPrecio(false)
          setErrorCantidad(false)
          setCarrito([...carrito, herramienta]);
          quemarCampos();
        }

    }

    const borrarCarrito = (herramienta) => {
        const arrayFiltrado = carrito.filter((a) => a.herramienta !== herramienta);
        setCarrito([...arrayFiltrado]);
    }

    const quemarCampos = () => {
      setHerramienta({
        herramienta: "",
        precio: 0,
        cantidad: 0
      })
        
    }
    
    
    return (
      <>
        <div id = "div-facturacion">
            <span>Herramienta: </span>
            <input value={herramienta.herramienta} style = {errorHerramienta ? errorCargaDatos : estiloCargaDatos} name="herramienta" onChange={(e) => onChangeHerramienta(e)} placeholder="Llave de tubo" /> <br/>
            <span>Precio Unitario: </span>
            <input value={herramienta.precio} style = {errorPrecio ? errorCargaDatos : estiloCargaDatos} type = "number" name="precio" onChange={(e) => onChangeHerramienta(e)} placeholder="2500" /><br/>
            <span>Cantidad: </span>
            <input value={herramienta.cantidad} style = {errorCantidad ? errorCargaDatos : estiloCargaDatos} type = "number" name="cantidad" onChange={(e) => onChangeHerramienta(e)} placeholder="1" /><br/>
            <button onClick={agregarAlCarrito}> Agregar al carrito</button>
        </div>

        <div id = "div-facturacion">
            <p className="errores" style = {errorHerramienta ? mensajeError : mensajeErrorOculto}>El campo no puede estar vacío</p>
            <p className="errores" style = {errorPrecio ? mensajeError : mensajeErrorOculto}>El campo no puede estar vacío</p>
            <p className="errores" style = {errorCantidad ? mensajeError : mensajeErrorOculto}>El campo no puede estar vacío</p>
            
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

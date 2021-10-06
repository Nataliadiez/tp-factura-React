// Este TP está hecho para agrupar a todos los temas que venimos viendo hasta el momento.
// La idea es generar una factura, en donde el usuario cargue:
//    Sus datos personales
//    Las herramientas a comprar, junto con el precio y la cantidad.

// El sistema debe mostrar:
//    un listado con las herramientas agregadas al carrito.
//    Un total de la compra

import { useState, useEffect } from "react";
import "./App.css";
import { CargaDatos, Titulo } from "./components";





function App() {
  
  return (
    
    <div className="App">
      <Titulo />
      <CargaDatos />
      {/* 
        Generá los isguientes componentes:
        
        <Listado /> ==> Acá podrás eliminar algún ítem si lo consideras necesario.
        <Total />   ==> Aca mostrarás el total. En caso de haber eliminado un ítem tendrás que re-hacer el cálculo
      
      */}
    </div>
  );
}

export default App;

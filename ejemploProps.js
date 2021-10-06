/* import React from "react"; // acá importo la libreria de React
import ReactDOM from "react-dom"; 
import propTypes from "prop-types" */


// EJERCICIOS CLASE 2
//1) Crear un elemento con createElement que se llame holaMundo y, 
//dentro, contenga un párrafo que incluya la leyenda “Bienvenido a React”.

/* const holaMundo = React.createElement("p", null, "Bienvenido a React")

ReactDOM.render(
  <>{holaMundo}</>,
  document.getElementById("root")
) */


/* 2) Hacer un elemento con createElement que se llame listaDeCompras e incluya una lista ordenada con los siguientes ítems: 
“Pinolux”, “Manteca”, “Dulce de Leche”. */


// SIN ARRAY
/* const listaDeCompras = React.createElement("ol",null,

  React.createElement("li",null, "Pinolux"),
  React.createElement("li",null, "Manteca"),
  React.createElement("li",null, "Dulce de leche")

)

ReactDOM.render (

  <>{listaDeCompras}</>,

  document.getElementById("root")
) */


// 3) Modificar la lista anterior para obtener los valores a partir de un array llamado arrayCompras. 

// CON ARRAY
/* const arrayCompras = ["Pinolux","Manteca","Dulce de leche"]
const listaDeCompras = (
  <ol>
    <li>{arrayCompras[0]}</li>
    <li>{arrayCompras[1]}</li>
    <li>{arrayCompras[2]}</li>
  </ol>
)

ReactDOM.render (

  listaDeCompras,

  document.getElementById("root")
) */

// 4) Transformar el elemento holaMundo en un componente llamado HolaMundo y que nos muestre el mismo resultado.

/* const HolaMundo = () => {
  return (<p>Bienvenido a React</p>)
}

ReactDOM.render(
  <HolaMundo/>,
  document.getElementById("root")
)
 */
/* 5) Al componente HolaMundo agregale el elemento listaDeCompras. Ahora solo llamá al componente HolaMundo y deberían verse tanto 
el “Bienvenido a React” como la lista de compras. */

/* const arrayCompras = ["Pinolux","Manteca","Dulce de leche"]
const listaDeCompras = (
  <ol>
    <li>{arrayCompras[0]}</li>
    <li>{arrayCompras[1]}</li>
    <li>{arrayCompras[2]}</li>
  </ol>
)

const HolaMundo = () => {
  return (
    <>
      <p>Bienvenido a React</p>
      {listaDeCompras}
    </>
    )
  
}

ReactDOM.render(
  <HolaMundo/>,
  document.getElementById("root")
) */

//6) Agrega una prop a HolaMundo que sea “titulo” y pasale este nuevo para mostrarlo en lugar de “Bienvenido a React”

/* const arrayCompras = ["Pinolux","Manteca","Dulce de leche"]
const listaDeCompras = (
  <ol>
    <li>{arrayCompras[0]}</li>
    <li>{arrayCompras[1]}</li>
    <li>{arrayCompras[2]}</li>
  </ol>
)


const HolaMundo = (props) => {
  const {titulo} = props;
  return (
    <>
      <p>{titulo}</p>
      {listaDeCompras}
    </>
  )
  
}



ReactDOM.render(
  <HolaMundo titulo = "Este es otro titulo que se me ocurre a mi poner"/>,
  document.getElementById("root")
) */


// 7) Ponele un valor por defecto a título que sea “Por favor, incluí el título”. Valida que puedas ver tanto con la prop como sin ella.

/* const arrayCompras = ["Pinolux","Manteca","Dulce de leche"]
const listaDeCompras = (
  <ol>
    <li>{arrayCompras[0]}</li>
    <li>{arrayCompras[1]}</li>
    <li>{arrayCompras[2]}</li>
  </ol>
)

const titulo = (
  <p>Por favor, incluí el título</p>
)

const HolaMundo = (props) => {
  return (
    <>
      <p>{props.titulo}</p>
      {listaDeCompras}
    </>
  )
  
}



ReactDOM.render(
  <HolaMundo titulo = "Por favor, incluí el título" />,
  document.getElementById("root")
) */


// 8) Mirando el siguiente código, (Y sin llevarlo al editor) ¿qué debo agregarle para que funcione?

// No puedo NO llevarlo al editor, todavía no conozco lo suficiente de React como para ver y encontrar 
// rápidamente la solución. Más despacio cerebrito.

// El problema se encontraba en el componente hola, el cual no incluía fragments, por lo cual no llamaba
// de manera correspondiente al componente título y a autor.


/* const escritor = {
  id: 1,
  name: "Rodrigo",
  articulo: "El comienzo de una era"
};

const Titulo = () => <h2>{escritor.articulo}</h2>

const Autor = (props) => <pre>{props.nombre}</pre>
  

const Hola = () => {
  return (
    <>
      <Titulo/>
      <Autor nombre = {escritor.name}/>
    </>
  );
;}

const rootElement = document.getElementById("root");
ReactDOM.render(<Hola/>, rootElement); */


  
// 9) Solo mirando el código (que ahora sí funciona) responde:
// a) ¿Qué vería si le quito las llaves que encierran al h2?
  // Diría "escritor.articulo" como si fuera un string y sin reconocer los elementos.

// b) ¿Qué vería si le quito las llaves a nombre?
  // Exactamente lo mismo que en caso anterior, diría "props.nombre"

// c) En la declaración del componente Autor:
   // i) ¿Porqué uso props.nombre y no props.name? Si en el llamado desde Hola el atributo es nombre.
    // Porque lo que estoy haciendo es desestructurar el componente Autor, y estoy creando el atributo "nombre", el cual va a recibir el valor "name" que contiene 
    //el JSON que se encuentra arriba, llamado "escritor"

    // ii) si le paso un destructuring a props, qué debería escribir entre esos paréntesis y qué otra cosa habría que modificar para que me siga funcionando?
      /* const Autor = (props) => {
        const {nombre} = props;
        return(
          <pre>{nombre}</pre>
        )
      } */
    
// d) Si cambio la palabra “root” por “inicio”, ¿ qué otra línea debo cambiar para que la aplicación me siga funcionando? 
    // Tengo que cambiar también el id del Div que se encuentra en la carpeta "public", en el "index.html" y colocar en lugar de "root", "inicio"

// 10) Transformá el elemento titulo en un componente. Chequea que siga funcionando.

/* const escritor = {
  id: 1,
  name: "Rodrigo",
  articulo: "El comienzo de una era"
};

const Titulo = () => <h2>{escritor.articulo}</h2>

const Autor = (props) => <pre>{props.nombre}</pre>;

const Hola = () => {
  return (
    <>
      <Titulo/>
      <Autor nombre = {escritor.name}/>
    </>
  );
;}

const rootElement = document.getElementById("root");
ReactDOM.render(<Hola/>, rootElement); */
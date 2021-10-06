/* import { useState, useEffect } from "react";

export default function Luz() {
  const [datosPersonales, setDatosPersonales] = useState({
    dni: 0,
    nombre: ""
  });
  const [agenda, setAgenda] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log(datosPersonales);
  }, [datosPersonales]);
  useEffect(() => {
    console.log(agenda);
  }, [agenda]);
  const handleChange = (e) => {
    setDatosPersonales({
      ...datosPersonales,
      [e.target.name]: e.target.value
    });
  };
  const handleClick = () => {
    if (datosPersonales.dni === "") {
      setError(true);
      return;
    }
    setError(false);
    setAgenda([...agenda, datosPersonales]);
    setDatosPersonales({ dni: 0, nombre: "" });
  };
  const handleClickDelete = (dni) => {
    const arrayFiltrado = agenda.filter((a) => a.dni !== dni);
    setAgenda([...arrayFiltrado]);
  };
  return (
    <div className="Luz">
      <input
        name="dni"
        placeholder="dni"
        type="number"
        defaultValue={datosPersonales.dni}
        onChange={(e) => handleChange(e)}
      />
      {error && <span style={{ color: "red" }}> Ingresa un valor </span>}
      <br />
      <input
        name="nombre"
        placeholder="nombre"
        defaultValue={datosPersonales.nombre}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button onClick={() => handleClick()}>Agregar</button>
      <ul>
        {agenda &&
          agenda.map((a) => {
            return (
              <>
                <li key={a.dni} style={{ listStyle: "none" }}>
                  {a.nombre}
                  <button
                    style={{ marginLeft: "20px" }}
                    onClick={() => handleClickDelete(a.dni)}
                  >
                    X
                  </button>
                </li>
              </>
            );
          })}
      </ul>
    </div>
  );
} */


import { useState, useEffect } from "react";
import Axios from "axios";

const Formulario = () => {
  const [actores, setActores] = useState([]);
  const [id, setId] = useState(0);
  const [registro, setRegistro] = useState({
    apellido: "",
    nombre: "",
    pais: "",
    fechanacimiento: "2011-10-10",
    foto: "",
  });

  useEffect(() => {
    obtenerTodosLosActores();
  }, []);

  useEffect(() => {
    console.log(registro);
  }, [registro]);

  //Llamados a las APIS:
  // GET => Toma los registros
  const obtenerTodosLosActores = async () => {
    let url = "http://localhost:5000/actores";
    const respuesta = await Axios.get(url);
    setActores(respuesta.data);
  };

  // Las funciones propias del formulario
  const handleClickEliminar = async (pId) => {
    const respuesta = await Axios.delete(
      `http://localhost:5000/actores/${pId}`
    );
    console.log(respuesta);
    obtenerTodosLosActores();
  };

  const handleClickNuevo = async () => {
    const respuesta = await Axios.post(
      "http://localhost:5000/actores",
      registro
    );
    console.log(respuesta);
    obtenerTodosLosActores();
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setRegistro({
      nombre: "",
      apellido: "",
      pais: "",
      fechanacimiento: "2011-10-10",
      foto: "",
    });
  };

  const handleChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleObtieneRegistro = async (pId) => {
    const respuesta = await Axios.get(`http://localhost:5000/actor/${pId}`);
    setRegistro(respuesta.data[0]);
    setId(pId);
  };

  const handleClickActualizar = async () => {
    const respuesta = await Axios.put(
      `http://localhost:5000/actores/${id}`,
      registro
    );
    console.log(respuesta);
    obtenerTodosLosActores();
    setId(0);
    limpiarCampos();
  };

  return (
    <>
      <h1>Actores y actrices de TV Arg - ❤</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="nombre"
          placeholder="nombre"
          onChange={(e) => handleChange(e)}
          value={registro && registro.nombre}
        />{" "}
        <br />
        <input
          name="apellido"
          placeholder="apellido"
          onChange={(e) => handleChange(e)}
          value={registro && registro.apellido}
        />
        <br />
        <input
          name="pais"
          placeholder="pais"
          onChange={(e) => handleChange(e)}
          value={registro && registro.pais}
        />
        <br />
        <input
          name="foto"
          placeholder="foto"
          onChange={(e) => handleChange(e)}
          value={registro && registro.foto}
        />
        <br />
        {id > 0 ? (
          <button onClick={() => handleClickActualizar()}>Actualizar</button>
        ) : (
          <button onClick={() => handleClickNuevo()}>Agregar</button>
        )}
      </form>

      {actores &&
        actores.map((a) => {
          return (
            <>
              <h3>Nombre y apellido</h3>
              <p>
                {a.nombre} {a.apellido}
              </p>
              <h3>Nacionalidad</h3>
              <p>{a.pais} </p>
              <h3>Foto</h3>
              <img src={a.foto} alt={a.nombre} /> <br />
              <button
                style={{ background: "yellow", color: "black" }}
                onClick={() => handleObtieneRegistro(a.id)}
              >
                Editar
              </button>
              <button
                onClick={() => handleClickEliminar(a.id)}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Eliminar
              </button>
            </>
          );
        })}
    </>
  );
};

/* export { Formulario }; */
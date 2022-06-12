import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import "../stylesheets/ListaDeTareas.css";

function ListaDeTareas() {
  // USAR UN HOOK

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    console.log(tarea);
    if (tarea.texto.trim()) {
      //   console.log("funciono");
      tarea.texto = tarea.texto.trim();
      //   la tarea se coloco de primera
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        // si el id es igual al id de la tarea. se coloca el diferencial,
        // si es false pasa a true y viceversa
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    // FRAGMENTOS
    //colocar elementos vacios que no se renderizan en html
    <>
      <TareaFormulario onSubmit={agregarTarea} />

      <div className="tarea-lista-contenedor">
        {tareas.map((tarea) => {
          return (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
          );
        })}
      </div>
    </>
  );
}

export default ListaDeTareas;

import { formatearFecha } from "../../helpers/helpers";

import IconoCasa from "../../img/icono_casa.svg";
import IconoEstudios from "../../img/icono_estudiante.svg";
import IconoTrabajo from "../../img/icono_trabajo.svg";
import IconoOcio from "../../img/icono_ocio.svg";

const ListaIconosTareas = {
    hogar: IconoCasa,
    trabajo: IconoTrabajo,
    estudios: IconoEstudios,
    ocio: IconoOcio,
};

const Tarea = ({ tarea, eliminarTarea, viewModalEditarTarea }) => {

    const handleEliminar = () => {
        eliminarTarea(tarea.id)
    }

    const handleEditar = () => {
        viewModalEditarTarea(tarea)
    }

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={ListaIconosTareas[tarea.categoria]} alt="" />
                <div className="descripcion-gasto">
                    <p className="categoria">{tarea.categoria}</p>
                    <p className="nombre-gasto">{tarea.nombreTarea}</p>
                    <p className="fecha-gasto">
                        <span>{formatearFecha(tarea.fecha)}</span>
                    </p>
                </div>
            </div>

            <div className="descripcion-gasto">
                <p>
                    <button onClick={handleEliminar} className="delete-edit-button" >
                        Eliminar
                    </button>
                </p>
                <p>
                    <button onClick={handleEditar} className="delete-edit-button" >
                        Editar
                    </button>
                </p>
            </div>
        </div>
    )
}


export default Tarea

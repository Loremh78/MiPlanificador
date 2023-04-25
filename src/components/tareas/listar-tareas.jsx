import Tarea from "../tareas/tarea"

const ListarTareas = ({ tareasFiltradas, eliminarTarea, viewModalEditarTarea }) => {
    return (
        <>
            {
                tareasFiltradas.map((tarea) => {
                    return (
                        <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            eliminarTarea={eliminarTarea}
                            viewModalEditarTarea={viewModalEditarTarea} />
                    )
                })
            }
        </>
    )
}

export default ListarTareas
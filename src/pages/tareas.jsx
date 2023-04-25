import { useEffect, useState } from "react"
import ModalTarea from "../components/tareas/modal-tarea"
import NuevoGasto from "../components/gastos/nuevo-gasto"
import ListarTareas from "../components/tareas/listar-tareas"
import FiltrarTareas from "../components/tareas/filtrar-tareas"

const Tareas = () => {
    const [modalTarea, setModalTarea] = useState(false);
    const [tareas, setTareas] = useState([])
    const [filtro, setFiltro] = useState(null)
    const [tareasFiltradas, setTareasFiltradas] = useState([])
    const [tareaEditable, setTareaEditable] = useState(null)

    const addTarea = (newTarea) => {
        setTareas([...tareas, newTarea])
        setModalTarea(false)
    }

    const handleAdd = () => {
        setModalTarea(true)
        setTareaEditable(null)
    }

    const editTarea = (editableTarea) => {
        const temporalTareas = tareas.map((tarea) => {
            if (tarea.id === editableTarea.id) {
                return editableTarea
            } else {
                return tarea
            }
        })
        setTareas(temporalTareas)
    }
    const eliminarTarea = (idTarea) => {
        const temporalTareas = tareas.filter((tarea) => {
            return (
                tarea.id !== idTarea
            )
        })
        setTareas(temporalTareas)
    }

    const viewModalEditarTarea = (tarea) => {
        setModalTarea(true)
        setTareaEditable(tarea)
    }

    useEffect(() => {
        if (filtro) {
            const temporalTareas = tareas.filter((tarea) => {
                return (
                    filtro === tarea.categoria
                )
            })
            setTareasFiltradas(temporalTareas)
        } else {
            setTareasFiltradas(tareas)
        }
    }, [filtro, tareas])

    return (
        <>
            <div className="header">
                <h1>Planificador de Tareas</h1>
            </div>

            {tareas.length > 0 ? (
                <div className="gastosMain">
                    <FiltrarTareas setFiltro={setFiltro} />
                    <div className="listado-gastos contenedor">
                        {tareasFiltradas.length > 0 ? (
                            <h2>Tareas</h2>
                        ) : (
                            <h2>No hay gastos en esta categoría</h2>
                        )}
                        <ListarTareas
                            tareasFiltradas={tareasFiltradas}
                            eliminarTarea={eliminarTarea}
                            viewModalEditarTarea={viewModalEditarTarea}
                            editTarea={editTarea}
                        />
                    </div>
                </div>
            ) : (
                <div className="listado-gastos contenedor">
                    <h2>No hay tareas pendientes</h2>
                </div>
            )
            }

            <NuevoGasto handleAdd={handleAdd} />

            {modalTarea && <ModalTarea
                setModalTarea={setModalTarea}
                addTarea={addTarea}
                tareaEditable={tareaEditable}
                editTarea={editTarea}
                viewModalEditarTarea={viewModalEditarTarea}

            />}
        </>

    )
}

export default Tareas
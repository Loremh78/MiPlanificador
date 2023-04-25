
import { useForm } from "react-hook-form";
import iconoCerrar from "../../img/cerrar.svg"
import { useEffect } from "react";

const ModalTarea = ({ setModalTarea, addTarea, tareaEditable, editTarea }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue

    } = useForm();

    useEffect(() => {
        if (tareaEditable) {
            setValue("nombreTarea", tareaEditable.nombreTarea)
            setValue("categoria", tareaEditable.categoria)
        }
    }, [])

    const handleTarea = (data) => {
        if (tareaEditable) {
            data.id = tareaEditable.id
            data.fecha = tareaEditable.fecha
            editTarea(data)
        } else {
            data.fecha = Date.now() //fecha actual
            data.id = `${data.fecha}${data.nombreTarea}`
            addTarea(data)
        }
        setModalTarea(false)
    }

    return (

        <div className="modal">
            <div className="cerrar-modal">
                <img onClick={() => setModalTarea(false)} src={iconoCerrar} alt="iconoCerrar" />
            </div>
            <form className="formulario" onSubmit={handleSubmit(handleTarea)}>
                <legend>
                    {tareaEditable ? "Editar Tarea" : "Nueva tarea"}
                </legend>
                <div className="campo">
                    <label htmlFor="nombre">Nombre Tarea</label>
                    <input id="nombre" type="text" placeholder="añade tarea" {...register('nombreTarea', { required: true })} />
                    {errors.nombreTarea && <p className="alerta error">Nombre requerido</p>}
                </div>

                <div className="campo">
                    <label>Categoría</label>
                    <select id="categoria" {...register('categoria', { required: true })} >
                        <option value="">-- Seleccione --</option>
                        <option value="hogar">Hogar</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="estudios">Estudio</option>
                        <option value="ocio">Ocio</option>
                    </select>
                    {errors.categoria && <p className="alerta error">Categoría requerida</p>}
                </div>

                <button type="submit">
                    {tareaEditable ? "Editar" : "Añadir"}
                </button>
            </form>
        </div>
    )
}

export default ModalTarea
import { useForm } from "react-hook-form";


const NuevoPresupuesto = ({setPresupuesto}) => {
    const handlePresupuesto = (data) => {
        // console.log(data.nuevoPresupuesto);
        setPresupuesto(data.nuevoPresupuesto)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handleSubmit(handlePresupuesto)}>
                <div className="campo">
                    <label htmlFor="">Definir Presupuesto</label>
                    <input placeholder="añade presupuesto" type="number" className="nuevo-presupuesto" {...register('nuevoPresupuesto', { required: true })} />
                    {errors.nuevoPresupuesto && <p className="alerta error">Presupuesto requerido</p>}
                </div>
                <button type="submit">Añadir</button>
            </form>
        </div>

    )
}


export default NuevoPresupuesto
import { formatearFecha } from "../../helpers/helpers";
import IconoAhorro from "../../img/icono_ahorro.svg";
import IconoCasa from "../../img/icono_casa.svg";
import IconoComida from "../../img/icono_comida.svg";
import IconoGastos from "../../img/icono_gastos.svg";
import IconoOcio from "../../img/icono_ocio.svg";
import IconoSalud from "../../img/icono_salud.svg";
import IconoSuscripciones from "../../img/icono_suscripciones.svg";

const ListaIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
};

const Gasto = ({ gasto, eliminarGasto, viewModalEditarGasto }) => {

    const handleEliminar = () => {
        eliminarGasto(gasto.id)
    }

    const handleEditar = () => {
        viewModalEditarGasto(gasto)
    }

    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={ListaIconos[gasto.categoria]} alt="" />
                <div className="descripcion-gasto">
                    <p className="categoria">{gasto.categoria}</p>
                    <p className="nombre-gasto">{gasto.nombreGasto}</p>
                    <p className="fecha-gasto">
                        <span>{formatearFecha(gasto.fecha)}</span>
                    </p>
                </div>
            </div>
            <p className="cantidad-gasto">€{gasto.cantidad}</p>

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


export default Gasto

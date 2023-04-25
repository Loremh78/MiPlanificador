import Gasto from "../gastos/gasto";

const ListarGastos = ({ gastosFiltrados, eliminarGasto, viewModalEditarGasto }) => {
    return (
        <>
            {
                gastosFiltrados.map((gasto) => {
                    return (
                        <Gasto
                            key={gasto.id}
                            gasto={gasto}
                            eliminarGasto={eliminarGasto}
                            viewModalEditarGasto={viewModalEditarGasto} />
                    )
                })
            }
        </>
    )
}

export default ListarGastos;


const DatosPresupuesto = ({presupuesto, setPresupuesto, totalGastos, setGastos, disponible }) => {
    const handleReset = ()=>{
        setPresupuesto(0)
        setGastos([])
    }
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>
                    €{presupuesto}
                </p>
                <p>
                    <span>Gastos: </span>
                    €{totalGastos}
                </p>
                <p>
                    <span>Disponible: </span>
                    €{disponible}
                </p>
                <button className="reset-app" onClick={ handleReset}>Resetear Presupuesto</button>
            </div>
        </div>
    )
}

export default DatosPresupuesto;
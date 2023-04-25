const FiltrarGastos = ({setFiltro}) => {

    return (
        <div className="filtros sombra contenedor">
            <div className="campo">
                <label>Filtrar Gastos</label>
                <select onChange={(e)=> setFiltro(e.target.value)} id="categoria">
                    <option value="">-- TODOS --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </div>
    )
}

export default FiltrarGastos
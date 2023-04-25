import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("mostrar elementos en la pantalla inicio", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  })

  test('renderizar título planificador', () => {
    const linkElement = screen.getByText(/Planificador de Gastos/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renderizar botón añadir", () => {
    const botonAdd = screen.queryByRole("button", { name: /Añadir/i });
    expect(botonAdd).toBeInTheDocument();
  })

  test("mensaje error campo presupuesto vacio", async () => {
    const botonAdd = screen.queryByRole("button", { name: /Añadir/i });
    userEvent.click(botonAdd)
    const mensajeError = await screen.findByText(/Presupuesto requerido/i);
    expect(mensajeError).toBeInTheDocument();
  })
})

describe("mostrar elementos en la pantalla datos presupuesto", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const inputPresupuesto = screen.queryByRole("spinbutton");
    await waitFor(() => userEvent.type(inputPresupuesto, "500"))
    const botonAdd = screen.queryByRole("button", { name: /Añadir/i });
    await waitFor(() => userEvent.click(botonAdd))
  })

  test("que aparezca botón resetear presupuesto", async () => {
    const botonResetear = await screen.findByRole("button", { name: /resetear presupuesto/i });
    expect(botonResetear).toBeInTheDocument();
  })

  test("que se muestre imagen añadir nuevo gasto", async () => {
    const iconoGasto = await screen.findByTestId("icono NuevoGasto")
    expect(iconoGasto).toBeInTheDocument();
  })

  test("que se muestre importe insertado", async () => {
    const importePresupuesto = await screen.findAllByText("€500")
    expect(importePresupuesto[0]).toBeInTheDocument();
  })

  test("que vuelve a inicio al resetear presupuesto", async () => {
    const volverInicio = await screen.findByRole("button", { name: /resetear presupuesto/i });
    await waitFor(() => userEvent.click(volverInicio))
    const definirPresupuesto = await screen.findByText(/definir presupuesto/i)
    expect(definirPresupuesto).toBeInTheDocument();
  })
})

describe("mostrar elementos en el modal de añadir gasto", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const inputPresupuesto = screen.queryByRole("spinbutton");
    await waitFor(() => userEvent.type(inputPresupuesto, "500"))
    const botonAdd = screen.queryByRole("button", { name: /Añadir/i });
    await waitFor(() => userEvent.click(botonAdd))
    const iconoGasto = await screen.findByTestId("icono NuevoGasto")
    await waitFor(() => userEvent.click(iconoGasto))
  })

  test("que se muestre el título nuevo gasto", async () => {
    const nuevoGasto = await screen.findByText(/nuevo gasto/i)
    expect(nuevoGasto).toBeInTheDocument();
  })

  test("mensaje error nombre gasto requerido", async () => {
    const botonAdd = screen.queryByRole("button", { name: /Añadir/i });
    userEvent.click(botonAdd)
    const mensajeError = await screen.findByText(/nombre requerido/i);
    expect(mensajeError).toBeInTheDocument();
  })

  test("mensaje error cantidad gasto requerido", async () => {
    const botonAdd = screen.queryByRole("button", { name: /Añadir/i });
    userEvent.click(botonAdd)
    const mensajeError = await screen.findByText(/cantidad requerido/i);
    expect(mensajeError).toBeInTheDocument();
  })

  test("mensaje error nombre no aparece", async () => {
    const inputNombre = screen.getByLabelText("Nombre Gasto")
    await waitFor(() => userEvent.type(inputNombre, "cena"))
    const botonAdd = await screen.findByRole("button", { name: /Añadir/i });
    await waitFor(() => userEvent.click(botonAdd))
    const mensajeError = screen.queryByText(/nombre requerido/i);
    expect(mensajeError).not.toBeInTheDocument();
  })

  test("cierre modal correcto", async () => {
    const cerrarModal = await screen.findByAltText("iconoCerrar")
    await waitFor(() => userEvent.click(cerrarModal))
    expect(cerrarModal).not.toBeInTheDocument();
  })

})

describe("mostrar ", () => {
  beforeEach(async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const inputPresupuesto = screen.queryByRole("spinbutton");
    await waitFor(() => userEvent.type(inputPresupuesto, "500"))
    const botonAdd = screen.queryByRole("button", { name: /Añadir/i });
    await waitFor(() => userEvent.click(botonAdd))
    const iconoGasto = await screen.findByTestId("icono NuevoGasto")
    await waitFor(() => userEvent.click(iconoGasto))
    const inputNuevoGasto = screen.getByPlaceholderText(/añade nombre del gasto/i)
    await waitFor(() => userEvent.type(inputNuevoGasto, "cena"))
    const inputCantidad = screen.getByPlaceholderText(/añadir cantidad/i)
    await waitFor(() => userEvent.type(inputCantidad, "20"))
    const categoria = screen.getByRole("combobox")
    userEvent.selectOptions(categoria, "comida")
    const botonAddGasto = await screen.findByRole("button", { name: /Añadir/i });
    await waitFor(() => userEvent.click(botonAddGasto))
  })

  test("filtrar por categoría sin gasto", async () => {
    const filtrarCategoria = await screen.findByRole("combobox")
    await waitFor(() => userEvent.selectOptions(filtrarCategoria, "comida"))
    const mensajeNogastos = await screen.findByText(/No/i);
    expect(mensajeNogastos).toBeInTheDocument();
  })


  test("aparece nuevo gasto y eliminar", async () => {
    const botonEliminar = await screen.findByText("Eliminar");
    expect(botonEliminar).toBeInTheDocument();
  })

})


import { render, screen, waitFor } from "@testing-library/react";
import Tareas from "./tareas";
import userEvent from "@testing-library/user-event";

describe("mostrar elementos en la pantalla tareas", () => {
  beforeEach(() => {
    render(
      <Tareas />
    );
  })

  test('renderizar título planificador', () => {
    const linkElement = screen.getByText(/Planificador de tareas/i);
    expect(linkElement).toBeInTheDocument();
  })
})

describe("mostrar elementos en el modal de añadir tarea", () => {
  beforeEach(async () => {
    render(
      <Tareas />
    );

    const iconoGasto = await screen.findByTestId("icono NuevoGasto")
    await waitFor(() => userEvent.click(iconoGasto))
  })

  test("que se muestre el título nueva tarea", async () => {
    const nuevoTarea = await screen.findByText(/nueva tarea/i)
    expect(nuevoTarea).toBeInTheDocument();
  })

  test("mensaje error nombre tarea requerida", async () => {
    const botonAdd = screen.queryByRole("button", { name: /Añadir/i });
    userEvent.click(botonAdd)
    const mensajeError = await screen.findByText(/nombre requerido/i);
    expect(mensajeError).toBeInTheDocument();
  })
})

describe("mostrar elementos en el modal de añadir tarea", () => {
  beforeEach(async () => {
    render(
      <Tareas />
    );
    
    const iconoGasto = await screen.findByTestId("icono NuevoGasto")
    await waitFor(() => userEvent.click(iconoGasto))
    const inputNuevoTarea = screen.getByPlaceholderText(/añade tarea/i)
    await waitFor(() => userEvent.type(inputNuevoTarea, "cena"))
    const categoria = screen.getByRole("combobox")
    userEvent.selectOptions(categoria, "hogar")
    const botonAddGasto = await screen.findByRole("button", { name: /Añadir/i });
    await waitFor(() => userEvent.click(botonAddGasto))
  })

  test("aparece nuevo tarea y eliminar", async () => {
    const botonEliminar = await screen.findByText("Eliminar");
    expect(botonEliminar).toBeInTheDocument();
  })

  test("se elimina la tarea", async () => {
    const botonEliminar = await screen.findByText("Eliminar");
    await waitFor(() => userEvent.click(botonEliminar))
    expect(botonEliminar).not.toBeInTheDocument();
  })
})
import '@testing-library/jest-dom';
import Counter from "./Counter";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('render counter component', ()=>{
    render(<Counter></Counter>)
})

// EJEMPLO CON FIREEVENT
test('render component and increment value', async ()=>{
    render(<Counter></Counter>)
    
    // Encuentra el botón
    const buttonIncrement = screen.getByRole('button', {name: '+'});
    
    // Verifica que incialmente es 0
    expect(screen.getByText('0')).toBeInTheDocument()

    // Haz click para sumar 
    fireEvent.click(buttonIncrement);

    // Verifica que se ha sumado
    expect(screen.getByText('1')).toBeInTheDocument()
})

test('render component and decrement', ()=>{
    render(<Counter></Counter>)
    const buttonDecrement = screen.getByRole('button', {name:'-'})
    expect(screen.getByText('0')).toBeInTheDocument()
    fireEvent.click(buttonDecrement)
    expect(screen.getByText('-1')).toBeInTheDocument()
})


//EJEMPLO CON ASYNC AWAIT con USEREVENT
//Si usas userEvent directamente puede intentar verificar antes de que se haya actualizado
test('renders Counter component and increments value', async () => {
    render(<Counter />);
  
    // Encuentra el botón
    const buttonIncrement = screen.getByRole('button', { name: '+' });
  
    // Verifica que el texto inicial del contador es '0'
    expect(screen.getByText('0')).toBeInTheDocument();
  
    // Haz clic en el botón para sumar
    userEvent.click(buttonIncrement);
  
    // Espera a que el texto se actualice y verifica que se ha incrementado
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });
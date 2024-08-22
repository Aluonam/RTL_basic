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



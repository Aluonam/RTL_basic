import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event';
import userForm from './UserForm';
import UserForm from './UserForm';

test('muestra dos entradas y un botón', ()=>{
    // Renderizar el componente
    render(<UserForm/>);

    // Manipular el componente o elementos en él
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    // Assertion: lo que el compoennte debe hacer
    // Lo esperado que haga 
    expect(inputs).toHaveLength(2); // esperamos encontrar dos inputs
    expect(button).toBeInTheDocument(); // esperamos encontrar un botón

    
});
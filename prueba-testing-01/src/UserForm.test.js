import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event';
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

 
test("llama a onUserAdd cuando se envía el formulario", async () => {
    // NOT THE BEST IMPLEMENTATION

    // Try to render my component
    render(<UserForm />);
   
    // Find the two inputs
    const [nameInput, emailInput] = screen.getAllByRole("textbox");
   
    // Simulate typing in a name
    await user.click(nameInput);
    await user.keyboard("jane");
   
    // Simulate typing in an email
    await user.click(emailInput);
    await user.keyboard("jane@jane.com");
   
    // Find the button
   
    // Simulate clicking the button
   
    // Assertion to make sure 'onUserAdd' gets called with email/name
  });
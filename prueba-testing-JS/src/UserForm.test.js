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

 
// test("llama a onUserAdd cuando se envía el formulario", async () => {
    
//     // NOT THE BEST IMPLEMENTATION
//     // const argList = [];
//     // const callback = (...args)=>{
//     //     argList.push(args);
//     // }

//     const mock = jest.fn();

//     // Try to render my component
//     render(<UserForm onUserAdd={mock}/>);
   
//     // Find the two inputs
//     // const [nameInput, emailInput] = screen.getAllByRole("textbox");
//     const nameInput = screen.getByRole('textbox', {
//         name: /name/i,
//     })
//     const emailInput = screen.getByRole('textbox',{
//         name: /email/i,
//     })
    
//     // Simulate typing in a name
//     user.click(nameInput);
//     user.keyboard("jane"); // user.keyboard('{Enter}') la entrada de llaves del teclado del usuario simulará presionar la tecla Intro.
   
//     // Simulate typing in an email
//     user.click(emailInput);
//     user.keyboard("jane@jane.com");
   
//     // Find the button //Se usa from '@testing-library/user-event';
//     const button = screen.getByRole('button');

//     // Simulate clicking the button
//     user.click(button);;

//     // Assertion to make sure 'onUserAdd' gets called with email/name
//     // expect(argList).toHaveLength(1);
//     // expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com'}) // si pusiera otro nombre daría error, eso verifica que lo estamos haciendo bien
//     expect(mock).toHaveBeenCalled();
//     expect(mock).toHaveBeenCalledWith({ name: 'jane',  email: 'jane@jane.com'})
// });
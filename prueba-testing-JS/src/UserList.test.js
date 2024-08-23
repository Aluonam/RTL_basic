import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';


test('muestra una fila por usuario', ()=>{
    //Renderizar componentew
    
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'bob', email: 'bob@bob.com' }
    ];
    // render (<UserList users={users} />)
    const { container } = render(<UserList users={users}/>)

    //Encontrar las columnas en la tabla
    // screen.logTestingPlaygroundURL();
    const rows = within(screen.getByTestId('users')).getAllByRole('row'); //within se importa y usar para que encuentre los elementos dle cuerpo

    //Assertion: numero correcto de filas en la tabla
    expect(rows).toHaveLength(2); //una fila es el encabezado
});

test('rendriza el email y nombre de cada usuario', ()=>{
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'bob', email: 'bob@bob.com' }
    ];
    const { container } = render(<UserList users={users}/>)

    for (let user of users){
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});
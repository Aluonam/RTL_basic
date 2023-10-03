import { render, screen } from '@testing-library/react';
import user from './UserList';
import UserList from './UserList';


test('muestra una fila por usuario', ()=>{
    //Renderizar componentew
    
    const users = [
        { name: 'jane', email: 'jane@jane.com' },
        { name: 'bob', email: 'bob@bob.com' }
    ];
    render (<UserList users={users} />)

    //Encontrar las columnas en la tabla
    // screen.logTestingPlaygroundURL();
    const rows = screen.getAllByRole('row')

    //Assertion: numero correcto de filas en la tabla
    expect(rows).toHaveLength(3);
});

test('rendriza el email y nombre de cada usuario', ()=>{

});
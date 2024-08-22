import '@testing-library/jest-dom';
import Counter from "./Counter";
import { render } from '@testing-library/react';

test('render counter component', ()=>{
    render(<Counter></Counter>)
})
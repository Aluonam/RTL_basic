// components/DummyComponent.test.tsx
import { render, screen } from '@testing-library/react';
// jest.setup.ts
import '@testing-library/jest-dom';

import ComponenteDummy from './ComponenteDummy';

test('renders Hello, World!', () => {
  render(<ComponenteDummy />);
  const element = screen.getByText(/Hello, World!/i);
  expect(element).toBeInTheDocument();
});
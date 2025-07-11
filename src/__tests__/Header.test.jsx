import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

// Mock del contexto para pasar cartCount si usas contexto (ajustar si no)
const mockCartCount = 3;
// mock de useCart
jest.mock('../context/CartContext', () => ({
  useCart: () => ({
    cartCount: 3,
    cartItems: [],
    addItemToCart: jest.fn(),
  }),
}));

describe('Header component', () => {
  test('muestra el nombre de la tienda y breadcrumb', () => {
    render(
      <MemoryRouter>
        <Header cartCount={mockCartCount} />
      </MemoryRouter>
    );
    expect(screen.getByText(/ITX Store/i)).toBeInTheDocument();
    expect(screen.getByText(/Inicio/)).toBeInTheDocument();
  });

  test('muestra el contador del carrito', () => {
    render(
      <MemoryRouter>
        <Header cartCount={mockCartCount} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Carrito:/i)).toBeInTheDocument();
    expect(screen.getByText(mockCartCount.toString())).toBeInTheDocument();
  });

  test('abre y cierra el modal al clicar el carrito', () => {
    render(
      <MemoryRouter>
        <Header cartCount={mockCartCount} />
      </MemoryRouter>
    );

    const cartButton = screen.getByText(/Carrito:/i);
    fireEvent.click(cartButton);

    // El modal debería aparecer (busca por el título del modal)
    expect(screen.getByText(/Productos en el carrito/i)).toBeInTheDocument();

    // Cerrar modal (botón ×)
    const closeButton = screen.getByText('×');
    fireEvent.click(closeButton);

    // Ahora el modal ya no debe estar visible
    expect(screen.queryByText(/Productos en el carrito/i)).not.toBeInTheDocument();
  });
});
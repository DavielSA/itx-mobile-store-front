import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loading from './utils/Loading';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';


const ProductListPage = lazy(() => import('./pages/ProductListPage'));
const ProductDetailsPage = lazy(() => import('./pages/ProductDetailsPage'));

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={
                <Loading label="Cargando página inicial..." />
              }>
                <ProductListPage />
              </Suspense>
            }
          />
          <Route 
            path="/product/:id" 
            element={
              <Suspense fallback={
                <Loading label="Cargando detalles del producto..." />
              }>
                <ProductDetailsPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

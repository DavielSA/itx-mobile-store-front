import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../api/api';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';
import ProductActions from '../components/ProductActions';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartCount, setCartCount] = useState(() => {
    return parseInt(localStorage.getItem('cartCount') || '0');
  });

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  const handleCartUpdate = (count) => {
    localStorage.setItem('cartCount', count);
    setCartCount(count);
  };

  if (!product) return <p>Cargando...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <Link to="/" className="back-button">← Volver a la lista</Link>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
        <div style={{ flex: 1 }}>
          <ProductImage src={product.imgUrl} alt={product.model} />
        </div>
        <div style={{ flex: 2 }}>
          <ProductDescription product={product} />
          <ProductActions product={product} onCartUpdate={handleCartUpdate} />
          <p style={{ marginTop: '1rem' }}><strong>En carrito:</strong> {cartCount}</p>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useRef, useState } from 'react';
import { fetchProducts } from '../api/api';
import SearchBar from '../components/SearchBar';
import ProductItem from '../components/ProductItem';

const PAGE_SIZE = 12;

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [search, setSearch] = useState('');

  const sentinelRef = useRef(null);

  // Obtener productos al cargar
  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  // Filtrar productos en tiempo real
  useEffect(() => {
    const term = search.toLowerCase();
    const result = products.filter(
      (p) =>
        p.brand.toLowerCase().includes(term) ||
        p.model.toLowerCase().includes(term)
    );
    setFiltered(result);
  }, [search, products]);

  // Scroll infinito con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((prev) => prev + PAGE_SIZE);
        }
      },
      {
        rootMargin: '200px',
      }
    );

    const current = sentinelRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <SearchBar value={search} onChange={setSearch} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {filtered.slice(0, visibleCount).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div ref={sentinelRef} style={{ height: '1px' }} />
    </div>
  );
}
import { getCachedData, setCachedData } from '../utils/cache';

const API_BASE = 'https://itx-frontend-test.onrender.com/api';

export async function fetchProducts() {
  const cacheKey = 'product_list';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await fetch(`${API_BASE}/product`);
  if (!response.ok) throw new Error('Error fetching products');
  
  const data = await response.json();
  setCachedData(cacheKey, data);
  return data;
}

export async function fetchProductById(id) {
  const cacheKey = `product_${id}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  const response = await fetch(`${API_BASE}/product/${id}`);
  if (!response.ok) throw new Error('Error fetching product');

  const data = await response.json();
  setCachedData(cacheKey, data);
  return data;
}

export async function addToCart({ id, colorCode, storageCode }) {
  const response = await fetch(`${API_BASE}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, colorCode, storageCode }),
  });

  if (!response.ok) throw new Error('Error adding to cart');
  return response.json(); // returns { count: X }
}
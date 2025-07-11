export default function ProductDescription({ product }) {
  return (
    <div>
      <h2>{product.brand} - {product.model}</h2>
      <p><strong>Precio:</strong> {product.price}€</p>
      <p><strong>CPU:</strong> {product.cpu}</p>
      <p><strong>RAM:</strong> {product.ram}</p>
      <p><strong>Sistema Operativo:</strong> {product.os}</p>
      <p><strong>Pantalla:</strong> {product.displayResolution}</p>
      <p><strong>Batería:</strong> {product.battery}</p>
      <p><strong>Cámaras:</strong> {product.primaryCamera}, {product.secondaryCamera}</p>
      <p><strong>Dimensiones:</strong> {product.dimentions}</p>
      <p><strong>Peso:</strong> {product.weight}</p>
    </div>
  );
}
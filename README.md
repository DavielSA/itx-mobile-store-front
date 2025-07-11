# 📱 ITX Mobile Store - Frontend Test

Este proyecto es una **SPA (Single Page Application)** desarrollada con **React** que permite visualizar un catálogo de dispositivos móviles, ver detalles de cada producto y añadirlos al carrito.

---

## 🚀 Scripts Disponibles

Puedes ejecutar los siguientes comandos:

### `npm install`
Instala todas las dependencias necesarias del proyecto.

### `npm run start`
Ejecuta el proyecto en modo desarrollo.<br>
Abre [http://localhost:5173](http://localhost:5173) para verlo en el navegador.

### `npm run build`
Compila la aplicación para producción en la carpeta `dist`.

### `npm run test`
Lanza los tests del proyecto (por implementar).

### `npm run lint`
Ejecuta ESLint para comprobar la calidad del código.

---

## 🧱 Estructura del Proyecto

```bash
itx-mobile-store/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.json
├── package.json
├── README.md
```

## 🌐 API
Base URL: https://itx-frontend-test.onrender.com

Obtener productos
GET /api/product

Obtener detalles de un producto
GET /api/product/:id

Añadir producto a la cesta
POST /api/cart

Body:

```json
{
  "id": "0001",
  "colorCode": 1,
  "storageCode": 2
}
```

Respuesta:

```json
{
  "count": 1
}
```


## 💾 Cache en Cliente
Los datos obtenidos de la API se almacenan en cliente (por ejemplo, usando localStorage) con una validez de 1 hora para evitar peticiones innecesarias.

## 📸 Vistas
### 🏠 Lista de productos (PLP)
* Muestra todos los productos.

* Filtro en tiempo real por marca o modelo.

* Navegación a detalles.

### 📄 Detalle del producto (PDP)
* Imagen y detalles del producto.

* Selectores de color y almacenamiento.

* Botón para añadir al carrito.

### ✅ Requisitos Técnicos
* React (sin SSR)

* JS con ES6 (sin TypeScript)

* Enrutado en cliente

* Estilos libres pero responsivos

* Persistencia de carrito en cabecera

* Código estructurado y modular

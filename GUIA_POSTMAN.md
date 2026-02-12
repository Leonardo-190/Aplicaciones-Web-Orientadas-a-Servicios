# Guía de Implementación - APIs Productos y Categorías

## 📋 Resumen de Cambios

Se han implementado dos nuevos endpoints:
- **GET** `/api/productos/coot` - Obtiene productos que contienen "coot" en nombre o descripción
- **GET** `/api/categoria/tron` - Obtiene categorías que contienen "tron" en nombre o descripción

## 📁 Archivos Modificados/Creados

### Creados:
- `src/routes/categoriaRoute.js` - Rutas para categorías
- `Postman_Collection.json` - Colección de Postman lista para importar

### Modificados:
- `src/index.js` - Agregada nueva ruta de categorías
- `src/routes/productoRoute.js` - Agregado nuevo endpoint coot
- `src/controllers/externalController.js` - Agregadas dos nuevas funciones

## 🚀 Cómo Usar

### 1. Instalar dependencias (si no está hecho)
```bash
cd backend-api
pnpm install
```

### 2. Iniciar el servidor
```bash
pnpm dev
# o
npm start
```

El servidor se iniciará en `http://localhost:4000`

### 3. Importar Colección a Postman

**Opción A - Importar archivo JSON:**
1. Abre Postman
2. Click en "File" → "Import"
3. Selecciona el archivo `Postman_Collection.json`
4. Click en "Import"

**Opción B - Crear manualmente:**

#### Endpoint 1: Productos Coot
- **Nombre:** GET - Obtener Productos Coot
- **URL:** `http://localhost:4000/api/productos/coot`
- **Método:** GET
- **Headers:** `Content-Type: application/json`

#### Endpoint 2: Categoría Tron
- **Nombre:** GET - Obtener Categoría Tron
- **URL:** `http://localhost:4000/api/categoria/tron`
- **Método:** GET
- **Headers:** `Content-Type: application/json`

## 📝 Funcionalidad de los Endpoints

### GET /api/productos/coot
Busca todos los productos que contengan la palabra "coot" en el nombre o descripción (búsqueda case-insensitive).

**Respuesta exitosa (200):**
```json
{
  "mensaje": "Productos encontrados",
  "cantidad": 5,
  "productos": [
    {
      "id": 1,
      "nombre": "Product with coot",
      "precio": 29.99,
      "stock": 15,
      "descripcion": "...",
      "imagen_url": "..."
    }
  ]
}
```

**Respuesta sin resultados (404):**
```json
{
  "mensaje": "No se encontraron productos con 'coot'",
  "productos": []
}
```

### GET /api/categoria/tron
Busca todas las categorías que contengan la palabra "tron" en el nombre o descripción (búsqueda case-insensitive).

**Respuesta exitosa (200):**
```json
{
  "mensaje": "Categorías encontradas",
  "cantidad": 3,
  "categorias": [
    {
      "id": 1,
      "nombre": "Tron Category",
      "descripcion": "...",
      "fecha_creacion": "..."
    }
  ]
}
```

**Respuesta sin resultados (404):**
```json
{
  "mensaje": "No se encontraron categorías con 'tron'",
  "categorias": []
}
```

## 🔍 Consideraciones Importantes

1. **Base de Datos:** Asegúrate de que tu base de datos PostgreSQL esté corriendo con las tablas `productos` y `categorias`
2. **Variables de Entorno:** Verifica que el archivo `.env` tenga las credenciales correctas
3. **Búsqueda:** Los endpoints buscan de forma case-insensitive (mayúsculas y minúsculas)
4. **CORS:** Está habilitado para que funcione correctamente con Postman

## ⚙️ Requisitos Previos

- Node.js instalado
- PostgreSQL corriendo
- Las tablas `productos` y `categorias` existentes en la BD
- `pnpm` o `npm` instalado

## 🐛 Solución de Problemas

**Error: "Conexión exitosa a PostgreSQL" no aparece**
- Verifica que PostgreSQL esté corriendo
- Revisa las credenciales en `.env`

**Error 404 en los endpoints**
- Verifica que el servidor está corriendo en puerto 4000
- Asegúrate de que las rutas están correctas

**Sin resultados en las búsquedas**
- Verifica que hay datos en las tablas `productos` y `categorias`
- Prueba poblando datos primero usando el endpoint POST `/api/productos/poblar`

## 📞 Endpoints Disponibles

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/productos/poblar` | Carga masiva de productos |
| GET | `/api/productos/coot` | Busca productos con "coot" |
| GET | `/api/categoria/tron` | Busca categorías con "tron" |

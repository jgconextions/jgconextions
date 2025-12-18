# 📸 Cómo Actualizar las Fotos de la Galería

## Pasos Simples:

### 1. **Sube tus imágenes** a la carpeta `public/`
   - Ejemplo: `public/trabajo-1.jpg`, `public/trabajo-2.jpg`, etc.
   - Formatos soportados: JPG, PNG, WebP
   - Tamaño recomendado: 800x800px o más grande (cuadrado)

### 2. **Edita el archivo `gallery.json`** en esta misma carpeta
   - Cambia la ruta de la imagen: `"image": "/nombre-de-tu-imagen.jpg"`
   - Si no tienes imagen aún, deja: `"image": null`
   - Puedes cambiar el título y categoría también

### 3. **Guarda el archivo** y las imágenes aparecerán automáticamente

## Ejemplo de cómo editar `gallery.json`:

```json
{
  "id": 1,
  "title": "Reparación de Laptop Dell",
  "category": "Computadoras",
  "image": "/mi-foto-reparacion.jpg"
}
```

## Notas Importantes:
- ✅ Las imágenes deben estar en la carpeta `public/`
- ✅ Usa nombres descriptivos para tus archivos (sin espacios, mejor con guiones)
- ✅ El tamaño recomendado es 800x800px o más grande (cuadrado)
- ✅ Puedes agregar más imágenes agregando más objetos al array `images`
- ✅ Si una imagen es `null`, se mostrará un placeholder

## Agregar más imágenes:

Simplemente agrega un nuevo objeto al array `images` en `gallery.json`:

```json
{
  "id": 7,
  "title": "Nuevo Trabajo",
  "category": "Categoría",
  "image": "/nueva-imagen.jpg"
}
```


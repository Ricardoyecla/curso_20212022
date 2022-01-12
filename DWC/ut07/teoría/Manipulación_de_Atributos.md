# Manipulación de Atributos de elementos del DOM

## Element.attributes

La propiedad **Element.attributes** retorna una **colección "viva"** cuyos nodos son todos los atributos registrados en el nodo especificado. Es un **NamedNodeMap** (en-US), no un Array, así que no tiene los métodos de Array y los índices de nodo Attr pueden diferir en cada navegador. Más concretamente attributes es un **conjunto de pares de cadenas nombre/valor** que representan la información relativa a cada atributo.
### Sintaxis
```javascript
var attr = element.attributes;
```
### Ejemplo
```javascript
var paragraph = document.getElementById("paragraph");
var result = document.getElementById("result");

// Primero, verifiquenmos que el párrafo tiene algún atributo
if (paragraph.hasAttributes()) {
  var attrs = paragraph.attributes;
  var output = "";
  for(at of attrs) {
     output += at.name + "->" + at.value;
  }
  result.value = output; 
} else {
  result.value = "No hay atributos que mostrar";
}
```
## Element.setAttribute()

## Element.removeAttribute()

## Element.toggleAttribute()

## Element.hasAttributes()


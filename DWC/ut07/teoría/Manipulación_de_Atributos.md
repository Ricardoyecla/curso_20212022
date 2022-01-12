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
Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.
### Sintaxis
```javascript
Element.setAttribute(name, value);
```
Los atributos booleanos se consideran true si al menos están presentes en el elemento, independientemente de su value actual; como regla, se debería especificar una cadena de texto vacía ("") en value (algunas personas utilizan el nombre del atributo; esto funciona pero no es un standard).
## Element.removeAttribute()
removeAttribute elimina un atributo del elemento especificado.
### Sintaxis
```javascript
element.removeAttribute(attrName);
```
Debe usarse preferiblemente removeAttribute en lugar de establecer el valor del atributo a null usando setAttribute.

Intentar eliminar un atributo que no existe en el elemento no disparará una excepción.
## Element.toggleAttribute()
El método toggleAttribute() Para un elemento dado alterna un atributo booleano (eliminándolo si está presente y agregándolo si no está presente).
## Element.hasAttributes()
El método Elemento.hasAttribute() devuelve un valor Booleano indicando si el elemento tiene el atributo especificado o no.
### Sintaxis
```javascript
var resultado = elemento.hasAttribute(nombre);
```

### Ejemplo
```html

```

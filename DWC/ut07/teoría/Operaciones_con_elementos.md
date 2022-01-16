# Añadir elementos
El proceso de añadir elementos consta de dos paso:
- Crear el elemento.
- Añadir el elemento en nodo en un padre.

Podemos crear elementos de dos tipos:
- Nodos de texto
- Nodos elementos.

## Crear un nodo elemento.
En un documento HTML, el método Document.createElement() crea un elemento HTML especificado por su tagName
### Sintaxis
```html
var element = document.createElement(tagName, [options]);
```
### Ejemplo
```html
<!DOCTYPE html>
<html>
<head>
  <title>||Trabajando con elementos||</title>
</head>
<body>
  <div id="div1">El texto superior se ha creado dinámicamente.</div>
  <script>
    var newDiv = document.createElement("div");
    newDiv.innerHTML="Me han añadido";
  </script>
</body>
</html>
```

El resultado de este ejemplo no tiene efecto sobre la visualización del documento ya que falta el último paso.

## Crear un nodo de texto
Crea un nuevo nodo de texto. Este método puede ser usado para escapar caracteres HTML.

### Sintaxis
```html
var text = document.createTextNode(data);
```
- **text** es un nodo Text.
- **data** es una cadena de texto string que contiene los datos a poner en el nodo de texto.


# Seleccionar elementos del DOM
Una vez que el tenemos el DOM necesitamos acceder a los nodos de este para poder ir modificar, elemininar, añadir, ... pero para ello debemos poder seleccionar los nodos, para ello disponemos de varias formas, una recorrer los nodos hijos desde los nodos padres por sus enlaces, esta forma es demasiado complicada y propensa a errores. 
La otra forma es utilizar selectores de elementos, entre los que tenemos los siguientes:
1. Selector por nombre de etiqueta **getElementsByTagName**.
2. Selector por atributo clase de la etiqueta **getElementsByClassName()**.
3. Selector por atributo identificador de la etiqueta **getElementById()**.
4. Selector **CSS querySelector().**
5. Selector **CSS querySelectorAll().**

## Selector CSS querySelector().

**Devuelve la primera coincidencia** del (elemento) Element nodo dentro de las subramas del nodo. Sino se encuentra un nodo coincidente, se devuelve null .
**Sintaxis**
```javascript
element = document.querySelector(selectores);
```
## Selector CSS querySelectorAll().

El método querySelectorAll() de un Element **devuelve una NodeList estática (no viva)** que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.
**Sintaxis**
```javascript
elementList = parentNode.querySelectorAll(selectors);
```

## Selector por nombre de etiqueta getElementsByTagName().

## Selector por atributo clase de la etiqueta getElementsByClassName().

## Selector por atributo identificador de la etiqueta getElementById().
Devuelve una referencia al elemento por su ID.
**Sintaxis**
```javascript
elemento = document.getElementById(id);
```

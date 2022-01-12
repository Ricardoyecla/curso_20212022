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

El método querySelectorAll() de un Element **devuelve una NodeList estática (no viva, eso significa que su contenido no se verá alterado por futuras modificaciones en el DOM)** que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.
**Sintaxis**
```javascript
elementList = parentNode.querySelectorAll(selectors);
```

## Selector por nombre de etiqueta getElementsByTagName().
Devuelve una lista de elementos con un nombre determinado. Se busca en todo el documento, incluyendo el nodo raíz.
**Sintaxis**
```javascript
elements = document.getElementsByTagName(name)
```
- elements es una lista 'viva' (NodeList) de los elementos encontrados en el orden en que han aparecido en el árbol.
- name es una cadena que representa el nombre de los elementos. La cadena especial "*" representa a todos los elementos.

## Selector por atributo clase de la etiqueta getElementsByClassName().
Retorna un objecto **HTMLCollection** de los elementos hijos que tengan todos los nombres de clase indicados. Cuando es llamado sobre el objeto document , la busqueda se realiza en todo el document, incluido el nodo raíz. También puedes llamar getElementsByClassName() sobre cualquier elemento; en ese caso retornara sólo los elementos hijos del elemento raíz indicado que contengan los nombres de clase indicados.
**Sintaxis**
```javascript
var elementos = document.getElementsByClassName(nombres); // ó :
var elementos = elementoRaiz.getElementsByClassName(nombres);
```

## Selector por atributo identificador de la etiqueta getElementById().
Devuelve una referencia al elemento por su ID.
**Sintaxis**
```javascript
elemento = document.getElementById(id);
```
- **id** Es una cadena sensible a mayúsculas referida al ID único del elemento buscado.
- **element** Es una referencia a un objeto Element, o null si un elemento con el ID especificado no se encuentra en el documento.

# Seleccionar elementos del DOM
Una vez que el tenemos el DOM necesitamos acceder a los nodos de este para poder ir modificar, elemininar, añadir, ... pero para ello debemos poder seleccionar los nodos, para ello disponemos de varias formas, una recorrer los nodos hijos desde los nodos padres por sus enlaces, esta forma es demasiado complicada y propensa a errores. 
La otra forma es utilizar selectores de elementos, entre los que tenemos los siguientes:
1. Selector por nombre de etiqueta **getElementsByTagName**.
2. Selector por atributo clase de la etiqueta **getElementsByClassName()**.
3. Selector por atributo identificador de la etiqueta **getElementById()**.
4. Selector CSS querySelector().
5. Selector CSS querySelectorAll().

## Selector CSS querySelector().

**Devuelve la primera coincidencia** del (elemento) Element nodo dentro de las subramas del nodo. Sino se encuentra un nodo coincidente, se devuelve null .

## Selector CSS querySelectorAll().

**Devuelve un listado de nodos** NodeList conteniendo todos los elementos del nodo coincidentes( Element) dentro de las subramas del nodo, o Devuelve un Listado de Nodos vacio NodeList sino se encuentran coincidencias.


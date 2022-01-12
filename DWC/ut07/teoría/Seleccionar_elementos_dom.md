# Seleccionar elementos del DOM
Una vez que el tenemos el DOM necesitamos acceder a los nodos de este para poder ir modificar, elemininar, añadir, ... pero para ello debemos poder seleccionar los nodos, para ello disponemos de varias formas, una recorrer los nodos hijos desde los nodos padres por sus enlaces, esta forma es demasiado complicada y propensa a errores. 
La otra forma es utilizar selectores de elementos, entre los que tenemos los siguientes:
1. Selector por nombre de etiqueta **getElementsByTagName**.
2. Selector por atributo clase de la etiqueta **getElementsByClassName()**.
3. Selector por atributo identificador de la etiqueta **getElementById()**.
4. Selector **CSS querySelector().**
5. Selector **CSS querySelectorAll().**

Algunos de estos selectores no van a devolver un NodeList, que no es exactamente un array de elementos nodo, podemos utilizar los corchetes para indicar un único elemento, tenemos las propiedad **length**, pero otros métetodos no estan como sort, join o slice.

No es mucho problema podemos ya que podemos pasar de NodeList a array de forma sencilla.
```javascript
let ElementosArrays=[...ElementosNodeList]

let ElementosArrays=Array.from(ElementosNodeList)
```
## Selector CSS querySelector().

**Devuelve la primera coincidencia** del (elemento) Element nodo dentro de las subramas del nodo. Sino se encuentra un nodo coincidente, se devuelve null .

**Sintaxis**
```javascript
element = document.querySelector(selectores);
```

### Ejemplo
**HTML**

```html
<div>
  <h5>Original content</h5>
  <p>
    inside paragraph
    <span>inside span</span>
    inside paragraph
  </p>
</div>
<div>
  <h5>Output</h5>
  <div id="output"></div>
</div>
```
**JavaScript**
```javascript
var baseElement = document.querySelector("p");
document.getElementById("output").innerHTML = (baseElement.querySelector("div span").innerHTML);
```
**Resultado**
```html
Original content
inside paragraph inside span inside paragraph

 
Output
inside span
```
## Selector CSS querySelectorAll().

El método querySelectorAll() de un Element **devuelve una NodeList estática (no viva, eso significa que su contenido no se verá alterado por futuras modificaciones en el DOM)** que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados.

**Sintaxis**
```javascript
elementList = parentNode.querySelectorAll(selectors);
```
### Ejemplo
**HTML**

```html
<h2 class="example">A heading with class="example"</h2>
<p class="example">A paragraph with class="example".</p> 
<p>Click the button to add a background color to the first element in the document with class="example" (index 0).</p>
<p><strong>Note:</strong> The querySelectorAll() method is not supported in Internet Explorer 8 and earlier versions.</p>
```
**JavaScript**
```javascript
let ejemplo = document.querySelectorAll(".example");
for (let e of ejemplo)
  e.style.backgroundColor = "red";
ejemplo[0].style.color=yellow;
```
## Selector por nombre de etiqueta getElementsByTagName().
Devuelve una lista de elementos con un nombre determinado. Se busca en todo el documento, incluyendo el nodo raíz.

**Sintaxis**
```javascript
elements = document.getElementsByTagName(name)
```
- elements es una lista 'viva' (NodeList) de los elementos encontrados en el orden en que han aparecido en el árbol.
- name es una cadena que representa el nombre de los elementos. La cadena especial "*" representa a todos los elementos.
### Ejemplo
**HTML**

```html
<p>An unordered list:</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
<p id="demo"></p>
```
**JavaScript**
```javascript
let x = document.getElementsByTagName("LI");
document.getElementById("demo").innerHTML = x[1].innerHTML;
```
## Selector por atributo clase de la etiqueta getElementsByClassName().
Retorna un objecto **HTMLCollection** de los elementos hijos que tengan todos los nombres de clase indicados. Cuando es llamado sobre el objeto document , la busqueda se realiza en todo el document, incluido el nodo raíz. También puedes llamar getElementsByClassName() sobre cualquier elemento; en ese caso retornara sólo los elementos hijos del elemento raíz indicado que contengan los nombres de clase indicados.

**Sintaxis**
```javascript
var elementos = document.getElementsByClassName(nombres); // ó :
var elementos = elementoRaiz.getElementsByClassName(nombres);
```
### Ejemplo
**HTML**

```html
<ul id="menu">
   <li class="item">HTML</li>
   <li class="item">CSS</li>
   <li class="item highlight">JavaScript</li>
   <li class="item">TypeScript</li>
</ul>
```
**JavaScript**
```javascript
let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');
for(e of items){
  console.log(e.innerHTML);
}
console.log(items[1].innerHTML);
```
## Selector por atributo identificador de la etiqueta getElementById().
Devuelve una referencia al elemento por su ID.

**Sintaxis**
```javascript
elemento = document.getElementById(id);
```
- **id** Es una cadena sensible a mayúsculas referida al ID único del elemento buscado.
- **elemento** Es una referencia a un objeto Element, o null si un elemento con el ID especificado no se encuentra en el documento.
### Ejemplo
**HTML**

```html
<p>An unordered list:</p>
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
<p id="demo"></p>
```
**JavaScript**
```javascript
let x = document.getElementsByTagName("LI");
document.getElementById("demo").innerHTML = x[1].innerHTML;
```

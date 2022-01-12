# element.textContent
La propiedad textContent de la interfaz Node representa el contenido de texto de un nodo y sus dencendientes.
## Sintaxis
```javascript
var text = Node.textContent;
Node.textContent = string;
```
Estableciendo textContent en un nodo elimina todos sus hijos y los reemplaza con un solo nodo de texto con el valor dado.

# element.innerHTML
La propiedad Element.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.

Al establecerse se reemplaza la sintaxis HTML del elemento por la nueva.
## Sintaxis
```javascript
const content = element.innerHTML;
element.innerHTML = htmlString;
```
La propiedad innerHTML de muchos tipos de elementos—incluyendo <body> o <html>—puede ser devuelta o establecida. Esta propiedad se puede usar para ver el código HTML de la página actual, incluida la que haya sido modificada dinámicamente.
  
Puede parecer que se puede hacer un ataque cross-site scripting, el resultado es inofensivo, ya que HTML5 especifica que un tag <script> insertado a través innerHTML no debe ejecutarse

Sin embargo, hay maneras de ejecutar JavaScript sin necesidad de utilizar el elemento <script>, por lo que todavía hay un riesgo de seguridad cada vez que se utiliza innerHTML para establecer cadenas de texto sobre las que no tiene control.
  
Por esa razón, cuando solo tratamos con texto, es recomendable no usar innerHTML, sino Node.textContent, que no interpretará la cadena pasada como HTML, sino como texto plano.
  
### Ejemplos
```html
<h1>Ilegales</h1>
    <pre id="ilegales" class='red grande'>
        Hay un tipo dentro del espejo
        Que me mira con cara de <strong>conejo</strong>
        Oye tú, tú que me miras
        Es que quieres servirme de comida?
    </pre>
    <h1>Los secretos</h1>
    <pre class="secretos">
        Nunca he sentido igual una <strong>derrota</strong>
        Que cuando ella me dijo se acabó
        Nunca creí tener mi vida rota
        Ahora estoy solo y arrastro mi dolor.
    </pre>
  
  console.log(document.getElementById('ilegales').innerHTML)
  document.getElementById('ilegales').innerHTML+='<p class="red">fin</p>'
  console.log(document.getElementById('ilegales').innerHTML)

  console.log(document.querySelectorAll('.secretos')[0].textContent)
  document.querySelectorAll('.secretos')[0].textContent+='<p class="red">fin</p>'
  console.log(document.querySelectorAll('.secretos')[0].textContent)
  
  ```

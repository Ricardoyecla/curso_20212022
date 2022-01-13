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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .verdura{
            color:green;
        }
        .carne{
            color:red;
        }
        .hidrato{
            color:yellow
        }
    </style>
</head>
<body>
   <section id="s1">
       <h1>Titulo</h1>
       <p id="i1">Su casa bordeando la autopista
        Hizo que ella creciera muy deprisa</p>
   </section>
   <section id="s2">
       <p>No quise conocerla de aquel modo
        Si quieres comprar algo, tengo todo</p>
   </section>
   <ul>
       <li class="verdura">Tomate</li>
       <li class="carne">tofu</li>
       <li class="hidrato">Lenchuga</li>
       <li class="verdura">lechuga</li>
       <li class="carne">perrito caliente</li>
       <li class="hidrato">arroz</li>
   </ul>
   <button>Mostrar</button><button>Eliminar</button><button>Añadir</button>
   <button>Alternar</button>
   <script>
    
        let boton=document.getElementsByTagName('button');
        let lis=document.getElementsByTagName('li');

        //Mostrar por consola li el valor de su atributo class
        boton[0].addEventListener('click',()=>{
           for(li of lis){
               console.log(li.getAttribute('class'))
           }
        })
     //Eliminamos para todos los li su atributo class
        boton[1].addEventListener('click',()=>{
           for(li of lis){
              li.removeAttribute('class')
           }
        })
     //Establecemos el valor del atributo class a carne en todos los li
        boton[2].addEventListener('click',()=>{
           for(li of lis){
              li.setAttribute('class','carne')
           }
        })
     //Alternamos el valor del atributo disesabled de un botón.
        boton[3].addEventListener('click',()=>{
           boton[2].toggleAttribute('disabled')
           
        })

   </script>
</body>
</html>
```

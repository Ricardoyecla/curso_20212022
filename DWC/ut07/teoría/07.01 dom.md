# Document Object Model

Su traducción es **Modelo de Objetos del Documento** y no es más que una interfaz que proporciona un conjunto estándar de objetos para representar documentos HTML, XHTML y XML, un modelo estándar sobre cómo pueden combinarse dichos objetos, y una interfaz estándar para acceder a ellos y manipularlos. 
A través del DOM, los programas pueden **acceder** y **modificar** el **contenido**, **estructura** y **estilo** de los documentos HTML y XML, que es para lo que se diseñó principalmente.

El **responsable del DOM** es el World Wide Web Consortium (**W3C**).

El DOM permite el **acceso dinámico** a través de la programación para **acceder**, **añadir** y **cambiar dinámicamente contenido** estructurado en documentos con lenguajes como ECMAScript (JavaScript).

**Ejemplo de código html**

<details>
  <summary>Ver Ejemplo de código HTML y su estructura DOM</summary>
  <p>
    
### Ejemplo de código HTML

```html
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>My text</title>
        </head>
        <body>
          <h1 id="cabecera">My header</h1>
          <p>My Paragraph</p>
        </body>
      </html>
```
    
</p>
</details>

## Objeto document
La propiedad document es un objeto que apunta al DOM document cargado que esta cargado en la ventana, aunque usamos la palabra **documente** su nombre completo es  
## Nodos del objeto document.

La representación de un documento HTML se hace con el arbol DOM donde cada elemento es un nodo estos nodos pueden ser de diferentes tipos:

### Tipos de nodos
- **Document:** Es el nodo raíz, de este cuelgan el resto de nodos.

- **Element:** Son los nodos que han sido creados con **etiquetas html**. Una etiqueta div genera un nodo. Si dentro hay dos etiquetas strong, crearán dos nodos hijos dentro de div.

- **Text:** El texto dentro de un nodo element, es un nuevo nodo hijo de tipo text. También están dentro de los nodos tipo texto, elementos como saltos de línea o espacios vacíos.

- **Attribute:** Los atributos de las etiquetas también son nodos, Cuando usemos JavaScript trabajaremos con ellos como información asociada a nodos de tipo element.

- **Comentarios**: Comentarios 
- **otros**: Elementos como los que aparecen dentro de **header** de los documentos HTML tambien generan nodos.

### element.nodeName

Devuelve el nombre del nodo actual, en forma de cadena. Es un atributo de solo-lectura.

| Interfaz | nodeName| 
| -------- | ------- | 
| Attr	| igual que Attr.name | 
| Comment |	"#comment"| 
| Document |	"#document"| 
| Element	| igual que Element.tagName| 
| Text	| "#text"| 

### element.nodeType

La propiedad de solo lectura Node.nodeType retornará un valor positivo entero representando el tipo de nodo.

| Name | Value | 
| ---- | :---: | 
| ELEMENT_NODE	| 1| 
| ATTRIBUTE_NODE | 	2| 
| TEXT_NODE	| 3| 
| CDATA_SECTION_NODE | 	4| 
| ENTITY_REFERENCE_NODE 	| 5| 
| ENTITY_NODE 	| 6
| PROCESSING_INSTRUCTION_NODE	| 7
| COMMENT_NODE	| 8
| DOCUMENT_NODE	| 9

### Ejemplo de uso de nodeType y nodeName
**curso_20212022/DWC/ut07/ejemplosClase/tipos_de_nodos.html**
[tipos_de_nodos.html](../ejemplosClase/tipos_de_nodos.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Canción
   <section id="s1">
       <h1>Titulo</h1>
       <p id="i1">Su casa bordeando la autopista
        Hizo que ella creciera muy deprisa</p>
   </section>
   Texto
   <section id="s2">
       <p>No quise conocerla de aquel modo
        Si quieres comprar algo, tengo todo</p>
   </section>

   <button>
       aquí
   </button>
   <script>
      console.log(`El nodo con id='s1' es de tipo ${document.getElementById('s1').nodeType}`)
      console.log(`El nombre del nodo con id='s1'es ${document.getElementById('s1').nodeName}`)

      for (let e of document.querySelector('body').childNodes)
        console.log(`Nombre nodo:${e.nodeName} Tipo nodo ${e.nodeType} Valor del nodo: ${e.nodeValue}` )
   </script>
</body>
</html>
```

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


# Actividades 3.2

1. Pon como **directorio actual** **/var/log** usando una **ruta absoluta**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:~$ cd /var/log/
```
2. **Crea** la carpeta **ejercicios** dentro de **/tmp**. Usa **ruta absoluta**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ mkdir /tmp/ejercicios
```
3. **Copia** dentro de la carpeta ejercicios, **solo los ficheros**, que **empiecen** por la letra **c** y los que **terminen** por **p** que estén en la carpeta **/var/run**. Usando rutas **relavitas**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ cp ../run/c* ../run/*p ../../tmp/ejercicios/
```
4. **Crea otra carpeta** llamada **enlaces dentro de ejercicios**, y dentro de esta crea un **enlace duro
para cada uno de los ficheros** que hay en **ejercicios**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ mkdir /tmp/ejercicios/enlaces
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ cp -l /tmp/ejercicios/* /tmp/ejercicios/enlaces/
```
5. ¿Como sabes que se han creado correctamente los enlaces?
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ ls -l /tmp/ejercicios/enlaces/

```
6. Crea otra **carpeta llamada simbolicos** dentro de **ejercicios** y dentro de esta **crea un enlace
simbolico** para cada uno de los **ficheros que hay en ejercicios**. Guardar los **datos de los
posibles errores** en el fichero **errores.log**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ mkdir /tmp/ejercicios/simbolicos
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ cp -s /tmp/ejercicios/* /tmp/ejercicios/simbolicos/ 2> /tmp/ejercicios/simbolicos/errores.log
```
7. ¿Como sabes que se han creado correctamente los enlaces?
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ ls -l /tmp/ejercicios/simbolicos/
```
8. **Copia** todos los ficheros con **dos caracteres** que hay dentro de **/bin** a la carpeta llamada
**comandos** (que debes crear dentro de ejercicios).
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ cp /bin/?? /tmp/ejercicios/comandos/
```
9. Cambia tu directorio actual a **/tmp/ejercicios**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ cd /tmp/ejercicios/
```
10. Crea otra carpeta llamada **todos** dentro de **/tmp**, usando **ruta relativa** y **copia** en ella **todo** lo
que hay dentro de **ejercicios** (incluyendo directorios).
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ mkdir ../todos
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ cp ./* ../todos/ -r
```
11. Crea dentro de **ejercicios** una carpeta llamada **movidos** y dentro de esta **copia** todos los
ficheros que hay **dentro de todos**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$  mkdir /tmp/ejercicios/movidos
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ cp /tmp/todos/* movidos/
```
12. **Copia el fichero .bashrc** de tu **carpeta personal** a **simbolicos** pero con el nombre **cambiado.txt**
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ cp ~/.bashrc /tmp/ejercicios/simbolicos/cambiado.txt
```
13. **Borra todos** los ficheros que hay dentro de la carpeta **simbolicos** que esta en **todos**. Debe
pedir **confirmación.**
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ rm -i /tmp/todos/simbolicos/*
```
14. **Borra** la carpeta **simbolicos** que esta en **todos**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ rmdir ../todos/simbolicos/
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ rm -r ../todos/simbolicos/
```
15. **Borra** la carpeta **todos** y todos **su contenido**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ rm -r ../todos/ 
```
16. Crea dentro de ejercicios la **carpeta** llamada **cabeceras**, donde abra un fichero llamado
**redireccion1.txt** con un **banner (figlet) de tu nombre**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ mkdir cabeceras
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ figlet ricardo > cabeceras/redireccion1.txt
```
18. **Añade** al fichero **redireccion1.txt** las **entradas del directorio raíz**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp/ejercicios$ ls / >> cabeceras/redireccion1.txt 
```

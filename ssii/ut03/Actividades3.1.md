# Actividades 3.1
1. Pon como directorio actual **/var/log** usando una **ruta absoluta**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:~$ cd /var/log
```
2. Desde el directorio **/var/log**, **muestra** el contenido del directorio **/sbin usando** el **formato corto** y **ruta absoluta**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ ls /sbin
```
3. Desde el directorio **/var/log**, muestra el **contenido** del directorio **/sbin** usando el formato **corto** y ruta **relativa**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ ls ../../sbin
```
4. Desde el directorio **/var/log**, muestra el contenido del directorio **/home/tu_usuario** usando
el **formato largo**, incluyendo los **archivos ocultos** y usando **ruta relativa**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ ls -la ../../home/ricardo/ 
```
5. Desde el directorio **/var/log**, muestra el contenido del directorio **/sbin** usando el formato
**corto** y ruta **relativa**, de las entradas que **empiezan por iw**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ ls ../../sbin/iw*
```
6. Desde el directorio **/var/log**, muestra el contenido del directorio **/sbin** usando el formato
**corto** y ruta **relativa**, de las entradas que **terminan por onv**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ ls ../../sbin/*onv
```
7. Desde el directorio **/var/log**, muestra el contenido del directorio **/sbin** usando el formato
**corto** y ruta **relativa**, de las entradas que tienen **cuatro caracteres** en el nombre.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ ls ../../sbin/????
```
8. Desde el directorio **/var/log**, muestra el contenido del directorio **/sbin** usando el formato **corto** y ruta **absoluta**, de las entradas que tienen **cuatro caracteres** en el nombre y el **primer carácter es una p**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ ls /sbin/p???
```
9. Cambia como directorio de trabajo a **/tmp**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/var/log$ cd /tmp/
```
10. **Crea** una nueva **carpeta** en el directorio **/tmp**. Con el nombre **actividad1**, usa ruta **absoluta**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp$ mkdir /tmp/actividad1
```
11. Crea una **nueva carpeta** dentro del directorio **actividad1**, con el **nombre relativo**, debes usar una **ruta relativa**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp$ mkdir actividad1/relativo -v
```
12. Crea una **nueva carpeta** dentro del directorio **actividad1**, con el nombre **absoluto**, debes usar una **ruta absoluta**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp$ mkdir /tmp/actividad1/absoluto -v
```
13. Crea las siguientes carpetas **una dentro de otra** partiendo de **actividad1, primera, segunda, tercera**.
```sh
ricardo@profesor-HP-ProDesk-600-G2-SFF:/tmp$ mkdir actividad1/primera/segunda/tercera -p
```

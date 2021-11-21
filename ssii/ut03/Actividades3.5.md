# Actividades 3.5
_Actividades para realizar en el aula.

## Pre-requisitos 📋

Que cosas necesitas para instalar el software y como instalarlas_

1. Instala el programa **wget**, usando el comando **apt**.

ricardo@ricardo-B550M-S2H:/tmp$ sudo apt install wget

1. Cambiate de directorio a **/tmp**

ricardo@ricardo-B550M-S2H:~$ cd /tmp/

1. Descarga en **/tmp** que hay en la ruta siguiente [**https://aulavirtual.murciaeduca.es/pluginfile.php/4345249/mod_resource/content/1/volver_a_ser_un_ni%C3%B1o.txt wget**](https://aulavirtual.murciaeduca.es/pluginfile.php/4345249/mod_resource/content/1/volver_a_ser_un_niño.txt%20wget) (debes poner **wget** y **la ruta**)

1. Muestra las líneas donde **aparezcan** la cadena **nombre**.

ricardo@ricardo-B550M-S2H:/tmp$ grep -E ‘nombre’  volver\_a\_ser\_un\_niño.txt

1. Muestra todas las líneas donde **aparezcan** las **cadenas** **niño** y **un** en la misma línea, e**n ese orden** aunque no sea seguido.

grep -E 'niño.\*un' volver\_a\_ser\_un\_niño.txt

1. Muestra todas las líneas donde **aparezcan** las **cadenas** **niño** o **un** en la misma línea.

ricardo@ricardo-B550M-S2H:/tmp$ grep -E 'niño|un' volver\_a\_ser\_un\_niño.txt

1. Muestra las líneas que tengan **palabras** de 5 caracteres **alfabéticos** o **dígitos numéricos** **terminadas** en **ta**.

ricardo@ricardo-B550M-S2H:/tmp$ grep -E '\<...ta\>' volver\_a\_ser\_un\_niño.txt

1. Muestra las líneas que **terminen** en **s** o **a**.

ricardo@ricardo-B550M-S2H:/tmp$ grep -E '[sa]$' volver\_a\_ser\_un\_niño.txt

1. Muestra las  líneas que **empiecen** por **v** o **M**.

`	`ricardo@ricardo-B550M-S2H:/tmp$ grep -E '^[vV]' volver\_a\_ser\_un\_niño.txt

1. Muestra  que no tenga ninguna mayúscula.

ricardo@ricardo-B550M-S2H:/tmp$ grep -E '^[a-záéíóúñ, ]+$\*' volver\_a\_ser\_un\_niño.txt

1. **Crea** una **carpeta** llamada actividad3.5. Usando ruta **relativa**.

`	`ricardo@ricardo-B550M-S2H:/tmp$ mkdir actividad3.5

1. Muestra las 3 primera líneas del fichero **volver\_a\_ser\_un\_niño.txt**

ricardo@ricardo-B550M-S2H:/tmp$ head  -3 volver\_a\_ser\_un\_niño.txt

1. Guarda en un fichero llamado **las\_4\_ultimas.txt** dentro de activiad3.5, las **4 últimas líneas** del fichero **fichero volver\_a\_ser\_un\_niño.txt.**

ricardo@ricardo-B550M-S2H:/tmp$ tail -4 volver\_a\_ser\_un\_niño.txt > actividad3.5/las\_4\_ultimas.txt


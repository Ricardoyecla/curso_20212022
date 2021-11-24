# Actividades 3.5
Actividades para realizar en el aula.

## Pre-requisitos 📋
Ver el documento volver_a_ser_un_niño.txt o descargar con guardar como [aquí](volver_a_ser_un_niño.txt)
Que cosas necesitas para instalar el software y como instalarlas_

0. Instala el programa **wget**, usando el comando **apt**.
    
```sh
sudo apt install wget

```
    
1. Cambiate de directorio a **/tmp**
```sh
cd /tmp/
```
    
2. Descarga el fichero **volver_a_ser_un_niño.txt** en **/tmp**, usa el comando **wget** con la dirección [https://aulavirtual.murciaeduca.es/pluginfile.php/4345249/mod_resource/content/1/volver_a_ser_un_niño.txt ](https://aulavirtual.murciaeduca.es/pluginfile.php/4345249/mod_resource/content/1/volver_a_ser_un_niño.txt) (debes poner **wget** y **la ruta**)
```sh
 wget https://aulavirtual.murciaeduca.es/pluginfile.php/4345249/mod_resource/content/1/volver_a_ser_un_ni%C3%B1o.txt

```  
3. Muestra las líneas donde **aparezcan** la cadena **nombre**.

```sh
grep -E ‘nombre’  volver\_a\_ser\_un\_niño.txt
```

4. Muestra todas las líneas donde **aparezcan** las **cadenas** **niño** y **un** en la misma línea, e**n ese orden** aunque no sea seguido.
    
```sh
grep -E 'niño.\*un' volver\_a\_ser\_un\_niño.txt
```
    
5. Muestra todas las líneas donde **aparezcan** las **cadenas** **niño** o **un** en la misma línea.
    
```sh
grep -E 'niño|un' volver\_a\_ser\_un\_niño.txt
```
    
6. Muestra las líneas que tengan **palabras** de 5 caracteres **alfabéticos** o **dígitos numéricos** **terminadas** en **ta**.
    
```sh
grep -E '\<...ta\>' volver\_a\_ser\_un\_niño.txt
```
    
7. Muestra las líneas que **terminen** en **s** o **a**.
    
```sh
grep -E '[sa]$' volver\_a\_ser\_un\_niño.txt
```
    
8. Muestra las  líneas que **empiecen** por **v** o **M**.
    
```sh
grep -E '^[vV]' volver\_a\_ser\_un\_niño.txt
```
    
9. Muestra  que no tenga ninguna mayúscula.
    
```sh
grep -E '^[a-záéíóúñ, ]+$\*' volver\_a\_ser\_un\_niño.txt
```
    
10. **Crea** una **carpeta** llamada actividad3.5. Usando ruta **relativa**.
    
```sh
mkdir actividad3.5
```

11. Muestra las 3 primera líneas del fichero **volver\_a\_ser\_un\_niño.txt**
    
```sh
head  -3 volver\_a\_ser\_un\_niño.txt
```

12. Guarda en un fichero llamado **las\_4\_ultimas.txt** dentro de activiad3.5, las **4 últimas líneas** del fichero **fichero volver\_a\_ser\_un\_niño.txt.**
    
```sh
tail -4 volver\_a\_ser\_un\_niño.txt > actividad3.5/las\_4\_ultimas.txt
```

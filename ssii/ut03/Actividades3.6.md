# Actividades 3.6
1. Crear un fichero con el comando **cat**, usando **la redirección** y la convinación de teclas **control-D** (^ D)
```bash
cat > /tmp/texto.txt
123a
a123
a12b
567
(pulsamos control - D)
```
2. Queremos líneas que empiecen por un dígito.
```bash
^[0-9]
```
3. Queremos línes que sólo contenga dígitos.
```bash
^[0-9]*$ 
```
4. Queremos líneas que empiecen por letra y el resto sean números.
```bash
^[a-Z][0-9]*$
```
5. Queremos líneas que empiecen y terminen por letra y en medio todo números.
```bash
^[a-Z][0-9]*$
```
6. El comando **ps aux** muestra toda la información de los proceso que se estan ejecutando en el sistema. Mostrar solo los procesos del **root** (los que las líneas empiezan por root)
```bash
ps aux | grep -E '^root'
```
7. Indica **el número** de procesos que tiene el usuario **root** (los debes de contar).
```bash
ps aux | grep -E '^root' | wc -l
```
8. Muestra las entradas del directorio /etc en formata largo.
```bash
ls /etc -l
```
9. **Cuenta** cuantas entradas hay en el directorio /etc. Contando líneas.
```bash
ls /etc -l | wc -l
```
10. **Cuenta** cuantas entradas hay en el directorio /etc. Contando palabras.
``bash
ls /etc -l | wc -w
```

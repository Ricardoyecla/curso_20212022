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
6.

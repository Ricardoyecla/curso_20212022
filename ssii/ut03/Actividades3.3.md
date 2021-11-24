# Actividades3.3
Haciendo uso del fichero de texto **fichero_para_grep.txt** escribe el comando con la expresión regular para mostrar las líneas indicadas.
## Descarga el fichero fichero_para_grep.txt
see documentation [here](fichero_para_grep.txt)

## Preguntas
1. Mostrar las líneas que **aparezca oso o per**.
```sh
grep -E 'oso|per' fichero_para_grep.txt
```
2. Mostrar las líneas que **tengan** la **cadena oso o osa.
```sh
grep -E 'os[oa]' fichero_para_grep.txt
```
3. Mostrar las líneas que **tengan** la **cadena** **arana** o **aRaña**.
```sh
grep -E 'a((ran)|(Rañ))a' fichero_para_grep.txt
grep -E 'arana|aRaña' fichero_para_grep.txt
```
4. Mostrar las líneas que **tengan** la **cadena** **oss**, **osk** o **osa**.
```sh
grep -E 'os[ska]' fichero_para_grep.txt
```
5. Mostrar las líneas que **tengan** **alguna cadena con más de una r seguida****.
```sh
grep -E 'rr+' fichero_para_grep.txt
grep -E 'r{2,}' fichero_para_grep.txt
```
6. Mostrar las líneas que **tengan** ****más de 3 veces**** el caracteres **s** seguido.
```sh
grep -E 's{3,}' fichero_para_grep.txt
grep -E 'sss+' fichero_para_grep.txt
```
7. Mostrar las líneas que **comiencen por O**.
```sh
grep -E '^O' fichero_para_grep.txt
```
8. Mostrar las líneas que **empiecen** por una **palabra** de **cuatro caracteres**.
```sh
grep -E '^[^ \.,;:]{4}\>' fichero_para_grep.txt
grep -E '^[^ ]{4}\>' fichero_para_grep.txt
grep -E '^[a-zA-Z]{4}\>' fichero_para_grep.txt
```
9. Mostrar las líneas que **terminen** por **l** o **n**.
```sh
grep -E '(l|n)$' fichero_para_grep.txt 
grep -E '[ln]$' fichero_para_grep.txt
```
10. Mostrar las líneas que **terminen** por **.**.
```sh
grep -E '\.$' fichero_para_grep.txt
```
11. Buscar las **palabras** que terminen por **o**.
```sh
grep -E 'o\>' fichero_para_grep.txt
```
12. Buscar las **palabras** que terminen por **o** o **a**.
```sh
grep -E '[ao]\>' fichero_para_grep.txt
grep -E '(a|o)\>' fichero_para_grep.txt 
```
13. Buscar las **palabras** que **empicen** por **varias s**.
```sh
grep -E '\<ss+[a-zA-Zñ0-9]*\>' fichero_para_grep.txt
grep -E '\<ss+[^ \.;,:]*\>' fichero_para_grep.txt
```
14. Buscar **palabras** con **más de una s**.
```sh
grep -E 's{2,}' fichero_para_grep.txt
grep -E '\<[[:alpha:]]+ss+[[:alpha:]]*\>' fichero_para_grep.txt
```
15. Buscar las **palabras** que no **empiecen** por **o** ó **a**.
```sh
grep -E '\<[^oa][^ ]*\>' fichero_para_grep.txt
```

Ahora vamos a hacer una función un poco particular. :exploding_head:

Queremos crear un mezclador de palabras que reciba 2 palabras y un número. Si el número es menor o igual a $CORTE el mezclador concatena la primera palabra con la segunda. En cambio, si el número es mayor a $CORTE, concantena la segunda con la primera:

``` javascript
ム $FUNCION("planta", "naranja", $CORTE)
"plantanaranja"

ム $FUNCION("amor", "amarillo", $NUMERO_MENOR)
"amoramarillo"

ム $FUNCION("mate", "pato", $NUMERO_MAYOR)
"patomate"
```

> Definí la función `$FUNCION`.
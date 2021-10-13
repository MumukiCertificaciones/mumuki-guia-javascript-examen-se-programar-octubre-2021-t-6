Los servicios de películas bajo demanda lograron despertar un interés renovado en la sociedad por el cine y las series :movie_camera:. Es por ello que contamos registros de este estilo:

``` javascript
let  gus = {
  nick: "Wuisti",
  promedioPeliculasMensuales: 5,
  plataforma: "NetFix"
};

let ariel = {
  nick: "Ari",
  promedioPeliculasMensuales: 10,
  plataforma: "Armazon"
};
```

Ahora debemos definir una función que permita obtener un resumen de la información registrada de manera simple. Por ejemplo:

``` javascript
ム $FUNCION(gus)
"$STRING_ESTIMACION que Wuisti verá 60 películas en un año $STRING_PLATAFORMA NetFix"

ム $FUNCION(ariel)
"$STRING_ESTIMACION que Ari verá 120 películas en un año $STRING_PLATAFORMA Armazon"
```

> Definí la función `$FUNCION` que nos permita obtener la información requerida.
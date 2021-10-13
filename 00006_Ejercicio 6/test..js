function transform(texto) {
  let  textoSinTildes = texto.toString().toLowerCase(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return textoSinTildes.replace('ano', 'año');
}

describe("", function() {
  let  agus = {
    nick: "Wuisti",
    promedioPeliculasMensuales: 5,
    plataforma: "NetFix"
  };

  let ariel = {
    nick: "Ari",
    promedioPeliculasMensuales: 10,
    plataforma: "Armazon"
  };

  let delfi = {
    nick: "Pilse",
    promedioPeliculasMensuales: 3,
    plataforma: "NetFix"
  };

  it("el resumen de agus nos provee su información", function() {
    assert.equal(transform($FUNCION(agus)), transform("$STRING_ESTIMACION que wuisti vera 60 peliculas en un año $STRING_PLATAFORMA netfix"));
  })
  
  it("el resumen de ariel nos provee su información", function() {
    assert.equal(transform($FUNCION(ariel)), transform("$STRING_ESTIMACION que ari vera 120 peliculas en un año $STRING_PLATAFORMA armazon"));
  })
  
  it("el resumen de delfi nos provee su información", function() {
    assert.equal(transform($FUNCION(delfi)), transform("$STRING_ESTIMACION que pilse vera 36 peliculas en un año $STRING_PLATAFORMA netfix"));
  })
})
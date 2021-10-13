describe("", function() {
  it("La suma de las letras de las palabras cortas de ['hola', 'murcielago', 'caballo', 'choclo', 'poco', 'luz', 'sol'] es 20", function() {
    assert.equal($FUNCION(['hola', 'murcielago', 'caballo', 'choclo', 'poco', 'luz', 'sol']), 20)
  })
  
  it("La suma de las letras de las palabras cortas de ['pochoclo', 'granja', 'azul', 'animales', 'turquesa'] es ", function() {
    assert.equal($FUNCION(['pochoclo', 'granja', 'azul', 'animales', 'turquesa']), 10)
  })
})

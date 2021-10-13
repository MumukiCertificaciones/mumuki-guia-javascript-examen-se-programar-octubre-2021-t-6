describe("", function() {
  it("Mezclar 'hola' y 'chau' con " + (Number($CORTE) - 1) + " es 'holachau'", function() {
    assert.equal($FUNCION("hola", "chau", (Number($CORTE) - 1)), "holachau");
  });
  
  it("Mezclar 'hola' y 'chau' con " + (Number($CORTE) + 2) + " es 'chauhola'", function() {
    assert.equal($FUNCION("hola", "chau", (Number($CORTE) + 2)), "chauhola");
  });
  
  it("Mezclar 'perro' y 'gato' con " + Number($CORTE) + " es 'perrogato'", function() {
    assert.equal($FUNCION("perro", "gato", Number($CORTE)), "perrogato");
  });
  
  it("Mezclar 'agua' y 'pelo' con " + (Number($CORTE) - 2) + " es 'aguapelo'", function() {
    assert.equal($FUNCION("agua", "pelo", (Number($CORTE) - 2)), "aguapelo");
  });
  
  it("Mezclar 'agua' y 'pelo' con " + (Number($CORTE) + 5) + " es 'peloagua'", function() {
    assert.equal($FUNCION("agua", "pelo", (Number($CORTE) + 5)), "peloagua");
  });
})
describe("", function() {
  it("Es falso que 3 menos 2 es mayor a 6", function() {
    assert(!$FUNCION(3, 2, 6));
  });
  
  it("Es falso que 5 menos 4 es mayor a 20", function() {
    assert(!$FUNCION(5, 4, 20));
  });
  
  it("Es falso que 18 menos 3 es mayor a 18", function() {
    assert(!$FUNCION(18, 3, 18));
  });
  
  it("Es verdadero que 7 menos 4 es mayor a 2", function() {
    assert($FUNCION(7, 4, 2));
  });
  
  it("Es verdadero que 9 menos 3 es mayor a 5", function() {
    assert($FUNCION(9, 3, 5));
  });
})
it "Si creo una instancia de $CLASE le puedo especificar su nafta inicial" do
  vehiculo = $CLASE.new(50)
  expect(vehiculo.nafta).to be 50
end

it "Una instancia de $CLASE suma 20 litros de nafta al enviarle $METODO_CARGAR(20)" do
  vehiculo = $CLASE.new(50)
  vehiculo.$METODO_CARGAR(20)
  expect(vehiculo.nafta).to be 70
end

it "Una instancia de $CLASE suma 5 litros de nafta al enviarle $METODO_CARGAR(5)" do
  vehiculo = $CLASE.new(50)
  vehiculo.$METODO_CARGAR(5)
  expect(vehiculo.nafta).to be 55
end

it "Una instancia de $CLASE suma 100 litros de nafta al enviarle $METODO_CARGAR(100)" do
  vehiculo = $CLASE.new(50)
  vehiculo.$METODO_CARGAR(100)
  expect(vehiculo.nafta).to be 150
end

it "Una instancia de $CLASE no tiene carga suficiente si tiene $CANTIDAD_CARGA litros de nafta" do
  vehiculo = $CLASE.new($CANTIDAD_CARGA)
  expect(vehiculo.$METODO_VERIFICAR).to be false
end

it "Una instancia de $CLASE no tiene carga suficiente si tiene menos de $CANTIDAD_CARGA litros de nafta" do
  vehiculo = $CLASE.new($CANTIDAD_CARGA - 1)
  expect(vehiculo.$METODO_VERIFICAR).to be false
end

it "Una instancia de $CLASE tiene carga suficiente si tiene más de $CANTIDAD_CARGA litros de nafta" do
  vehiculo = $CLASE.new($CANTIDAD_CARGA + 1)
  expect(vehiculo.$METODO_VERIFICAR).to be true
end

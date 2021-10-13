un_artista_de_banda = $ARTISTA_1.new(8)
otro_artista_de_banda = $ARTISTA_2.new(150)
un_artista = $ARTISTA_1.new(6)
otro_artista = $ARTISTA_2.new(100)
triangulista = Triangulista.new()
banda = Banda.new([otro_artista_de_banda, un_artista_de_banda, triangulista])

it "Si una banda toca se modifican sus integrantes" do
  banda.tocar!
  expect(un_artista_de_banda.cuerdas). to eq 7
  expect(otro_artista_de_banda.indice_de_coordinacion). to eq 150 + $INDICE_COORDINACION
end

it "Una instancia de $ARTISTA_1 pierde una cuerda al tocar" do
  un_artista.tocar!
  expect(un_artista.cuerdas). to eq 5
end

it "Una instancia de $ARTISTA_2 aumenta su indice de coordinación al tocar" do
  otro_artista.tocar!
  expect(otro_artista.indice_de_coordinacion). to eq 100 + $INDICE_COORDINACION
end
'use strict';

const PokemonItem = (pokemon,update) => {
  const item = $('<div class="item"></div>');
  const name = $('<h1>'+pokemon.name+'</h1>');


  item.append(name);


  return item;
}

const reRender = (container,filter,update) => {
  container.empty();
  const filteredPokemons = filterByName(pokemons,filter);
  if (filteredPokemons.length > 0) {
    $.each(filteredPokemons,(index,pokemon) => {
      container.append(PokemonItem(pokemon,update));
    });
  } else {
    container.append($('<p>Pokemon no encontrado</p>'));
  }
}

const Search = (update) => {
  const search = $('<div></div>');
  const input  = $('<input type="text" placeholder="Ingresa busqueda">');
  const result = $('<div class="result"></div>');

  search.append(input);
  search.append(result);

  input.on('keyup',(e) => {
    const filter = input.val();
    console.log(input.val());
    const pokemons=state.pokemons;
    console.log(pokemons);
    console.log(pokemons.pokemon_entries[0].pokemon_species.name);
    filterByName(pokemons,filter);
    // reRender(result,filter,update);
  });
  // reRender(result,"",update);

  return search;
}

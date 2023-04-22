const modal = document.querySelector("#modal")
const pokemon = document.querySelector(".pokemons")


const convertPokemonToHtml = pokemon => {
    return `
    <section class="poke-details ${pokemon.type}">
    <div class="header">
      <h1>Detalhe do pokémon</h1>
      <a href="/">Fechar</a>
    </div>
    <div class="info">
      <h1>${pokemon.name}</h1>
      <span>#${pokemon.number}</span>
    </div>
    <div class="poke-details">
      <div class="details">
       <div class="typeDetails">
        ${pokemon.types.map((type) => `<h3 class="type ${type}">${type}</h3>`).join('')}
        </div>
        <img 
        src="${pokemon.photo}" 
        alt="${pokemon.name}">
      </div>
      <div class="about">
        <h2>Stats</h2>
        <div class="stats">
          <h2>Hp</h2>
          <h3>${pokemon.stats["hp"]}</h3>
          <h2>Attack</h2>
          <h3>${pokemon.stats["attack"]}</h3>
          <h2>Defense</h2>
          <h3>${pokemon.stats["defense"]}</h3>
          <h2>Special Attack</h2>
          <h3>${pokemon.stats["special-attack"]}</h3>
          <h2>Special Defense</h2>
          <h3>${pokemon.stats["special-defense"]}</h3>
          <h2>Speed</h2>
          <h3>${pokemon.stats["speed"]}</h3>
        </div>
        <h2>Abilities:</h2>
        <h3>${pokemon.abilities.join(', ')}</h3>
      </div>
    </div>
  </section>`
}

function openModal(id) {
  modal.classList.remove('hide')
  pokeApi.getPokemonCardDetail(id).then((pokemon) => {
    const newHtml = convertPokemonToHtml(pokemon)
    modal.innerHTML = newHtml;
  })
}

// close.addEventListener("click", () => {
//   modal.classList.add("hide")
// })

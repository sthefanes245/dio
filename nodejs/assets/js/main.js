const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

/*Este código JavaScript interage com a página HTML e a API de Pokémon para carregar uma lista de Pokémon e exibi-los na página. Vou explicar o que cada parte do código faz:

1. `const pokemonList = document.getElementById('pokemonList')` e `const loadMoreButton = document.getElementById('loadMoreButton')`: Essas linhas obtêm referências aos elementos HTML com os IDs "pokemonList" e "loadMoreButton". O elemento "pokemonList" parece ser onde os Pokémon serão exibidos, e "loadMoreButton" é um botão que permitirá carregar mais Pokémon.

2. `const maxRecords = 151`, `const limit = 10`, `let offset = 0;`: Essas variáveis definem os valores máximos de registros (151), o limite de registros a serem carregados por vez (10) e um deslocamento (offset) inicial definido como 0.

3. `function convertPokemonToLi(pokemon) { ... }`: Esta função recebe um objeto "pokemon" e retorna uma string HTML que representa um item de lista para exibir as informações do Pokémon.

   - A função gera um elemento de lista `<li>` com classes que representam os tipos do Pokémon.
   - Inclui o número, nome, tipos e uma imagem do Pokémon.
   - Utiliza a função `map` para gerar os elementos da lista para os tipos do Pokémon.
   - Retorna a string HTML resultante.

4. `function loadPokemonItens(offset, limit) { ... }`: Esta função é responsável por carregar Pokémon da API usando a função `pokeApi.getPokemons` e adicioná-los à lista na página.

   - Chama `pokeApi.getPokemons` com o deslocamento e limite especificados.
   - Recebe os Pokémon retornados pela API.
   - Converte os Pokémon em elementos de lista usando a função `convertPokemonToLi`.
   - Adiciona o HTML gerado à lista `pokemonList` na página.

5. `loadPokemonItens(offset, limit)`: Esta linha de código inicia o carregamento inicial de Pokémon ao chamar `loadPokemonItens` com os valores iniciais de deslocamento e limite.

6. `loadMoreButton.addEventListener('click', () => { ... })`: Adiciona um ouvinte de eventos ao botão "loadMoreButton". Quando o botão é clicado, a função dentro do evento é acionada.

   - Aumenta o valor do deslocamento (offset) e calcula a quantidade total de registros com a próxima página.
   - Verifica se atingiu o máximo de registros (`maxRecords`) e, se sim, carrega apenas os registros restantes.
   - Adiciona os Pokémon carregados à lista `pokemonList` na página.
   - Remove o botão "loadMoreButton" se todos os registros já foram carregados.

Este código interage com a API de Pokémon para carregar e exibir Pokémon na página, permitindo o carregamento adicional à medida que o usuário clica no botão "Load More". */
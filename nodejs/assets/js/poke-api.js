const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}


/*const pokeApi = {}: Isso define um objeto vazio chamado "pokeApi". Esse objeto provavelmente será usado para agrupar funções relacionadas à obtenção de informações sobre Pokémon.

function convertPokeApiDetailToPokemon(pokeDetail) { ... }: Esta função é responsável por converter os detalhes obtidos da API em objetos do tipo "Pokemon". Ela recebe um objeto pokeDetail como argumento e retorna um objeto "Pokemon" com as informações correspondentes.

Ela cria uma instância de Pokemon.
Define as propriedades number e name com base nos dados da API.
Mapeia os tipos do Pokémon e define as propriedades types e type.
Define a propriedade photo com a URL da imagem do Pokémon.
Retorna o objeto "Pokemon" resultante.
pokeApi.getPokemonDetail = (pokemon) => { ... }: Essa é uma função que obtém detalhes específicos de um Pokémon usando a URL fornecida no objeto pokemon.

Faz uma solicitação usando fetch para a URL do Pokémon.
Em seguida, a função converte a resposta para um objeto JSON.
Chama a função convertPokeApiDetailToPokemon para criar um objeto "Pokemon" com base nos detalhes do Pokémon obtidos.
Retorna o objeto "Pokemon resultante.
pokeApi.getPokemons = (offset = 0, limit = 5) => { ... }: Esta função obtém uma lista de Pokémon com base no deslocamento (offset) e limite (limit) especificados.

Constrói a URL da API com base nos valores de offset e limit.
Faz uma solicitação à API usando fetch para obter a lista de Pokémon.
Converte a resposta para um objeto JSON.
Mapeia os resultados para chamar pokeApi.getPokemonDetail para cada Pokémon na lista, obtendo detalhes individuais para cada um.
Usa Promise.all para esperar todas as solicitações de detalhes serem concluídas.
Retorna a lista de objetos "Pokemon" resultante com seus detalhes.
Em resumo, esse código cria um objeto pokeApi que contém duas funções principais: getPokemonDetail para obter detalhes individuais de um Pokémon e getPokemons para obter uma lista de Pokémon com base em um deslocamento e um limite. Além disso, há a função convertPokeApiDetailToPokemon, que converte os detalhes da API em objetos "Pokemon". Essas funções parecem ser parte de um programa ou aplicação que lida com informações de Pokémon vindas de uma API. */

export default class PokemonAPI {

    static getSinglePokemon(name) {

        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

        return fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
    }

    static getListOfPokemon() {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

        return fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
    }
}
class API {
  getPokemons(limit = 784) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const pokemons = result.results.map((pokemon) => {
          const { url } = pokemon;
          const id = url.substring(34, url.length - 1);

          return {
            ...pokemon,
            id,
          };
        });

        return pokemons;
      });
  }
}

const api = new API();

export default api;

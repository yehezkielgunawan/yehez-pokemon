export type SingleCapturedPokemon = {
  name: string;
  pokeImg: string;
};

export type PokemonContextType = {
  collectedList: Array<SingleCapturedPokemon>;
  capturePokemon: (selectedPokemon: SingleCapturedPokemon) => void;
  releasePokemon: (pokemonName: string) => void;
};

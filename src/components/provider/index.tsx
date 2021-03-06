import { createContext, ReactNode, useContext } from "react";
import createPersistedState from "use-persisted-state";

import { PokemonContextType, SingleCapturedPokemon } from "./types";


// I use React Context just to streghten my knowledge with this feature
export const INITIAL_CAPTURED_POKEMON: SingleCapturedPokemon = {
  name: "",
  pokeImg: "",
};

export const PokemonContext = createContext<PokemonContextType>({
  collectedList: [],
  capturePokemon: () => {
    return;
  },
  releasePokemon: () => {
    return;
  },
});

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

type PokemonProviderProps = {
  children: ReactNode;
};

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const useFavourite = createPersistedState("favoritePokemons");
  const [collectedList, setCollectedList] = useFavourite<
    Array<SingleCapturedPokemon>
  >([]);

  const capturePokemon = (selectedPokemon: SingleCapturedPokemon) => {
    return setCollectedList([...collectedList, selectedPokemon]);
  };

  const releasePokemon = (pokemonName: string) => {
    const remainingPokemon = collectedList.filter(
      (pokemon) => pokemon.name !== pokemonName
    );
    return setCollectedList(remainingPokemon);
  };

  return (
    <PokemonContext.Provider
      value={{
        collectedList,
        capturePokemon,
        releasePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

import { createContext, ReactNode, useState } from "react";

import { PokemonContextType, SingleCapturedPokemon } from "./types";

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

type PokemonProviderProps = {
  children: ReactNode;
};

export const PokemonProvider = ({ children }: PokemonProviderProps) => {
  const [collectedList, setCollectedList] = useState<
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

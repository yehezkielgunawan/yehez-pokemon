import axios, { AxiosResponse } from "axios";

import { DetailPokemonResType, PokemonList } from "./types";

import { baseURL } from "@/constants/base";

// All the fetcher function is here
export const getPokemonList = async (offset: number = 0) => {
  return await axios
    .get(`${baseURL}/pokemon?offset=${offset}&limit=20`)
    .then((res: AxiosResponse<PokemonList>) => res.data);
};

export const getPokemonDetail = async (nameID: string) => {
  return await axios
    .get(`${baseURL}/pokemon/${nameID}`)
    .then((res: AxiosResponse<DetailPokemonResType>) => res.data);
};

import axios, { AxiosResponse } from "axios";

import { DetailPokemonResType, PokemonList } from "./types";

import { baseURL } from "@/constants/base";

export const getPokemonList = async (
  limit: number = 20,
  offset: number = 0
) => {
  return await axios
    .get(`${baseURL}/pokemon?limit=${limit}&offset=${offset}`)
    .then((res: AxiosResponse<PokemonList>) => res.data);
};

export const getPokemonDetail = async (nameID: string) => {
  return await axios
    .get(`${baseURL}/pokemon/${nameID}`)
    .then((res: AxiosResponse<DetailPokemonResType>) => res.data);
};

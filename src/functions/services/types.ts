export type SinglePokemonData = {
  name: string;
  url: string;
};

export type PokemonList = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<SinglePokemonData>;
};

export type SingleAbility = {
  ability: SinglePokemonData;
  is_hidden: boolean;
  slot: number;
};

export type SingleForm = SinglePokemonData;

export type SingleGameIndices = {
  game_index: number;
  version: SinglePokemonData;
};

export type SingleVersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: SinglePokemonData;
  version_group: SinglePokemonData;
};

export type SingleMove = {
  move: SinglePokemonData;
  version_group_details: Array<SingleVersionGroupDetail>;
};

export type Species = SinglePokemonData;

export type Sprites = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
};

export type SingleStats = {
  base_stat: number;
  effort: number;
  stat: SinglePokemonData;
};

export type SingleType = {
  slot: number;
  type: SinglePokemonData;
};

export type SingleVersionDetailHeldItem = {
  rarity: number;
  version: SinglePokemonData;
};

export type SingleHeldItem = {
  item: SinglePokemonData;
  version_details: Array<SingleVersionDetailHeldItem>;
};

export type SinglePokemonTypePast = {
  generation: SinglePokemonData;
  types: Array<SingleType>;
};

export type DetailPokemonResType = {
  abilities: Array<SingleAbility>;
  base_experience: number;
  forms: Array<SingleForm>;
  game_indices: Array<SingleGameIndices>;
  height: number;
  held_items: Array<SingleHeldItem>;
  moves: Array<SingleMove>;
  name: string;
  order: number;
  past_type: Array<SinglePokemonTypePast>;
  species: Species;
  sprites: Sprites;
  types: Array<SingleType>;
  weight: number;
};

// get Pokemon ID based on pattern at front_default key in sprites object
//Example :  front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
export const getPokemonID = (url: string) => {
  const splittedURL = url.split("/");
  return splittedURL[splittedURL.length - 2];
};

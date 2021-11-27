export const getPokemonID = (url: string) => {
  const splittedURL = url.split("/");
  return splittedURL[splittedURL.length - 2];
};

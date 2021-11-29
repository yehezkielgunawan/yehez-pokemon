import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

import Index from "../pages/index";

import OwnedPokemonBar from "@/components/ui/OwnedPokemonBar";
import PokemonBox from "@/components/ui/PokemonBox";
import PokemonDetailsPage from "@/pages/[id]";
import OwnedPokemonsPage from "@/pages/owned";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Main Page", () => {
  it("renders a heading", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { offset: "0" },
    }));
    render(<Index />, { wrapper: ChakraProvider });
    const heading = screen.getByText("Pokedex");

    expect(heading).toBeInTheDocument();
  });

  it("renders the OwnedPokemonBar", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { offset: "0" },
    }));
    render(<OwnedPokemonBar />, { wrapper: ChakraProvider });
    const heading = screen.getByText("My Pokemon");

    expect(heading).toBeInTheDocument();
  });

  it("renders the pokemon image", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { offset: "0" },
    }));
    render(
      <PokemonBox
        name="bulbasaur"
        url="https://pokeapi.co/api/v2/pokemon/1/"
      />,
      { wrapper: ChakraProvider }
    );
    const imageAlt = screen.getByAltText("pokemon-image");

    expect(imageAlt).toBeInTheDocument();
  });
});

describe("Detail Pokemon Page", () => {
  it("render page properly", async () => {
    useRouter.mockImplementationOnce(() => ({
      query: { id: "1" },
    }));
    render(<PokemonDetailsPage />, { wrapper: ChakraProvider });
  });
});

describe("Owned Pokemon Page", () => {
  it("it renders properly", async () => {
    useRouter.mockImplementationOnce(() => ({
      route: "/owned"
    }));
    render(<OwnedPokemonsPage />, { wrapper: ChakraProvider });
  });
});

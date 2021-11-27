import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

import Index from "../pages/index";

describe("Main Page", () => {
  it("renders a heading", () => {
    render(<Index />, { wrapper: ChakraProvider });

    const heading = screen.getByText("Hello World!");

    expect(heading).toBeInTheDocument();
  });
});

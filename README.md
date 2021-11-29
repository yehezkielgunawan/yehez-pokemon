# Yehez-Pokemon

![[Yehez Pokemon]](https://socialify.git.ci/yehezkielgunawan/yehez-pokemon/image?description=1&logo=https%3A%2F%2Fimage.flaticon.com%2Ficons%2Fpng%2F512%2F1068%2F1068780.png&name=1&owner=1&pattern=Overlapping%20Hexagons&theme=Dark)

[![forthebadge](https://res.cloudinary.com/yehez/image/upload/v1635325228/made-by-typescript_mz1tue.svg)](https://forthebadge.com)

# Table of Content

[What I'm using here?](https://github.com/yehezkielgunawan/yehez-pokemon#what-im-using-here)

[What's included here?](https://github.com/yehezkielgunawan/yehez-pokemon#-whats-included-here)

[How to use it?](https://github.com/yehezkielgunawan/yehez-pokemon#how-to-use-it)

[How to run it locally?](https://github.com/yehezkielgunawan/yehez-pokemon#how-to-run-it-locally)

[References](https://github.com/yehezkielgunawan/yehez-pokemon#references)

[Additional Notes](https://github.com/yehezkielgunawan/yehez-pokemon#additional-notes)

---

Live demo can be accessed at [pokemon.yehezgun.com](https://pokemon.yehezgun.com).

This project is scaffolded using my own starter template [yehez-nextchara-starter](https://yehez-nextchakra-starter.yehezgun.com/).

## What I'm using here?

- [Next.js](https://nextjs.org/) as main framework
- [ReactJS](https://reactjs.org/) as the main library code.
- [Chakra UI](https://chakra-ui.com/docs/getting-started) as UI Library.
- [Axios](https://axios-http.com/) for HTTP Request.
- [Poke API](https://pokeapi.co/) for the pokemon data.
- [Use State Persistent](https://github.com/donavon/use-persisted-state) to save the captured pokemon in local storage.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to make a base unit testing.
- [Vercel](https://vercel.com/) as my current favorite tool to deploy web apps.

## ⚡ What's included here?

- Toolings for linting, formatting, and conventions configured.\
  `eslint, prettier, husky, & lint-staged.`
- ✨Basic responsive layout configuration (using Chakra UI media query)
- Basic Next-SEO config
- Now using Next.js 12 with Rust Compiler Minification enabled (you can disable it at next.config.js)

## How to use it?

- You can open [pokemon.yehezgun.com](https://pokemon.yehezgun.com/).
- You can choose light or dark mode display by clicking the toggle on the top right. (Sorry for the messy screenshot.)
  ![light mode](https://res.cloudinary.com/yehez/image/upload/v1638173310/Bobobox/home_light_hdyxna.png)
  <br>
  ![dark mode](https://res.cloudinary.com/yehez/image/upload/v1638173310/Bobobox/home_dark_c2wj3w.png)
- You can browse to other pages by clicking the next or previous page icon button.
- To see the detailed info about a pokemon, click one of the pokemon lists and you will be directed to a pokemon detail page.
  ![pokemon detail](https://res.cloudinary.com/yehez/image/upload/v1638173310/Bobobox/detail_pokemon_h8mtqb.png)
- Want to catch that pokemon? Click the `catch` button. The pokemon will be stored in your collection.
  ![owned pokemon list](https://res.cloudinary.com/yehez/image/upload/v1638173309/Bobobox/capture_pokemon_vwiljd.png)
- You can check your captured pokemon list at the Owned Pokemon page (Home => Click `My Pokemon` button).
- To release the pokemon from your owned pokemon list, you can click the `Release` button on the Owned Pokemon page or in the pokemon detail page.
  ![Release pokemon](https://res.cloudinary.com/yehez/image/upload/v1638173309/Bobobox/release_pokemon_tvhryv.png)

## How to run it locally?

- Git clone `https://github.com/yehezkielgunawan/yehez-pokemon`
- Don't forget to run `npm install` to install the dependencies.
- To activate the husky setting, you can run `npm run prepare`.
- To run the local unit test, you can run `npm run test` or `yarn test`.
- To run the dev server, you can run `npm run dev` and open `localhost:3000` in your browser.
- To build production locally, you can run `npm run build`. And if you want to run it, you can run `npm run start` and open `localhost:3000` in your browser.

## References

- [Next.js docs site](https://nextjs.org/)
- [ReactJS official docs](https://reactjs.org/)
- [Chakra UI docs site](https://chakra-ui.com/docs/getting-started)
- [yehez-markdown-previewer](https://markdown.yehezgun.com/) - my own live markdown editor to generate this README.
- [yehez-nextchara-starter](https://yehez-nextchakra-starter.yehezgun.com/) - my own base starter template for Next.js project.
- [Freepik Image](https://image.flaticon.com/icons/png/512/1031/1031982.png) - For the image asset.
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)

## Additional Notes

I have never used Test Driven Development (TDD) technique before. That's why I choose React Testing Library as my testing library and use some elements that I understood.

`src/components` => I put all small or reusable components here.

`src/constant` => This is where I put the base URL as a constant variable.

`src/functions` => This is the place where I put the helper function and fetcher function.

`src/pages` => This is the directory for the page component based on Next.js built-in setting.

`src/types` => Just a place to save Merge and Omit thing.

Why do I use Chakra UI?\
I just learned to React in the middle of 2021 (this year). I switched from Angular to ReactJS due to personal and my former company product manager preferences. I am almost re-learning everything, including styling and JS fundamentals. So during a technical process like this, I found that Chakra UI boost my productivity while I'm still lack of fundamental skills.

Why do I use client-side fetch while the Next.js provide SSR feature?\
I just want to strengthen and maximize the client-side process even Next JS provides a lot of features. Using this framework helps me to finish the technical test like this faster because of its built-in features like a router.

import "./App.css";

// create a simple app  to cosume the Rick and Morty API
// (https://pokeapi.co/docs/v2#pokemon)

// 1. get the first character on app load
//      (https://pokeapi.co/api/v2/pokemon/1)
// 2. display 'loading...' when there are no characters to display
// 3. add a button to get the next character
// 4. display an image for each character ('character.sprites.other.official-artwork.front_default)
//    (this list should be updated each time the 'get next character' button is clicked)
//    (the list should flow horizontally across athe page and wrap to a new line when needed)
// 5. clicking on an image should display basic details about that character
//    (name and height)

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

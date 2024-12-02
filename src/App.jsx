import { useEffect, useState } from "react";
import CharacterInfo from "./components/characterInfo"
import Characters from "./components/characters"
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
  const getCharacterData = async (characterId) => {
    const result = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${characterId}`)
    ).json();
    return result;
  };

  const [characters, setCharacters] = useState([]);
  const [selectedCharacterId, setSelectedCharacterId] = useState();

  useEffect(() => {
    const getFirstCharacter = async () => {
      const character = await getCharacterData(1);
      setCharacters([character]);
    };

    getFirstCharacter();
  }, []);

  if (!characters.length) {
    return <div>loading...</div>;
  }

  const handleButtonClick = async () => {
    const character = await getCharacterData(characters.length + 1);
    setCharacters((state) => [...state, character]);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Load New Character</button>
      <Characters
        characters={characters}
        onCharacterClick={setSelectedCharacterId}
      />
      <CharacterInfo
        character={characters.find((c) => c.id === selectedCharacterId)}
      />
    </div>
  );
}

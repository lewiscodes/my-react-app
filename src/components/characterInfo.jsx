import { Fragment } from "react";

const CharacterInfo = ({ character }) => {
  if (!character) {
    return <Fragment />;
  }

  return (
    <div>
      <p>name: {character.name}</p>
      <p>height: {character.height}</p>
    </div>
  );
};

export default CharacterInfo;

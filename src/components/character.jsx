const Character = ({ character, onCharacterClick }) => {
  return (
    <div>
      <img
        style={{ maxWidth: 200, margin: 5 }}
        src={character.sprites.front_default}
        alt={character.name}
        onClick={() => onCharacterClick(character.id)}
      />
    </div>
  );
};

export default Character;

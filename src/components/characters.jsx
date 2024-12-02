import Character from "./character";

const Characters = ({ characters, onCharacterClick }) => {
  if (!characters.length) {
    return <span>Loading...</span>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {characters.map((c) => (
        <Character character={c} onCharacterClick={onCharacterClick} />
      ))}
    </div>
  );
};

export default Characters;

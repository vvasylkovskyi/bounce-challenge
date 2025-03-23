export const NumberOfBagsComponent = ({
  numberOfBags,
  setNumberOfBags,
}: {
  numberOfBags: number;
  setNumberOfBags: (numberOfBags: number) => void;
}) => {
  return (
    <div className="number-of-bags__container">
      <div>
        <label>Number of bags: </label>
      </div>
      <div className="number-of-bags__buttons">
        <button
          className="number-of-bags__square-button"
          onClick={() => setNumberOfBags(Math.max(1, numberOfBags - 1))}
          disabled={numberOfBags === 1}
        >
          -
        </button>
        <span>{numberOfBags}</span>
        <button
          className="number-of-bags__square-button"
          onClick={() => setNumberOfBags(numberOfBags + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

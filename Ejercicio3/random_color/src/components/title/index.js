import { randomRGB } from "../../helpers/randomRGB";

export const Title = () => {
  return (
    <h1
      style={{
        backgroundColor: `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`,
      }}
    >
      PROBA DE CORES RANDOM
    </h1>
  );
};

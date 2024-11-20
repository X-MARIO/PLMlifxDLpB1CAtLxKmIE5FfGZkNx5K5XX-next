import { Symbol } from "./types";
import { GameSymbol } from "./game-symbol";

import styles from "./game.module.css";

export const GameInfo = ({
  isDraw,
  winnerSymbol,
  currentStep,
}: {
  isDraw: boolean;
  winnerSymbol: Symbol | null;
  currentStep: Symbol;
}) => {
  if (isDraw) {
    return <div className={styles["game-info"]}>Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className={styles["game-info"]}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className={styles["game-info"]}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
};

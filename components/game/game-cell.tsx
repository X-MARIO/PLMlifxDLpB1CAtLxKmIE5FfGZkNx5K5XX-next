import { Symbol } from "./types";
import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export const GameCell = ({
  isWinner,
  onClick,
  symbol,
}: {
  isWinner: boolean;
  onClick: () => void;
  symbol: Symbol | null;
}) => {
  return (
    <button
      className={clsx(
        "border border-gray-400 -ml-px flex items-center justify-center",
        isWinner && `bg-red-400`,
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
};

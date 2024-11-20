import { useGameState } from "./hooks";
import { GameInfo } from "./game-info";
import { GameCell } from "./game-cell";
import React from "react";
import { ResetButton } from "@/components/game/reset-button";

export const Game = () => {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    toggleCell,
    resetGame,
    getWinnerCell,
  } = useGameState();
  return (
    <div className="flex flex-col items-center w-40 mx-auto my-24 border-black p-5">
      <GameInfo
        isDraw={isDraw}
        currentStep={currentStep}
        winnerSymbol={winnerSymbol}
      />
      <div className="grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]">
        {cells.map((symbol, index) => {
          return (
            <GameCell
              key={index}
              isWinner={getWinnerCell(index)}
              onClick={() => toggleCell(index)}
              symbol={symbol}
            />
          );
        })}
      </div>
      <ResetButton onClick={resetGame} />
    </div>
  );
};

import {useGameState} from "./hooks";
import styles from "./game.module.css";
import {GameInfo} from "./game-info";
import {GameCell} from "./game-cell";
import React from "react";

export const Game = () => {
    const {
        cells,
        currentStep,
        winnerSequence,
        handleCellClick,
        handleResetClick,
        winnerSymbol,
        isDraw
    } = useGameState();
    return (
        <div className={styles['game']}>
            <GameInfo isDraw={isDraw} currentStep={currentStep}
                      winnerSymbol={winnerSymbol}/>
            <div className={styles['game-field']}>
                {cells.map((symbol, index) => {
                    const isWinner = winnerSequence?.includes(index) ?? false;

                    return <GameCell key={index} isWinner={isWinner} onClick={() => handleCellClick(index)}
                                     symbol={symbol}/>
                })}
            </div>
            <button className={styles['reset']} onClick={handleResetClick}>Очистить</button>
        </div>
    )
}
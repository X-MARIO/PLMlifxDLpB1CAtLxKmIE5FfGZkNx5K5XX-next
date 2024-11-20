import {Symbol} from "./types";
import {GameSymbol} from "./game-symbol";

import styles from "./game.module.css";

export const GameCell = ({isWinner, onClick, symbol}: {
    isWinner: boolean,
    onClick: () => void,
    symbol: Symbol | null
}) => {
    return (
        <button
            className={`${styles['cell']} ${isWinner ? `${styles['cell--win']}` : ''}`}
            onClick={onClick}
        >{symbol ? <GameSymbol symbol={symbol}/> : null}</button>
    )
}
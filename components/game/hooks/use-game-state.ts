'use client'

import {useState} from "react";
import {Cell, Symbol, SYMBOL_O, SYMBOL_X, WinnerLine} from "../types";
import {computeWinner} from "../helpers";

export const useGameState: () => {
    cells: Cell[],
    currentStep: Symbol,
    winnerSymbol: Symbol | null,
    isDraw: boolean,
    toggleCell: (index: number) => void,
    resetGame: () => void,
    getWinnerCell: (index: number) => boolean,
} = () => {
    const [currentStep, setCurrentStep] = useState<Symbol>(() => SYMBOL_O);
    const [cells, setCells] = useState<Cell[]>(() => [SYMBOL_O, null, null, SYMBOL_O, SYMBOL_X, null, null, null, null]);
    const [winnerSequence, setWinnerSequence] = useState<WinnerLine | null>(() => null);

    const toggleCell = (index: number) => {
        if (cells[index] || winnerSequence) {
            return;
        }

        const cellsCopy = cells.slice();
        cellsCopy[index] = currentStep;
        const winner = computeWinner(cellsCopy);

        setCells(cellsCopy);
        setCurrentStep(currentStep === SYMBOL_O ? SYMBOL_X : SYMBOL_O);
        setWinnerSequence(winner);
    }

    const resetGame = () => {
        setCells(Array.from({length: 9}, () => null));
        setCurrentStep(SYMBOL_X);
        setWinnerSequence(null);
    }

    const getWinnerCell = (index: number) => {
        return  winnerSequence?.includes(index) ?? false;;
    }

    const winnerSymbol: Symbol | null = winnerSequence ? cells[winnerSequence[0]] : null;
    const isDraw: boolean = !winnerSymbol && cells.filter(Boolean).length === 9;


    return {
        cells,
        currentStep,
        winnerSymbol,
        isDraw,
        toggleCell,
        resetGame,
        getWinnerCell,
    }
}
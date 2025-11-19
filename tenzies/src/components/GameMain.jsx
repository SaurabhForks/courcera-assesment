import { useState } from "react";
import { nanoid } from "nanoid";
import Dice from "./Dice";
const GameMain = () => {
    const [dice, setDice] = useState(allNewDice())

    function allNewDice() {
        const newDice = new Array(10).fill(0).map(() => {
            return {
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }
        })
        return newDice
    }

    const handleDiceClick = (id) => {
        setDice(oldDice => {
            return oldDice.map((dicein) => {
                return dicein.id == id ? { ...dicein, isHeld: !dicein.isHeld } : dicein
            })
        })
    }

    function handleRollDice() {
        if (dice.every(dicein => dicein.isHeld == true)) {
            setDice(allNewDice())
        } else {
            setDice((oldDice) => oldDice.map((dicein) => {
                return dicein.isHeld ? dicein : { ...dicein, value: Math.ceil(Math.random() * 6) }
            }))
        }

    }

    return <>
        <div className="game-main">
            <h2>Tenzies Game </h2>
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>

            <h3>Dice:</h3>
            <div className="dice-container">
                {dice.map(die => (
                    <Dice key={die.id} value={die.value} isHeld={die.isHeld} handlediceClick={() => handleDiceClick(die.id)} />
                ))}
            </div>
            <button className="roll-dice-button" onClick={handleRollDice}>{dice.every(dicein => dicein.isHeld == true) ? "Reset Dice" : "Roll Dice"}</button>
        </div>
    </>
}

export default GameMain;
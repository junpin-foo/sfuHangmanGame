import styles from './keyboard.module.css';

const Keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type keyboardProperties = {
    disabled?: boolean
    correctLetter: string[]
    incorrectLetters: string[]
    addGuessLetter: (key: string) => void
}

export function HangmanKeyboard({disabled = false, correctLetter, incorrectLetters, addGuessLetter}: keyboardProperties) {
    return <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(90px, 1fr)", gap:"0.5rem"}}>
        {Keys.map(key => {
            const isCorrect = correctLetter.includes(key)
            const isIncorrect = incorrectLetters.includes(key)

            console.log({correctLetter})
            return <button  onClick={() => addGuessLetter(key)} 
                    className={`${styles.btn} ${isCorrect ? styles.correct : ""} ${isIncorrect ? styles.incorrect : ""}`} 
                    disabled = {isCorrect || isIncorrect || disabled} key={key}>
                    {key}
                </button>
        })}

    </div>
}
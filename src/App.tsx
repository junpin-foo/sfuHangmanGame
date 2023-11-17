import { useEffect, useState } from "react";
import word from "./guessWords.json"
import { HangmanKeyboard } from "./HangmanKeyboard";
import { HangmanWord } from "./HangmanWord";
import { NumberOfIncorrect } from "./NumberOfIncorrect"
import styles from './keyboard.module.css';

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function App() {
  const [guessWord, setGuessWord] = useState(() => {
    return word[randomBetween(0, word.length-1)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !guessWord.includes(letter)
  )

  const isLose = incorrectLetters.length >= 5 //Lose case: if more than 5 guesses
  const isWin = guessWord.split("").every( letter => guessedLetters.includes(letter))

  function addGuessLetter(key: string) {
    if(!guessedLetters.includes(key)) 
      setGuessedLetters(currentLetters => [...currentLetters, key])
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key.match(/^[a-z]$/)) {
        e.preventDefault()
        addGuessLetter(key)
      }
    }

    if(!isLose && !isWin) {
      document.addEventListener("keypress", handler)
    }

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])



  return (
    <div style = {{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }} className={`${styles.WhiteBox}`}>
      <style>{'body { background-color: #a9182a; }'}</style>

      <div className={`${styles.GreyBox}`}>
        <h1>SFU Words Hangman Game</h1>
        <p> where all the words are frequently used terms in sfu</p>
        <p> How to play: press the buttons, or type on your keyboard.</p>
      </div>
  
      <div style={{fontSize: "1.5rem"}}>
          {isLose && "You Lose!"}
          {isWin && "Congrats on Winning!"}        
        </div>

      <NumberOfIncorrect numberOfGuesses={incorrectLetters.length}/>

      <div style={{
        clear: "both",
      }}>
        <HangmanWord reveal={isLose} guessedLetters={guessedLetters} guessWord={guessWord}/> 
      </div>
      
      <div style={{
        alignSelf: "stretch"
      }}>
        <HangmanKeyboard 
        disabled = {isWin || isLose}
        correctLetter={guessedLetters.filter(letter => guessWord.includes(letter))} 
        incorrectLetters={incorrectLetters}
        addGuessLetter={addGuessLetter}/> 
      </div>

      <span className={`${styles.GreyBox}`}>Press refresh to reset</span>
    </div>
  )
}

export default App;

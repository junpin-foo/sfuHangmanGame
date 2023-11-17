type HangmanWordProperties = {
    reveal?: boolean
    guessedLetters: string[]
    guessWord: string
}


export function HangmanWord({reveal = false, guessedLetters, guessWord}: HangmanWordProperties) {
    return <div style={{
        display: "flex",
        gap: ".25m",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
        }}
    >
        {guessWord.split("").map((letter, index) => (
            <span style={{border: ".05em solid black", padding: "10px", margin: "1px"}} key={index}>
                <span style={{visibility: guessedLetters.includes(letter) || reveal ? "visible": "hidden"}}>
                    {letter}
                </span>
            </span>
        ))
        }
    </div>
}
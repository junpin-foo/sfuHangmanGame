import image from "./redCross.png"
type drawCrosses = {
    numberOfGuesses: number
}

const crossBox = (
    <div style={{
        height: "100px",
        width: "100px",
        backgroundColor: "#000000",
        borderRadius: "4px",
        position: "relative",
        objectFit: "contain",
        alignSelf: "stretch",
        float:"left",
        margin: "0.2rem"
    }}>
        <img style={{height: "100%"}} src={require("./redCross.png")}/>
    </div>
)

const fiveCross = [crossBox,crossBox,crossBox,crossBox,crossBox] //Tune to number of chance before losing

export function NumberOfIncorrect({numberOfGuesses}: drawCrosses) {
    return (
        <div>
            {fiveCross.slice(0, numberOfGuesses)}
        </div>
    )
}
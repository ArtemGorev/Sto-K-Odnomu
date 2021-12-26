import React, {useRef} from "react";

export function Answer(props) {
    console.log(props)
    const {question: {id: number, text: answer, score}, onClicked} = props;


    const card = useRef(null);
    const cardInner = useRef(null);


    function clicked() {
        card.current.classList.toggle("flipped-card");
        cardInner.current.classList.toggle("flipped-card-inner");
        onClicked(number);
    }

    let answerStyle = {
        flex: "5"
    };
    let scoreStyle = {
        flex: "1"

    };
    return (
        <div ref={card} className="flip-card">
            <div ref={cardInner} className="flip-card-inner" onClick={clicked}>
                <div className="flip-card-front">{number}</div>
                <div className="flip-card-back" style={{display: "flex"}}>
                    <div style={answerStyle}>{answer}</div>
                    <div style={scoreStyle}>{score}</div>
                </div>
            </div>
        </div>
    );
}

import './App.css';
import {Answer} from "./Answer";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import game from "./game3.json"
import {useState} from "react";

function Question(props) {
    const [selected, setSelected] = useState([]);
    const {game: {title, questions}} = props;

    function onClicked(number) {
        if (!selected.includes(number)) {
            const audio = new Audio("line_open.mp3");
            audio.play();
        }

        setSelected(
            selected.includes(number) ?
                selected.filter(value => value !== number)
                : [...selected, number]
        );
    }

    function total() {
        return (selected.size === 0)
            ? 0
            : selected.map(number => questions[number].score).reduce((a, b) => a + b, 0);
    }

    function onAlert() {
        const audio = new Audio("wrong.mp3");
        audio.play();
    }

    return (
        <div>
            <h1 style={{color: "white", textAlign: "center"}}>
                {title}
            </h1>
            <Answer key={0} question={questions[0]} onClicked={onClicked}/>
            <Answer key={1} question={questions[1]} onClicked={onClicked}/>
            <Answer key={2} question={questions[2]} onClicked={onClicked}/>
            <Answer key={3} question={questions[3]} onClicked={onClicked}/>
            <Answer key={4} question={questions[4]} onClicked={onClicked}/>
            <Answer key={5} question={questions[5]} onClicked={onClicked}/>
            <h2 style={{color: "white", textAlign: "center"}}>{total()}</h2>
            <div style={{backgroundColor: "black", height: "200px"}} onClick={onAlert}>

            </div>
        </div>
    );
}

function ListOfQuestions() {
    return <ol>
        <li><Link to="/question1"><h1>Простая игра</h1></Link></li>
        <li><Link to="/question2"><h1>Двойная игра</h1></Link></li>
        <li><Link to="/question3"><h1>Тройная игра</h1></Link></li>
        <li><Link to="/question4"><h1>Игра наоборот</h1></Link></li>
    </ol>;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListOfQuestions/>}/>
                <Route path="question1" element={<Question key={0} game={game[0]}/>}/>
                <Route path="question2" element={<Question key={1} game={game[1]}/>}/>
                <Route path="question3" element={<Question key={2} game={game[2]}/>}/>
                <Route path="question4" element={<Question key={3} game={game[3]}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

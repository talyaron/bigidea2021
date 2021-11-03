import { useState } from 'react';
import './HideWord.css';

<<<<<<< HEAD
let SecWord = []

let hiddenElements;



function HideWord() {



    const [tempArr, setTempArr] = useState([])
    const [color, setColor] = useState('red');
    const [text, setText] = useState();
    const [secWordBlanks, setSecWordBlanks] = useState([]);
    function handleHideWord(ev) {


        ev.preventDefault()
        hiddenElements = ev.target.elements.hidden.value;
        ev.target.style.display = 'none';
        SecWord = hiddenElements.split('')
        console.log(SecWord)
        const secWordBlanksTemp = [];
        
        for (let i = 0; i < SecWord.length; i++) {
            tempArr.push(SecWord[i])
            secWordBlanksTemp[i] = '_'
        }
        console.log(secWordBlanksTemp)
        setSecWordBlanks(secWordBlanksTemp)


    }
    function handleWriting(ev) {
        setText(ev.target.value)
        const lastChar = ev.target.value.slice(-1)

        if (hiddenElements.includes(lastChar)) {
            console.log('YES');
            setColor('green');
        }
        else {
            setColor('red');
        }

    }

    return (
        <div className='hangman'>
            <form onSubmit={handleHideWord}>
                <input type="password" name='hidden' />
                <input type='submit' value='hide' />

            </form>
            <div className='box' style={{ background: color }}></div>
            Type your guess:
            <input type='text' maxLength="1"
                placeholder='Input guess here'
                onKeyUp={handleWriting} />
            <div className='textContainer' id='textbox' />
            {text}
            <div className="wrapper">
                {secWordBlanks.map((letter, index) => {
                    return (<div key={index}>"{letter}"</div>)
                })}
            </div>

        </div>

    )
=======
let SecWord = [];
let secWordBlanks = [];
let hiddenElements;

function HideWord() {
	const [tempArr, setTempArr] = useState([]);
	const [color, setColor] = useState('red');
	const [text, setText] = useState();
	function handleSubmit(ev) {
		ev.preventDefault();
		hiddenElements = ev.target.elements.hidden.value;
		ev.target.style.display = 'none';
		SecWord = hiddenElements.split('');
		console.log(SecWord);

		for (let i = 0; i < SecWord.length; i++) {
			tempArr.push(SecWord[i]);
			secWordBlanks[i] = '_';
		}
		console.log(secWordBlanks);
	}
	function handleWriting(ev) {
		setText(ev.target.value);
		const lastChar = ev.target.value.slice(-1);

		if (hiddenElements.includes(lastChar)) {
			console.log('YES');
			setColor('green');
		} else {
			setColor('red');
		}
	}

	return (
		<div className='hangman'>
			<form onSubmit={handleSubmit}>
				<input type='password' name='hidden' />
				<input type='submit' value='hide' />
			</form>
			<div className='box' style={{ background: color }}></div>
			Type your guess:
			<input
				type='text'
				maxLength='1'
				placeholder='Input guess here'
				onKeyUp={handleWriting}
			/>
			<div className='textContainer' id='textbox' />
			{text}
			<div className='wrapper'>
				{secWordBlanks.map((letter, index) => {
					return <div key={index}>"{letter}"</div>;
				})}
				{/* this dont show up and i cant figure out why???^^^^ */}
			</div>
		</div>
	);
>>>>>>> main
}

export default HideWord;

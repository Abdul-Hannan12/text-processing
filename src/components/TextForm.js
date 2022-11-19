import React, {useState} from 'react';

export default function TextForm(props){

    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleTitleClick = ()=>{
        let textArr = text.match(/\b(\w+)\b/g);
        let newTextArr = [];
        for (let i=0; i<textArr.length; i++){
            newTextArr.push(titleCase(textArr[i]));
        }
        let newText = newTextArr.join(' ');
        setText(newText);
    }

    const handleAlternateClick = () => {
        let newtext = "";
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newtext += text[index].toLowerCase()
            }else {
                newtext += text[index].toUpperCase()
            }
        }
        setText(newtext)
    }

    const handleCopy = ()=>{
        const input = document.getElementsByClassName('mainInput')[0];
        const myText = input.value;
        navigator.clipboard.writeText(myText);
    }

    const handleExtraSpaceClick = ()=>{
        let textArr = text.split(/[ ]+/);
        let newText = textArr.join(' ');
        setText(newText);
    }
    
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }
    
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }

    const titleCase = str => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

    return (
        <div className="container">

            <u><h1 className="heading">Modify Your Text Here</h1></u>

            <input className="mainInput" value={text} onChange={handleOnChange} type="text" placeholder={props.placeholder}/>

            <div className="btns">

            <button onClick={handleUpClick}>Upper Case</button>
            <button onClick={handleLowClick}>Lower Case</button>
            <button onClick={handleTitleClick}>Title Case</button>
            <button onClick={handleAlternateClick}>Alternate Case</button>
            <button onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
            <button onClick={handleCopy}>Copy</button>
            <button onClick={handleClearClick}>Clear</button>

            </div>

            <u><h1 className='heading my'>Summary</h1></u>

            <p><strong>Words:&nbsp;</strong>{(text.endsWith(" ") || text.length === 0) ? text.split(' ').length - 1 : text.split(' ').length}</p>
            <p><strong>Characters:&nbsp;</strong>{text.trim().length}</p>
            <p><strong>Time to read:&nbsp;</strong>{(text.split(' ').length * 0.004 < 1) ? 'less than one ' : Math.floor(text.split(' ').length * 0.004)}{(text.split(' ').length * 0.004 < 2) ? ' minute' : ' minutes'}</p>

        </div>
    );
}
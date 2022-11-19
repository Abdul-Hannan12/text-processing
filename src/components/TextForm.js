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
    
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }

    const titleCase = str => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

    return (
        <div className="container">
            <h1 className="heading">Modify Your Text Here</h1>
            <input className="mainInput" value={text} onChange={handleOnChange} type="text" placeholder={props.placeholder}/>
            <div className="btns">
            <button onClick={handleUpClick}>Upper Case</button>
            <button onClick={handleLowClick}>Lower Case</button>
            <button onClick={handleTitleClick}>Title Case</button>
            </div>
        </div>
    );
}
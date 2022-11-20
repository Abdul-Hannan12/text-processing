import React, {useState} from 'react';

export default function TextForm(props){

    const [text, setText] = useState('');

    const style = {
        'backgroundColor' : props.mode === 'light' ? '#B0B0EE' : '#3d3f58',
        'color': props.mode === 'light' ? 'black' : 'white'
    };

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
        let newText = removeExtraSpaces(text);
        setText(newText);
    }
    
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
    }
    
    const handleOnChange = (e)=>{
        setText(e.target.value);
    }
    
    const handleBtnHover = (e)=>{
        if (props.mode === 'light'){
            e.target.style.background = '#A8A8F0';
        }else{
            e.target.style.background = '#484A64';
        }
    }
    
    const handleBtnMouseLeave = (e)=>{
        if (props.mode === 'light'){
            e.target.style.background = '#B0B0EE';
        }else{
            e.target.style.background = '#3d3f58';
        }
    }

    const titleCase = str => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
    const removeExtraSpaces = str => str.split(/[ ]+/).join(' ');

    return (

        <div className="container">

            <u><h1 className="heading">Modify Your Text Here</h1></u>

            <input className="mainInput" style={{'color': (props.mode === 'light') ? 'black' : 'white'}} value={text} onChange={handleOnChange} type="text" placeholder={props.placeholder}/>

            <div className="btns">

            <button className='btn btn1' style={style} onMouseOver={handleBtnHover} onMouseLeave={handleBtnMouseLeave} onClick={handleUpClick}>Upper Case</button>
            <button className='btn btn2' style={style} onMouseOver={handleBtnHover} onMouseLeave={handleBtnMouseLeave} onClick={handleLowClick}>Lower Case</button>
            <button className='btn btn3' style={style} onMouseOver={handleBtnHover} onMouseLeave={handleBtnMouseLeave} onClick={handleTitleClick}>Title Case</button>
            <button className='btn btn4' style={style} onMouseOver={handleBtnHover} onMouseLeave={handleBtnMouseLeave} onClick={handleAlternateClick}>Alternate Case</button>
            <button className='btn btn5' style={style} onMouseOver={handleBtnHover} onMouseLeave={handleBtnMouseLeave} onClick={handleExtraSpaceClick}>Remove Extra Spaces</button>
            <button className='btn btn6' style={style} onMouseOver={handleBtnHover} onMouseLeave={handleBtnMouseLeave} onClick={handleCopy}>Copy</button>
            <button className='btn btn7' style={style} onMouseOver={handleBtnHover} onMouseLeave={handleBtnMouseLeave} onClick={handleClearClick}>Clear</button>

            </div>

            <u><h1 className='heading my'>Summary</h1></u>

            <p><strong>Words:&nbsp;</strong>{(text.endsWith(" ") || text.length === 0) ? removeExtraSpaces(text).split(' ').length - 1 : removeExtraSpaces(text).split(' ').length}</p>
            <p><strong>Characters:&nbsp;</strong>{text.trim().length}</p>
            <p><strong>Time to read:&nbsp;</strong>{(text.split(' ').length * 0.004 < 1) ? 'less than one ' : Math.floor(text.split(' ').length * 0.004)}{(text.split(' ').length * 0.004 < 2) ? ' minute' : ' minutes'}</p>

        </div>
    );
}
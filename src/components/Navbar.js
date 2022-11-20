
import {Link, NavLink} from 'react-router-dom';

export default function Navbar(props) {

    const anchorStyle = {
        'color': props.mode === 'dark' ? 'white' : 'black'
    }

  return (
    <nav className='nav' style={{'backgroundColor':  props.mode === 'light' ? '#7A81DF' : '#3d3f58'}} >

        <div>

        <h1 className='logo' >TextModifier</h1>

        <NavLink className='navItem' style={anchorStyle} to="/"> Home </NavLink>
        <NavLink className='navItem' style={anchorStyle} to="/about"> About </NavLink>

        </div>

        <div className="switchContainer">
            <p className='darkLabel'>{(props.mode === 'light') ? 'Dark' : 'Light'} Mode</p>
            <label className="switch">
                <input type="checkbox" onClick={props.toggle}/>
                <span className="slider round"></span>
            </label>
        </div>
      
    </nav>
  )
}

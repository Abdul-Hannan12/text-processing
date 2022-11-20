
export default function Navbar(props) {

  return (
    <nav className='nav' style={{'backgroundColor':  props.mode === 'light' ? '#7A81DF' : '#3d3f58'}} >

        <h1>TextModifier</h1>

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

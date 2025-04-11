import React, { useState} from 'react';

function ColorPicker() {

    const [color, setColor] = useState('#FFFFFF');

    const chagneColor = (e) =>{
        setColor(e.target.value);
    }

    const copyColor = (e) => {
        e.target.value = "copied!";
        navigator.clipboard.writeText(color).then(() => {
            alert(`Color ${color} copied to clipboard`);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    return(
        <>
            <h1>Color Picker</h1>
            <hr />
            <br />
            <br />
            <label>Select color : </label>
            <input type = "color" onChange = {(e) => chagneColor(e)} style = {{ width : '200px'}}/>

            <div>
                <label>Selected color : </label>
                <input onClick = {(e) => copyColor(e)} className = "result" value = "copy" readOnly style={{backgroundColor : color}} />  
            </div>
            <br />
            <div className = "result-checker" style={{ backgroundColor: color }} readOnly> 
                <p style={{ color: 'black' }}>BlackText</p>
                <p style={{ color: 'white' }}>WhiteText</p>
                <p style={{ color: 'red' }}>RedText</p>
                <p style={{ color: 'blue' }}>BlueText</p>
                <p style={{ textShadow: '2px 2px 4px #000000', color: 'white' }}>ShadowText</p>
            </div>
        
        </>
    )
}

export default ColorPicker;
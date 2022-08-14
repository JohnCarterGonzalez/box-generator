import React, { useState } from "react";

const Form =(props) => {
    const {boxColor, setBoxColor} = props;
    const [color, setColor] = useState("");

    const boxHandler = (e) => {
        e.preventDefault();
        setBoxColor([...boxColor, color]);
        setColor("");
    }

    return (
        <div>
            <form onSubmit={boxHandler}>
                <div>
                <label>Color: </label>
                <input type="text" value={color} name="color" onChange={(e) => setColor(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}
export default Form;
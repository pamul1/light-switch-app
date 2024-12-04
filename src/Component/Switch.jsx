import { useState } from "react";

const Switch = ({ rounded = false}) => {

    return (
        <label className="switch">
            <input type="button"/>
            <span className="rounded"/>

        </label>
    )
}

export default Switch;
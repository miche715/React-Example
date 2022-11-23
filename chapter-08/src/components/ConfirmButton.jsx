import React from "react";
import { useState } from "react";

function ComfirmButton(props)
{
    const [isConfirmed, setIsConfirmed] = useState(false);

    function handleConfirm()
    {
        setIsConfirmed(!isConfirmed)
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ComfirmButton;
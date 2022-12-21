import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Count(props)
{
    const [count, setCount] = useState();
    const [isMax, setIsMax] = useState();
    const [isMin, setIsMin] = useState();

    useEffect(() => {
        if(count !== undefined)
        {
            console.log(`현재 카운트 = ${count}`);
        }
        else
        {
            setCount(0);
        }
    }, [count]);

    useEffect(() => {
        count >= 10 ? setIsMax(true) : setIsMax(false);
    }, [count])

    useEffect(() => {
        count <= 0 ? setIsMin(true) : setIsMin(false);
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)} disabled={isMax}> +1 </button>
            <button onClick={() => setCount(count - 1)} disabled={isMin}> -1 </button>
        </div>
    )
}

export default Count;
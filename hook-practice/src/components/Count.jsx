import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useCount from "../hooks/useCount";

function Count(props)
{
    const [count, increaseCount, decreaseCount] = useCount(0);
    const [isMax, setIsMax] = useState();
    const [isMin, setIsMin] = useState();

    useEffect(() => {
        console.log(`현재 카운트 = ${count}`);
    }, [count]);

    useEffect(() => {
        count >= 10 ? setIsMax(true) : setIsMax(false);
    }, [count]);

    useEffect(() => {
        count <= 0 ? setIsMin(true) : setIsMin(false);
    }, [count]);

    return (
        <div>
            <button onClick={(event) => increaseCount(event)}> +1 </button>
            <button onClick={(event) => decreaseCount(event)}> -1 </button>
        </div>
    );

    // return (
    //     <div>
    //         <button onClick={increaseCount} disabled={isMax}> +1 </button>
    //         <button onClick={decreaseCount} disabled={isMin}> -1 </button>
    //     </div>
    // );
}

export default Count;
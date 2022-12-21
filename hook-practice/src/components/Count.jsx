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
            console.log(`현재 카운트 = ${count}`);  // 왜 2번 불리지?ㅅㅄㅄㅄㅄㅄㅄㅄㅄㅄㅂㄳㅂ??모르겠다 아니 이제 알겠다. 마운트될때랑 0으로 초기화될 때 호출되는거엿네;
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
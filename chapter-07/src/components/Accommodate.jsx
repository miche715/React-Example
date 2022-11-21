import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useCounter from "../hooks/useCounter";

const CAPACITY = 10;

function Accommodate(props)
{
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{padding: 16}}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;

/*

useState(): MutableLiveData랑 비슷한 것 같다. 컴포넌트가 특정 변수 값을 가지고 있는 듯 하다.
useEffect(): observe랑 비슷한 것 같다. useEffect()는 자신이 구독중인 값이 바뀌면 실행 되는데 딱히 뭘 반환하지는 않는 것 같다.
             useMemoization이 값을 반환하고, useCallback이 함수를 반환하는듯.

*/
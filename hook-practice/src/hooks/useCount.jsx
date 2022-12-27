import { useState } from "react";

function useCount(initialValue)
{
    const [count, setCount] = useState(initialValue);

    const increaseCount = (event) => {
        if(count < 10)
        {
            setCount(count + 1);
        }
        console.dir(event);
    };

    const decreaseCount = (event) => {
        if(count > 0)
        {
            setCount(count - 1);
        }
        console.dir(event);
    };

    return [count, increaseCount, decreaseCount];
}

export default useCount;
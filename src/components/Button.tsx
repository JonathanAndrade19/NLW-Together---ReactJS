import { useState } from "react";

export function Button () {

    const [counter, setCount] = useState(0);

    function increment() {
        setCount(counter + 1 );
        console.log(counter);
    }

    return (
        <button onClick={increment}>
            {counter}
        </button>
    )
}
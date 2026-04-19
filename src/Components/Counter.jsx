import React from "react";
import { useCounterStore } from "../store/counter.store";

function Counter() {
    const { count, increase, decarese, reset } = useCounterStore();
    return (
        <>
            <h2>Counter</h2>
            <h1>Count: {count}</h1>
            <br></br>
            <button onClick={increase}>Increase</button>
            <br></br>
            <button onClick={decarese}>Deacrese</button>
            <br></br>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default Counter;

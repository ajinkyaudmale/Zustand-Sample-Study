import React from "react";
import Counter from "./Components/Counter";
import AppStore from "./Components/App.store";
import Poststore from "./Components/Post.store";
function App() {
    return (
        <>
            {/* <Counter />
            <br />
            <AppStore /> */}

            <Poststore />
        </>
    );
}

export default App;

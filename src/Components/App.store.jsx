import { useAppStore } from "../store/app.store";
function Appstore() {
    const { theme, toggleTheme } = useAppStore();
    return (
        <div>
            <h1>Theme {theme}</h1>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
}

export default Appstore;

import React, {createContext, useContext} from "react";

const ThemeContext = createContext('red');
const App3 = () => {
    const theme = useContext(ThemeContext);
    const style = {
        width:'200px',
        height:'300px',
        background:theme
    }
    return (
        <div style={style}/>
    )
}
export default App3;
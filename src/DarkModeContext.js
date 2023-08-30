import { createContext, useState } from "react";
export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) =>{
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("mode")) || "light" )
    return(
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
    )

}
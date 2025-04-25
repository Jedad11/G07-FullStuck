import { createContext, useState } from "react";

const ThemeContext = createContext(null)

const ThemeProviderContext = ({ children }) => {
    const [isAuth, setAuth] = useState(false)

    const unAuth = () => setAuth(false);

    return (
      <ThemeContext.Provider value={{ isAuth, setAuth, unAuth }}>
        {children}
      </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProviderContext }
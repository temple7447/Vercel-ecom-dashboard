import { createContext, useContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [isClassAdded, setIsClassAdded] = useState(false);

    return (
        <MyContext.Provider value={{ isClassAdded, setIsClassAdded }}>
            {children}
        </MyContext.Provider>
    );
};

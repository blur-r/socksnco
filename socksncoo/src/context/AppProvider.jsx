import { useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
    const [activePanel, setActivePanel] = useState(null)


    return (
        <AppContext.Provider value={{ activePanel, setActivePanel }}>
            {children}
        </AppContext.Provider>
    )
}
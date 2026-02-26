import { useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
    const [open, setOpen] = useState(false)

    return (
        <AppContext.Provider value={{ open, setOpen }}>
            {children}
        </AppContext.Provider>
    )
}
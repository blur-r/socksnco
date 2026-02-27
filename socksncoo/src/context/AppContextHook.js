import { useContext } from "react";
import { AppContext } from "./AppContext";

export function useAppContext() {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error("Use appcontext must be within the useapp provider")
    }

    return context

}
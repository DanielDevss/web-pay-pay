import { createContext } from "react"

type valueContext = {
    handleLogOut: () => void
    token?: string
}

export const authContext = createContext<valueContext>({handleLogOut: () => {}})
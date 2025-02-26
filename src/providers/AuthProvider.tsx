import { ReactNode, useEffect, useState } from "react"
import { authContext } from "@/context/authContext"
import { Cookies } from "react-cookie"
import { Navigate } from "react-router-dom";
import fetching from "@/lib/fetching";
import ScreenLoader from "@/components/ScreenLoader";

const AuthProvider = ({ children }: { children: ReactNode }) => {

    const cookies = new Cookies();

    const [token, setToken] = useState<string | undefined>(cookies.get("token"))
    const [pending, setPending] = useState(true)

    const handleLogOut = () => {
        setToken(undefined)
        cookies.remove("token", { path: "/" })
    }

    useEffect(() => {
        setPending(true)
        const checkAuth = async () => {
            const result : {status: number} | null = await fetching<{status: number}>({
                endpoint: "auth/verify-auth",
                credentials: true,
                method: "POST",
            })

            if (!result || result.status !== 200) {
                setToken(undefined);
                cookies.remove("token");
            }
            setTimeout(() => setPending(false), 2000)
        }
        checkAuth()
    }, [token])

    if(pending) {
        return <ScreenLoader />
    }

    if (!token) {
        return <Navigate to="/iniciar-sesion" />
    }

    return (
        <authContext.Provider value={{ handleLogOut, token }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider

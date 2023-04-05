import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { Contexts } from "../../contexts/Contexts"

export const Logout = () => {
    const { onLogoutClick } = useContext(Contexts);


    useEffect(() => {
        onLogoutClick()
    }, [onLogoutClick])

    return(
        <Navigate to='/' />
    )
}
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Contexts } from "../../contexts/Contexts";

export const RouteGuard = ({
    children,
}) => {
    const { isAuth } = useContext(Contexts)

    if(!isAuth){
        return <Navigate to='/login' />
    }

    return(
        <>
            {children}
        </>
    )
}
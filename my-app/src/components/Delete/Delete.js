import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Contexts } from "../../contexts/Contexts";

export const Delete = () => {
    const { OnDelSubmit } = useContext(Contexts);
    const { postId } = useParams();

    useEffect(() => {
        OnDelSubmit(postId);
    }, [OnDelSubmit]);

    return (
        <Navigate to='/catalog' />
    )
}
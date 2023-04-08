import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const Delete = ({
    OnDelSubmit,
}) => {
    const { postId } = useParams();

    useEffect(() => {
        OnDelSubmit(postId);
    }, [OnDelSubmit]);

    return (
        <Navigate to='/catalog' />
    )
}
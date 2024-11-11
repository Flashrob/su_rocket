import { useParams } from "react-router-dom";

function User() {
    const params = useParams();
    console.log(params)
    return (
        <>
            <h1>Welcome back {params.username}</h1>
            <p>And also to {params.petname}</p>
        </>
    );
}

export default User;
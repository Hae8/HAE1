import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
    const [userProfile, setUserProfile] = useState();
    const { loginUser }= useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (loginUser.id === id) {
            navigate('/profile')
        }
        getInfo();
    }, []);

    const getInfo = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`)
            setUserProfile(res.data.payload);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            {userProfile &&
                <>
                    <h1>{userProfile.email}</h1>
                    <h1>{userProfile.nickname}</h1>
                </>
            }
        </>
    );
}

export default Profile;
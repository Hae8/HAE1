import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileInfo } from "../components/Profile";

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
    }, [id]);

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
                <ProfileInfo user={userProfile} />
            }
        </>
    );
}

export default Profile;
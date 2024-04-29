import { Grid, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiKakaotalk } from "react-icons/si";
import { userApi } from "../api/services/user";

export const ProfileInfo = ({ user }) => {
    const navigate = useNavigate();
    const [followerNum, setFollowerNum] = useState(0);
    const [followingNum, setFollowingNum] = useState(0);
    
    const [followingList, setFollowingList] = useState();
    const [followingOpen, setFollowingOpen] = useState(false);

    const [followerList, setFollowerList] = useState();
    const [followerOpen, setFollowerOpen] = useState(false);
    

    const getFollowerList = async () => {
        const id = user.id;
        const res = await userApi.getFollowers(id);
        setFollowerList(res.payload);
        setFollowerNum(res.payload.length);
    };

    const getFollowingList = async() => {
        const id = user.id;
        const res = await userApi.getFollowings(id);
        setFollowingList(res.payload);
        setFollowingNum(res.payload.length);
    }

    useEffect(()=>{
        getFollowerList();
        getFollowingList();
    }, [])

    const followingToggle = ()=> setFollowingOpen(!followingOpen);
    const followerToggle = () => setFollowerOpen(!followerOpen);
    return (
        <>
            <Grid item sx={{ p: "1.5rem 0rem" }}>
                <Typography variant="h6">{user.nickname}</Typography>
                <Typography color="subColor1.main">{user.email}</Typography>
            </Grid>
            <Grid container px={6}>
                <FollowBox title={"팔로잉"} handleToggle={followingToggle} num={followingNum}/>
                {followingOpen && 
                    <FollowList data={followingList} />
                }
                <FollowBox title={"팔로워"} handleToggle={followerToggle} num={followerNum} />
                {followerOpen &&
                    <FollowList data={followerList} />
                }
            </Grid>
        </>
    )
}
export const FollowList = ({data}) => {
    const navigate = useNavigate();
    return (
        <Grid item xs={12} px={6}>
            <Stack spacing={1}>
                {data.map(u => (
                    <Paper key={u.id} sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        padding: '1rem 3rem',
                        cursor: "pointer"
                    }}
                        onClick={() => navigate(`/profile/${u.id}`)}>
                        <Typography title={u.email}>{u.nickname}</Typography>
                        <Typography>{u.provider !== "local" && <SiKakaotalk />}</Typography>
                    </Paper>
                ))}
            </Stack>
        </Grid>
    )
}
export const FollowBox = ({ title, handleToggle, num }) => {
    const styles = {
        f_title: { padding: "1rem", borderTop: "1px solid #e1e1e1" },
        f_value: { padding: "1rem 2rem", borderTop: "1px solid #e1e1e1", cursor: "pointer" }
    }
    return (
        <>
            <Grid item xs={6}>
                <Typography sx={styles.f_title}>{title}</Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "end" }}>
                <Typography
                    sx={styles.f_value}
                    onClick={handleToggle}
                >{num} ▼</Typography>
            </Grid>
        </>
    )
}
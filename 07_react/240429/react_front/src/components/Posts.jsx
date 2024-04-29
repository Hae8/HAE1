import { Pagination, Button, List, ListItem, ListItemText } from "@mui/material";
import { useAuth } from './../hooks/useAuth';
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { postApi } from "../api/services/post";
import { userApi } from "../api/services/user";

export const PostList = ({ posts, setPosts, showCount }) => {
    const [lastPage, setLastPage] = useState();
    const onPageChange = (e, num) => {
        setCurrentPage(num);
    }
    const navigate = useNavigate();

    useEffect(() => {
        getFollowings();
        const postLen = posts?.length;
        const temp = Math.ceil(postLen / showCount)
        setLastPage(temp);
    }, [posts, showCount]);

    const { loginUser } = useAuth();
    const [currentPage, setCurrentPage] = useState(1);
    const [myFollowing, setMyFollowing] = useState();

    const getFollowings = useCallback(async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/followings/${loginUser?.id}`, {
        });
        setMyFollowing(res.data.payload);
    },[loginUser]);

    const deletePost = (id) => {
        try{
            Swal.fire({
                title: "정말 삭제할까요?",
                text: "이 작업은 되돌릴 수 없습니다!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "네, 삭제합니다.",
                cancelButtonText: "아니요, 삭제하지 않습니다.",
                }).then((result) => {
                if (result.isConfirmed) {
                    postApi.deletePost(id);
                    setPosts(posts.filter(p => p.id !== id));  
                }
            });
        }catch(err) {
            Swal.fire({
                title: "에러 발생",
                text: err.message,
                icon: "error"
            });
        }
    }
    
    const followUser = async (id) => {
        const res = await userApi.followUser(id);
        alert(res.message);
        getFollowings();
    }

    const unfollowUser = async (id) => {
        const res = await userApi.unFollowUser(id);
        alert(res.message);
        getFollowings();
    }

    const modifyPost = (id) => {
        Swal.fire({
            title: '게시글 수정',
            html: `<input id="swal-input1" class="swal2-input">`,
            showCancelButton: true,
            preConfirm: () => {
                const content = document.getElementById('swal-input1').value;
                axios.put(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
                    content,
                }, {
                    headers: {
                        "Authorization": localStorage.getItem("token"),
                    },
                }).then(res => {
                    if (res.data.code === 200) {
                        setPosts(posts.map(p => {
                            if (p.id === id) {
                                return {
                                    ...p,
                                    content,
                                }
                            }
                            return p;
                        }));
                    }
                });
            }
        });
    }

    return (
        <>
            <List
                sx={{
                    minWidth: "300px",
                    margin: "20px 0"
                }}
            >
                {
                    posts && posts
                        .slice(showCount * (currentPage - 1), showCount * (currentPage))
                        .map(p => (
                            <ListItem
                                key={p.id}
                                divider
                                alignItems="flex-start"
                                sx={{
                                    flexDirection: "column",
                                }}
                            >
                                <ListItemText>
                                    <span>{p.User.nickname}</span>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        sx={{marginLeft: "4px"}}
                                        onClick={() => { navigate(`/profile/${p.UserId}`) }}
                                    >
                                            프로필 보기
                                    </Button>
                                    { loginUser?.id && 
                                        <span>
                                        {                                            
                                            parseInt(loginUser.id) === p.UserId ?
                                                <>
                                                <Button
                                                    size="small"
                                                    variant="outlined"
                                                    color="secondary"
                                                    sx={{marginLeft: "4px"}}
                                                    onClick={() => { modifyPost(p.id) }}
                                                >
                                                    수정
                                                </Button>
                                                <Button
                                                    size="small"
                                                    variant="outlined"
                                                    color="warning"
                                                    sx={{marginLeft: "4px"}}
                                                    onClick={() => { deletePost(p.id) }}
                                                >
                                                    삭제
                                                </Button>
                                                </>
                                                :
                                            myFollowing?.findIndex(f => f.id === p.UserId) !== -1 ?
                                                <Button
                                                    size="small"
                                                    color="warning"
                                                    variant="outlined"
                                                    sx={{marginLeft: "4px"}}
                                                    onClick={() => { unfollowUser(p.UserId) }}
                                                >
                                                    팔로우 취소
                                                </Button> :
                                                <Button
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{marginLeft: "4px"}}
                                                    onClick={() => { followUser(p.UserId) }}
                                                >
                                                    팔로우
                                                </Button>
                                        }
                                    </span>
                                    }
                                </ListItemText>
                                <ListItemText>
                                    {p.img && <img src={ `http://localhost:8000/${p.img}`} width='200' alt={"img"} />}
                                    <br/>
                                    <span>
                                        {
                                            p.content.replace(/(\S)#(\S)/g, "$1 #$2").split(/\s/).map((c, idx) => {
                                                if (c.startsWith("#")) {
                                                    return (
                                                        <Button
                                                            key={idx}
                                                            size="small"
                                                            sx={{marginLeft: "2px"}}
                                                            onClick={() => {
                                                                navigate(`/search?hashtag=${c.slice(1)}`);
                                                            }}
                                                        >
                                                            {c}
                                                        </Button>
                                                    );
                                                }
                                                return c;
                                            }
                                        )}
                                    </span>
                                </ListItemText>
                            </ListItem>
                        ))
                }
            </List>
            <Pagination
                count={lastPage || 1}
                defaultPage={1}
                page={currentPage}
                onChange={onPageChange}
            />
        </>
    );
}
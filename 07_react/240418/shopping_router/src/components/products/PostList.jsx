import { styled } from 'styled-components';
import Post from './Post';

const PostList = ({ posts }) => {
    return (
        <StyledPostList>
            {
                posts.length ? 
                posts.map(p => (
                    <Post key={p.id} p={p} />
                ))
                :
                <h2  style={{color:"#D4D4D4"}}>게시물이 없습니다.</h2>
            }
        </StyledPostList>
    );
}

const StyledPostList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default PostList;
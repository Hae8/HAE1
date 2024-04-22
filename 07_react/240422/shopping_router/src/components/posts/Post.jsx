import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { darken } from 'polished';

const Post = ({p}) => {
    const navigate = useNavigate();
    return (
        <StyledPost key={p.id} onClick={()=> navigate(`/posts/${p.id}`)}>
            <div className='id'>{p.id}</div>
            <div className='title'>{p.title}</div>
            <div className='userId'>{p.userId}</div>
            <div className='tag'>
                {p.tags.map((t, idx) => (
                    <span key={idx}>#{t}</span>
                ))}
            </div>
            <div className='reaction'>❤️{p.reactions}</div>
        </StyledPost>
    );
}

const StyledPost = styled.div`
    width: 90%;
    border-bottom: 2px solid #F2F2F2;
    padding: 2rem 1rem;
    display: flex;
    align-items: center;

    .id {
        width: 5%;
        display: flex;
        justify-content: center;

        color:#D4D4D4;
        font-size: xx-large;
    }

    .title {
        width: 50%;
        margin: 0 24px;

        display: flex;
        flex-wrap: wrap;

        font-size: large;
        font-weight: bold;
    }

    .userId {
        width: 10%;
        margin: 0 24px;
        display: flex;
        justify-content: center;
    }

    .tag {
        width: 35%;
        display: flex;
        flex-wrap: wrap;
        span{
            margin: 0 4px;
            color: #3587F2;
        }
    }

    .reaction {
        display: flex;
        justify-content: center;

        width: 5%;
        color: #F23838;
    }
    &:hover {
        
        border-radius: 16px;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    }
    &:active {
        background-color: ${darken(0.0125, "#F2F2F2")};
    }

`
export default Post;
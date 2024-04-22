import styled from "styled-components";
import Board from "./Board";

const BoardList = ({ boards, users }) => {
    return (
        <StyledBoardList>
            {
                boards && users && 
                boards.map(post => (
                    < Board post={post} users={users} key={post.id}/>
                ))
            }
        </StyledBoardList>
    );
}

const StyledBoardList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
    color: #0D0D0D;
    cursor: pointer;

    & .board {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 5px;
        width: 100%;
        border-bottom: 1px solid #0D0D0D15;
        .id {
            width: 10%
        }
        .title {
            width: 70%;
            display: flex;
            justify-content: space-between;
            .like {
                color: #F23838;
            }
        }
        .writer {
            width: 20%;
            text-align: right;
            & > span {
                height: 20px;
                padding: 7px 0 9px;
            }
        }
    }
`

export default BoardList;
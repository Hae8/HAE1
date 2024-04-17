import React, { useEffect, useMemo, useState } from 'react';
import Player from './Player';

const PlayerEffect2 = () => {
    const [like, setLike] = useState(0);
    const [showPlayer, setShowPlayer] = useState(false);

    const likeInfo = useMemo(() => {
        return like === 0 ? '좋아요를 눌러주세요' : `좋아요 ${like}개`
    }, [like]);

    useEffect(() => {
        console.log('useEffect가 실행된다.');
    }, [likeInfo])
    return ( 
        <div>
            {likeInfo}
            <button onClick={() => {setLike(like => like + 1)}}>
            👍
            </button>
            <br />
            <button onClick={() => setShowPlayer(!showPlayer)}>
                보기
            </button>
            { showPlayer && <Player /> }
        </div>
    );
}

export default PlayerEffect2;
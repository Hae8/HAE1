import React, { useState, useEffect } from 'react';


const Player = () => {
    const [playTime, setPlayTime] = useState(0);

    useEffect(() => {
        const playing = setInterval(() => {
            console.log('동영상 재생 중');
            setPlayTime(playTime => playTime + 1);
    }, 1000);

        return () => {
        clearInterval(playing);
        }
    }, []);
    

    return ( 
        <div>
            <h1>동영상이 플레이됩니다. {playTime}초 경과</h1>
        </div>
    );
}

export default Player;
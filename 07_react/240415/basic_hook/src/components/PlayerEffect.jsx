import React, { useState } from 'react';
import Player from './Player';

const PlayerEffect = () => {
    const [showPlayer, setShowPlayer] = useState(false);
    return ( 
        <div>
            <button onClick={() => setShowPlayer(!showPlayer)}>
                보기
            </button>
            { showPlayer && <Player /> }
        </div>
    );
}

export default PlayerEffect;
import React from 'react';

export default function gameOver({ score }) {
    return (
        <div className="gameOver">
            <p>
                Game Over
            </p>
            <p>Score: {score}</p>
        </div>
    );
}

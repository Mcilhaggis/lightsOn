import React from 'react';
import LightBulb from './LightBulb'

const colourOptions = ["red", "blue", "green"]

export default function LightDisplay() {
    return (
        <div className="container">
            {colourOptions.map((colour, index) =>
                <>
                    <div className="unitContainer">
                        <LightBulb
                            colour={colour}
                            key={index} />
                        <button className="btn">Light Up</button>
                    </div>
                </>
            )}

        </div>
    );
}

import React from 'react';
import LightBulb from './LightBulb'

const colourOptions = ["red", "blue", "green"]

export default function LightDisplay() {
    return (
        <div className="container">
            {colourOptions.map((colour, index) =>
                <LightBulb
                    colour={colour}
                    key={index} />
            )}

        </div>
    );
}

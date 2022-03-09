import React, { useState } from 'react';
import LightBulb from './LightBulb'
import Btn from './Btn'

const colourOptions = [
    {
        colour: "red",
        hex: '#ff1177'
    },
    {
        colour: "blue",
        hex: '#5454ff'
    },
    {
        colour: "green",
        hex: '#69ff69'
    }]

const glowColour = '#5454ff'

const glow = `box-shadow: 0 0 0 #fff, 0 0 30px ${glowColour}, 0 0 60px ${glowColour}, 0 0 20px ${glowColour}, 0 0 70px ${glowColour}, 0 0 90px ${glowColour};`

const glowV2 = '@keyframes neon1 { from { box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff1177,  0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177; } to { box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff1177, 0 0 35px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 75px #ff1177; } }'

export default function LightDisplay() {


    const [lightSelection, setLightSelection] = useState(0)

    function lightPicked(id) {
        setLightSelection(id)
    }
    console.log(lightSelection)

    return (
        <div className="container">
            {colourOptions.map(({colour, hex, index}) =>
                <>
                    <div className="unitContainer">
                        <LightBulb
                            colour={colour}
                            key={index}
                            style={glow}
                        />
                        <Btn
                            id={index}
                            key={'btn' + index}
                            selectLight={lightPicked}
                        />
                    </div>
                </>
            )}

        </div>
    );
}

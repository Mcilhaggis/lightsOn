import React, { useState, useEffect } from 'react';
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

export default function LightDisplay() {
    const lightbulbs = document.getElementsByClassName("lightBulb")
    const [seconds, setSeconds] = useState(3);
    const [isActive, setIsActive] = useState(false);
    const [score, setScore] = useState(0)

    function startGame() {
        if(isActive) return
        if(seconds === 0) return 
        setIsActive(true);

        // Add the respective colour class to the light
        for (var i = 0; i < lightbulbs.length; i++) {
            lightbulbs[i].classList.remove("lightOff")
            for (var j = 0; j < colourOptions.length; j++) {
                if (lightbulbs[i].id === j.toString()) lightbulbs[i].classList.add(colourOptions[j].colour)
            }
        }
        startTimers()
    }

    function startTimers() {
        // After a random amount of time between 0-3 seconds remove the colour to turn the light off
        let randomLight = lightbulbs[Math.floor(Math.random() * lightbulbs.length)]
        let randomNumber = Math.floor(Math.random() * (3 - 0.15) + 0.15) + '000'
        setTimeout(function () {
            randomLight.classList.remove(randomLight.classList[1])
        }, `${randomNumber}`);
    }

    function lightPicked(id) {
        // If the light is already on, don't allow action on the light matching the button pressed, otherwise turn the light on
        let lightTurnOn = document.getElementById(id)
        if (lightTurnOn.classList.length === 2 || seconds === 0) return
        lightTurnOn.classList.add(colourOptions[id].colour)
        setScore(score => score + 1)
        startTimers()
    }

    function reset() {
        // Remove colour classes and reset states
        setSeconds(60);
        setIsActive(false);
        setScore(0)
        for (var i = 0; i < lightbulbs.length; i++) {
            lightbulbs[i].classList.remove(lightbulbs[i].classList[1])
        }
    }

    // timer
    useEffect(() => {
        let interval = null;
        if (seconds === 0) {
            clearTimeout()
            setIsActive(false)
        }
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);



    return (
        <div className="container">
            <h1>Keep the lights on!</h1>
            
            <div className="scoreboard">
                <p className="timer">Time: {seconds}</p>
                <p className="score">Score: {score}</p>
            </div>

            <div className="lightsContainer">
                {colourOptions.map(({ colour }, index) =>
                    <div className="lightAndSwitch" key={index}>
                        <LightBulb
                            colour={colour}
                            key={index}
                            id={index}
                        />
                        <Btn
                            id={index}
                            key={'btn' + index}
                            selectLight={lightPicked}
                        />
                    </div>
                )}
            </div>
            <div className="controlContainer">
                <button className="btn controls" id="start" onClick={() => startGame()}>Start</button>
                <button className="btn controls" id="reset" onClick={() => reset()}>Reset</button>
            </div>

        </div>
    );
}

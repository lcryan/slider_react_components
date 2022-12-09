import React from "react";
import './App.css';
import Slider from "./components/Slider";

function App() {
    return (
        <>
            <Slider
                labelText="volume"
                minRange="0"
                maxRange="11"
                nameAttribute="volume-slider"
            />
            <Slider
                labelText="bass"
                minRange="1"
                maxRange="4"
                nameAttribute="bass-slider"
            />
            <Slider
                labelText="treble"
                minRange="0"
                maxRange="5"
                nameAttribute="treble-slider"
                />
        </>
    )

}

export default App;

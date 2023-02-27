import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text1, setText1] = useState("");

    useEffect(() => {
        console.log("COMPONENT MOUNTED");

        return () => {
            console.log("COMPONENT UNMOUNTED");
        };
    }, [] );


    return (
        <div>
            <input onChange={(event => setText1(event.target.value))} />
            <h1> {text1} </h1>
        </div>
    )
}
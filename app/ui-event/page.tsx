'use client';

import { useState } from "react";

export default function Page(){
    const [x,setX] = useState(0); // set x = 0
    const handleClick = () => { // set click event
        setX(x+1);  // after click set x = x +1
    }

    return (
        <div>
            <button className="border border-black p-2 bg-lime-300 m-1" 
            onClick={()=> handleClick()}>
                Click
            </button>
            <div>
                x = {x}
            </div>
        </div>
    )
}
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from "react";

export default function Checkbox(){
    const [javaChecked, setJavaChecked] = useState(false);
    const [phpChecked, setPhpChecked] = useState(false);
    const [csChecked, setCsChecked] = useState(false);

    const handleJavaChecked = (e:any) => setJavaChecked(e.target.checked);
    const handlePhpChecked = (e:any) => setPhpChecked(e.target.checked);
    const handleCSChecked = (e:any) => setCsChecked(e.target.checked);
    return(
        <>
            <input 
            checked={javaChecked}
            onChange={handleJavaChecked}
            type="checkbox"/>
            <input 
            checked={phpChecked}
            onChange={handlePhpChecked}
            type="checkbox"/>
            <input 
            checked={csChecked}
            onChange={handleCSChecked}
            type="checkbox"/>

            <div>
                <div>Your Selected Items</div>
                <div>Java Checked : {javaChecked.toString()}</div>
                <div>Java Checked : {phpChecked.toString()}</div>
                <div>Java Checked : {csChecked.toString()}</div>
            </div>
        </>
    );
}
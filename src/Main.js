import React, { useEffect, useState } from "react";
import dice from "./images/icon-dice.svg"
import deviderD from "./images/pattern-divider-desktop.svg"
import deviderM from "./images/pattern-divider-mobile.svg"
import axios from "axios";
const App = () => {
    const [advice, setAdvice] = useState({})
    console.log(advice)
    const apiGetAdvice = () => {
        axios.get(`https://api.adviceslip.com/advice`)
            .then((response) => {
                setAdvice(response.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
    useEffect(() => {
        apiGetAdvice()
    }, [])
    return (
        <div className="max-w-[1440px] h-screen w-screen m-auto bg-[#1f2632] flex justify-center items-center">
            <div className="w-2/6 h-2/6 bg-[#323a49] m-auto rounded-2xl flex flex-col  items-center relative">
                <h2 className="text-[#52ffa8] py-10 text-xs  font-Manrope tracking-[3px]  uppercase">Advice # {advice?.slip?.id} </h2>
                <p className="text-[#cee3e9] text-2xl min-h-[40%] font-Manrope max-h-[40%] max-w-[80%] text-center">"{advice?.slip?.advice}"</p>
                <img src={deviderD} className="py-5 max-w-[80%] dragable" alt="devider" draggable="false"/>
                <div className="bg-[#52ffa8] absolute h-14 w-14 rounded-full -bottom-7 m-auto flex justify-center items-center" >
                    <img src={dice} alt="dice" />
                </div>
            </div>
        </div>
    );
};

export default App;

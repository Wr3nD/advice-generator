import React, { useEffect, useState } from "react";
import dice from "./images/icon-dice.svg"
import deviderD from "./images/pattern-divider-desktop.svg"
import deviderM from "./images/pattern-divider-mobile.svg"
import axios from "axios";
const App = () => {
    const [advice, setAdvice] = useState({})
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 376) {
            setMobile(true);
        }
    }, []);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 376) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


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
        <div className="max-w-[1440px] h-screen w-screen m-auto bg-[#1f2632] flex flex-col justify-center items-center">
            <div className={mobile ? "w-[90%] m-auto bg-[#323a49] h-[320px] rounded-2xl flex flex-col  items-center relative" : "w-2/6 h-2/6 bg-[#323a49] m-auto rounded-2xl flex flex-col  items-center relative"}>
                <h2 className="text-[#52ffa8] pt-10 pb-6 md:pb-8 text-xs  font-Manrope tracking-[3px]  uppercase">Advice # {advice?.slip?.id} </h2>
                <p className="text-[#cee3e9] text-2xl min-h-[40%] font-Manrope max-h-[40%] max-w-[80%] text-center">"{advice?.slip?.advice}"</p>
                <img src={mobile ? deviderM : deviderD} className="py-10 md:py-5 max-w-[80%] dragable" alt="devider" draggable="false" />
                <div className="bg-[#52ffa8] absolute h-14 w-14 rounded-full -bottom-7 m-auto flex justify-center items-center cursor-pointer shadow-[0_px0_px_0px_30px]  hover:shadow-neon-green" onClick={() => apiGetAdvice()} >
                    <img src={dice} alt="dice" />
                </div>
            </div>
            <div className={mobile ? "attribution mt-5" : "attribution"}>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Vít Radosta</a>.
            </div>
        </div >
    );
};

export default App;

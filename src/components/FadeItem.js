import { FadeUp } from 'happy-helium'
import React from 'react'
const heliumOptions = {
    speed: 450,
    easing: 'ease',
    transitionDistance: 300,
    delay: 40,
    animation: true,
    offset: 20 //based on percentage from bottom of browser window
}
const transDistance = 100
export default function FadeItem({ title, logo, style, mobile, delay, className, onClick }) {
    return (
        <FadeUp
            {...heliumOptions}
            delay={delay}
            transitionDistance={transDistance}>
            <div className="indiHolder" style={style} onClick={onClick}>
                <img src={logo} className={className} style={{ width: mobile ? '13vw' : '8vw', maxHeight: 200 }} />
                <text className="wordProps" style={mobile ? { width: 50, opacity:1, fontSize:10 }:{}}>{title}</text>
            </div>
        </FadeUp >
    )
}
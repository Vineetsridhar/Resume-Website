import React, { Component } from 'react'
import './HomeScreen.css'
import headshot from './assets/headshot.png'
export default function HomeScreen({pageShow, handleClick}) {
        return (
            <div className="viewPort">
                <img className="imgProps" src={headshot} style={{ borderRadius: 800, marginLeft: 70, justifySelf: '' }} />
                <div style={{ marginLeft: 100 }}>
                    <div className="titleText">
                        Vineet Sridhar
                </div>
                    <div className="abtText">
                        About me
                    </div>
                    {/* <div className="line2" /> */}
                    <div className="bioText">
                        I am a 19 year old developer from<br />
                        Woodbridge, New Jersey. I make<br />
                        awesome mobile applications using<br />
                        frameworks like Android Studio and<br />
                        Flutter. I am eager to learn new<br />
                        things and make great applications.<br />
                    </div>
                    <div className="buttonProps" style={{ cursor: 'pointer', border: '2px solid #e3c4a8', borderRadius: 10, }}
                    onClick={handleClick}>
                        Learn More →
                    </div>
                </div>

            </div>
        )
    }



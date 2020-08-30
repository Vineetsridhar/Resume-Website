import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn } from 'happy-helium'

export default function TitleScreen() {
    return (
        <div className="viewport">
            <div className="line" />

            <img src={images.squat}
                style={{ borderRadius: '8vw' }} className="pic" />

            <text className="titleText">Vineet Sridhar</text>

            <text className="subtitleText">Personal Resume</text>

            <div className="iconHolder">

                <Link to="projects" spy={true}
                    smooth={true}
                    duration={1200}>
                    <ZoomIn>
                        <div className="indiHolder" >
                            <img style={{ cursor: 'pointer' }} src={images.code} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Projects</text>
                        </div>
                    </ZoomIn>
                </Link>
                <Link to="skills" spy={true}
                    smooth={true}
                    duration={1900}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={images.activity} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Skills</text>
                        </div>
                    </ZoomIn>
                </Link>

                <Link to="education" spy={true}
                    smooth={true}
                    duration={2500}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={images.hat} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Education</text>
                        </div>
                    </ZoomIn>
                </Link>

                <Link to="activities" spy={true}
                    smooth={true}
                    duration={2000}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={images.bulb} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Activities</text>
                        </div>
                    </ZoomIn>
                </Link>
                
                <Link to="contact" spy={true}
                    smooth={true}
                    duration={2500}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={images.contact} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Contact</text>
                        </div>
                    </ZoomIn>
                </Link>
            </div>
            <img className="arrow" src={images.arrow} alt="arrow" />
        </div>
    )
}


import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn } from 'happy-helium'

export default function TitleScreen({ mobile }) {
    let itemStyle = {
        cursor: 'pointer', width: mobile ? '10vw' : '6vw'
    }
    let wordStyle = {
        top: 5,
        marginBottom: '10px',
        fontSize:'10',
        cursor: 'pointer',
        opacity:1
    }
    return (
        <div className="sectionViewport">
            {mobile ? null : <div className="line" />}

            <img src={images.squat}
                className="pic" style={mobile ? { width: '50vw', height: '50vw', borderRadius: '25vw', objectFit: 'contain' } : {}} />

            <text className="titleText" style={mobile ? { fontSize: '8vw' } : {}}>Vineet Sridhar</text>

            <text className="subtitleText" style={mobile ? { fontSize: '6vw' } : {}}>Personal Resume</text>

            <div className="iconHolder" style={mobile ? { display: 'flex', flexDirection:'column' } : {}}>

                <Link to="projects" spy={true}
                    smooth={true}
                    duration={1200}>
                    <ZoomIn>
                        <div className="indiHolder" >
                            <img style={itemStyle} src={images.code} className="picProps" />
                            <text style={mobile? wordStyle : { cursor: 'pointer' }} className="wordProps">Projects</text>
                        </div>
                    </ZoomIn>
                </Link>
                <Link to="skills" spy={true}
                    smooth={true}
                    duration={1900}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={itemStyle} src={images.activity} className="picProps" />
                            <text style={mobile? wordStyle : { cursor: 'pointer' }} className="wordProps">Skills</text>
                        </div>
                    </ZoomIn>
                </Link>

                <Link to="education" spy={true}
                    smooth={true}
                    duration={2500}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={itemStyle} src={images.hat} className="picProps" />
                            <text style={mobile? wordStyle : { cursor: 'pointer' }} className="wordProps">Education</text>
                        </div>
                    </ZoomIn>
                </Link>

                <Link to="activities" spy={true}
                    smooth={true}
                    duration={2000}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={itemStyle} src={images.bulb} className="picProps" />
                            <text style={mobile? wordStyle : { cursor: 'pointer' }} className="wordProps">Activities</text>
                        </div>
                    </ZoomIn>
                </Link>

                <Link to="contact" spy={true}
                    smooth={true}
                    duration={2500}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={itemStyle} src={images.contact} className="picProps" />
                            <text style={mobile? wordStyle : { cursor: 'pointer' }} className="wordProps">Contact</text>
                        </div>
                    </ZoomIn>
                </Link>
                {mobile?<img className="arrow" src={images.arrow} style={mobile?{paddingTop:20}:{}} alt="arrow" />:null}
            </div>
            {mobile?null:<img className="arrow" src={images.arrow} style={mobile?{bottom:-10}:{}} alt="arrow" />}
        </div>
    )
}


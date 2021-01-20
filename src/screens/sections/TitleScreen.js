import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn } from 'happy-helium'

export default function TitleScreen({ mobile }) {
    let itemStyle = {
        cursor: 'pointer', width: mobile ? '15vw' : '6vw'
    }
    let wordStyle = {
        top: 5,
        marginBottom: '10px',
        fontSize: 10,
        cursor: 'pointer',
        opacity: 1
    }
    const links = [
        {
            link: "projects",
            title: "Projects",
            duration: 1200,
            logo: images.code
        },
        {
            link: "education",
            title: "Education",
            duration: 2500,
            logo: images.hat
        },
        {
            link: "activities",
            title: "Activities",
            duration: 2000,
            logo: images.bulb
        },
        {
            link: "contact",
            title: "Contact",
            duration: 2500,
            logo:images.contact
        },
    ]
    return (
        <div className="sectionViewport">
            <img src={images.squat}
                className="pic" style={mobile ? { width: '50vw', height: '50vw', borderRadius: '25vw', objectFit: 'contain' } : {}} />

            <text className="titleText" style={mobile ? { fontSize: '10vw' } : {}}>Vineet Sridhar</text>

            <text className="subtitleText" style={mobile ? { fontSize: '8vw' } : {}}>Personal Resume</text>

            <div className="iconHolder" style={mobile ? { display: 'flex', flexDirection: 'column' } : {}}>
                {
                    links.map(item => (
                        <Link to={item.link} spy={true}
                            smooth={true}
                            duration={item.duration}>
                            <ZoomIn>
                                <div className="indiHolder" >
                                    <img style={itemStyle} src={item.logo} className="picProps" />
                                    <text style={mobile ? wordStyle : { cursor: 'pointer' }} className="wordProps">{item.title}</text>
                                </div>
                            </ZoomIn>
                        </Link>
                    ))
                }

                {mobile ? <img className="arrow" src={images.arrow} style={mobile ? { paddingTop: 20 } : {}} alt="arrow" /> : null}
            </div>
            {mobile ? null : <img className="arrow" src={images.arrow} style={mobile ? { bottom: -10 } : {}} alt="arrow" />}
        </div>
    )
}


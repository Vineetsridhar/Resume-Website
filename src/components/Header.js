import { ZoomIn } from 'happy-helium';
import React from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-scroll';
import images from '../assets';
const links = [
    {
        link: "projects",
        title: "Projects",
        logo: images.activity
    },
    {
        link: "skills",
        title: "Skills",
        logo: images.code
    },
    {
        link: "education",
        title: "Education",
        logo: images.hat
    },
    {
        link: "activities",
        title: "Activities",
        logo: images.bulb
    },
    {
        link: "coursework",
        title: "Coursework",
        logo: images.coursework
    },
    {
        link: "contact",
        title: "Contact Me",
        logo: images.contact
    },
]    
let itemStyle = {
    cursor: 'pointer', paddingBottom: 8
}
export default function Header() {
    return (
        <Headroom
            wrapperStyle={{ marginBottom: 10, zIndex: 10 }}
            style={{
                background: '#212121',
                boxShadow: '10px 10px 10px rgba(0,0,0,0.25)',
            }}
        >

            <div style = {{ 
                display: 'flex',
                flexDirection: 'row', 
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: 16,
                // margin:16
            }}>
                {
                    links.map(item => (
                        <Link to={item.link} spy={false}
                            smooth={true}
                            duration={1000}
                            style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>                                
                                <img style={itemStyle} src={item.logo} className="picProps" />
                                <text className="bioText" style={{ cursor: 'pointer', fontSize:'1em' }} >{item.title}</text>

                        </Link>
                    ))
                }
            </div>
        </Headroom>
    )
}
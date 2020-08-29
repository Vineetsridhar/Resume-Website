import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn, FadeUp, FadeRight } from 'happy-helium'
import Section from '../Section'
import SplitText from '../SplitText'
import ReactTooltip from 'react-tooltip'

export default function ContactScreen() {
    let icons = [
        [images.github, "Github", () => window.open("https://github.com/vineetsridhar", "_blank")],
        [images.email, "Email", () => window.location.href = `mailto:vs583@njit.edu`],
        [images.linkedin, "LinkedIn", () => window.open("https://www.linkedin.com/in/vineet-sridhar-185385177/", "_blank")]
    ]
    return (
        <div className="viewport" style={{ marginTop: 50, height: '100vh', width: '100%', }}>
            <Section
                dark={false}
                id="contact"
                item={<FadeRight transitionDistance={300}>
                    <div className="sectionTitle">
                        Contact Me
                    </div>
                </FadeRight>}
            />
            <div className="iconHolder" >
                {icons.map(item => {
                    return (
                        <ZoomIn>
                            <div className="indiHolder" >
                                <img style={{ cursor: 'pointer', maxHeight:100, maxWidth:100 }} src={item[0]} className="picProps" onClick={item[2]} />
                                <text style={{ cursor: 'pointer' }} className="wordProps">{item[1]}</text>
                            </div>
                        </ZoomIn>
                    )
                })}
            </div>
        </div>
    )
}
import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn, FadeUp } from 'happy-helium'
import Section from '../Section'
import SplitText from '../SplitText'
export default function EducationScreen() {
    const heliumOptions = {
        speed: 450,
        easing: 'ease',
        transitionDistance: 300,
        delay: 40,
        animation: true,
        offset: 50 //based on percentage from bottom of browser window
    }
    const logoOptions = {
        speed: 550,
        easing: 'ease',
        transitionDistance: 200,
        delay: 40,
        animation: true,
        offset: 30 //based on percentage from bottom of browser window
    }

    return (
        <div className="viewport" style={{marginTop: 50}}>
            <Section
                dark={false}
                id="education"
                item={<SplitText word="Education" />}
            />

            <ZoomIn {...heliumOptions}>
                <div className="subtitleText2">
                    <text style={{ fontWeight: 'bold', fontSize: '2.5vw', color: '#ffffff' }}>New Jersey Institute of Technology, </text> Newark, NJ <br />
                    <text style={{ paddingTop: 10 }}>Albert Dorman Honors College<br /></text>
                    <text>B.S. Computer Science<br /></text>
                    <text>Data Science and Business Minor<br /></text>
                    <text>Expected Graduation: May 2022 <br /></text>
                    <text style={{ fontWeight: 'bold', fontSize: '2.5vw', color: '#ffffff' }}> GPA: 3.98/4.0</text>
                </div>
            </ZoomIn>

            <FadeUp {...logoOptions} offset={15}>
                <img src={images.njit} className="njitLogo" />
            </FadeUp>
        </div>
    )
}
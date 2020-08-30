import React from 'react'
import images from '../../assets'
import { ZoomIn, FadeUp, FadeRight } from 'happy-helium'
import Section from '../Section'
const heliumOptions = {
    speed: 450,
    easing: 'ease',
    transitionDistance: 300,
    delay: 40,
    animation: true,
    offset: 20 //based on percentage from bottom of browser window
}
export default function SkillsScreen() {
    const animDelay = 100
    const scale = 50
    const transDistance = 100
    let mainImages = [[images.js, "JavaScript"], [images.python, "Python"]];
    let subImages = [images.java, images.cplus, images.dart, images.bash, images.sql];
    let skills = [images.mongo, images.git, images.graphql, images.aws, images.nodejs, images.react, images.firebase, images.docker]
    return (
        <div className="skillsSection" >
            <Section
                paddingTop={100}
                dark={false}
                id="skills"
                item={<FadeRight transitionDistance={300}>
                    <div className="sectionTitle">
                        Languages
                    </div>
                </FadeRight>}
            />
            <ZoomIn>
                <div
                    className="subtitleText"
                    style={{ textAlign: 'left', width: '100%', }}>
                    My Favorites
                    </div>
            </ZoomIn>
            <div className='iconHolder'>
                {
                    mainImages.map((languageArray, i) =>
                        (<FadeUp
                            {...heliumOptions}
                            delay={animDelay + (i * scale)} transitionDistance={transDistance}>
                            <div className="indiHolder">
                                <img src={languageArray[0]} className="picProps" style={{ width:'8vw', maxHeight: 200 }} />
                                <text className="wordProps" style={{ width:'8vw' }}>{languageArray[1]}</text>
                            </div>
                        </FadeUp>)
                    )
                }
            </div>
            <ZoomIn  {...heliumOptions}>
                <div
                    className="subtitleText"
                    style={{ textAlign: 'left', width: '100%', paddingTop: 16 }}>
                    Others I've worked with
                    </div>
            </ZoomIn>
            <div className="iconHolder">
                {subImages.map((image, i) =>
                    <FadeUp  {...heliumOptions} delay={animDelay + (scale * (i))} transitionDistance={transDistance} >
                        <img src={image} className="smallIcons" style={{ maxHeight: 200 }} />
                    </FadeUp>
                )}
            </div>
            <ZoomIn  {...heliumOptions}>
                <div className="sectionTitle" style={{ fontSize: '6vw' }}>
                    Skills
                </div>
            </ZoomIn>
            <div className="iconHolder">
                {skills.map((image, i) =>
                    <FadeUp {...heliumOptions} delay={animDelay + (scale * (i))} transitionDistance={transDistance} >
                        <img src={image} className="smallIcons" />
                    </FadeUp>
                )}
            </div>
        </div>
    )
}



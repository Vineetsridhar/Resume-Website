import React from 'react'
import { ZoomIn, FadeRight } from 'happy-helium'
import Section from '../Section'
import FadeItem from '../../components/FadeItem'
import ItemContainer from '../../components/ItemContainer'
import { skills, mainImages, subImages } from '../../data/skillData'

const heliumOptions = {
    speed: 450,
    easing: 'ease',
    transitionDistance: 300,
    delay: 40,
    animation: true,
    offset: 20 //based on percentage from bottom of browser window
}
export default function SkillsScreen({ mobile }) {
    const animDelay = 100
    const scale = 50
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

            <ItemContainer
                items={mainImages.map((item, i) =>
                    <FadeItem
                        delay={animDelay + (i * scale)}
                        title={item.title}
                        style={{}}
                        logo={item.logo}
                        className="smallIcons"
                        mobile={mobile} />
                )}
                mobile={mobile}
                title={"My Favorites"} />
            <ItemContainer
                items={subImages.map((item, i) =>
                    <FadeItem
                        delay={animDelay + (i * scale)}
                        title={item.title}
                        style={{}}
                        logo={item.logo}
                        className="smallIcons"
                        mobile={mobile} />
                )}
                mobile={mobile}
                title={"Others I've worked with"} />

   
            <ZoomIn  {...heliumOptions}>
                <div className="sectionTitle" style={{ fontSize: '6vw' }}>
                    Skills
                </div>
            </ZoomIn>

            <ItemContainer
                items={skills.map((item, i) =>
                    <FadeItem
                        delay={animDelay + (i * scale)}
                        title={item.title}
                        style={{}}
                        logo={item.logo}
                        className="smallIcons"
                        mobile={mobile} />
                )}
                mobile={mobile}
                title={""} />


        </div>
    )
}



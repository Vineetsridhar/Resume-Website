import React from 'react'
import { FadeRight } from 'happy-helium'
import Section from '../Section'
import ItemContainer from '../../components/ItemContainer'
import { icons } from '../../data/contactData'
import FadeItem from '../../components/FadeItem'
const scale = 20;
const resumeLink = "https://drive.google.com/file/d/12fHKpoVX7ZUCS_n6YS9fZsrdla5UOcTi/view?usp=sharing"
export default function ContactScreen({ mobile }) {
    return (
        <div className="viewport" style={{ marginTop: 50, height: '100vh', width: '100%', display: 'flex' }}>
            <Section
                dark={false}
                id="contact"
                item={<FadeRight transitionDistance={300}>
                    <div className="sectionTitle">
                        Contact Me
                    </div>
                </FadeRight>}
            />
            <ItemContainer
                items={icons.map((item, i) =>
                    <FadeItem
                        onClick={item.onClick}
                        delay={400 + (i * scale)}
                        title={item.title}
                        style={{ cursor: 'pointer' }}
                        logo={item.logo}
                        className="smallIcons"
                        mobile={mobile} />
                )}
                title={"Find me at"} />
            <div
                className="subtitleText"
                style={{ textAlign: 'center', width: '100%', }}>
                <a href={resumeLink} target="_blank" style={mobile ? { fontSize: '7vw' } : {}}>Download PDF</a>
            </div>
        </div>
    )
}
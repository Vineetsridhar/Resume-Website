import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn, FadeUp, FadeRight } from 'happy-helium'
import Section from '../Section'
import SplitText from '../SplitText'
import ReactTooltip from 'react-tooltip'
import ItemContainer from '../../components/ItemContainer'
import {icons} from '../../data/contactData'
import FadeItem from '../../components/FadeItem'
const scale = 20;
export default function ContactScreen({mobile}) {
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
            <ItemContainer
                items={icons.map((item, i) =>
                    <FadeItem
                        onClick={item.onClick}
                        delay={400 + (i * scale)}
                        title={item.title}
                        style={{cursor:'pointer'}}
                        logo={item.logo}
                        className="smallIcons"
                        mobile={mobile} />
                )}
                title={"Find me at"} />
            <div className="iconHolder" >
                {icons.map(item => {
                    return (
                        <ZoomIn>
                            <div className="indiHolder" >
                                <img style={{ cursor: 'pointer', maxHeight: 200, maxWidth: '6vw' }} src={item[0]} className="picProps" onClick={item[2]} />
                                <text style={{ cursor: 'pointer' }} className="wordProps">{item[1]}</text>
                            </div>
                        </ZoomIn>
                    )
                })}
            </div>
        </div>
    )
}
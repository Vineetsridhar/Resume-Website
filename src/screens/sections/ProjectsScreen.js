import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn, FadeLeft, FadeUp } from 'happy-helium'
import Section from '../Section'
import SplitText from '../SplitText'
import ReactTooltip from 'react-tooltip'
import { projectData } from '../../data/projectData'
import ProjectItem from '../../components/ProjectItem'
export default function ProjectsScreen({ mobile }) {

    return (
        <div className="viewport" style={{ paddingBottom: 50 }} >
            <Section
                paddingTop={10}
                dark={false}
                id="projects"
                item={<FadeLeft transitionDistance={300}>
                    <div className="sectionTitle" style={mobile ? { fontSize: '10vw' } : {}}>
                        Projects
                    </div>
                </FadeLeft>}
            />
            {projectData.map(data =>
                <ProjectItem
                    className={data.className}
                    title={data.title}
                    points={data.points}
                    logos={data.logos}
                    site={data.site}
                    image={data.image}
                    mobile={mobile}
                    tip={data.tip} />
            )}


            <ZoomIn>
                <div className="genericBox clickableBox glydeBox" onClick={() => window.open("https://github.com/Vineetsridhar/sound-data-transfer", "_blank")}>
                    {mobile ? null : <img src={images.datatransfer} className="logo" />}
                    <div className="abt">
                        <span style={{ flexDirection: 'row', display: 'flex', maxHeight: '100px'    }}>
                            <h1 style={{ fontSize: '1.8em', fontWeight: 'bold', color: "#ffffff", minWidth:250}}>Sound Data Transfer</h1>
                            {!mobile &&
                                <img src={images.python} style={{ maxHeight: 100, flex: 'initial' }} className="smallIcons" />
                            }
                        </span>

                        <ul>
                            <li>Program which uses sound waves to transfer data  </li>
                            <li>Worked in a team of two to create an application which uses
                            a speaker and microphone to exchange information </li>
                            <li>Could be useful in places like an arena where a single
                            speaker can broadcast information, and user’s phones can
                            pick up that information using a microphone</li>
                        </ul>
                        <h2 style={{
                            width: '100%',
                            textAlign: 'center',
                            textDecorationLine: 'underline'
                        }}
                            onClick={() => window.open("https://www.youtube.com/watch?v=el1mwSr1VAY", "_blank")}>
                            See it in action!
                            </h2>
                    </div>
                </div>
            </ZoomIn>
        </div>
    )
}
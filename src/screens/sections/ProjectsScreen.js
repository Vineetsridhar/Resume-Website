import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn, FadeLeft, FadeUp } from 'happy-helium'
import Section from '../Section'
import SplitText from '../SplitText'
import ReactTooltip from 'react-tooltip'
import { projectData } from '../../data/projectData'
export default function ProjectsScreen({ mobile }) {

    return (
        <div className="viewport" style={{ paddingBottom: 50 }} >
            <Section
                paddingTop={10}
                dark={false}
                id="projects"
                item={<FadeLeft transitionDistance={300}>
                    <div className="sectionTitle" style={mobile?{fontSize:'10vw'}:{}}>
                        Projects
                    </div>
                </FadeLeft>}
            />
            {projectData.map(data => {
                return (
                    <ZoomIn>
                        <div className={`genericBox clickableBox ${data.className}`}
                            onClick={() => window.open(data.site, "_blank")}
                            data-tip="Click to see our site">
                            {mobile ? null : <img src={data.image} className="logo" />}
                            {data.title === "Glyde" ? <ReactTooltip /> : null}
                            <div className="abt">
                                <span style={{ flexDirection: 'row', display: 'flex', maxHeight: '100px' }}>
                                    <h1 style={{ fontSize: '1.8em', fontWeight: 'bold', color: "#ffffff" }}>{data.title}</h1>
                                    <span style={{ display: 'flex', flexGrow: 1, overflow: 'scroll' }}>
                                        {mobile ? null : data.logos.map((image, i) =>
                                            <img src={image} style={mobile ? { paddingRight: 10, paddingLeft: 10 } : {}} className="smallIcons" />
                                        )}
                                    </span>
                                </span>
                                {data.points.map(point => {
                                    return <p>{point}</p>
                                })}
                            </div>
                        </div>
                    </ZoomIn>
                )
            })}


            <ZoomIn>
                <div className="genericBox clickableBox glydeBox" onClick={() => window.open("https://github.com/Vineetsridhar/sound-data-transfer", "_blank")}>
                    {mobile ? null : <img src={images.datatransfer} className="logo" />}
                    <div className="abt">
                        <span style={{ flexDirection: 'row', display: 'flex', maxHeight: '100px' }}>
                            <h1 style={{ fontSize: '1.8em', fontWeight: 'bold', color: "#ffffff" }}>Sound Data Transfer</h1>
                            {mobile ? null : [images.python].map((image, i) =>
                                <img src={image} className="smallIcons" />
                            )}
                        </span>
                        <p>Program which uses sound waves to transfer data  </p>
                        <p>Worked in a team of two to create an application which uses
                            a speaker and microphone to exchange information </p>
                        <p>Could be useful in places like an arena where a single
                        speaker can broadcast information, and user’s phones can
                            pick up that information using a microphone</p>
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
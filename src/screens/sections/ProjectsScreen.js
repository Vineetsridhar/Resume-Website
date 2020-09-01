import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn, FadeLeft, FadeUp } from 'happy-helium'
import Section from '../Section'
import SplitText from '../SplitText'
import ReactTooltip from 'react-tooltip'

export default function ProjectsScreen({mobile}) {

    return (
        <div className="viewport" style={{ paddingBottom: 50 }} >
            <Section
                paddingTop={10}
                dark={false}
                id="projects"
                item={<FadeLeft transitionDistance={300}>
                    <div className="sectionTitle">
                        Projects
                    </div>
                </FadeLeft>}
            />
            <ZoomIn>
                <div className="genericBox clickableBox glydeBox" 
                onClick={() => window.open("https://glyde.app/", "_blank")}
                data-tip="Click to see our site">
                    {mobile ? null :<img src={images.glyde} className="logo" />}
                    <ReactTooltip />
                    <div className="abt">
                        <span style={{ flexDirection: 'row', display: 'flex', maxHeight: '100px' }}>
                            <h1 style={{ fontSize: '1.8em', fontWeight: 'bold', color: "#ffffff" }}>Glyde</h1>
                            {mobile ? null :[images.javascript, images.react, images.aws, images.mongo].map((image, i) =>
                                <img src={image} style={mobile? {paddingRight:10, paddingLeft:10}:{}} className="smallIcons" />
                            )}
                        </span>
                        <p>Application which is automating the ordering and payment
                            process within various food establishments </p>
                        <p>Part of a 6-member team that is actively developing a
                            mobile application using React Native</p>
                        <p>Experience using AWS Elastic Beanstalk with Node JS and
                            MongoDB database. </p>
                        <p>Implemented an authentication middleware using Amazon
                            Cognito as well as sockets using Socket.IO </p>
                    </div>
                </div>
            </ZoomIn>
            <ZoomIn>
                <div className="genericBox clickableBox dataTransferBox" onClick={() => window.open("https://github.com/SamC12345/MagicMirror", "_blank")}>
                    {mobile? null :<img src={images.hacknjit} className="logo" />}
                    <div className="abt">
                        <span style={{ flexDirection: 'row', display: 'flex', maxHeight: '100px' }}>
                            <h1 style={{ fontSize: '1.8em', fontWeight: 'bold', color: "#ffffff" }}>Magic Mirror</h1>
                            {mobile ? null :[images.python].map((image, i) =>
                                <img src={image} className="smallIcons" />
                            )}
                        </span>
                        <p>A mirror with a display and camera which uses Artificial
                            Intelligence to track moods.  </p>
                        <p>Records emotion on the user’s face as well as performing a
                        sentiment analysis of users’ responses to a verbal
                            conversation had between them and the mirror. </p>
                        <p>Was also able to use OpenCV and Azure Speech SDK to
                        implement live object tracking so that users can directly
                        interact with the mirror by moving their hands or with voice
                            controls </p>
                        <p>This information could prove to be useful for therapists who
                            want to keep tracks of moods of their patients.  </p>
                    </div>
                </div>
            </ZoomIn>
            <ZoomIn>
                <div className="genericBox clickableBox glydeBox" onClick={() => window.open("https://github.com/Vineetsridhar/sound-data-transfer", "_blank")}>
                    {mobile ? null :<img src={images.datatransfer} className="logo" />}
                    <div className="abt">
                        <span style={{ flexDirection: 'row', display: 'flex', maxHeight: '100px' }}>
                            <h1 style={{ fontSize: '1.8em', fontWeight: 'bold', color: "#ffffff" }}>Sound Data Transfer</h1>
                            {mobile ? null :[images.python].map((image, i) =>
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
            <ZoomIn>
                <div className="genericBox clickableBox measurableBox" onClick={() => window.open("https://github.com/Vineetsridhar/measurable", "_blank")}>
                    {mobile ? null : <img src={images.ruler} className="logo" />}
                    <div className="abt">
                        <span style={{ flexDirection: 'row', display: 'flex', maxHeight: '100px' }}>
                            <h1 style={{ fontSize: '1.8em', fontWeight: 'bold', color: "#ffffff" }}>Measurable</h1>
                            {mobile ? null :[images.java, images.android].map((image, i) =>
                                <img src={image} className="smallIcons" />
                            )}
                        </span>
                        <p>Mobile application which leverages the phone’s built in
                        sensors to determine height and distance from objects in
                            the real world</p>
                        <p>Using trigonometric functions, users can use the camera to
                        mark the bottom and top of an object, and the application
                        will be able to calculate its height and distance from the
                            user</p>
                        <p>Could facilitate people like handymen who need estimates
                            of dimensions when giving quotes to clients </p>
                    </div>
                </div>
            </ZoomIn>
        </div>
    )
}
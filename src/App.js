import React, { Component } from 'react';
import './App.css';

import activity from "./assets/activity.png"
import hat from "./assets/hat.png"
import bulb from "./assets/bulb.png"
import code from "./assets/code.png"
import contact from './assets/contact.png'
import njit from "./assets/njit.png"
import java from "./assets/java.png"
import cplus from './assets/cplus.png'
import python from './assets/python.png'
import android from './assets/androids.png'
import csharp from './assets/Csharp.png'
import dart from './assets/dart.png'
import react from './assets/react.png'
import kotlin from './assets/kotlin.png'
import firebase from './assets/firebase.png'
import head from './assets/bino.jpg'
import arrow from './assets/arrow.png'
import html from './assets/html.png'
import css from './assets/css.png'
import photoshop from './assets/photoshop.png'

import SplitText from './SplitText'
import { ZoomIn, FadeUp, FadeRight, FadeLeft, FadeIn } from 'happy-helium'
import "../node_modules/happy-helium/dist/css/happy-helium.css"
import { Link } from 'react-scroll';
import Section from './Section'

import headshot from './assets/headshot.png'


function HomeScreen({ pageShow, handleClick }) {
    return (
        <div className="introViewport">
            <img className="imgProps" src={head} style={{ borderRadius: 800, marginLeft: 70, justifySelf: '' }} />
            <div style={{ marginLeft: 100 }}>
                <div className="introTitleText">
                    Vineet Sridhar
            </div>
                <div className="abtText">
                    About me
                </div>
                {/* <div className="line2" /> */}
                <div className="bioText">
                    I am a 19 year old developer from<br />
                    Woodbridge, New Jersey. I make<br />
                    awesome mobile applications using<br />
                    frameworks like Android Studio and<br />
                    Flutter. I am eager to learn new<br />
                    things and make great applications.<br />
                </div>
                <div className="buttonProps" style={{ cursor: 'pointer', border: '2px solid #e3c4a8', borderRadius: 10, }}
                    onClick={handleClick}>
                    Learn More →
                </div>
            </div>

        </div>
    )
}

function TitleScreen() {
    return (
        <div className="viewport">
            <div className="line" />

            <img src={headshot}
                style={{ borderRadius: 200 }} className="pic" />

            <text className="titleText">Vineet Sridhar</text>

            <text className="subtitleText">Personal Resume</text>

            <div className="iconHolder">

                <Link to="education" spy={true}
                    smooth={true}
                    duration={1200}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={hat} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Education</text>
                        </div>
                    </ZoomIn>
                </Link>
                <Link to="skills" spy={true}
                    smooth={true}
                    duration={1900}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={activity} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Skills</text>
                        </div>
                    </ZoomIn>
                </Link>
                <Link to="projects" spy={true}
                    smooth={true}
                    duration={2500}>
                    <ZoomIn>
                        <div className="indiHolder" >
                            <img style={{ cursor: 'pointer' }} src={code} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Projects</text>
                        </div>
                    </ZoomIn>
                </Link>
                <ZoomIn>
                    <div className="indiHolder">
                        <img style={{ cursor: 'pointer' }} src={bulb} className="picProps" />
                        <text style={{ cursor: 'pointer' }} className="wordProps">Activities</text>
                    </div>
                </ZoomIn>
                <Link to="contact" spy={true}
                    smooth={true}
                    duration={2500}>
                    <ZoomIn>
                        <div className="indiHolderFinal">
                            <img style={{ cursor: 'pointer' }} src={contact} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordPropss">Contact</text>
                        </div>
                    </ZoomIn>
                </Link>
            </div>
            <img className="arrow" src={arrow} alt="arrow" />
        </div>
    )
}

function EducationScreen() {
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
        <div className="viewport">
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
                    <text>Expected: May 2022 <br /></text>
                    <text style={{ fontWeight: 'bold', fontSize: '2.5vw', color: '#ffffff' }}> GPA: 4.0/4.0</text>
                </div>
            </ZoomIn>

            <FadeUp {...logoOptions} offset={15}>
                <img src={njit} className="njitLogo" />
            </FadeUp>
        </div>
    )
}

function SkillsScreen() {
    const animDelay = 100
    const scale = 80
    const transDistance = 200
    return (
        <div className="skillsSection" >
            <Section
                paddingTop={100}
                dark={false}
                id="skills"
                item={<FadeRight transitionDistance={300}>
                    <div className="sectionTitle">
                        Skills
                            </div>
                </FadeRight>}
            />
            <ZoomIn>
                <div
                    className="subtitleText"
                    style={{ textAlign: 'left', width: '100%', paddingLeft: 200 }}>
                    My Favorites
                    </div>
            </ZoomIn>
            <div className='iconHolder' style={{ height: 150 }}>
                <FadeUp
                    delay={animDelay} transitionDistance={transDistance}>
                    <div className="indiHolder">
                        <img style={{ cursor: 'pointer' }} src={java} className="picProps" />
                        <text style={{ cursor: 'pointer' }} className="wordProps">Java</text>
                    </div>
                </FadeUp>
                <FadeUp delay={animDelay + scale} transitionDistance={transDistance}>
                    <div className="indiHolder">
                        <img style={{ cursor: 'pointer' }} src={python} className="picProps" />
                        <text style={{ cursor: 'pointer' }} className="wordProps">Python</text>
                    </div>
                </FadeUp>

                <FadeUp delay={animDelay + (2 * scale)} transitionDistance={transDistance}>
                    <div className="indiHolderFinal">
                        <img style={{ cursor: 'pointer' }} src={android} className="picProps" />
                        <text style={{ cursor: 'pointer' }} className="wordPropss">Android</text>
                    </div>
                </FadeUp>
            </div>
            <ZoomIn>
                <div
                    className="subtitleText"
                    style={{ textAlign: 'left', width: '100%' }}>
                    Others I've worked with
                    </div>
            </ZoomIn>
            <div className="iconHolder">
                <FadeUp delay={animDelay + (scale)} transitionDistance={transDistance} offset={1}>
                    <img src={csharp} className="smallIcons" />
                </FadeUp>
                <FadeUp delay={animDelay + (2 * scale)} transitionDistance={transDistance} offset={1} >
                    <img src={html} className="smallIcons" />
                </FadeUp>
                <FadeUp delay={animDelay + (3 * scale)} transitionDistance={transDistance} offset={1}>
                    <img src={dart} className="smallIcons" />
                </FadeUp>
                <FadeUp delay={animDelay + (4 * scale)} transitionDistance={transDistance} offset={1}>
                    <img src={react} className="smallIcons" />
                </FadeUp>
                <FadeUp delay={animDelay + (4 * scale)} transitionDistance={transDistance} offset={1}>
                    <img src={photoshop} className="smallIcons" />
                </FadeUp>
                <FadeUp delay={animDelay + (5 * scale)} transitionDistance={transDistance} offset={1} >
                    <img src={kotlin} className="smallIcons" />
                </FadeUp>
                <FadeUp delay={animDelay + (6 * scale)} transitionDistance={transDistance} offset={1} >
                    <img src={firebase} className="smallIcons" />
                </FadeUp>
                <FadeUp delay={animDelay + (7 * scale)} transitionDistance={transDistance} offset={1} >
                    <img src={css} className="smallIcons" />
                </FadeUp>
                <FadeUp delay={animDelay + (8 * scale)} transitionDistance={transDistance} offset={1} >
                    <img src={cplus} className="smallIconsFinal" />
                </FadeUp>

            </div>

            <div className="sidebar">
                <div className="sidebartext" cursor="pointer">
                    M<br />O<br />R<br />E<br />
                </div>
                <div className="expandedtext">
                    <text style={{ fontSize: '3.5vw', marginLeft: 20, color: '#212121', marginTop: 30, fontFamily: 'OCR A' }}>Familiar With: <br /></text>
                    <text className="expandedsubtext"><br />> XML <br /><br /></text>
                    <text className="expandedsubtext" >> SQL <br /><br /></text>
                    <text className="expandedsubtext">> Selenium <br /><br /></text>
                    <text className="expandedsubtext">> HTTP Web Requests <br /><br /></text>
                </div>
            </div>
        </div>
    )
}

function ProjectsScreen() {
    return (
        <div>
            <Section
                paddingTop={100}
                dark={false}
                id="projects"
                item={<FadeLeft transitionDistance={300}>
                    <div className="sectionTitle">
                        Projects
                                </div>
                </FadeLeft>}
            />
            <ZoomIn><div className="subtitleText" style={{ textAlign: 'center', fontSize: '4vw' }}>Measurable</div></ZoomIn>
        </div>
    )
}

function ContactScreen() {
    return (
        <div className="contactViewport">
            <Section
                paddingTop={100}
                dark={false}
                id="contact"
                item={<FadeLeft transitionDistance={300}>
                    <div className="sectionTitle">
                        Contact Me
                </div>
                </FadeLeft>}
            />
        </div>
    )
}

class Apps extends Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            pageShow: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        document.title = "Vineet Sridhar"
    }

    handleClick() {
        this.setState({ pageShow: !this.state.pageShow })
    }


    render() {
        return (
            this.state.pageShow ? <HomeScreen pageShow={this.state.pageShow} handleClick={this.handleClick} /> :
                <div className="viewport" style={{ flexGrow: 1 }} >
                    <TitleScreen />
                    <EducationScreen />
                    <SkillsScreen />
                    <ProjectsScreen />
                    <ContactScreen />
                    <div style={{ marginTop: 1000, color: '#FFFFFF' }} />
                </div>
        );
    }
}
export default Apps;
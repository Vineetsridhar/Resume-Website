import React, { Component } from 'react';
import '../styles/App.css';

import SplitText from './SplitText'
import { ZoomIn, FadeUp, FadeRight, FadeLeft, FadeIn } from 'happy-helium'
import "../../node_modules/happy-helium/dist/css/happy-helium.css"
import { Link } from 'react-scroll';
import Section from './Section'
import images from '../assets/index'

import TextField from '@material-ui/core/TextField'
import CustomizedInput from '../CustomInput'
import ReactTooltip from 'react-tooltip'

function HomeScreen({ pageShow, handleClick }) {
    return (
        <div className="introViewport">
            <img className="imgProps" src={images.head} style={{ borderRadius: 800, marginLeft: 70, justifySelf: '' }} />
            <div style={{ marginLeft: 100 }}>
                <div className="introTitleText">
                    Vineet Sridhar
            </div>
                <div className="abtText">
                    About me
                </div>
                {/* <div className="line2" /> */}
                <div className="bioText">
                    I am a 20 year old developer from<br />
                        Woodbridge, New Jersey. I have<br />
                        a passion for learning new things,<br />
                        meeting new people, and going new<br />
                        places. If you need me, you'll <br />
                        probably find me hiking up some mountain,<br />
                        writing some code, or just chillingy<br />
                        with my friends and family
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

            <img src={images.headshot}
                style={{ borderRadius: 200 }} className="pic" />

            <text className="titleText">Vineet Sridhar</text>

            <text className="subtitleText">Personal Resume</text>

            <div className="iconHolder">

                <Link to="education" spy={true}
                    smooth={true}
                    duration={1200}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={images.hat} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Education</text>
                        </div>
                    </ZoomIn>
                </Link>
                <Link to="skills" spy={true}
                    smooth={true}
                    duration={1900}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={images.activity} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Skills</text>
                        </div>
                    </ZoomIn>
                </Link>
                <Link to="projects" spy={true}
                    smooth={true}
                    duration={2500}>
                    <ZoomIn>
                        <div className="indiHolder" >
                            <img style={{ cursor: 'pointer' }} src={images.code} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Projects</text>
                        </div>
                    </ZoomIn>
                </Link>
                <Link to="activities" spy={true}
                    smooth={true}
                    duration={3000}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={images.bulb} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Activities</text>
                        </div>
                    </ZoomIn>
                </Link>
                <Link to="contact" spy={true}
                    smooth={true}
                    duration={2500}>
                    <ZoomIn>
                        <div className="indiHolder">
                            <img style={{ cursor: 'pointer' }} src={images.contact} className="picProps" />
                            <text style={{ cursor: 'pointer' }} className="wordProps">Contact</text>
                        </div>
                    </ZoomIn>
                </Link>
            </div>
            <img className="arrow" src={images.arrow} alt="arrow" />
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
                    <text>Data Science and Business Minor<br /></text>
                    <text>Expected Graduation: May 2022 <br /></text>
                    <text style={{ fontWeight: 'bold', fontSize: '2.5vw', color: '#ffffff' }}> GPA: 3.96/4.0</text>
                </div>
            </ZoomIn>

            <FadeUp {...logoOptions} offset={15}>
                <img src={images.njit} className="njitLogo" />
            </FadeUp>
        </div>
    )
}

function SkillsScreen() {
    const animDelay = 100
    const scale = 50
    const transDistance = 100
    let mainImages = [[images.js, "JavaScript"], [images.python, "Python"]];
    let subImages = [images.java, images.cplus, images.dart, images.bash];
    let skills = [images.mongo, images.git, images.graphql, images.aws, images.nodejs, images.react, images.firebase]
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
                    style={{ textAlign: 'left', width: '100%', paddingLeft: 200 }}>
                    My Favorites
                    </div>
            </ZoomIn>
            <div className='iconHolder' style={{ height: 150 }}>
                {
                    mainImages.map((languageArray, i) =>
                        (<FadeUp
                            delay={animDelay + (i * scale)} transitionDistance={transDistance}>
                            <div className="indiHolder">
                                <img src={languageArray[0]} className="picProps" />
                                <text className="wordProps">{languageArray[1]}</text>
                            </div>
                        </FadeUp>)
                    )
                }
            </div>
            <ZoomIn>
                <div
                    className="subtitleText"
                    style={{ textAlign: 'left', width: '100%', paddingTop: 16 }}>
                    Others I've worked with
                    </div>
            </ZoomIn>
            <div className="iconHolder">
                {subImages.map((image, i) =>
                    <FadeUp delay={animDelay + (scale * (i))} transitionDistance={transDistance} offset={1}>
                        <img src={image} className="smallIcons" />
                    </FadeUp>
                )}
            </div>

            <div className="sectionTitle" style={{ fontSize: '6vw' }}>
                Skills
            </div>

            <div className="iconHolder">
                {skills.map((image, i) =>
                    <FadeUp delay={animDelay + (scale * (i))} transitionDistance={transDistance} offset={1}>
                        <img src={image} className="smallIcons" />
                    </FadeUp>
                )}
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


function ActivitiesScreen() {
    return (
        <div className="ActivityViewport" >
            <Section
                paddingTop={100}
                dark={false}
                id="activities"
                item={<FadeRight transitionDistance={300}>
                    <div className="sectionTitleActivities">
                        Activities And Honors
                </div>
                </FadeRight>}
            />
            <ZoomIn>
                <div className="acmBox">
                    <img src={images.acm} className="acmLogo" />
                    <div className="acmAbt">
                        <text style={{ fontSize: '1.4em', fontWeight: 'bold', color: "#ffffff" }}>Association of Computing Machinery</text>
                        <h3 data-tip="SIG: Special Interest Group">Founder and instructor of SIG Flutter and SIG Android </h3>
                        <p>Met with students once a week
                        for hands-on training with
                        building mobile applications
                        using these frameworks</p>
                        <h3> NJIT Programming Team </h3>
                        <p>Participated in the International
                        Collegiate Programming
                        Competition </p>
                    </div>
                </div>
            </ZoomIn>
            <ZoomIn>
                <div className="woodBox" >
                    <img src={images.woodbridge} className="woodLogo" />
                    <div className="acmAbt">
                        <text style={{ fontSize: '1.4em', fontWeight: 'bold', color: "#ffffff" }}>Woodbridge High School</text>
                        <p /> French honors society
                    <br /> National honors society
                    <br /> President of Freshman Mentors
                    <br /> President of the Future Business Leaders of America
                    <br /> Captain of the Future Problem Solvers Team
                    <br /> Led team to nationals

                </div>
                </div>
            </ZoomIn>
        </div>
    );
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
                    {/* <ProjectsScreen /> */}
                    <ActivitiesScreen />

                    <div style={{ marginTop: 1000, color: '#FFFFFF' }} />
                </div>
        );
    }
}
export default Apps;
import React, { Component } from 'react';
import '../styles/App.css';

import "../../node_modules/happy-helium/dist/css/happy-helium.css"

import HomeScreen from './sections/HomeScreen';
import TitleScreen from './sections/TitleScreen';
import EducationScreen from './sections/EducationScreen';
import SkillsScreen from './sections/SkillScreen';
import ActivitiesScreen from './sections/ActivityScreen';
import ProjectsScreen from './sections/ProjectsScreen';
import ContactScreen from './sections/ContactScreen';
import CourseScreen from './sections/CourseScreen';
import Headroom from 'react-headroom';
import Header from '../components/Header';

const MOBILE_THRESHOLD = 1000;
class Apps extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageShow: false,
            mobile: window.innerWidth <= MOBILE_THRESHOLD,
            scrollPosition: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.resizeHandler = this.resizeHandler.bind(this)
    }

    //https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs
    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight

        const scrolled = winScroll / height
        this.setState({
            scrollPosition: scrolled,
        })
    }

    componentDidMount() {
        document.title = "Vineet Sridhar"
        window.addEventListener('resize', this.resizeHandler);
        window.addEventListener('scroll', this.listenToScroll)
    }

    resizeHandler() {
        let mobile = window.innerWidth <= MOBILE_THRESHOLD;
        if (mobile !== this.state.mobile) {
            this.setState({ mobile })
        }
    }

    handleClick() {
        this.setState({ pageShow: !this.state.pageShow })
    }

    render() {
        return (
            this.state.pageShow ? <HomeScreen pageShow={this.state.pageShow} handleClick={this.handleClick} mobile={this.state.mobile} /> :
                <div style={{ marginBottom: 10 }}>

                    {this.state.scrollPosition > 0.05 && !this.state.mobile && <Header />}

                    <div className="viewport" style={{ flexGrow: 1 }} >
                        {/* <TitleScreen mobile={this.state.mobile} />
                        <ProjectsScreen mobile={this.state.mobile} />
                        <SkillsScreen mobile={this.state.mobile} />
                        <EducationScreen />
                        <ActivitiesScreen mobile={this.state.mobile} />
                        <CourseScreen mobile={this.state.mobile} /> */}
                        <ContactScreen />

                        <div style={{ marginTop: 1000, color: '#FFFFFF' }} />
                    </div>
                </div>
        );
    }
}
export default Apps;
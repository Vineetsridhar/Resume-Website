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
                    <ProjectsScreen />
                    <SkillsScreen />
                    <ActivitiesScreen />
                    <EducationScreen />
                    <ContactScreen />

                    <div style={{ marginTop: 1000, color: '#FFFFFF' }} />
                </div>
        );
    }
}
export default Apps;
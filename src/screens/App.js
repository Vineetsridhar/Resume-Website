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
            pageShow: true,
            mobile: window.innerWidth <= 500
        }
        this.handleClick = this.handleClick.bind(this)
        this.resizeHandler = this.resizeHandler.bind(this)
    }
    componentDidMount() {
        document.title = "Vineet Sridhar"
        window.addEventListener('resize', this.resizeHandler);
    }

    resizeHandler(){
        let mobile = window.innerWidth <= 500;
        if(mobile !== this.state.mobile){
            this.setState({mobile})
        }
    }

    handleClick() {
        this.setState({ pageShow: !this.state.pageShow })
    }

    render() {
        return (
            this.state.pageShow ? <HomeScreen pageShow={this.state.pageShow} handleClick={this.handleClick} mobile={this.state.mobile}/> :
                <div className="viewport" style={{ flexGrow: 1 }} >
                    <TitleScreen mobile={this.state.mobile}/>
                    <ProjectsScreen mobile={this.state.mobile} />
                    <SkillsScreen mobile={this.state.mobile}/>
                    <EducationScreen />
                    <ActivitiesScreen />
                    <ContactScreen />

                    <div style={{ marginTop: 1000, color: '#FFFFFF' }} />
                </div>
        );
    }
}
export default Apps;
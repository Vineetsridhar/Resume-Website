import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn, FadeUp, FadeRight } from 'happy-helium'
import Section from '../Section'
import SplitText from '../SplitText'
import ReactTooltip from 'react-tooltip'

export default function ActivitiesScreen({mobile}) {
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
                <div className="genericBox acmBox">
                    {mobile ? null : <img src={images.acm} className="logo" />}
                    <div className="abt">
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
                        <ReactTooltip />
                    </div>
                </div>
            </ZoomIn>
            <ZoomIn>
                <div className="genericBox woodBox" >
                    {mobile ? null : <img src={images.woodbridge} className="logo" />}
                    <div className="abt">
                        <text style={{ fontSize: '1.4em', fontWeight: 'bold', color: "#ffffff" }}>Woodbridge High School</text>
                        <p /> GPA: 4.0/4.0
                        <br /> French honors society
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
import React from 'react'
import images from '../../assets'
import { Link } from 'react-scroll'
import { ZoomIn, FadeUp, FadeRight } from 'happy-helium'
import Section from '../Section'
import {activitiesData} from '../../data/activitiesData'
import ProjectItem from '../../components/ProjectItem'

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
             {activitiesData.map(data =>
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
        </div>
    );
}
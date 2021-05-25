import React from 'react'
import images from '../../assets'
import { ZoomIn, FadeUp, FadeLeft } from 'happy-helium'
import Section from '../Section'
import ProjectItem from '../../components/ProjectItem'
import { courseData } from '../../data/courseData'

export default function CourseScreen({mobile}) {
    return (
        <div className="viewport" style={{paddingBottom: 50}}>
            <Section
                paddingTop={100}
                dark={false}
                id="coursework"
                item={<FadeLeft transitionDistance={300}>
                    <div className="sectionTitleActivities">
                        Coursework
                </div>
                </FadeLeft>}
            />
             {courseData.map(data =>
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
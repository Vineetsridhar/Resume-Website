import { ZoomIn } from 'happy-helium';
import React from 'react';
import ReactTooltip from 'react-tooltip';

export default function ProjectItem({ className, site, image, title, logos, points, mobile }) {
    return (
        <ZoomIn>
            <div className={`genericBox clickableBox ${className}`}
                onClick={() => window.open(site, "_blank")}
                data-tip="Click to see our site">
                {mobile ? null : <img src={image} className="logo" />}
                {title === "Glyde" ? <ReactTooltip /> : null}
                <div className="abt">
                    <span style={{ flexDirection: 'row', display: 'flex', maxHeight: '100px' }}>
                        <h1 style={{ fontSize: '1.8em', fontWeight: 'bold', color: "#ffffff" }}>{title}</h1>
                        <span style={{ display: 'flex', flexGrow: 1, overflow: 'scroll' }}>
                            {mobile ? null : logos.map((image, i) =>
                                <img src={image} style={{maxHeight:'100%', flex:'initial'}} className="smallIcons" />
                            )}
                        </span>
                    </span>
                    <ul>
                        {points.map(point => {
                            return <li>{point}</li>
                        })}
                    </ul>
                </div>
            </div>
        </ZoomIn>
    )
}
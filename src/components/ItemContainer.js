import { ZoomIn } from 'happy-helium'
import React from 'react'

export default function ItemContainer({ items, title, mobile }) {
    return (
        <>
            <ZoomIn>
                <div
                    className="subtitleText"
                    style={{ textAlign: 'left', width: '100%', }}>
                    <p style={mobile ? { fontSize: '7vw' } : {}}>{title}</p>
                </div>
            </ZoomIn>
            <div 
                className={items.length > 6 ? 'grid' : mobile ? 'grid' : 'iconHolder'}
                style={!mobile && items.length>6 ? {'gridTemplateColumns':'repeat(3, 1fr)'}:{}}>
                {items}
            </div>
        </>
    )
}
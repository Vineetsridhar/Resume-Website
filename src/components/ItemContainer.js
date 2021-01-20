import { ZoomIn } from 'happy-helium'
import React from 'react'

export default function ItemContainer({ items, title }) {
    return (
        <>
            <ZoomIn>
                <div
                    className="subtitleText"
                    style={{ textAlign: 'left', width: '100%', }}>
                    {title}
                    </div>
            </ZoomIn>
            <div className='iconHolder'>
                {items}
            </div>
        </>
    )
}
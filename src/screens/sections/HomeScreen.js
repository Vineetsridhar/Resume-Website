import React from 'react'
import images from '../../assets'

export default function HomeScreen({ pageShow, handleClick }) {
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
                        meeting new people, and going to new<br />
                        places. If you need me, you'll <br />
                        probably find me hiking up a mountain,<br />
                        writing code, or just chillingy<br />
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
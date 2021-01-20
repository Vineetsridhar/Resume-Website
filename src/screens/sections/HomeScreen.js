import React from 'react'
import images from '../../assets'


export default function HomeScreen({ pageShow, handleClick, mobile }) {
    let br = () => {
        return mobile ? null : <br />
    }
    return (
        <div className="introViewport" 
            style={mobile?{
                flexDirection:'column',
                padding:16,
                textAlign:'center'
                }:{}}>
            <img src={images.head} style={{ width: mobile?'85vw':'35%', borderRadius:'100%', marginLeft:mobile?0: 70, objectFit:'contain' }} />
            <div style={{ marginLeft: mobile?0:100, }}>
                <div className="introTitleText" style={mobile? {fontSize: '40px', textAlign:"center"}:{}}>
                    Vineet Sridhar
                </div>
                <div className="abtText" style={mobile? {fontSize: '25px', textAlign:"center"}:{}}>
                    About me
                </div>
                {/* <div className="line2" /> */}
                <div className="bioText" style={mobile? {fontSize: '15px', textAlign:'center'}:{}}>
                    I am a 20 year old developer from {br()}
                        Woodbridge, New Jersey. I have {br()}
                        a passion for learning new things, {br()}
                        meeting new people, and going to new {br()}
                        places. If you need me, you'll {br()}
                        probably find me hiking up a mountain, {br()}
                        writing code, or just chilling {br()}
                        with my friends and family 
                </div>
                {/* {mobile ? <p className="bioText" style={{fontSize: '15px', textAlign:'center'}}>Mobile site coming soon!</p>:  */}
                <div className="buttonProps" style={{ cursor: 'pointer', border: '2px solid #e3c4a8', borderRadius: 10, }}
                    onClick={handleClick}>
                    Learn More →
                </div>
            </div>

        </div>
    )
}
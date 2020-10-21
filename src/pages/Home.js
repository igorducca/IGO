import React from 'react';

import '../stylesheet/home.css';

import coding from '../assets/coding.png'
import fiverr from '../assets/fiverr.png'
import gmail from '../assets/gmail.png'
import igo from '../assets/igo-icon.png'

export default function Home() {

    function mainButtonMouseEnter() {
        var button = document.getElementById('tryMainButton')
        button.innerText = `See me on Fiverr`
    }

    function mainButtonMouseLeave() {
        var button = document.getElementById('tryMainButton')
        button.innerText = `Why don't you try IGO?`
    }

    return (
        <div id="mainContent">
            <header>

                <div className="centered">
                    <img src={igo} style={{height:"150px", width:"150px"}}/>
                </div>

                <div className="centered">
                    <h1 className="mainHeaderTitle">Do you need a good software engineer?</h1>
                </div>
                <div className="centered">
                    <h2>Dude, I know exactly what you need</h2>
                </div>
            </header>

            <div className="mainContentWrapper">
                <div className="centered">
                    <a href="https://www.fiverr.com/igorfelipeduca"><button className="tryMainButton" onMouseEnter={mainButtonMouseEnter}  onMouseLeave={mainButtonMouseLeave} id="tryMainButton">Why dont't you try IGO?</button></a>
                </div>

                <div className="centered">
                    <div className="reasonsDivWrapper">
                        <div className="centered">
                            <h1>But, wait...Why should I try IGO?</h1>
                        </div>

                        <div className="centered">
                            <img src={coding} style={{height:"300px", width:"300px"}}/>
                        </div>

                        <div className="igoBoxesWrapper">
                            <div className="centered">
                                <div className="igoReason">
                                    <div className="centered"><h1>Beauty design?</h1></div>

                                    <h3>Maybe are you looking for a UX design to turn your website more confortable</h3>
                                </div>
                            </div>

                            <div className="centered">
                                <div className="igoReason">
                                    <div className="centered"><h1>Low cost?</h1></div>

                                    <h3>IGO is perfect for you, startup CEO that wants a cheap and awesome website</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contactDiv">
                    <div className="centered">
                        <h2>Like those features? Contact me now!</h2>
                    </div>

                    <div className="socialMediaButtons">
                        <a href="https://www.fiverr.com/igorfelipeduca"><img src={fiverr}/></a>
                        
                        <form action="mailto:igorfelipeduca@gmail.com" method="post" enctype="text/plain">
                            <button><img src={gmail} /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
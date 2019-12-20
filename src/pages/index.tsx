import React from 'react';
import { Row, BlueContainer, ReasonsToJoin, Page, Partners, Column } from '../components/styled_components'

const Landing: React.FC = () => {
    return (
        <div>
            
            <Page>
            <br/><br/><br/><br/>
                {/* top image + welcome text */}
                <Row>
                    <div><h2>THE FUTURE IS NOW!</h2>
                        <br />
                        <p>The Great Minds Challenge is a two-months program</p>
                        <p>which will culminate with a three-day high-powered</p>
                        <p>challenge. The most innovative global thinkers,</p>
                        <p>entrepreneurs and scholars will be brought together</p>
                        <p>under one program to enable the formation of the new</p>
                        <p>generation leaders.</p>
                    </div>
                    <div><img src="https://ik.imagekit.io/sgmianze96/gmc/photos/gmc_home_main_yF8sJ5rVY.png" alt="" /></div>
                </Row>

            </Page>

            {/* container with highlighted text */}
            <BlueContainer>
                <div><h3>45</h3><p>Participants to date</p></div>
                <div><h3>15</h3><p>Participating companies</p></div>
                <div><h3>10</h3><p>Social impact wildcards</p></div>
            </BlueContainer>

            {/* container with reasons to join gmc */}
            <ReasonsToJoin>
                <div className="isometric-and-text-container">
                    <div><img id="personal_dev" src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/personal_development_JjUGqd8Ly.png" alt="" /></div>
                    <div><p>Personal development, systems thinking and</p><p>coaching.</p></div>
                </div>
                <br />

                <div className="isometric-and-text-container">
                    <div><img id="creativity" src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/creativity_XDNpxlBT01.png" alt="" /></div>
                    <div><p>Experience creativity techniques and how to</p><p>continuously innovate.</p></div>
                </div>
                <br />

                <div className="isometric-and-text-container">
                    <div><img id="knowledge" src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/knowledge_jdFMbHhOT.png" alt="" /></div>
                    <div><p>Gain knowledge from inspirational & influential</p><p>leaders.</p></div>
                </div>
                <br />

                <div className="isometric-and-text-container">
                    <div><img id="network" src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/network_v_2x0AEVI.png" alt="" /></div>
                    <div><p>Network, co-create and acquire new mind sets</p><p>with new generation leaders.</p></div>
                </div>
            </ReasonsToJoin>

            {/* partners section */}
            <Partners>
                <h2>Partners</h2>
                <br />
                <div className="partners-row">
                    <div><img id="bidco" src="https://ik.imagekit.io/sgmianze96/gmc/partners/bidco_aFGJES6hj.png" alt="" /></div>
                    <div><img id="klm" src="https://ik.imagekit.io/sgmianze96/gmc/partners/klm_lzJ-GslBP.svg" alt="" /></div>
                    <div><img id="clarity" src="https://ik.imagekit.io/sgmianze96/gmc/partners/clarity_LetuwhYTsW.png" alt="" /></div>
                    <div>< img id="incentro" src="https://ik.imagekit.io/sgmianze96/gmc/partners/incenro_Z-BNqzyGA.png" alt=""/></div>
                    <a className="view_all_btn" href="#"><button>VIEW ALL</button></a>
                </div>
            </Partners>

        </div>



    )
}

export default Landing;
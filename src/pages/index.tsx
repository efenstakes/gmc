import React from 'react';
import { Row, BlueContainer, ReasonsToJoin, Page, Partners} from '../components/styled_components'

const Landing: React.FC = () => {
    return (
        <Page>

            {/* top image + welcome text */}
            <Row>
                <div><p>THE FUTURE IS NOW</p>
                <br/>
                <p>The Great Minds Challenge is a two-months program which</p>
                </div>
                <div><img src="https://ik.imagekit.io/sgmianze96/gmc/photos/gmc_home_main_yF8sJ5rVY.png" alt=""/></div>
            </Row>

            {/* container with highlighted text */}
            <BlueContainer>
                <div><h3>45</h3><p>Participants to date</p></div>
                <div><h3>15</h3><p>Participating companies</p></div>
                <div><h3>10</h3><p>Social impact wildcards</p></div>
            </BlueContainer>

            {/* container with reasons to join gmc */}
            <ReasonsToJoin>
                <div className="isometric-and-text-container">
                    <div><img src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/personal_development_JjUGqd8Ly.png" alt=""/></div>
                    <div>Personal development, systems thinking and coaching</div>
                </div>
                <br />

                <div className="isometric-and-text-container">
                    <div><img src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/creativity_XDNpxlBT01.png" alt=""/></div>
                    <div>Experience creativity techniques and how to continuously innovate</div>
                </div>
                <br />

                <div className="isometric-and-text-container">
                    <div><img src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/knowledge_jdFMbHhOT.png" alt=""/></div>
                    <div>Text here</div>
                </div>
                <br />

                <div className="isometric-and-text-container">
                    <div><img src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/network_v_2x0AEVI.png" alt="" /></div>
                    <div>Text here</div>
                </div>
            </ReasonsToJoin>
            
            {/* partners section */}
            <Partners>
                <p>Partners</p>
                <br />
                <div className="partners-row">
                    <div>Bidco</div>
                    <div>KLM</div>
                    <div>Clarity4D</div>
                    <div>Incentro</div>
                    <div>View All Btn</div>
                </div>
            </Partners>

        </Page>
    )
}

export default Landing;
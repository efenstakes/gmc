import React from 'react';
import { Row, BlueContainer, ReasonsToJoin, Page, Partners} from '../components/styled_components'

const Landing: React.FC = () => {
    return (
        <Page>

            {/* top image + welcome text */}
            <Row>
                <div>Text here</div>
                <div>Image here</div>
            </Row>

            {/* container with highlighted text */}
            <BlueContainer>
                <div><p>Lorem ipsum simut dolor amet</p><p>Lorem ipsum simut dolor amet</p></div>
                <div><p>Lorem ipsum simut dolor amet</p><p>Lorem ipsum simut dolor amet</p></div>
                <div><p>Lorem ipsum simut dolor amet</p><p>Lorem ipsum simut dolor amet</p></div>
            </BlueContainer>

            {/* container with reasons to join gmc */}
            <ReasonsToJoin>
                <div className="isometric-and-text-container">
                    <div>Image here</div>
                    <div>Text here</div>
                </div>
                <br />

                <div className="isometric-and-text-container">
                    <div>Image here</div>
                    <div>Text here</div>
                </div>
                <br />

                <div className="isometric-and-text-container">
                    <div>Image here</div>
                    <div>Text here</div>
                </div>
                <br />

                <div className="isometric-and-text-container">
                    <div>Image here</div>
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
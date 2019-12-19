import React from 'react';
import {Row, Page, ReasonsToJoin} from '../../components/styled_components'

const Challenges: React.FC = () => {
    return(
        <div>
            <Page>
                <Row>
                <div><h2>CHALLENGES</h2>
                        <br />
                        <p>The Great Minds Challenge is a two-months program</p>
                        <p>which will culminate with a three-day high-powered</p>
                        <p>challenge. The most innovative global thinkers,</p>
                        <p>entrepreneurs and scholars will be brought together</p>
                        <p>under one program to enable the formation of the new</p>
                        <p>generation leaders.</p>
                    </div>
                    <div><img id="challenges" src="https://ik.imagekit.io/sgmianze96/gmc/isometrics/challenges_bJA18M2uJ.png" alt="" /></div>
                </Row>
            </Page>

            {/* container with reasons to join gmc */}
            <ReasonsToJoin>
            <h2>ANNUAL CHALLENGES</h2><br/><br/>

            <h2>IN-HOUSE</h2><br/><br/>
            </ReasonsToJoin>

        </div>
    )
}

export default Challenges;
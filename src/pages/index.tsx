import React from 'react';
import styled from 'styled-components'

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

const Row = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    div, p {
        background-color: transparent;
    }
`

const BlueContainer = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    background-color: blue;
    div, p {
        background-color: transparent;
    }
`

const ReasonsToJoin = styled.div`
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: grey;
    div, p {
        background-color: transparent;
    }
    .isometric-and-text-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

const Partners = styled.div `
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .partners-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        div {
            margin: 10px;
        }
    }
`

const Page = styled.div`
    max-width: 80%;
    margin: auto auto;
`
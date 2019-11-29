import React from 'react';
import './styles.css'
import Footer from '../components/footer/footer'

const Landing: React.FC = () => {
    return (
        <div className="page">
            {/* top image + welcome text */}
            <div className="top-img-text-container">
                <div>Text here</div>
                <div>Image here</div>
            </div>

            <br /><br />

            {/* container with highlighted text */}
            <div className="blue-container">
                <div className="text-container"><p>Lorem ipsum simut dolor amet</p><p>Lorem ipsum simut dolor amet</p></div>
                <div className="text-container"><p>Lorem ipsum simut dolor amet</p><p>Lorem ipsum simut dolor amet</p></div>
                <div className="text-container"><p>Lorem ipsum simut dolor amet</p><p>Lorem ipsum simut dolor amet</p></div>
            </div>

            <br /><br />

            {/* container with reasons to join gmc */}
            <div className="reasons-to-join">
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
            </div>
            <br /><br />

            {/* partners section */}
            <div className="partners">
                <p>Partners</p>
                <br />
                <div className="partners-row">
                    <div>Bidco</div>
                    <div>KLM</div>
                    <div>Clarity4D</div>
                    <div>Incentro</div>
                    <div>View All Btn</div>
                </div>
            </div>

            {/* page footer */}
            <Footer />

        </div>
    )
}

export default Landing
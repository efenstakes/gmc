import React from 'react';
import './styles.css'

const Landing: React.FC = () => {
    return (
        <div className="page">
            {/* top image + welcome text */}
            <div className="top-img-text-container">
                <div>Image here</div>
                <div>Text here</div>
            </div>

            {/* container with highlighted text */}
            <div className="blue-container">
                <p>Lorem ipsum simut dolor amet</p>
            </div>

        </div>
    )
}

export default Landing
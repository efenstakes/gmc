import React from 'react';
import './styles.css';

const Footer: React.FC = () => {
    return (
        <div className="footer">

            <div className="copyrights">
                <p>&#169; 2019 GMC, Nairobi. All rights reserved</p>
                <p>Powered by Meridiem.</p>
            </div>

            <div className="social_links">
                <p>FB</p>
                <p>IG</p>
                <p>TW</p>
                <p>IN</p>
            </div>

        </div>
    )
}

export default Footer;
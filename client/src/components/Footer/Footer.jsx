import React from "react";
import { Link } from 'react-router-dom';
import fb from '../../assets/images/fb.svg'
import twitter from '../../assets/images/twitter.svg'
import youtube from '../../assets/images/youtube.svg'
import linkedin from '../../assets/images/linkedin.svg'
import rss from '../../assets/images/rss.svg'
import { Container } from 'react-bootstrap'
import logo from '../../assets/images/logo.png'
import "./style.css";

const FooterComponent = (props) => {
    return (
        <>
            <footer>
                <Container className="p-0">
                    <div className="footer-content">
                        <img src={logo} alt="" />
                        <div className="footer-link">
                            <div className="footer-link-useful">
                                <h2>Useful Links</h2>
                            </div>
                            <div className="footer-link-useful">
                                <a target="blank" href="https://historicaloptiondata.com/">
                                    <span>Home</span>
                                </a>
                            </div>
                            <div className="footer-link-useful">
                                <a target="blank" href="https://historicaloptiondata.com/data-structure">
                                    <span>Data Structure</span>
                                </a>
                            </div>
                            <div className="footer-link-useful">
                                <a target="blank" href="https://historicaloptiondata.com/shop">
                                    <span>Prices</span>
                                </a>
                            </div>
                            <div className="footer-link-useful">
                                <a target="blank" href="https://historicaloptiondata.com/free-data">
                                    <span>Free Data</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
            <div className="sec-row">
                <div className="bc-footer__terms">
                    <p className="copyright">Copyright @ 2022 Histrorical Option Data | Powered by DeltaNeutral.com</p>
                </div>
            </div>
        </>
    )

}

export default FooterComponent;
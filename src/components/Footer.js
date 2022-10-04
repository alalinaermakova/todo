import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2022 Alina Ermakova</p>
            <nav>
                <ul className="footer__container">
                    <li className="footer__item">
                        <a className="footer__link" href="https://github.com/alalinaermakova">My Git</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="https://www.linkedin.com/in/alina-ermakova-91289b1a9/">My LinkedIn</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
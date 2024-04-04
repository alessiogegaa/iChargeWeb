import React, { useState, useEffect } from 'react';
import './header.css';
import jsonData from '../../../../../../site/content/blocks/shared/header.json';
import logo from '../../../../../../site/content/assets/flexiblocks/shared/logo.png';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleStickyState = (status) => {
    setIsSticky(status);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'header nav-sticky' : 'header'}>
      <nav className="nav-container">
        <div className="logoContainer">
          <a href="/">
            <img src={logo} alt={jsonData.images[0].alt} />
          </a>
        </div>
        <ul className="header-links desktopMenu">
          {jsonData.collection.map((item, index) => (
            <li key={index}>
              {item.buttons.map((button, buttonIndex) => (
                <a
                  key={buttonIndex}
                  className={`header-link ${button.variant}`}
                  style={{ color: button.color }}
                  onClick={() => scrollToSection(button.link)}
                >
                  {button.text}
                </a>
              ))}
            </li>
          ))}
        </ul>
        <div className="mobileMenu" onClick={toggleMobileMenu}>
          <div className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>&#9776;</div>
          <div className={`mobile-menu-items ${isMobileMenuOpen ? 'open' : ''}`}>
            {jsonData.collection.map((item, index) => (
              <ul key={index}>
                {item.buttons.map((button, buttonIndex) => (
                  <li key={buttonIndex}>
                    <a
                      className={`header-link ${button.variant}`}
                      style={{ color: button.color }}
                      onClick={() => scrollToSection(button.link)}
                    >
                      {button.text}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
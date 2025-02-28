import { useState, useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useContext(LanguageContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <img src="/timer-icon.svg" alt="FocusTimer Logo" width="30" height="30" />
            <span>FocusTimer</span>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#features">{t.features}</a>
            <a href="#how-it-works">{t.howItWorks}</a>
            <a href="#testimonials">{t.testimonials}</a>
            <a href="#pricing">{t.pricing}</a>
            <a href="#faq">{t.faq}</a>
            <div className="mobile-language-selector">
              <LanguageSelector />
            </div>
          </div>
          
          <div className="nav-buttons">
            <div className="desktop-language-selector">
              <LanguageSelector />
            </div>
            <a href="#download" className="btn">{t.downloadNow}</a>
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </div>
      
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          padding: 15px 0;
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--primary-color);
        }
        
        .logo img {
          margin-right: 10px;
        }
        
        [dir="rtl"] .logo img {
          margin-right: 0;
          margin-left: 10px;
        }
        
        .nav-links {
          display: flex;
          gap: 30px;
        }
        
        .nav-links a {
          color: var(--text-color);
          font-weight: 500;
        }
        
        .nav-links a:hover {
          color: var(--primary-color);
        }
        
        .nav-buttons {
          display: flex;
          align-items: center;
        }
        
        .menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-left: 20px;
        }
        
        [dir="rtl"] .menu-toggle {
          margin-left: 0;
          margin-right: 20px;
        }
        
        .menu-toggle span {
          display: block;
          width: 100%;
          height: 3px;
          background-color: var(--text-color);
          border-radius: 3px;
          transition: var(--transition);
        }
        
        .mobile-language-selector {
          display: none;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            width: 100%;
            background-color: white;
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            gap: 20px;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            transform: translateY(-150%);
            transition: transform 0.3s ease;
            z-index: 999;
          }
          
          .nav-links.active {
            transform: translateY(0);
          }
          
          .menu-toggle {
            display: flex;
          }
          
          .btn {
            padding: 8px 16px;
            font-size: 14px;
          }
          
          .desktop-language-selector {
            display: none;
          }
          
          .mobile-language-selector {
            display: block;
            margin-top: 10px;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
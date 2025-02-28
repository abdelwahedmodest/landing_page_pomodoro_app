import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Footer() {
  const { t } = useContext(LanguageContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <img src="/timer-icon.svg" alt="FocusTimer Logo" width="30" height="30" />
              <span>FocusTimer</span>
            </div>
            <p>{t.heroSubtitle}</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>{t.productFooter}</h4>
            <ul>
              <li><a href="#features">{t.features}</a></li>
              <li><a href="#pricing">{t.pricing}</a></li>
              <li><a href="#download">{t.downloadNow}</a></li>
              <li><a href="#faq">{t.faq}</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>{t.companyFooter}</h4>
            <ul>
              <li><a href="#">{t.aboutUs}</a></li>
              <li><a href="#">{t.careers}</a></li>
              <li><a href="#">{t.blog}</a></li>
              <li><a href="#">{t.press}</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>{t.supportFooter}</h4>
            <ul>
              <li><a href="#">{t.helpCenter}</a></li>
              <li><a href="#">{t.contactUs}</a></li>
              <li><a href="#">{t.privacyPolicy}</a></li>
              <li><a href="#">{t.termsOfService}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} FocusTimer. {t.allRightsReserved}</p>
        </div>
      </div>
      
      <style>{`
        .footer {
          background-color: #1a1a1a;
          color: white;
          padding: 80px 0 30px;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        
        .footer-brand .logo {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .footer-brand .logo span {
          font-size: 1.5rem;
          font-weight: 700;
          margin-left: 10px;
          color: white;
        }
        
        [dir="rtl"] .footer-brand .logo span {
          margin-left: 0;
          margin-right: 10px;
        }
        
        .footer-brand p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 20px;
          max-width: 300px;
        }
        
        .social-links {
          display: flex;
          gap: 15px;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          transition: var(--transition);
        }
        
        .social-links a:hover {
          background-color: var(--primary-color);
          transform: translateY(-3px);
        }
        
        .footer-links h4 {
          font-size: 1.1rem;
          margin-bottom: 20px;
          color: white;
        }
        
        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 10px;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          transition: var(--transition);
        }
        
        .footer-links a:hover {
          color: var(--primary-color);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
          text-align: center;
        }
        
        .footer-bottom p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.9rem;
        }
        
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .footer-brand {
            grid-column: 1 / 3;
          }
        }
        
        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 30px;
          }
          
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-brand {
            grid-column: 1;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
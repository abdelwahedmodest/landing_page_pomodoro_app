import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function CTA() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="cta section" id="download">
      <div className="container">
        <div className="cta-content text-center">
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaSubtitle}</p>
          
          <div className="download-buttons">
            <a href="#" className="download-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" />
              <div className="download-text">
                <span>{t.downloadOnThe}</span>
                <strong>{t.appStore}</strong>
              </div>
            </a>
            
            <a href="#" className="download-btn">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Google Play" />
              <div className="download-text">
                <span>{t.getItOn}</span>
                <strong>{t.googlePlay}</strong>
              </div>
            </a>
          </div>
          
          <div className="desktop-download">
            <p>{t.alsoAvailableForDesktop}</p>
            <div className="desktop-buttons">
              <a href="#" className="btn btn-secondary">{t.windows}</a>
              <a href="#" className="btn btn-secondary">{t.macOS}</a>
              <a href="#" className="btn btn-secondary">{t.linux}</a>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .cta {
          background: linear-gradient(135deg, var(--primary-color) 0%, #ff8066 100%);
          color: white;
        }
        
        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .cta h2 {
          font-size: 2.5rem;
          margin-bottom: 20px;
          color: white;
        }
        
        .cta p {
          font-size: 1.2rem;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .download-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .download-btn {
          display: flex;
          align-items: center;
          background-color: black;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          transition: var(--transition);
        }
        
        .download-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .download-btn img {
          height: 30px;
          margin-right: 10px;
        }
        
        [dir="rtl"] .download-btn img {
          margin-right: 0;
          margin-left: 10px;
        }
        
        .download-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        [dir="rtl"] .download-text {
          align-items: flex-end;
        }
        
        .download-text span {
          font-size: 0.7rem;
          margin-bottom: 2px;
        }
        
        .download-text strong {
          font-size: 1.1rem;
        }
        
        .desktop-download {
          margin-top: 30px;
        }
        
        .desktop-download p {
          font-size: 1rem;
          margin-bottom: 15px;
        }
        
        .desktop-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }
        
        .desktop-buttons .btn {
          background-color: rgba(255, 255, 255, 0.2);
          border-color: transparent;
        }
        
        .desktop-buttons .btn:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
        
        @media (max-width: 768px) {
          .cta h2 {
            font-size: 2rem;
          }
          
          .download-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .desktop-buttons {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
}

export default CTA;
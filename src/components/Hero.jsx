import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Hero() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>{t.heroTitle}</h1>
          <p>{t.heroSubtitle}</p>
          
          <div className="hero-buttons">
            <a href="#download" className="btn">{t.downloadNow}</a>
            <a href="#how-it-works" className="btn btn-secondary">{t.learnMore}</a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">{t.downloads}</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.8/5</span>
              <span className="stat-label">{t.appStoreRating}</span>
            </div>
            <div className="stat">
              <span className="stat-number">30%</span>
              <span className="stat-label">{t.productivityBoost}</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <img src="https://placehold.co/600x400/ff6347/ffffff?text=FocusTimer+App" alt="FocusTimer App Screenshot" />
        </div>
      </div>
      
      <style>{`
        .hero {
          padding: 140px 0 80px;
          background: linear-gradient(135deg, #fff6f5 0%, #fff 100%);
        }
        
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }
        
        .hero-content {
          flex: 1;
        }
        
        h1 {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--text-color);
        }
        
        p {
          font-size: 1.2rem;
          color: var(--light-text);
          margin-bottom: 30px;
          max-width: 600px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
        }
        
        .hero-stats {
          display: flex;
          gap: 40px;
        }
        
        .stat {
          display: flex;
          flex-direction: column;
        }
        
        .stat-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: var(--light-text);
        }
        
        .hero-image {
          flex: 1;
          display: flex;
          justify-content: flex-end;
        }
        
        [dir="rtl"] .hero-image {
          justify-content: flex-start;
        }
        
        .hero-image img {
          max-width: 100%;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        @media (max-width: 992px) {
          .container {
            flex-direction: column;
            text-align: center;
          }
          
          .hero-content {
            order: 1;
          }
          
          .hero-image {
            order: 0;
            justify-content: center;
          }
          
          [dir="rtl"] .hero-image {
            justify-content: center;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .hero-stats {
            justify-content: center;
          }
        }
        
        @media (max-width: 768px) {
          .hero {
            padding: 120px 0 60px;
          }
          
          h1 {
            font-size: 2.2rem;
          }
          
          p {
            font-size: 1rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
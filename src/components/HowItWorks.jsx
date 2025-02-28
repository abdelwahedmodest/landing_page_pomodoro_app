import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function HowItWorks() {
  const { t } = useContext(LanguageContext);

  const steps = [
    {
      number: "01",
      title: t.step1Title,
      description: t.step1Desc
    },
    {
      number: "02",
      title: t.step2Title,
      description: t.step2Desc
    },
    {
      number: "03",
      title: t.step3Title,
      description: t.step3Desc
    },
    {
      number: "04",
      title: t.step4Title,
      description: t.step4Desc
    }
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.howItWorksTitle}</h2>
          <p>{t.howItWorksSubtitle}</p>
        </div>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="app-demo">
          <img src="https://placehold.co/800x450/ff6347/ffffff?text=App+Demo" alt="FocusTimer App Demo" />
          <div className="demo-overlay">
            <a href="#" className="play-button">▶</a>
            <p>{t.seeHowItWorks}</p>
          </div>
        </div>
      </div>
      
      <style>{`
        .how-it-works {
          background-color: var(--light-background);
        }
        
        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 800px;
          margin: 0 auto 60px;
        }
        
        .step {
          display: flex;
          gap: 30px;
          align-items: flex-start;
        }
        
        .step-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          opacity: 0.8;
          min-width: 70px;
          text-align: center;
        }
        
        .step-content h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: var(--text-color);
        }
        
        .step-content p {
          color: var(--light-text);
          margin: 0;
        }
        
        .app-demo {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .app-demo img {
          display: block;
          width: 100%;
        }
        
        .demo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.3);
          transition: var(--transition);
        }
        
        .demo-overlay:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
        
        .play-button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 70px;
          background-color: var(--primary-color);
          color: white;
          border-radius: 50%;
          font-size: 1.5rem;
          margin-bottom: 15px;
          transition: var(--transition);
        }
        
        .play-button:hover {
          transform: scale(1.1);
          background-color: var(--primary-dark);
        }
        
        .demo-overlay p {
          color: white;
          font-weight: 500;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .step {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          
          .step-number {
            min-width: auto;
          }
        }
      `}</style>
    </section>
  );
}

export default HowItWorks;
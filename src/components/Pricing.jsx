import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Pricing() {
  const { t } = useContext(LanguageContext);

  const plans = [
    {
      name: t.free,
      price: "$0",
      period: t.forever,
      description: t.freeDesc,
      features: [
        "Basic timer functionality",
        "Daily statistics",
        "Light & dark mode",
        "3 custom timer presets",
        "Ad-supported"
      ],
      buttonText: t.downloadFree,
      isPopular: false
    },
    {
      name: t.pro,
      price: "4.99MAD",
      period: t.perMonth,
      description: t.proDesc,
      features: [
        "Everything in Free",
        "No ads",
        "Unlimited timer presets",
        "Advanced analytics",
        "Task management",
        "Cross-device sync",
        "Priority support"
      ],
      buttonText: t.getPro,
      isPopular: true
    }
  ];

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.pricingTitle}</h2>
          <p>{t.pricingSubtitle}</p>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.isPopular ? 'popular' : ''}`} key={index}>
              {plan.isPopular && <div className="popular-badge">{t.mostPopular}</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
              <p className="description">{plan.description}</p>
              
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              
              <a href="#download" className={`btn ${!plan.isPopular ? 'btn-secondary' : ''}`}>
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
        
        <div className="guarantee text-center">
          <p>{t.guarantee}</p>
        </div>
      </div>
      
      <style>{`
        .pricing {
          background-color: var(--light-background);
        }
        
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }
        
        .pricing-card {
          background-color: white;
          padding: 40px 30px;
          border-radius: var(--border-radius);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          position: relative;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }
        
        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .pricing-card.popular {
          border: 2px solid var(--primary-color);
          transform: scale(1.05);
          z-index: 1;
        }
        
        .pricing-card.popular:hover {
          transform: scale(1.05) translateY(-5px);
        }
        
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--primary-color);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .pricing-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          text-align: center;
        }
        
        .price {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .amount {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-color);
        }
        
        .period {
          font-size: 1rem;
          color: var(--light-text);
        }
        
        .description {
          text-align: center;
          margin-bottom: 25px;
          color: var(--light-text);
        }
        
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 30px;
          flex-grow: 1;
        }
        
        .features-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          position: relative;
          padding-left: 25px;
        }
        
        [dir="rtl"] .features-list li {
          padding-left: 0;
          padding-right: 25px;
        }
        
        .features-list li:before {
          content: "✓";
          color: var(--primary-color);
          position: absolute;
          left: 0;
        }
        
        [dir="rtl"] .features-list li:before {
          left: auto;
          right: 0;
        }
        
        .pricing-card .btn {
          width: 100%;
        }
        
        .guarantee {
          color: var(--light-text);
          font-size: 0.9rem;
        }
        
        @media (max-width: 992px) {
          .pricing-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .pricing-card.popular {
            grid-row: 1;
            grid-column: 1 / 3;
          }
        }
        
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          
          .pricing-card.popular {
            grid-column: 1;
          }
          
          .pricing-card {
            max-width: 400px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

export default Pricing;
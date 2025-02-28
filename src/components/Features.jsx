import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function Features() {
  const { t } = useContext(LanguageContext);

  const features = [
    {
      icon: "⏱️",
      title: t.customizableTimers,
      description: t.customizableTimersDesc
    },
    {
      icon: "📊",
      title: t.productivityAnalytics,
      description: t.productivityAnalyticsDesc
    },
    {
      icon: "🔔",
      title: t.smartNotifications,
      description: t.smartNotificationsDesc
    },
    {
      icon: "🎯",
      title: t.taskManagement,
      description: t.taskManagementDesc
    },
    {
      icon: "🌙",
      title: t.darkMode,
      description: t.darkModeDesc
    },
    {
      icon: "🔄",
      title: t.crossDeviceSync,
      description: t.crossDeviceSyncDesc
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.featuresTitle}</h2>
          <p>{t.featuresSubtitle}</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .section-header {
          max-width: 700px;
          margin: 0 auto 60px;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: var(--text-color);
        }
        
        .section-header p {
          font-size: 1.1rem;
          color: var(--light-text);
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .feature-card {
          background-color: white;
          padding: 30px;
          border-radius: var(--border-radius);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        
        .feature-card h3 {
          font-size: 1.3rem;
          margin-bottom: 15px;
          color: var(--text-color);
        }
        
        .feature-card p {
          color: var(--light-text);
          font-size: 1rem;
          margin: 0;
        }
        
        @media (max-width: 992px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .section-header h2 {
            font-size: 2rem;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default Features;
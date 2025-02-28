import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

function FAQ() {
  const { t } = useContext(LanguageContext);

  const faqs = [
    {
      question: "What is the Pomodoro Technique?",
      answer: "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are known as 'pomodoros'."
    },
    {
      question: "How does FocusTimer help with productivity?",
      answer: "FocusTimer implements the Pomodoro Technique with customizable work and break intervals. It helps you maintain focus, avoid burnout, and track your productivity over time with detailed analytics."
    },
    {
      question: "Can I customize the timer intervals?",
      answer: "Yes! FocusTimer allows you to customize both work and break intervals to suit your personal productivity style. The Pro version offers unlimited timer presets for different types of tasks."
    },
    {
      question: "Is my data synced across devices?",
      answer: "With the Pro and Team plans, all your data is securely synced across all your devices, allowing you to track your productivity seamlessly whether you're on your phone, tablet, or computer."
    },
    {
      question: "Do you offer a free trial of the Pro version?",
      answer: "Yes, we offer a 14-day free trial of the Pro version with all features included. No credit card required to start your trial."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription at any time from your account settings. If you cancel within 14 days of starting your paid subscription, you're eligible for a full refund."
    }
  ];

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.faqTitle}</h2>
          <p>{t.faqSubtitle}</p>
        </div>
        
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="more-questions text-center">
          <p>{t.moreQuestions}</p>
          <a href="#contact" className="btn btn-secondary">{t.contactSupport}</a>
        </div>
      </div>
      
      <style>{`
        .faq {
          background-color: white;
        }
        
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          margin-bottom: 50px;
        }
        
        .faq-item {
          background-color: var(--light-background);
          padding: 30px;
          border-radius: var(--border-radius);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .faq-item h3 {
          font-size: 1.2rem;
          margin-bottom: 15px;
          color: var(--text-color);
        }
        
        .faq-item p {
          color: var(--light-text);
          margin: 0;
          font-size: 1rem;
          line-height: 1.6;
        }
        
        .more-questions {
          max-width: 500px;
          margin: 0 auto;
        }
        
        .more-questions p {
          margin-bottom: 20px;
          color: var(--light-text);
        }
        
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default FAQ;
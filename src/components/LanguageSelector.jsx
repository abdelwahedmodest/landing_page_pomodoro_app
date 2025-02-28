import { useContext } from 'react';
import { LanguageContext, languages } from '../context/LanguageContext';

function LanguageSelector() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="language-selector">
      {Object.values(languages).map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`lang-btn ${language === lang.code ? 'active' : ''}`}
          aria-label={`Switch to ${lang.name}`}
        >
          {lang.name}
        </button>
      ))}
      
      <style>{`
        .language-selector {
          display: flex;
          gap: 10px;
          margin-right: 20px;
        }
        
        .lang-btn {
          background: transparent;
          border: none;
          color: var(--text-color);
          opacity: 0.7;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 5px;
          transition: var(--transition);
        }
        
        .lang-btn:hover {
          opacity: 1;
          color: var(--primary-color);
        }
        
        .lang-btn.active {
          opacity: 1;
          color: var(--primary-color);
          font-weight: 600;
          border-bottom: 2px solid var(--primary-color);
        }
        
        [dir="rtl"] .language-selector {
          margin-right: 0;
          margin-left: 20px;
        }
        
        @media (max-width: 768px) {
          .language-selector {
            margin: 0;
            justify-content: center;
            padding-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default LanguageSelector;
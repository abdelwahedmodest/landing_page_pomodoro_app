import { useContext } from 'react';
import { LanguageContext, languages } from '../context/LanguageContext';

function LanguageSelector() {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="language-selector">
      <select 
        value={language} 
        onChange={(e) => changeLanguage(e.target.value)}
        aria-label="Select Language"
      >
        {Object.values(languages).map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <style>{`
        .language-selector {
          margin: 10px;
        }
      `}</style>
    </div>
  );
}

export default LanguageSelector;
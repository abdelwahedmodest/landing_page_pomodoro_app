import { createContext, useState, useEffect } from 'react';

// Create language context
export const LanguageContext = createContext();

// Available languages
export const languages = {
  en: {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    fontFamily: "'Poppins', sans-serif"
  },
  fr: {
    code: 'fr',
    name: 'Français',
    dir: 'ltr',
    fontFamily: "'Poppins', sans-serif"
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    fontFamily: "'Noto Sans Arabic', 'Poppins', sans-serif"
  }
};

// Translations
export const translations = {
  en: {
    // Header
    features: "Features",
    howItWorks: "How It Works",
    testimonials: "Testimonials",
    pricing: "Pricing",
    faq: "FAQ",
    downloadNow: "Download Now",
    
    // Hero
    heroTitle: "Boost Your Productivity with FocusTimer",
    heroSubtitle: "The ultimate Pomodoro app that helps you stay focused, manage your time effectively, and accomplish more every day.",
    learnMore: "Learn More",
    downloads: "Downloads",
    appStoreRating: "App Store Rating",
    productivityBoost: "Productivity Boost",
    
    // Features
    featuresTitle: "Powerful Features to Boost Your Productivity",
    featuresSubtitle: "FocusTimer comes packed with everything you need to stay on track and accomplish more.",
    customizableTimers: "Customizable Timers",
    customizableTimersDesc: "Set work and break intervals that fit your personal productivity rhythm.",
    productivityAnalytics: "Productivity Analytics",
    productivityAnalyticsDesc: "Track your focus sessions and see your productivity trends over time.",
    smartNotifications: "Smart Notifications",
    smartNotificationsDesc: "Get gentle reminders when it's time to take a break or get back to work.",
    taskManagement: "Task Management",
    taskManagementDesc: "Organize your tasks and track completion during your Pomodoro sessions.",
    darkMode: "Dark Mode",
    darkModeDesc: "Easy on the eyes with a beautiful dark theme for night-time productivity.",
    crossDeviceSync: "Cross-Device Sync",
    crossDeviceSyncDesc: "Your data syncs seamlessly across all your devices.",
    
    // How It Works
    howItWorksTitle: "How FocusTimer Works",
    howItWorksSubtitle: "The Pomodoro Technique made simple and effective with our intuitive app.",
    step1Title: "Set Your Timer",
    step1Desc: "Choose your work interval (typically 25 minutes) and break time (5 minutes).",
    step2Title: "Focus on Your Task",
    step2Desc: "Work with full concentration until the timer rings.",
    step3Title: "Take a Short Break",
    step3Desc: "Relax and recharge for your next focus session.",
    step4Title: "Repeat the Cycle",
    step4Desc: "After 4 cycles, take a longer break (15-30 minutes).",
    seeHowItWorks: "See how it works in action",
    
    // Testimonials
    testimonialsTitle: "What Our Users Say",
    testimonialsSubtitle: "Join thousands of satisfied users who have boosted their productivity with FocusTimer.",
    appStore: "App Store",
    googlePlay: "Google Play",
    productHunt: "Product Hunt",
    
    // Pricing
    pricingTitle: "Simple, Transparent Pricing",
    pricingSubtitle: "Choose the plan that fits your productivity needs.",
    free: "Free",
    pro: "Pro",
    team: "Team",
    forever: "forever",
    perMonth: "per month",
    perUserMonth: "per user/month",
    freeDesc: "Perfect for getting started with the Pomodoro technique.",
    proDesc: "For serious productivity enthusiasts who want more features.",
    teamDesc: "Ideal for teams looking to boost collective productivity.",
    downloadFree: "Download Free",
    getPro: "Get Pro",
    contactSales: "Contact Sales",
    mostPopular: "Most Popular",
    guarantee: "All plans come with a 14-day money-back guarantee. No questions asked.",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Got questions? We've got answers.",
    moreQuestions: "Still have questions? We're here to help!",
    contactSupport: "Contact Support",
    
    // CTA
    ctaTitle: "Ready to Boost Your Productivity?",
    ctaSubtitle: "Download FocusTimer today and start achieving more with less stress.",
    downloadOnThe: "Download on the",
    appStore: "App Store",
    getItOn: "GET IT ON",
    googlePlay: "Google Play",
    alsoAvailableForDesktop: "Also available for desktop",
    windows: "Windows",
    macOS: "macOS",
    linux: "Linux",
    
    // Footer
    productFooter: "Product",
    companyFooter: "Company",
    supportFooter: "Support",
    aboutUs: "About Us",
    careers: "Careers",
    blog: "Blog",
    press: "Press",
    helpCenter: "Help Center",
    contactUs: "Contact Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    allRightsReserved: "All rights reserved."
  },
  fr: {
    // Header
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    testimonials: "Témoignages",
    pricing: "Tarifs",
    faq: "FAQ",
    downloadNow: "Télécharger",
    
    // Hero
    heroTitle: "Boostez votre productivité avec FocusTimer",
    heroSubtitle: "L'application Pomodoro ultime qui vous aide à rester concentré, à gérer votre temps efficacement et à accomplir plus chaque jour.",
    learnMore: "En savoir plus",
    downloads: "Téléchargements",
    appStoreRating: "Note App Store",
    productivityBoost: "Boost de productivité",
    
    // Features
    featuresTitle: "Des fonctionnalités puissantes pour booster votre productivité",
    featuresSubtitle: "FocusTimer est doté de tout ce dont vous avez besoin pour rester sur la bonne voie et accomplir davantage.",
    customizableTimers: "Minuteries personnalisables",
    customizableTimersDesc: "Définissez des intervalles de travail et de pause qui correspondent à votre rythme de productivité personnel.",
    productivityAnalytics: "Analyses de productivité",
    productivityAnalyticsDesc: "Suivez vos sessions de concentration et observez vos tendances de productivité au fil du temps.",
    smartNotifications: "Notifications intelligentes",
    smartNotificationsDesc: "Recevez des rappels doux lorsqu'il est temps de faire une pause ou de se remettre au travail.",
    taskManagement: "Gestion des tâches",
    taskManagementDesc: "Organisez vos tâches et suivez leur achèvement pendant vos sessions Pomodoro.",
    darkMode: "Mode sombre",
    darkModeDesc: "Facile pour les yeux avec un beau thème sombre pour la productivité nocturne.",
    crossDeviceSync: "Synchronisation multi-appareils",
    crossDeviceSyncDesc: "Vos données se synchronisent parfaitement sur tous vos appareils.",
    
    // How It Works
    howItWorksTitle: "Comment fonctionne FocusTimer",
    howItWorksSubtitle: "La technique Pomodoro rendue simple et efficace avec notre application intuitive.",
    step1Title: "Réglez votre minuterie",
    step1Desc: "Choisissez votre intervalle de travail (généralement 25 minutes) et votre temps de pause (5 minutes).",
    step2Title: "Concentrez-vous sur votre tâche",
    step2Desc: "Travaillez avec une concentration totale jusqu'à ce que la minuterie sonne.",
    step3Title: "Faites une courte pause",
    step3Desc: "Détendez-vous et rechargez-vous pour votre prochaine session de concentration.",
    step4Title: "Répétez le cycle",
    step4Desc: "Après 4 cycles, prenez une pause plus longue (15-30 minutes).",
    seeHowItWorks: "Voir comment ça fonctionne",
    
    // Testimonials
    testimonialsTitle: "Ce que disent nos utilisateurs",
    testimonialsSubtitle: "Rejoignez des milliers d'utilisateurs satisfaits qui ont boosté leur productivité avec FocusTimer.",
    appStore: "App Store",
    googlePlay: "Google Play",
    productHunt: "Product Hunt",
    
    // Pricing
    pricingTitle: "Tarification simple et transparente",
    pricingSubtitle: "Choisissez le forfait qui correspond à vos besoins de productivité.",
    free: "Gratuit",
    pro: "Pro",
    team: "Équipe",
    forever: "pour toujours",
    perMonth: "par mois",
    perUserMonth: "par utilisateur/mois",
    freeDesc: "Parfait pour débuter avec la technique Pomodoro.",
    proDesc: "Pour les passionnés de productivité qui veulent plus de fonctionnalités.",
    teamDesc: "Idéal pour les équipes qui cherchent à booster leur productivité collective.",
    downloadFree: "Télécharger gratuitement",
    getPro: "Obtenir Pro",
    contactSales: "Contacter les ventes",
    mostPopular: "Le plus populaire",
    guarantee: "Tous les forfaits sont accompagnés d'une garantie de remboursement de 14 jours. Sans questions.",
    
    // FAQ
    faqTitle: "Questions fréquemment posées",
    faqSubtitle: "Vous avez des questions ? Nous avons des réponses.",
    moreQuestions: "Vous avez encore des questions ? Nous sommes là pour vous aider !",
    contactSupport: "Contacter le support",
    
    // CTA
    ctaTitle: "Prêt à booster votre productivité ?",
    ctaSubtitle: "Téléchargez FocusTimer aujourd'hui et commencez à accomplir plus avec moins de stress.",
    downloadOnThe: "Télécharger sur",
    appStore: "App Store",
    getItOn: "OBTENIR SUR",
    googlePlay: "Google Play",
    alsoAvailableForDesktop: "Également disponible pour ordinateur",
    windows: "Windows",
    macOS: "macOS",
    linux: "Linux",
    
    // Footer
    productFooter: "Produit",
    companyFooter: "Entreprise",
    supportFooter: "Support",
    aboutUs: "À propos de nous",
    careers: "Carrières",
    blog: "Blog",
    press: "Presse",
    helpCenter: "Centre d'aide",
    contactUs: "Contactez-nous",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    allRightsReserved: "Tous droits réservés."
  },
  ar: {
    // Header
    features: "المميزات",
    howItWorks: "كيف يعمل",
    testimonials: "آراء المستخدمين",
    pricing: "الأسعار",
    faq: "الأسئلة الشائعة",
    downloadNow: "تحميل الآن",
    
    // Hero
    heroTitle: "عزز إنتاجيتك مع فوكس تايمر",
    heroSubtitle: "تطبيق بومودورو المثالي الذي يساعدك على البقاء متركزًا، وإدارة وقتك بفعالية، وإنجاز المزيد كل يوم.",
    learnMore: "اعرف المزيد",
    downloads: "التنزيلات",
    appStoreRating: "تقييم آب ستور",
    productivityBoost: "تعزيز الإنتاجية",
    
    // Features
    featuresTitle: "ميزات قوية لتعزيز إنتاجيتك",
    featuresSubtitle: "يأتي فوكس تايمر مزودًا بكل ما تحتاجه للبقاء على المسار الصحيح وإنجاز المزيد.",
    customizableTimers: "مؤقتات قابلة للتخصيص",
    customizableTimersDesc: "حدد فترات العمل والراحة التي تناسب إيقاع إنتاجيتك الشخصي.",
    productivityAnalytics: "تحليلات الإنتاجية",
    productivityAnalyticsDesc: "تتبع جلسات التركيز الخاصة بك وشاهد اتجاهات إنتاجيتك بمرور الوقت.",
    smartNotifications: "إشعارات ذكية",
    smartNotificationsDesc: "احصل على تذكيرات لطيفة عندما يحين وقت أخذ استراحة أو العودة إلى العمل.",
    taskManagement: "إدارة المهام",
    taskManagementDesc: "نظم مهامك وتتبع إكمالها خلال جلسات بومودورو.",
    darkMode: "الوضع الداكن",
    darkModeDesc: "سهل على العينين مع سمة داكنة جميلة للإنتاجية الليلية.",
    crossDeviceSync: "مزامنة عبر الأجهزة",
    crossDeviceSyncDesc: "تتم مزامنة بياناتك بسلاسة عبر جميع أجهزتك.",
    
    // How It Works
    howItWorksTitle: "كيف يعمل فوكس تايمر",
    howItWorksSubtitle: "تقنية بومودورو بسيطة وفعالة مع تطبيقنا البديهي.",
    step1Title: "اضبط المؤقت",
    step1Desc: "اختر فترة العمل (عادة 25 دقيقة) ووقت الراحة (5 دقائق).",
    step2Title: "ركز على مهمتك",
    step2Desc: "اعمل بتركيز كامل حتى يرن المؤقت.",
    step3Title: "خذ استراحة قصيرة",
    step3Desc: "استرخ وأعد شحن طاقتك لجلسة التركيز التالية.",
    step4Title: "كرر الدورة",
    step4Desc: "بعد 4 دورات، خذ استراحة أطول (15-30 دقيقة).",
    seeHowItWorks: "شاهد كيف يعمل",
    
    // Testimonials
    testimonialsTitle: "ماذا يقول مستخدمونا",
    testimonialsSubtitle: "انضم إلى آلاف المستخدمين الراضين الذين عززوا إنتاجيتهم مع فوكس تايمر.",
    appStore: "آب ستور",
    googlePlay: "جوجل بلاي",
    productHunt: "برودكت هانت",
    
    // Pricing
    pricingTitle: "تسعير بسيط وشفاف",
    pricingSubtitle: "اختر الخطة التي تناسب احتياجات إنتاجيتك.",
    free: "مجاني",
    pro: "برو",
    team: "فريق",
    forever: "للأبد",
    perMonth: "شهريًا",
    perUserMonth: "لكل مستخدم/شهر",
    freeDesc: "مثالي للبدء بتقنية بومودورو.",
    proDesc: "لعشاق الإنتاجية الجادين الذين يريدون المزيد من الميزات.",
    teamDesc: "مثالي للفرق التي تتطلع إلى تعزيز الإنتاجية الجماعية.",
    downloadFree: "تحميل مجاني",
    getPro: "احصل على برو",
    contactSales: "تواصل مع المبيعات",
    mostPopular: "الأكثر شعبية",
    guarantee: "جميع الخطط تأتي مع ضمان استرداد الأموال لمدة 14 يومًا. بدون أسئلة.",
    
    // FAQ
    faqTitle: "الأسئلة المتكررة",
    faqSubtitle: "لديك أسئلة؟ لدينا إجابات.",
    moreQuestions: "هل لا تزال لديك أسئلة؟ نحن هنا للمساعدة!",
    contactSupport: "تواصل مع الدعم",
    
    // CTA
    ctaTitle: "هل أنت مستعد لتعزيز إنتاجيتك؟",
    ctaSubtitle: "قم بتنزيل فوكس تايمر اليوم وابدأ في تحقيق المزيد بضغط أقل.",
    downloadOnThe: "تنزيل على",
    appStore: "آب ستور",
    getItOn: "احصل عليه من",
    googlePlay: "جوجل بلاي",
    alsoAvailableForDesktop: "متوفر أيضًا لسطح المكتب",
    windows: "ويندوز",
    macOS: "ماك",
    linux: "لينكس",
    
    // Footer
    productFooter: "المنتج",
    companyFooter: "الشركة",
    supportFooter: "الدعم",
    aboutUs: "من نحن",
    careers: "وظائف",
    blog: "المدونة",
    press: "الصحافة",
    helpCenter: "مركز المساعدة",
    contactUs: "اتصل بنا",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    allRightsReserved: "جميع الحقوق محفوظة."
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Try to get the language from localStorage
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  const [currentTranslations, setCurrentTranslations] = useState(translations[language]);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Update translations
    setCurrentTranslations(translations[language]);
    
    // Update document direction and language
    document.documentElement.dir = languages[language].dir;
    document.documentElement.lang = language;
    
    // Update font family for the body
    document.body.style.fontFamily = languages[language].fontFamily;
  }, [language]);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: currentTranslations, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
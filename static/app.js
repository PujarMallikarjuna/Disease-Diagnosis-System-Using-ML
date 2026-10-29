// AI Multilingual Disease Diagnosis & Patient Portal
// Version 11.0 - Complete Multilingual Support for all 33 Symptoms, 18 Diseases, 15 Specialists, Risk Levels & Advice

const translations = {
  en: {
    patient: "Patient Information", age: "Age", sex: "Sex", duration: "Duration (days)", severity: "Severity",
    symptoms: "Select Symptoms", search: "Search symptoms...", predict: "Predict", result: "Prediction Result",
    empty: "Select symptoms above and click Predict to run the ML analysis.", top: "Top 3 Predicted Conditions", why: "Why this result?",
    history: "Patient Diagnostic History", load: "Load History", report: "Generate PDF Report",
    nearby: "Find Nearby Specialist", voice: "🎙 Voice", disclaimer: "Educational prototype — not a medical diagnosis.",
    risk: "Estimated Risk", score: "Model score", advice: "General guidance", specialist: "Suggested specialist",
    matching: "Matching symptoms", read: "🔊 Read Aloud", pause: "⏸ Pause", resume: "▶ Resume", stop: "⏹ Stop",
    listening: "🎙 Listening...", voiceError: "Voice input could not start. Please allow microphone permissions and use Google Chrome or Microsoft Edge.",
    login: "Login", register: "Register", profile: "Profile", logout: "Logout",
    refresh: "Refresh", refreshForm: "Refresh Form"
  },
  kn: {
    patient: "ರೋಗಿಯ ಮಾಹಿತಿ", age: "ವಯಸ್ಸು", sex: "ಲಿಂಗ", duration: "ಅವಧಿ (ದಿನಗಳು)", severity: "ತೀವ್ರತೆ",
    symptoms: "ರೋಗಲಕ್ಷಣಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ", search: "ಲಕ್ಷಣ ಹುಡುಕಿ...", predict: "ರೋಗ ಮುನ್ಸೂಚನೆ", result: "ಮುನ್ಸೂಚನೆ ಫಲಿತಾಂಶ",
    empty: "ಮೇಲಿನ ಪಟ್ಟಿಯಿಂದ ಲಕ್ಷಣಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ Predict ಕ್ಲಿಕ್ ಮಾಡಿ.", top: "ಪ್ರಮುಖ 3 ಸಂಭಾವ್ಯ ರೋಗಗಳು", why: "ಈ ಫಲಿತಾಂಶ ಏಕೆ?",
    history: "ರೋಗಿಯ ರೋಗನಿರ್ಣಯ ಇತಿಹಾಸ", load: "ಇತಿಹಾಸ ಲೋಡ್ ಮಾಡಿ", report: "PDF ವರದಿ ಡೌನ್‌ಲೋಡ್",
    nearby: "ಹತ್ತಿರದ ತಜ್ಞ ವೈದ್ಯರನ್ನು ಹುಡುಕಿ", voice: "🎙 ಧ್ವನಿ ಇನ್‌ಪುಟ್", disclaimer: "ಶೈಕ್ಷಣಿಕ ಮಾದರಿ — ಇದು ಅಧಿಕೃತ ವೈದ್ಯಕೀಯ ರೋಗನಿರ್ಣಯವಲ್ಲ.",
    risk: "ಅಂದಾಜು ಅಪಾಯದ ಮಟ್ಟ", score: "ಮಾದರಿ ಅಂಕ", advice: "ವೈದ್ಯಕೀಯ ಸಲಹೆ", specialist: "ಶಿಫಾರಸು ಮಾಡಿದ ತಜ್ಞರು",
    matching: "ಹೊಂದಾಣಿಕೆಯ ಲಕ್ಷಣಗಳು", read: "🔊 ಓದಿ ಕೇಳಿ", pause: "⏸ ವಿರಾಮ", resume: "▶ ಮುಂದುವರಿಸಿ", stop: "⏹ ನಿಲ್ಲಿಸಿ",
    listening: "🎙 ಆಲಿಸಲಾಗುತ್ತಿದೆ...", voiceError: "ಧ್ವನಿ ಇನ್‌ಪುಟ್ ಪ್ರಾರಂಭಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮೈಕ್ರೋಫೋನ್ ಅನುಮತಿ ನೀಡಿ.",
    login: "ಲಾಗಿನ್", register: "ನೋಂದಣಿ", profile: "ಪ್ರೊಫೈಲ್", logout: "ಲಾಗ್‌ಔಟ್",
    refresh: "ರಿಫ್ರೆಶ್", refreshForm: "ಫಾರ್ಮ್ ರೀಸೆಟ್"
  },
  hi: {
    patient: "रोगी की जानकारी", age: "आयु", sex: "लिंग", duration: "अवधि (दिन)", severity: "गंभीरता",
    symptoms: "लक्षण चुनें", search: "लक्षण खोजें...", predict: "पूर्वानुमान लगाएं", result: "निदान परिणाम",
    empty: "ऊपर दिए गए लक्षणों को चुनें और Predict पर क्लिक करें।", top: "शीर्ष 3 संभावित स्थितियां", why: "यह परिणाम क्यों आया?",
    history: "रोगी परामर्श इतिहास", load: "इतिहास देखें", report: "PDF रिपोर्ट बनाएं",
    nearby: "निकटतम विशेषज्ञ डॉक्टर खोजें", voice: "🎙 वॉयस इनपुट", disclaimer: "शैक्षिक प्रोटोटाइप — यह चिकित्सकीय निदान नहीं है।",
    risk: "अनुमानित जोखिम स्तर", score: "मॉडल स्कोर", advice: "सामान्य सलाह", specialist: "सुझाए गए विशेषज्ञ",
    matching: "मेल खाते लक्षण", read: "🔊 पढ़कर सुनाएं", pause: "⏸ रोकें", resume: "▶ जारी रखें", stop: "⏹ बंद करें",
    listening: "🎙 सुन रहा है...", voiceError: "वॉयस इनपुट शुरू नहीं हो सका। कृपया माइक्रोफ़ोन अनुमति दें।",
    login: "लॉगिन", register: "पंजीकरण", profile: "प्रोफ़ाइल", logout: "लॉगआउट",
    refresh: "रिफ्रेश", refreshForm: "फॉर्म रीसेट"
  },
  te: {
    patient: "రోగి సమాచారం", age: "వయస్సు", sex: "లింగం", duration: "వ్యవధి (రోజులు)", severity: "తీవ్రత",
    symptoms: "లక్షణాలను ఎంచుకోండి", search: "లక్షణాలను శోధించండి...", predict: "అంచనా వేయండి", result: "అంచనా ఫలితం",
    empty: "లక్షణాలను ఎంచుకుని Predict బటన్ నొక్కండి.", top: "టాప్ 3 అంచనా వేసిన పరిస్థితులు", why: "ఈ ఫలితం ఎందుకు వచ్చింది?",
    history: "రోగి చరిత్ర", load: "చరిత్రను లోడ్ చేయండి", report: "PDF నివేదిక డౌన్‌లోడ్",
    nearby: "సమీప నిపుణులను కనుగొనండి", voice: "🎙 వాయిస్", disclaimer: "విద్యా ప్రయోజనాల కోసం మాత్రమే — ఇది వైద్య నిర్ధారణ కాదు.",
    risk: "ప్రమాద స్థాయి", score: "స్కోరు", advice: "వైద్య సలహా", specialist: "సిఫార్సు చేసిన నిపుణుడు",
    matching: "సరిపోలే లక్షణాలు", read: "🔊 చదవండి", pause: "⏸ ఆపు", resume: "▶ పునఃప్రారంభించు", stop: "⏹ ముగించు",
    listening: "🎙 వింటున్నాను...", voiceError: "వాయిస్ ఇన్పుట్ ప్రారంభించబడలేదు. మైక్రోఫోన్ అనుమతి ఇవ్వండి.",
    login: "లాగిన్", register: "రిజిస్టర్", profile: "ప్రొఫైల్", logout: "లాగ్అవుట్",
    refresh: "రిఫ్రెష్", refreshForm: "ఫారమ్ రీసెట్"
  },
  ta: {
    patient: "நோயாளி தகவல்", age: "வயது", sex: "பாலினம்", duration: "கால அளவு (நாட்கள்)", severity: "தீவிரம்",
    symptoms: "அறிகுறிகளைத் தேர்ந்தெடுக்கவும்", search: "அறிகுறிகளைத் தேடுங்கள்...", predict: "கணிக்கவும்", result: "கணிப்பு முடிவு",
    empty: "அறிகுறிகளைத் தேர்ந்தெடுத்து Predict என்பதைக் கிளிக் செய்யவும்.", top: "முதல் 3 கணிக்கப்பட்ட நோய்கள்", why: "ஏன் இந்த முடிவு?",
    history: "நோயாளி வரலாறு", load: "வரலாற்றைக் காட்டு", report: "PDF அறிக்கை பெறுக",
    nearby: "அருகிலுள்ள மருத்துவரைத் தேடுங்கள்", voice: "🎙 குரல் பதிவு", disclaimer: "கல்வி முன்மாதிரி — இது மருத்துவ நோயறிதல் அல்ல.",
    risk: "ஆபத்து நிலை", score: "மதிப்பெண்", advice: "மருத்துவ ஆலோசனை", specialist: "பரிந்துரைக்கப்பட்ட மருத்துவர்",
    matching: "பொருந்திய அறிகுறிகள்", read: "🔊 வாசிக்கவும்", pause: "⏸ இடைநிறுத்து", resume: "▶ தொடரவும்", stop: "⏹ நிறுத்து",
    listening: "🎙 கேட்கிறது...", voiceError: "குரல் உள்ளீட்டைத் தொடங்க முடியவில்லை.",
    login: "உள்நுழைவு", register: "பதிவு செய்க", profile: "சுயவிவரம்", logout: "வெளியேறு",
    refresh: "புதுப்பி", refreshForm: "படிவத்தை மீட்டமை"
  },
  ml: {
    patient: "രോഗിയുടെ വിവരങ്ങൾ", age: "പ്രായം", sex: "ലിംഗഭേദം", duration: "ദിവസങ്ങൾ", severity: "തീവ്രത",
    symptoms: "ലക്ഷണങ്ങൾ തിരഞ്ഞെടുക്കുക", search: "ലക്ഷണങ്ങൾ തിരയുക...", predict: "പ്രവചിക്കുക", result: "രോഗനിർണയ ഫലം",
    empty: "ലക്ഷണങ്ങൾ തിരഞ്ഞെടുത്ത് Predict ക്ലിക്ക് ചെയ്യുക.", top: "പ്രധാന 3 രോഗ സാധ്യതകൾ", why: "എന്തുകൊണ്ട് ഈ ഫലം?",
    history: "രോഗിയുടെ ഹിസ്റ്ററി", load: "ഹിസ്റ്ററി കാണുക", report: "PDF റിപ്പോർട്ട് ലഭിക്കുക",
    nearby: "വിദഗ്ദ്ധ ഡോക്ടറെ കണ്ടെത്തുക", voice: "🎙 വോയ്സ് ഇൻപുട്ട്", disclaimer: "വിദ്യാഭ്യാസ ആവശ്യങ്ങൾക്ക് മാത്രം — ഇത് ഔദ്യോഗിക രോഗനിർണയമല്ല.",
    risk: "അപകടസാധ്യത ലെവൽ", score: "സ്കോർ", advice: "നിർദ്ദേശം", specialist: "വിദഗ്ദ്ധ ഡോക്ടർ",
    matching: "പൊരുത്തപ്പെടുന്ന ലക്ഷണങ്ങൾ", read: "🔊 കേൾക്കുക", pause: "⏸ താൽക്കാലികമായി നിർത്തുക", resume: "▶ തുടരുക", stop: "⏹ നിർത്തുക",
    listening: "🎙 കേൾക്കുന്നു...", voiceError: "വോയ്സ് ഇൻപുട്ട് ലഭ്യമായില്ല.",
    login: "ലോഗിൻ", register: "രജിസ്റ്റർ", profile: "പ്രൊഫൈൽ", logout: "ലോഗ്ഔട്ട്",
    refresh: "പുതുക്കുക", refreshForm: "ഫോം റീസെറ്റ്"
  },
  mr: {
    patient: "रुग्णाची माहिती", age: "वय", sex: "लिंग", duration: "कालावधी (दिवस)", severity: "तीव्रता",
    symptoms: "लक्षणे निवडा", search: "लक्षणे शोधा...", predict: "अंदाज लावा", result: "निदान निकाल",
    empty: "लक्षणे निवडून Predict वर क्लिक करा.", top: "शीर्ष ३ संभाव्य आजार", why: "हा निकाल का आला?",
    history: "रुग्ण इतिहास", load: "इतिहास पहा", report: "PDF अहवाल मिळवा",
    nearby: "जवळचे तज्ज्ञ डॉक्टर शोधा", voice: "🎙 व्हॉइस इनपुट", disclaimer: "शैक्षणिक प्रोटोटाइप — हा अधिकृत वैद्यकीय सल्ला नाही.",
    risk: "अंदाजित धोका पातळी", score: "मॉडेल स्कोअर", advice: "सल्ला", specialist: "तज्ज्ञ डॉक्टर",
    matching: "जुळणारी लक्षणे", read: "🔊 ऐका", pause: "⏸ थांबा", resume: "▶ सुरू ठेवा", stop: "⏹ बंद करा",
    listening: "🎙 ऐकत आहे...", voiceError: "व्हॉइस इनपुट सुरू करता आले नाही.",
    login: "लॉगिन", register: "नोंदणी", profile: "प्रोफाइल", logout: "लॉगआउट",
    refresh: "रिफ्रेश", refreshForm: "फॉर्म रीसेट"
  },
  bn: {
    patient: "রোগীর তথ্য", age: "বয়স", sex: "লিঙ্গ", duration: "সময়কাল (দিন)", severity: "তীব্রতা",
    symptoms: "লক্ষণ নির্বাচন করুন", search: "লক্ষণ খুঁজুন...", predict: "পূর্বাভাস দিন", result: "ফলাফল",
    empty: "লক্ষণ নির্বাচন করে Predict বাটনে চাপুন।", top: "শীর্ষ ৩টি সম্ভাব্য রোগ", why: "কেন এই ফলাফল?",
    history: "রোগীর ইতিহাস", load: "ইতিহাস লোড করুন", report: "PDF রিপোর্ট ডাউনলোড",
    nearby: "নিকটবর্তী বিশেষজ্ঞ খুঁজুন", voice: "🎙 ভয়েস ইনপুট", disclaimer: "শিক্ষামূলক প্রোটোটাইপ — চিকিৎসাগত রোগনির্ণয় নয়।",
    risk: "ঝুঁকির মাত্রা", score: "স্কোর", advice: "চিকিৎসা পরামর্শ", specialist: "সুপারিশকৃত বিশেষজ্ঞ",
    matching: "মিলে যাওয়া লক্ষণসমূহ", read: "🔊 শুনুন", pause: "⏸ থামুন", resume: "▶ চালু করুন", stop: "⏹ বন্ধ করুন",
    listening: "🎙 শুনছি...", voiceError: "ভয়েস ইনপুট শুরু করা যায়নি।",
    login: "লগইন", register: "নিবন্ধন", profile: "প্রোফাইল", logout: "লগআউট",
    refresh: "রিফ্রেশ", refreshForm: "ফর্ম রিসেট"
  },
  gu: {
    patient: "દર્દીની વિગત", age: "ઉંમર", sex: "જાતિ", duration: "સમયગાળો (દિવસો)", severity: "તીવ્રતા",
    symptoms: "લક્ષણો પસંદ કરો", search: "લક્ષણો શોધો...", predict: "અનુમાન લગાવો", result: "પરિણામ",
    empty: "લક્ષણો પસંદ કરી Predict પર ક્લિક કરો.", top: "મુખ્ય ૩ સંભવિત રોગો", why: "આ પરિણામ કેમ આવ્યું?",
    history: "દર્દીનો ઇતિહાસ", load: "ઇતિહાસ જુઓ", report: "PDF રિપોર્ટ ડાઉનલોડ",
    nearby: "નજીકના નિષ્ણાત ડૉક્ટર શોધો", voice: "🎙 વૉઇસ ઇનપુટ", disclaimer: "શૈક્ષણિક પ્રયોગ — આ તબીબી નિદાન નથી.",
    risk: "જોખમનું સ્તર", score: "સ્કોર", advice: "તબીબી સલાહ", specialist: "નિષ્ણાત ડૉક્ટર",
    matching: "મેળ ખાતા લક્ષણો", read: "🔊 સાંભળો", pause: "⏸ થોભો", resume: "▶ ચાલુ રાખો", stop: "⏹ બંધ કરો",
    listening: "🎙 સાંભળી રહ્યા છીએ...", voiceError: "વૉઇસ ઇનપુટ શરૂ કરી શકાયું નથી.",
    login: "લૉગિન", register: "નોંધણી", profile: "પ્રોફાઇલ", logout: "લૉગઆઉટ",
    refresh: "રિફ્રેશ", refreshForm: "ફોર્મ રીસેટ"
  },
  pa: {
    patient: "ਮਰੀਜ਼ ਦੀ ਜਾਣਕਾਰੀ", age: "ਉਮਰ", sex: "ਲਿੰਗ", duration: "ਮਿਆਦ (ਦਿਨ)", severity: "ਗੰਭੀਰਤਾ",
    symptoms: "ਲੱਛਣ ਚੁਣੋ", search: "ਲੱਛਣ ਖੋਜੋ...", predict: "ਅੰਦਾਜ਼ਾ ਲਗਾਓ", result: "ਨਤੀਜਾ",
    empty: "ਲੱਛਣ ਚੁਣ ਕੇ Predict 'ਤੇ ਕਲਿੱਕ ਕਰੋ।", top: "ਪ੍ਰਮੁੱਖ 3 ਸੰਭਾਵਿਤ ਬਿਮਾਰੀਆਂ", why: "ਇਹ ਨਤੀਜਾ ਕਿਉਂ ਆਇਆ?",
    history: "ਮਰੀਜ਼ ਦਾ ਇਤਿਹਾਸ", load: "ਇਤਿਹਾਸ ਵੇਖੋ", report: "PDF ਰਿਪੋਰਟ ਡਾਊਨਲੋਡ",
    nearby: "ਨੇੜਲੇ ਮਾਹਰ ਡਾਕਟਰ ਲੱਭੋ", voice: "🎙 ਵੌਇਸ ਇਨਪੁੱਟ", disclaimer: "ਸਿੱਖਿਆਤਮਕ ਪ੍ਰੋਟੋਟਾਈਪ — ਕੋਈ ਡਾਕਟਰੀ ਨਿਦਾਨ ਨਹੀਂ।",
    risk: "ਖ਼ਤਰੇ ਦਾ ਪੱਧਰ", score: "ਸਕੋਰ", advice: "ਡਾਕਟਰੀ ਸਲਾਹ", specialist: "ਮਾਹਰ ਡਾਕਟਰ",
    matching: "ਮਿਲਦੇ ਲੱਛਣ", read: "🔊 ਸੁਣੋ", pause: "⏸ ਰੁਕੋ", resume: "▶ ਜਾਰੀ ਰੱਖੋ", stop: "⏹ ਬੰਦ ਕਰੋ",
    listening: "🎙 ਸੁਣ ਰਿਹਾ ਹੈ...", voiceError: "ਵੌਇਸ ਇਨਪੁੱਟ ਸ਼ੁਰੂ ਨਹੀਂ ਹੋ ਸਕਿਆ।",
    login: "ਲੌਗਇਨ", register: "ਰਜਿਸਟਰ", profile: "ਪ੍ਰੋਫਾਈਲ", logout: "ਲੌਗਆਉਟ",
    refresh: "ਰਿਫ੍ਰੈਸ਼", refreshForm: "ਫਾਰਮ ਰੀਸੈਟ"
  }
};

// -------------------------------------------------------------
// Complete 33 Symptoms Translated in all 10 Languages
// -------------------------------------------------------------
const SYMPTOM_TEXT = {
  en: {
    fever: "Fever", cough: "Cough", sore_throat: "Sore Throat", runny_nose: "Runny Nose",
    fatigue: "Fatigue / Tiredness", headache: "Headache", body_pain: "Body Pain",
    shortness_of_breath: "Shortness of Breath", chest_pain: "Chest Pain", palpitations: "Palpitations / Fast Heartbeat",
    swelling_legs: "Leg Swelling", frequent_urination: "Frequent Urination", excessive_thirst: "Excessive Thirst",
    blurred_vision: "Blurred Vision", skin_rash: "Skin Rash", itching: "Itching",
    joint_pain: "Joint Pain", back_pain: "Back Pain", abdominal_pain: "Abdominal / Stomach Pain",
    nausea: "Nausea", vomiting: "Vomiting", diarrhea: "Diarrhea", jaundice: "Jaundice (Yellowish Skin/Eyes)",
    burning_urination: "Burning Urination", blood_in_urine: "Blood in Urine", dizziness: "Dizziness",
    seizure: "Seizure / Fits", weakness: "General Weakness", anxiety: "Anxiety",
    low_mood: "Low Mood / Sadness", ear_pain: "Ear Pain", tooth_pain: "Tooth Pain", vision_loss: "Vision Loss"
  },
  kn: {
    fever: "ಜ್ವರ", cough: "ಕೆಮ್ಮು", sore_throat: "ಗಂಟಲು ನೋವು", runny_nose: "ಮೂಗು ಸೋರುವುದು",
    fatigue: "ಆಯಾಸ / ದಣಿವು", headache: "ತಲೆನೋವು", body_pain: "ಮೈಕೈ ನೋವು",
    shortness_of_breath: "ಉಸಿರಾಟದ ತೊಂದರೆ", chest_pain: "ಎದೆ ನೋವು", palpitations: "ಹೃದಯ ಬಡಿತ ಹೆಚ್ಚಾಗುವುದು",
    swelling_legs: "ಕಾಲುಗಳಲ್ಲಿ ಊತ", frequent_urination: "ಪದೇ ಪದೇ ಮೂತ್ರ ವಿಸರ್ಜನೆ", excessive_thirst: "ಅತಿಯಾದ ಬಾಯಾರಿಕೆ",
    blurred_vision: "ಮಸುಕಾದ ದೃಷ್ಟಿ", skin_rash: "ಚರ್ಮದ ದದ್ದು", itching: "ತುರಿಕೆ",
    joint_pain: "ಕೀಲು ನೋವು", back_pain: "ಬೆನ್ನು ನೋವು", abdominal_pain: "ಹೊಟ್ಟೆ ನೋವು",
    nausea: "ವಾಕರಿಕೆ", vomiting: "ವಾಂತಿ", diarrhea: "ಭೇದಿ / ಅತಿಸಾರ", jaundice: "ಕಾಮಾಲೆ (ಹಳದಿ ಕಣ್ಣು/ಚರ್ಮ)",
    burning_urination: "ಮೂತ್ರದಲ್ಲಿ ಉರಿ", blood_in_urine: "ಮೂತ್ರದಲ್ಲಿ ರಕ್ತ", dizziness: "ತಲೆತಿರುಗುವಿಕೆ",
    seizure: "ಫಿಟ್ಸ್ / ಸೆಳೆತ", weakness: "ದೌರ್ಬಲ್ಯ", anxiety: "ಆತಂಕ / ಭಯ",
    low_mood: "ಖಿನ್ನ ಮನಸ್ಥಿತಿ / ದುಃಖ", ear_pain: "ಕಿವಿ ನೋವು", tooth_pain: "ಹಲ್ಲು ನೋವು", vision_loss: "ದೃಷ್ಟಿ ನಷ್ಟ"
  },
  hi: {
    fever: "बुखार", cough: "खांसी", sore_throat: "गले में खराश / दर्द", runny_nose: "नाक बहना",
    fatigue: "थकान / सुस्ती", headache: "सिरदर्द", body_pain: "बदन दर्द",
    shortness_of_breath: "सांस लेने में तकलीफ", chest_pain: "सीने में दर्द", palpitations: "घबराहट / धड़कन तेज होना",
    swelling_legs: "पैरों में सूजन", frequent_urination: "बार-बार पेशाब आना", excessive_thirst: "अत्यधिक प्यास लगना",
    blurred_vision: "धुंधली दृष्टि", skin_rash: "त्वचा पर लाल चकत्ते", itching: "खुजली",
    joint_pain: "जोड़ों का दर्द", back_pain: "पीठ / कमर दर्द", abdominal_pain: "पेट दर्द",
    nausea: "जी मिचलाना", vomiting: "उल्टी", diarrhea: "दस्त / पेट खराब", jaundice: "पीलिया (आंखें/त्वचा पीली होना)",
    burning_urination: "पेशाब में जलन", blood_in_urine: "पेशाब में खून आना", dizziness: "चक्कर आना",
    seizure: "दौरा / मिरगी", weakness: "शारीरिक कमजोरी", anxiety: "चिंता / घबराहट",
    low_mood: "उदासी / निराशा", ear_pain: "कान में दर्द", tooth_pain: "दांत दर्द", vision_loss: "दृष्टि हानि / दिखाई न देना"
  },
  te: {
    fever: "జ్వరం", cough: "దగ్గు", sore_throat: "గొంతు నొప్పి", runny_nose: "ముక్కు కారడం",
    fatigue: "అలసట", headache: "తలనొప్పి", body_pain: "ఒళ్లు నొప్పులు",
    shortness_of_breath: "శ్వాస తీసుకోవడంలో ఇబ్బంది", chest_pain: "ఛాతీ నొప్పి", palpitations: "గుండె దడ",
    swelling_legs: "కాళ్ల వాపు", frequent_urination: "తరచుగా మూత్రవిసర్జన", excessive_thirst: "అధిక దాహం",
    blurred_vision: "మసకబారిన చూపు", skin_rash: "చర్మంపై దద్దుర్లు", itching: "దురద",
    joint_pain: "కీళ్ల నొప్పులు", back_pain: "వెన్నునొప్పి", abdominal_pain: "కడుపు నొప్పి",
    nausea: "వికారం", vomiting: "వాంతులు", diarrhea: "విరేచనాలు", jaundice: "పచ్చకామెర్లు",
    burning_urination: "మూత్రంలో మంట", blood_in_urine: "మూత్రంలో రక్తం", dizziness: "తలతిరగడం",
    seizure: "మూర్ఛ / ఫిట్స్", weakness: "బలహీనత", anxiety: "ఆందోళన",
    low_mood: "నిరాశ / దిగులు", ear_pain: "చెవి నొప్పి", tooth_pain: "పంటి నొప్పి", vision_loss: "చూపు కోల్పోవడం"
  },
  ta: {
    fever: "காய்ச்சல்", cough: "இருமல்", sore_throat: "தொண்டை வலி", runny_nose: "மூக்கு ஒழுகுதல்",
    fatigue: "சோர்வு", headache: "தலைவலி", body_pain: "உடல் வலி",
    shortness_of_breath: "மூச்சுத்திணறல்", chest_pain: "நெஞ்சு வலி", palpitations: "படபடப்பு / வேகமான இதயத்துடிப்பு",
    swelling_legs: "கால் வீக்கம்", frequent_urination: "அடிக்கடி சிறுநீர் கழித்தல்", excessive_thirst: "அதிக தாகம்",
    blurred_vision: "மங்கலான பார்வை", skin_rash: "தோல் தடிப்புகள்", itching: "அரிப்பு",
    joint_pain: "மூட்டு வலி", back_pain: "முதுகு வலி", abdominal_pain: "வயிற்று வலி",
    nausea: "குமட்டல்", vomiting: "வாந்தி", diarrhea: "வயிற்றுப்போக்கு", jaundice: "மஞ்சள் காமாலை",
    burning_urination: "சிறுநீர் எரிச்சல்", blood_in_urine: "சிறுநீரில் இரத்தம்", dizziness: "தலைச்சுற்றல்",
    seizure: "வலிப்பு", weakness: "உடல் பலவீனம்", anxiety: "பதட்டம் / பயம்",
    low_mood: "மனச்சோர்வு", ear_pain: "காது வலி", tooth_pain: "பல் வலி", vision_loss: "பார்வை இழப்பு"
  },
  ml: {
    fever: "പനി", cough: "ചുമ", sore_throat: "തൊണ്ടവേദന", runny_nose: "മൂക്കൊലിപ്പ്",
    fatigue: "ക്ഷീണം", headache: "തലവേദന", body_pain: "ശരീരവേദന",
    shortness_of_breath: "ശ്വാസതടസ്സം", chest_pain: "നെഞ്ചുവേദന", palpitations: "ഹൃദയമിടിപ്പ് കൂടുക",
    swelling_legs: "കാലിലെ വീക്കം", frequent_urination: "ഇടയ്ക്കിടെയുള്ള മൂത്രമൊഴിക്കൽ", excessive_thirst: "അമിത ദാഹം",
    blurred_vision: "മങ്ങിയ കാഴ്ച", skin_rash: "ത്വക്കിലെ തിണർപ്പ്", itching: "ചൊറിച്ചിൽ",
    joint_pain: "സന്ധിവേദന", back_pain: "നടുവേദന", abdominal_pain: "വയറുവേദന",
    nausea: "ഓക്കാനം", vomiting: "ഛർദ്ദി", diarrhea: "വയറിളക്കം", jaundice: "മഞ്ഞപ്പിത്തം",
    burning_urination: "മൂത്രമൊഴിക്കുമ്പോൾ പുകച്ചിൽ", blood_in_urine: "മൂത്രത്തിൽ രക്തം", dizziness: "തലകറക്കം",
    seizure: "അപസ്മാരം / ഫിറ്റ്സ്", weakness: "തളർച്ച", anxiety: "ഉത്കണ്ഠ",
    low_mood: "വിഷാദം / മനോവിഷമം", ear_pain: "ചെവിവേദന", tooth_pain: "പല്ലുവേദന", vision_loss: "കാഴ്ച നഷ്ടപ്പെടൽ"
  },
  mr: {
    fever: "ताप", cough: "खोकला", sore_throat: "घसा खवखवणे", runny_nose: "नाक वाहणे",
    fatigue: "थकवा", headache: "डोकेदुखी", body_pain: "अंगदुखी",
    shortness_of_breath: "श्वास घेण्यास त्रास", chest_pain: "छातीत दुखणे", palpitations: "छातीत धडधड होणे",
    swelling_legs: "पायांवर सूज", frequent_urination: "वारंवार लघवी होणे", excessive_thirst: "अति तहान लागणे",
    blurred_vision: "अस्पष्ट दृष्टी", skin_rash: "त्वचेवर पुरळ", itching: "खाज सुटणे",
    joint_pain: "सांधेदुखी", back_pain: "पाठदुखी / कंबरदुखी", abdominal_pain: "पोटदुखी",
    nausea: "मळमळ", vomiting: "उलटी", diarrhea: "जुलाब", jaundice: "कावीळ",
    burning_urination: "लघवी करताना जळजळ", blood_in_urine: "लघवीतून रक्त येणे", dizziness: "चक्कर येणे",
    seizure: "मिरगीचे झटके", weakness: "अशक्तपणा", anxiety: "चिंता / घबराट",
    low_mood: "उदासीनता / खिन्नता", ear_pain: "कानदुखी", tooth_pain: "दातदुखी", vision_loss: "दृष्टी कमी होणे"
  },
  bn: {
    fever: "জ্বর", cough: "কাশি", sore_throat: "গলা ব্যথা", runny_nose: "নাক দিয়ে জল পড়া",
    fatigue: "ক্লান্তি", headache: "মাথাব্যথা", body_pain: "গা-হাত-পা ব্যথা",
    shortness_of_breath: "শ্বাসকষ্ট", chest_pain: "বুকে ব্যথা", palpitations: "বুক ধড়ফড় করা",
    swelling_legs: "পায়ে ফোলাভাব", frequent_urination: "ঘন ঘন প্রস্রাব", excessive_thirst: "অতিরিক্ত তৃষ্ণা",
    blurred_vision: "ঝাপসা দৃষ্টি", skin_rash: "ত্বকে ফুসকুড়ি", itching: "চুলকানি",
    joint_pain: "জয়েন্টে ব্যথা", back_pain: "পিঠে ব্যথা", abdominal_pain: "পেটে ব্যথা",
    nausea: "বমি বমি ভাব", vomiting: "বমি", diarrhea: "ডায়রিয়া / পাতলা পায়খানা", jaundice: "জন্ডিস",
    burning_urination: "প্রস্রাবে জ্বালাপোড়া", blood_in_urine: "প্রস্রাবে রক্ত", dizziness: "মাথা ঘোরা",
    seizure: "খিঁচুনি", weakness: "শারীরিক দুর্বলতা", anxiety: "উদ্বেগ / ভয়",
    low_mood: "মন খারাপ / বিষণ্ণতা", ear_pain: "কানে ব্যথা", tooth_pain: "দাঁতে ব্যথা", vision_loss: "দৃষ্টিশক্তি হ্রাস"
  },
  gu: {
    fever: "તાવ", cough: "ખાંસી", sore_throat: "ગળામાં દુખાવો", runny_nose: "નાક વહેવું",
    fatigue: "થાક", headache: "માથાનો દુખાવો", body_pain: "શરીરમાં દુખાવો",
    shortness_of_breath: "શ્વાસ લેવામાં તકલીફ", chest_pain: "છાતીમાં દુખાવો", palpitations: "ધબકારા વધવા",
    swelling_legs: "પગમાં સોજો", frequent_urination: "વારંવાર પેશાબ આવવો", excessive_thirst: "વધુ પડતી તરસ",
    blurred_vision: "ઝાંખી દ્રષ્ટિ", skin_rash: "ચામડી પર ફોલ્લીઓ", itching: "ખંજવાળ",
    joint_pain: "સાંધાનો દુખાવો", back_pain: "પીઠનો દુખાવો", abdominal_pain: "પેટમાં દુખાવો",
    nausea: "ઉબકા આવવા", vomiting: "ઉલટી", diarrhea: "ઝાડા", jaundice: "કમળો",
    burning_urination: "પેશાબમાં બળતરા", blood_in_urine: "પેશાબમાં લોહી", dizziness: "ચક્કર આવવા",
    seizure: "આંચકી આવવી", weakness: "નબળાઈ", anxiety: "ચિંતા / ગભરાટ",
    low_mood: "ઉદાસીનતા", ear_pain: "કાનમાં દુખાવો", tooth_pain: "દાંતમાં દુખાવો", vision_loss: "દ્રષ્ટિ ગુમાવવી"
  },
  pa: {
    fever: "ਬੁਖਾਰ", cough: "ਖੰਘ", sore_throat: "ਗਲੇ ਵਿੱਚ ਦਰਦ", runny_nose: "ਨੱਕ ਵਗਣਾ",
    fatigue: "ਥਕਾਵਟ", headache: "ਸਿਰ ਦਰਦ", body_pain: "ਸਰੀਰ ਦਰਦ",
    shortness_of_breath: "ਸਾਹ ਲੈਣ ਵਿੱਚ ਔਖ", chest_pain: "ਛਾਤੀ ਵਿੱਚ ਦਰਦ", palpitations: "ਦਿਲ ਦੀ ਧੜਕਣ ਤੇਜ਼ ਹੋਣੀ",
    swelling_legs: "ਲੱਤਾਂ ਵਿੱਚ ਸੋਜ", frequent_urination: "ਵਾਰ-ਵਾਰ ਪਿਸ਼ਾਬ ਆਉਣਾ", excessive_thirst: "ਬਹੁਤ ਪਿਆਸ ਲੱਗਣੀ",
    blurred_vision: "ਧੁੰਦਲੀ ਨਜ਼ਰ", skin_rash: "ਚਮੜੀ 'ਤੇ ਧੱਫੜ", itching: "ਖਾਰਸ਼",
    joint_pain: "ਜੋੜਾਂ ਦਾ ਦਰਦ", back_pain: "ਪਿੱਠ ਦਰਦ", abdominal_pain: "ਢਿੱਡ ਪੀੜ",
    nausea: "ਜੀ ਮਤਲਾਉਣਾ", vomiting: "ਉਲਟੀ", diarrhea: "ਦਸਤ", jaundice: "ਪੀਲੀਆ",
    burning_urination: "ਪਿਸ਼ਾਬ ਵਿੱਚ ਜਲਣ", blood_in_urine: "ਪਿਸ਼ਾਬ ਵਿੱਚ ਖੂਨ", dizziness: "ਚੱਕਰ ਆਉਣੇ",
    seizure: "ਦੌਰਾ ਪੈਣਾ", weakness: "ਕਮਜ਼ੋਰੀ", anxiety: "ਘਬਰਾਹਟ / ਚਿੰਤਾ",
    low_mood: "ਉਦਾਸੀ", ear_pain: "ਕੰਨ ਦਰਦ", tooth_pain: "ਦੰਦ ਦਰਦ", vision_loss: "ਨਜ਼ਰ ਘਟਣੀ"
  }
};

// -------------------------------------------------------------
// Complete 18 Diseases Translated in all 10 Languages
// -------------------------------------------------------------
const DISEASE_TEXT = {
  en: {
    "Common Cold": ["Common Cold", "Upper respiratory viral infection affecting nasal passages and throat."],
    "Influenza": ["Influenza (Flu)", "Acute viral respiratory infection causing systemic body pain and fever."],
    "Pneumonia": ["Pneumonia", "Lung infection causing inflammation of air sacs and breathing difficulty."],
    "Asthma": ["Asthma", "Chronic airway inflammation causing wheezing, chest tightness, and breathlessness."],
    "Heart Disease": ["Heart Disease", "Cardiovascular condition affecting heart function and blood circulation."],
    "Diabetes": ["Diabetes (High Blood Sugar)", "Metabolic disorder characterized by elevated blood glucose levels."],
    "Kidney Disease": ["Kidney Disease", "Renal condition affecting waste filtration and fluid balance."],
    "Liver Disease": ["Liver Disease", "Hepatic condition causing metabolic dysfunction and jaundice."],
    "Dermatitis": ["Dermatitis", "Skin condition characterized by inflammation, rash, or itching."],
    "Arthritis": ["Arthritis", "Joint disorder causing inflammation, stiffness, and discomfort."],
    "Gastroenteritis": ["Gastroenteritis (Stomach Infection)", "Digestive inflammation causing stomach upset, nausea, or diarrhea."],
    "UTI": ["Urinary Tract Infection (UTI)", "Bacterial infection affecting kidneys, bladder, or urethra."],
    "Migraine": ["Migraine", "Neurological condition causing recurrent moderate-to-severe headaches."],
    "Anxiety Disorder": ["Anxiety Disorder", "Mental health condition causing excessive worry, tension, or panic."],
    "Depression": ["Depression", "Mood disorder causing persistent sadness, low energy, and loss of interest."],
    "Otitis": ["Otitis (Ear Infection)", "Inflammation or infection of the outer, middle, or inner ear."],
    "Dental Caries": ["Dental Caries (Tooth Decay)", "Tooth decay causing dental pain and infection."],
    "Eye Disorder": ["Eye Disorder", "Ocular condition affecting vision or eye health."]
  },
  kn: {
    "Common Cold": ["ಸಾಮಾನ್ಯ ಶೀತ", "ಮೂಗು ಮತ್ತು ಗಂಟಲಿನ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ವೈರಲ್ ಸೋಂಕು."],
    "Influenza": ["ಇನ್ಫ್ಲುಯೆಂಜಾ (ಫ್ಲೂ)", "ಜ್ವರ ಮತ್ತು ಮೈಕೈ ನೋವಿಗೆ ಕಾರಣವಾಗುವ ತೀವ್ರ ಉಸಿರಾಟದ ವೈರಲ್ ಸೋಂಕು."],
    "Pneumonia": ["ನ್ಯುಮೋನಿಯಾ", "ಶ್ವಾಸಕೋಶದ ಸೋಂಕು ಮತ್ತು ಉಸಿರಾಟದ ತೊಂದರೆ."],
    "Asthma": ["ಉಬ್ಬಸ (ಆಸ್ತಮಾ)", "ದೀರ್ಘಕಾಲದ ವಾಯುಮಾರ್ಗದ ಉರಿಯೂತ ಮತ್ತು ಉಸಿರಾಟದ ತೊಂದರೆ."],
    "Heart Disease": ["ಹೃದ್ರೋಗ", "ಹೃದಯದ ಕಾರ್ಯ ಮತ್ತು ರಕ್ತ ಪರಿಚಲನೆಯ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ಗಂಭೀರ ಸ್ಥಿತಿ."],
    "Diabetes": ["ಮಧುಮೇಹ (ಸಕ್ಕರೆ ಕಾಯಿಲೆ)", "ರಕ್ತದಲ್ಲಿ ಗ್ಲೂಕೋಸ್ ಮಟ್ಟ ಹೆಚ್ಚಾಗುವ ಚಯಾಪಚಯ ಅಸ್ವಸ್ಥತೆ."],
    "Kidney Disease": ["ಮೂತ್ರಪಿಂಡದ ಕಾಯಿಲೆ (ಕಿಡ್ನಿ ಸಮಸ್ಯೆ)", "ತ್ಯಾಜ್ಯ ಶೋಧನೆಯ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ಕಿಡ್ನಿ ತೊಂದರೆ."],
    "Liver Disease": ["ಯಕೃತ್ತಿನ ಕಾಯಿಲೆ (ಲಿವರ್ ಸಮಸ್ಯೆ)", "ಯಕೃತ್ತಿನ ಕಾರ್ಯನಿರ್ವಹಣೆಯಲ್ಲಿ ದೋಷ ಮತ್ತು ಕಾಮಾಲೆ."],
    "Dermatitis": ["ಚರ್ಮರೋಗ (ಡರ್ಮಟೈಟಿಸ್)", "ಚರ್ಮದ ಉರಿಯೂತ, ಕೆಂಪು ದದ್ದು ಅಥವಾ ತುರಿಕೆ."],
    "Arthritis": ["ಸಂಧಿವಾತ (ಆರ್ಥ್ರೈಟಿಸ್)", "ಕೀಲುಗಳಲ್ಲಿ ಉರಿಯೂತ, ನೋವು ಮತ್ತು ಬಿಗಿತ."],
    "Gastroenteritis": ["ಜಠರಗರುಳಿನ ಸೋಂಕು", "ಹೊಟ್ಟೆ ಕೆಡುವುದು, ವಾಂತಿ ಮತ್ತು ಭೇದಿಗೆ ಕಾರಣವಾಗುವ ಸೋಂಕು."],
    "UTI": ["ಮೂತ್ರನಾಳದ ಸೋಂಕು (UTI)", "ಮೂತ್ರಕೋಶ ಅಥವಾ ಮೂತ್ರನಾಳದಲ್ಲಿ ಉಂಟಾಗುವ ಬ್ಯಾಕ್ಟೀರಿಯಾ ಸೋಂಕು."],
    "Migraine": ["ಮೈಗ್ರೇನ್", "ತೀವ್ರವಾದ ಮರುಕಳಿಸುವ ತಲೆನೋವಿನ ನರವೈಜ್ಞಾನಿಕ ಸ್ಥಿತಿ."],
    "Anxiety Disorder": ["ಆತಂಕದ ಅಸ್ವಸ್ಥತೆ", "ಅತಿಯಾದ ಚಿಂತೆ, ಉದ್ವೇಗ, ಹೆದರಿಕೆ ಅಥವಾ ಆತಂಕ."],
    "Depression": ["ಖಿನ್ನತೆ (ಡಿಪ್ರೆಷನ್)", "ನಿರಂತರ ದುಃಖ, ಕಡಿಮೆ ಶಕ್ತಿ ಮತ್ತು ಆಸಕ್ತಿಯ ಕೊರತೆ."],
    "Otitis": ["ಕಿವಿ ಸೋಂಕು", "ಕಿವಿಯ ಒಳಗೆ ಅಥವಾ ಮಧ್ಯಭಾಗದಲ್ಲಿ ಉಂಟಾಗುವ ಉರಿಯೂತ/ಸೋಂಕು."],
    "Dental Caries": ["ಹಲ್ಲಿನ ಹುಳುಕು / ದಂತಕ್ಷಯ", "ಹಲ್ಲು ನೋವು ಮತ್ತು ಸೋಂಕಿಗೆ ಕಾರಣವಾಗುವ ಹಲ್ಲಿನ ಕ್ಷಯ."],
    "Eye Disorder": ["ಕಣ್ಣಿನ ಕಾಯಿಲೆ", "ದೃಷ್ಟಿ ಅಥವಾ ಕಣ್ಣಿನ ಆರೋಗ್ಯದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ಸ್ಥಿತಿ."]
  },
  hi: {
    "Common Cold": ["सामान्य सर्दी-जुकाम", "नाक और गले को प्रभावित करने वाला आम वायरल संक्रमण।"],
    "Influenza": ["इन्फ्लूएंजा (फ्लू)", "तीव्र श्वसन वायरल संक्रमण जिससे तेज बुखार और बदन दर्द होता है।"],
    "Pneumonia": ["निमोनिया", "फेफड़ों का गंभीर संक्रमण जिससे सांस लेने में भारी कठिनाई होती है।"],
    "Asthma": ["दमा (अस्थमा)", "श्वासनली की पुरानी सूजन जिससे सांस फूलती है और घबराहट होती है।"],
    "Heart Disease": ["हृदय रोग (हार्ट डिजीज)", "हृदय और रक्त परिसंचरण को प्रभावित करने वाली गंभीर स्थिति।"],
    "Diabetes": ["मधुमेह (डायबिटीज / शुगर)", "रक्त शर्करा (ग्लूकोज) के स्तर में वृद्धि से जुड़ा चयापचय विकार।"],
    "Kidney Disease": ["गुर्दे की बीमारी (किडनी रोग)", "गुर्दे की कार्यप्रणाली और अपशिष्ट निस्पंदन में समस्या।"],
    "Liver Disease": ["यकृत रोग (लिवर की बीमारी)", "लिवर के कामकाज में खराबी और पीलिया।"],
    "Dermatitis": ["त्वचा रोग (डर्मेटाइटिस)", "त्वचा की सूजन, लाल चकत्ते या गंभीर खुजली।"],
    "Arthritis": ["गठिया (अर्थराइटिस)", "जोड़ों में सूजन, दर्द और अकड़न।"],
    "Gastroenteritis": ["पेट का संक्रमण (गैस्ट्रो)", "पाचन तंत्र की सूजन जिससे पेट दर्द, उल्टी और दस्त होते हैं।"],
    "UTI": ["मूत्र मार्ग संक्रमण (UTI)", "मूत्राशय या मूत्रमार्ग में बैक्टीरिया का संक्रमण।"],
    "Migraine": ["माइग्रेन (आधे सिर का दर्द)", "बार-बार होने वाला तेज सिरदर्द और उल्टी का अहसास।"],
    "Anxiety Disorder": ["चिंता विकार (एंजाइटी)", "अत्यधिक चिंता, घबराहट, तनाव या डर।"],
    "Depression": ["अवसाद (डिप्रेशन)", "लगातार उदासी, कमजोरी और दैनिक कार्यों में रुचि की कमी।"],
    "Otitis": ["कान का संक्रमण", "कान के आंतरिक या मध्य भाग में सूजन व दर्द।"],
    "Dental Caries": ["दांतों की सड़न (कैविटी)", "दांतों में सड़न जिससे दांत का तेज दर्द होता है।"],
    "Eye Disorder": ["आंखों का विकार", "दृष्टि या आंखों के स्वास्थ्य से जुड़ी समस्या।"]
  },
  te: {
    "Common Cold": ["సాధారణ జలుబు", "ముక్కు మరియు గొంతును ప్రభావితం చేసే వైరల్ ఇన్ఫెక్షన్."],
    "Influenza": ["ఇన్ఫ్లుయెంజా (ఫ్లూ)", "జ్వరం మరియు శరీర నొప్పులకు కారణమయ్యే తీవ్రమైన శ్వాసకోశ ఇన్ఫెక్షన్."],
    "Pneumonia": ["న్యుమోనియా", "ఊపిరితిత్తుల ఇన్ఫెక్షన్ మరియు శ్వాస తీసుకోవడంలో ఇబ్బంది."],
    "Asthma": ["ఉబ్బసం (ఆస్తమా)", "దీర్ఘకాలిక వాయుమార్గ వాపు మరియు శ్వాస ఆడకపోవడం."],
    "Heart Disease": ["గుండె జబ్బులు", "గుండె పనితీరు మరియు రక్త ప్రసరణపై ప్రభావం చూపే సమస్య."],
    "Diabetes": ["మధుమేహం (షుగర్)", "రక్తంలో చక్కెర స్థాయిలు పెరగడం."],
    "Kidney Disease": ["కిడ్నీ వ్యాధి", "వ్యర్థాల వడపోతను ప్రభావితం చేసే మూత్రపిండాల సమస్య."],
    "Liver Disease": ["కాలేయ వ్యాధి", "కాలేయం పనితీరులో లోపం మరియు కామెర్లు."],
    "Dermatitis": ["చర్మశోథ (డెర్మటైటిస్)", "చర్మంపై దద్దుర్లు, దురద లేదా మంట."],
    "Arthritis": ["కీళ్లవాతం (ఆర్థరైటిస్)", "కీళ్లలో వాపు, నొప్పి మరియు దృఢత్వం."],
    "Gastroenteritis": ["జీర్ణశయాంతర శోథ", "కడుపు నొప్పి, వాంతులు మరియు విరేచనాలకు కారణమయ్యే ఇన్ఫెక్షన్."],
    "UTI": ["మూత్రనాళ ఇన్ఫెక్షన్ (UTI)", "మూత్రాశయం లేదా మూత్రనాళంలో ఇన్ఫెక్షన్."],
    "Migraine": ["మైగ్రేన్", "తీవ్రమైన పునరావృత తలనొప్పి."],
    "Anxiety Disorder": ["ఆందోళన రుగ్మత", "అధిక ఆందోళన, ఒత్తిడి లేదా భయం."],
    "Depression": ["డిప్రెషన్ (కుంగుబాటు)", "నిరంతర బాధ మరియు ఆసక్తి లేకపోవడం."],
    "Otitis": ["చెవి ఇన్ఫెక్షన్", "చెవి లోపలి భాగంలో వాపు లేదా ఇన్ఫెక్షన్."],
    "Dental Caries": ["దంత క్షయం", "పంటి నొప్పి మరియు ఇన్ఫెక్షన్ కలిగించే క్షయం."],
    "Eye Disorder": ["కంటి సమస్య", "చూపు లేదా కంటి ఆరోగ్యాన్ని ప్రభావితం చేసే సమస్య."]
  },
  ta: {
    "Common Cold": ["சாதாரண சளி", "மூக்கு மற்றும் தொண்டையைப் பாதிக்கும் வைரஸ் தொற்று."],
    "Influenza": ["இன்ஃப்ளூயன்ஸா (ஃப்ளூ)", "காய்ச்சல் மற்றும் உடல் வலியை ஏற்படுத்தும் சுவாச தொற்று."],
    "Pneumonia": ["நிமோனியா", "நுரையீரல் தொற்று மற்றும் மூச்சுத்திணறல்."],
    "Asthma": ["ஆஸ்துமா", "மூச்சுப்பாதை அழற்சி மற்றும் சுவாசிப்பதில் சிரமம்."],
    "Heart Disease": ["இதய நோய்", "இதய செயல்பாடு மற்றும் இரத்த ஓட்டத்தைப் பாதிக்கும் நிலை."],
    "Diabetes": ["நீரிழிவு நோய் (சர்க்கரை நோய்)", "இரத்த சர்க்கரை அளவு அதிகரிக்கும் நிலை."],
    "Kidney Disease": ["சிறுநீரக நோய்", "சிறுநீரகத்தின் கழிவு வடிகட்டுதலைப் பாதிக்கும் கோளாறு."],
    "Liver Disease": ["கல்லீரல் நோய்", "கல்லீரல் செயல்பாட்டில் குறைபாடு மற்றும் மஞ்சள் காமாலை."],
    "Dermatitis": ["தோல் அழற்சி (டெர்மடிடிஸ்)", "தோல் அரிப்பு, தடிப்பு அல்லது வீக்கம்."],
    "Arthritis": ["மூட்டுவலி (ஆர்த்ரிடிஸ்)", "மூட்டுகளில் வீக்கம், வலி மற்றும் விறைப்பு."],
    "Gastroenteritis": ["இரைப்பை குடல் அழற்சி", "வயிற்றுப்போக்கு மற்றும் வாந்தியை ஏற்படுத்தும் தொற்று."],
    "UTI": ["சிறுநீர் பாதை தொற்று (UTI)", "சிறுநீர்ப்பை அல்லது சிறுநீர்ப்பாதையில் பாக்டீரியா தொற்று."],
    "Migraine": ["ஒற்றைத் தலைவலி (மைக்ரேன்)", "கடுமையான தொடர் தலைவலி."],
    "Anxiety Disorder": ["பதட்டக் கோளாறு", "அதிக கவலை, மன அழுத்தம் மற்றும் பயம்."],
    "Depression": ["மனச்சோர்வு (டிப்ரஷன்)", "தொடர்ச்சியான சோகம் மற்றும் ஆர்வமின்மை."],
    "Otitis": ["காது தொற்று", "காதுக்குள் ஏற்படும் அழற்சி அல்லது தொற்று."],
    "Dental Caries": ["பல் சொத்தை", "பல் வலி மற்றும் தொற்றுக்கு வழிவகுக்கும் சிதைவு."],
    "Eye Disorder": ["கண் கோளாறு", "பார்வை அல்லது கண் ஆரோக்கியத்தைப் பாதிக்கும் நிலை."]
  },
  ml: {
    "Common Cold": ["സാധാരണ ജലദോഷം", "മൂക്കിനെയും തൊണ്ടയെയും ബാധിക്കുന്ന വൈറൽ അണുബാധ."],
    "Influenza": ["ഇൻഫ്ലുവൻസ (പനി)", "ശരീരവേദനയ്ക്കും പനിക്കും കാരണമാകുന്ന വൈറൽ രോഗം."],
    "Pneumonia": ["ന്യുമോണിയ", "ശ്വാസകോശത്തിലെ അണുബാധയും ശ്വാസതടസ്സവും."],
    "Asthma": ["ആസ്ത്മ", "ശ്വാസനാളത്തിലെ വീക്കവും ശ്വാസതടസ്സവും."],
    "Heart Disease": ["ഹൃദ്രോഗം", "ഹൃദയ പ്രവർത്തനത്തെ ബാധിക്കുന്ന അവസ്ഥ."],
    "Diabetes": ["പ്രമേഹം (ഡയബറ്റിസ്)", "രക്തത്തിലെ ഗ്ലൂക്കോസിന്റെ അളവ് കൂടുന്ന അവസ്ഥ."],
    "Kidney Disease": ["വൃക്കരോഗം", "വൃക്കകളുടെ പ്രവർത്തനത്തെ ബാധിക്കുന്ന തകരാറുകൾ."],
    "Liver Disease": ["കരൾ രോഗം", "കരളിന്റെ പ്രവർത്തനത്തെ ബാധിക്കുന്ന അവസ്ഥ."],
    "Dermatitis": ["ഡെർമറ്റൈറ്റിസ് (ചർമ്മരോഗം)", "ചർമ്മത്തിലെ വീക്കം, ചൊറിച്ചിൽ അല്ലെങ്കിൽ തിണർപ്പ്."],
    "Arthritis": ["സന്ധിവാതം (ആർത്രൈറ്റിസ്)", "സന്ധികളിലെ വീക്കവും വേദനയും."],
    "Gastroenteritis": ["വയറിളക്ക രോഗം", "ഛർദ്ദിക്കും വയറിളക്കത്തിനും കാരണമാകുന്ന വയറ്റിലെ അണുബാധ."],
    "UTI": ["മൂത്രാശയ അണുബാധ (UTI)", "മൂത്രനാളത്തിലുണ്ടാകുന്ന അണുബാധ."],
    "Migraine": ["മൈഗ്രേൻ", "ആവർത്തിച്ചുണ്ടാകുന്ന കഠിനമായ തലവേദന."],
    "Anxiety Disorder": ["ഉത്കണ്ഠാ രോഗം", "അമിതമായ ഉത്കണ്ഠയും ഭയവും."],
    "Depression": ["വിഷാദരോഗം (ഡിപ്രഷൻ)", "നിരന്തരമായ സങ്കടവും താൽപ്പര്യക്കുറവും."],
    "Otitis": ["ചെവിയിലെ അണുബാധ", "ചെവിക്കുള്ളിലെ വീക്കവും അണുബാധയും."],
    "Dental Caries": ["പല്ലിലെ കേട് (ദന്തക്ഷയം)", "പല്ലുവേദനയ്ക്ക് കാരണമാകുന്ന കേട്."],
    "Eye Disorder": ["കണ്ണിലെ തകരാറുകൾ", "കാഴ്ചയെയോ കണ്ണിന്റെ ആരോഗ്യത്തെയോ ബാധിക്കുന്ന രോഗം."]
  },
  mr: {
    "Common Cold": ["सर्दी-पडसे", "नाक आणि घशावर परिणाम करणारा संसर्ग."],
    "Influenza": ["इन्फ्लूएंझा (फ्लू)", "ताप आणि अंगदुखीस कारणीभूत ठरणारा श्वसन संसर्ग."],
    "Pneumonia": ["निमोनिया", "फुफ्फुसाचा संसर्ग आणि श्वास घेण्यास त्रास."],
    "Asthma": ["दमा (अस्थमा)", "श्वासनलिकांची सूज आणि श्वासोच्छवासाचा त्रास."],
    "Heart Disease": ["हृदयरोग", "हृदयाच्या कार्यक्षमतेवर परिणाम करणारी स्थिती."],
    "Diabetes": ["मधुमेह (डायबिटीज)", "रक्तातील साखरेचे प्रमाण वाढवणारा आजार."],
    "Kidney Disease": ["मूत्रपिंडाचा आजार (किडनी रोग)", "किडनीच्या कार्यक्षमतेतील बिघाड."],
    "Liver Disease": ["यकृताचा आजार (लिव्हर आजार)", "यकृताच्या कार्यातील दोष आणि कावीळ."],
    "Dermatitis": ["त्वचारोग (डर्माटायटिस)", "त्वचेची जळजळ, पुरळ किंवा खाज."],
    "Arthritis": ["संधिवात (आर्थरायटिस)", "सांध्यांमधील सूज, वेदना आणि कडकपणा."],
    "Gastroenteritis": ["पोटाचा संसर्ग", "उलट्या आणि जुलाबास कारणीभूत ठरणारी जळजळ."],
    "UTI": ["मूत्रमार्ग संसर्ग (UTI)", "मूत्राशय किंवा मूत्रमार्गातील संसर्ग."],
    "Migraine": ["मायग्रेन (अर्धशिशी)", "तीव्र डोकेदुखीचा आजार."],
    "Anxiety Disorder": ["चिंता विकार (अँझायटी)", "अति चिंता आणि ताणतणाव."],
    "Depression": ["उदासीनता (डिप्रेशन)", "सततचे दुःख आणि स्वारस्य नसणे."],
    "Otitis": ["कान संसर्ग", "कानातील सूज किंवा संसर्ग."],
    "Dental Caries": ["दंतक्षय (दातांची कीड)", "दातदुखी आणि कीड लागणे."],
    "Eye Disorder": ["डोळ्यांचे विकार", "दृष्टी किंवा डोळ्यांच्या आरोग्याशी संबंधित समस्या."]
  },
  bn: {
    "Common Cold": ["সাধারণ সর্দি-কাশি", "নাক এবং গলার ভাইরাল সংক্রমণ।"],
    "Influenza": ["ইনফ্লুয়েঞ্জা (ফ্লু)", "জ্বর ও শরীরে ব্যথাজনক তীব্র সংক্রমণ।"],
    "Pneumonia": ["নিউমোনিয়া", "ফুসফুসের মারাত্মক সংক্রমণ ও শ্বাসকষ্ট।"],
    "Asthma": ["হাঁপানি (অ্যাজমা)", "শ্বাসতন্ত্রের প্রদাহ এবং শ্বাসকষ্ট।"],
    "Heart Disease": ["হৃদরোগ", "হৃৎপিণ্ডের কার্যক্ষমতা ও রক্ত সঞ্চালনের সমস্যা।"],
    "Diabetes": ["ডায়াবেটিস", "রক্তে শর্করার মাত্রা বৃদ্ধির সমস্যা।"],
    "Kidney Disease": ["কিডনি রোগ", "কিডনির বর্জ্য নিষ্কাশন ক্ষমতার সমস্যা।"],
    "Liver Disease": ["যকৃতের রোগ (লিভার ডিজিজ)", "লিভারের কার্যকারিতা হ্রাস ও জন্ডিস।"],
    "Dermatitis": ["চর্মরোগ (ডার্মাটাইটিস)", "ত্বকের প্রদাহ, ফুসকুড়ি বা চুলকানি।"],
    "Arthritis": ["বাতরোগ (আর্থ্রাইটিস)", "জয়েন্টে ব্যথা, ফোলাভাব ও শক্ত হয়ে যাওয়া।"],
    "Gastroenteritis": ["গ্যাস্ট্রোএন্টেরাইটিস", "পেটের সংক্রমণ যার ফলে বমি ও ডায়রিয়া হয়।"],
    "UTI": ["ইউরিনারি ট্র্যাক্ট ইনফেকশন (UTI)", "মূত্রনালীর সংক্রমণ।"],
    "Migraine": ["মাইগ্রেন", "তীব্র বারবার হওয়া মাথাব্যথা।"],
    "Anxiety Disorder": ["অ্যাংজাইটি ডিসঅর্ডার", "অতিরিক্ত উদ্বেগ, মানসিক চাপ ও ভয়।"],
    "Depression": ["বিষণ্ণতা (ডিপ্রেশন)", "দীর্ঘস্থায়ী মানসিক দুঃখ ও অনাগ্রহ।"],
    "Otitis": ["কানের সংক্রমণ", "কানের ভেতরের প্রদাহ ও ব্যথা।"],
    "Dental Caries": ["দাঁতের ক্ষয়রোগ (ক্যাভিটি)", "দাঁতে ক্ষয় ও যন্ত্রণা।"] ,
    "Eye Disorder": ["চোখের রোগ", "দৃষ্টিশক্তি বা চোখের স্বাস্থ্য সংক্রান্ত সমস্যা।"]
  },
  gu: {
    "Common Cold": ["સામાન્ય શરદી", "નાક અને ગળાને અસર કરતો વાયરલ ચેપ."],
    "Influenza": ["ઈન્ફલ્યુએન્ઝા (ફ્લૂ)", "તાવ અને શરીરના દુખાવા માટે જવાબદાર શ્વસન ચેપ."],
    "Pneumonia": ["ન્યુમોનિયા", "ફેફસાંનો ગંભીર ચેપ અને શ્વાસ લેવામાં તકલીફ."],
    "Asthma": ["દમ (અસ્થમા)", "શ્વાસનળીમાં સોજો અને શ્વાસ લેવામાં મુશ્કેલી."],
    "Heart Disease": ["હૃદય રોગ", "હૃદયની કાર્યક્ષમતા અને રક્ત પરિભ્રમણને અસર કરતી સ્થિતિ."],
    "Diabetes": ["ડાયાબિટીસ (મધુપ્રમેહ)", "બ્લડ શુગરમાં વધારો થવાની સ્થિતિ."],
    "Kidney Disease": ["કિડની રોગ", "કિડનીની કાર્યક્ષમતામાં ખામી."],
    "Liver Disease": ["લીવર રોગ", "યકૃતના કાર્યમાં ખામી અને કમળો."],
    "Dermatitis": ["ચામડીનો સોજો (ડર્માટોસિસ)", "ચામડીની બળતરા, ફોલ્લીઓ કે ખંજવાળ."],
    "Arthritis": ["સંધિવા (આર્થરાઈટિસ)", "સાંધામાં સોજો, દુખાવો અને જકડન."],
    "Gastroenteritis": ["પેટનો ચેપ", "પાચનતંત્રમાં સોજો જેનાથી ઉલટી અને ઝાડા થાય છે."],
    "UTI": ["પેશાબનો ચેપ (UTI)", "મૂત્રમાર્ગમાં બેક્ટેરિયલ ચેપ."],
    "Migraine": ["આધાશીશી (માઈગ્રેન)", "તીવ્ર માથાનો દુખાવો."],
    "Anxiety Disorder": ["ચિંતાની બીમારી", "અતિશય ચિંતા, તણાવ કે ભય."],
    "Depression": ["ડિપ્રેશન (હતાશા)", "સતત ઉદાસી અને ઉત્સાહનો અભાવ."],
    "Otitis": ["કાનનો ચેપ", "કાનની અંદર સોજો કે દુખાવો."],
    "Dental Caries": ["દાંતમાં સડો", "દાંતમાં દુખાવો અને સડો."],
    "Eye Disorder": ["આંખની તકલીફ", "દ્રષ્ટિ અથવા આંખના સ્વાસ્થ્ય સાથે જોડાયેલી સમસ્યા."]
  },
  pa: {
    "Common Cold": ["ਸਧਾਰਨ ਜ਼ੁਕਾਮ", "ਨੱਕ ਅਤੇ ਗਲੇ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲੀ ਵਾਇਰਲ ਲਾਗ।"],
    "Influenza": ["ਇਨਫਲੂਐਂਜ਼ਾ (ਫਲੂ)", "ਬੁਖਾਰ ਅਤੇ ਸਰੀਰ ਦਰਦ ਦਾ ਕਾਰਨ ਬਣਨ ਵਾਲੀ ਸਾਹ ਦੀ ਲਾਗ।"],
    "Pneumonia": ["ਨਮੂਨੀਆ", "ਫੇਫੜਿਆਂ ਦੀ ਗੰਭੀਰ ਲਾਗ ਅਤੇ ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਲ।"],
    "Asthma": ["ਦਮਾ (ਅਸਥਮਾ)", "ਸਾਹ ਨਾਲੀਆਂ ਦੀ ਸੋਜ ਅਤੇ ਸਾਹ ਚੜ੍ਹਨਾ।"],
    "Heart Disease": ["ਦਿਲ ਦੀ ਬਿਮਾਰੀ", "ਦਿਲ ਦੀ ਕਾਰਜਪ੍ਰਣਾਲੀ ਨੂੰ ਪ੍ਰਭਾਵਿਤ ਕਰਨ ਵਾਲੀ ਸਥਿਤੀ।"],
    "Diabetes": ["ਸ਼ੂਗਰ (ਡਾਇਬਟੀਜ਼)", "ਖੂਨ ਵਿੱਚ ਗਲੂਕੋਜ਼ ਦਾ ਪੱਧਰ ਵਧਣਾ।"],
    "Kidney Disease": ["ਗੁਰਦੇ ਦੀ ਬਿਮਾਰੀ", "ਗੁਰਦਿਆਂ ਦੀ ਫਿਲਟਰ ਕਰਨ ਦੀ ਸਮਰੱਥਾ ਵਿੱਚ ਨੁਕਸ।"],
    "Liver Disease": ["ਜਿਗਰ ਦੀ ਬਿਮਾਰੀ", "ਜਿਗਰ ਦੇ ਕੰਮ ਵਿੱਚ ਖਰਾਬੀ ਅਤੇ ਪੀਲੀਆ।"],
    "Dermatitis": ["ਚਮੜੀ ਦੀ ਐਲਰਜੀ (ਡਰਮੇਟਾਇਟਸ)", "ਚਮੜੀ ਦੀ ਸੋਜ, ਧੱਫੜ ਜਾਂ ਖਾਰਸ਼।"],
    "Arthritis": ["ਗਠੀਆ (ਜੋੜਾਂ ਦਾ ਦਰਦ)", "ਜੋੜਾਂ ਵਿੱਚ ਸੋਜ, ਦਰਦ ਅਤੇ ਅਕੜਾਅ।"],
    "Gastroenteritis": ["ਢਿੱਡ ਦੀ ਲਾਗ", "ਉਲਟੀਆਂ ਅਤੇ ਦਸਤ ਦਾ ਕਾਰਨ ਬਣਨ ਵਾਲੀ ਲਾਗ।"],
    "UTI": ["ਪਿਸ਼ਾਬ ਨਾਲੀ ਦੀ ਲਾਗ (UTI)", "ਪਿਸ਼ਾਬ ਨਾਲੀ ਵਿੱਚ ਬੈਕਟੀਰੀਆ ਦੀ ਲਾਗ।"],
    "Migraine": ["ਅੱਧਾ ਸੀਸੀ (ਮਾਈਗ੍ਰੇਨ)", "ਵਾਰ-ਵਾਰ ਹੋਣ ਵਾਲਾ ਤੇਜ਼ ਸਿਰ ਦਰਦ।"],
    "Anxiety Disorder": ["ਘਬਰਾਹਟ ਰੋਗ", "ਬਹੁਤ ਜ਼ਿਆਦਾ ਚਿੰਤਾ ਅਤੇ ਤਣਾਅ।"],
    "Depression": ["ਡਿਪਰੈਸ਼ਨ (ਉਦਾਸੀਨਤਾ)", "ਲਗਾਤਾਰ ਉਦਾਸੀ ਅਤੇ ਦਿਲਚਸਪੀ ਦੀ ਕਮੀ।"],
    "Otitis": ["ਕੰਨ ਦੀ ਲਾਗ", "ਕੰਨ ਦੇ ਅੰਦਰ ਸੋਜ ਜਾਂ ਦਰਦ।"],
    "Dental Caries": ["ਦੰਦਾਂ ਦਾ ਕੀੜਾ", "ਦੰਦਾਂ ਵਿੱਚ ਦਰਦ ਅਤੇ ਕੀੜਾ ਲੱਗਣਾ।"],
    "Eye Disorder": ["ਅੱਖਾਂ ਦੀ ਬਿਮਾਰੀ", "ਨਜ਼ਰ ਜਾਂ ਅੱਖਾਂ ਦੀ ਸਿਹਤ ਨਾਲ ਜੁੜੀ ਸਮੱਸਿਆ।"]
  }
};

// -------------------------------------------------------------
// Complete 15 Specialists Translated in all 10 Languages
// -------------------------------------------------------------
const SPECIALIST_TEXT = {
  en: {
    "General Physician": "General Physician",
    "Pulmonologist": "Pulmonologist (Chest / Lung Specialist)",
    "Cardiologist": "Cardiologist (Heart Specialist)",
    "Endocrinologist / Diabetologist": "Endocrinologist / Diabetologist",
    "Nephrologist": "Nephrologist (Kidney Specialist)",
    "Gastroenterologist / Hepatologist": "Gastroenterologist / Hepatologist (Liver Specialist)",
    "Gastroenterologist": "Gastroenterologist (Stomach Specialist)",
    "Dermatologist": "Dermatologist (Skin Specialist)",
    "Rheumatologist / Orthopedist": "Rheumatologist / Orthopedic Specialist",
    "Urologist / General Physician": "Urologist / General Physician",
    "Neurologist": "Neurologist (Brain & Nerve Specialist)",
    "Psychiatrist / Psychologist": "Psychiatrist / Psychologist (Mental Health)",
    "ENT Specialist": "ENT Specialist (Ear, Nose & Throat)",
    "Dentist": "Dentist (Dental Surgeon)",
    "Ophthalmologist": "Ophthalmologist (Eye Specialist)"
  },
  kn: {
    "General Physician": "ಸಾಮಾನ್ಯ ವೈದ್ಯರು (General Physician)",
    "Pulmonologist": "ಶ್ವಾಸಕೋಶ ತಜ್ಞರು (Pulmonologist)",
    "Cardiologist": "ಹೃದ್ರೋಗ ತಜ್ಞರು (Cardiologist)",
    "Endocrinologist / Diabetologist": "ಮಧುಮೇಹ ತಜ್ಞರು (Endocrinologist)",
    "Nephrologist": "ಮೂತ್ರಪಿಂಡ ತಜ್ಞರು (Nephrologist / Kidney)",
    "Gastroenterologist / Hepatologist": "ಯಕೃತ್ ಮತ್ತು ಜಠರ ತಜ್ಞರು (Hepatologist)",
    "Gastroenterologist": "ಜಠರಗರುಳು ತಜ್ಞರು (Gastroenterologist)",
    "Dermatologist": "ಚರ್ಮರೋಗ ತಜ್ಞರು (Dermatologist)",
    "Rheumatologist / Orthopedist": "ಸಂಧಿವಾತ / ಮೂಳೆ ತಜ್ಞರು (Orthopedist)",
    "Urologist / General Physician": "ಮೂತ್ರಶಾಸ್ತ್ರ ತಜ್ಞರು (Urologist)",
    "Neurologist": "ನರರೋಗ ತಜ್ಞರು (Neurologist)",
    "Psychiatrist / Psychologist": "ಮನೋವೈದ್ಯರು (Psychiatrist)",
    "ENT Specialist": "ಇಎನ್‌ಟಿ ತಜ್ಞರು (ಕಿವಿ, ಮೂಗು, ಗಂಟಲು)",
    "Dentist": "ದಂತ ವೈದ್ಯರು (Dentist)",
    "Ophthalmologist": "ನೇತ್ರ ತಜ್ಞರು (Ophthalmologist / Eye)"
  },
  hi: {
    "General Physician": "सामान्य चिकित्सक (General Physician)",
    "Pulmonologist": "फेफड़ा रोग विशेषज्ञ (Pulmonologist)",
    "Cardiologist": "हृदय रोग विशेषज्ञ (Cardiologist)",
    "Endocrinologist / Diabetologist": "मधुमेह विशेषज्ञ (Endocrinologist)",
    "Nephrologist": "गुर्दा रोग विशेषज्ञ (Nephrologist)",
    "Gastroenterologist / Hepatologist": "लिवर एवं पेट रोग विशेषज्ञ (Hepatologist)",
    "Gastroenterologist": "पेट रोग विशेषज्ञ (Gastroenterologist)",
    "Dermatologist": "त्वचा रोग विशेषज्ञ (Dermatologist)",
    "Rheumatologist / Orthopedist": "हड्डी एवं जोड़ विशेषज्ञ (Orthopedist)",
    "Urologist / General Physician": "मूत्र रोग विशेषज्ञ (Urologist)",
    "Neurologist": "न्यूरोलॉजिस्ट (तंत्रिका तंत्र विशेषज्ञ)",
    "Psychiatrist / Psychologist": "मनोचिकित्सक (Psychiatrist)",
    "ENT Specialist": "ईएनटी विशेषज्ञ (कान, नाक, गला)",
    "Dentist": "दंत चिकित्सक (Dentist)",
    "Ophthalmologist": "नेत्र रोग विशेषज्ञ (Ophthalmologist)"
  },
  te: {
    "General Physician": "జనరల్ ఫిజీషియన్ (General Physician)",
    "Pulmonologist": "ఊపిరితిత్తుల నిపుణుడు (Pulmonologist)",
    "Cardiologist": "గుండె నిపుణుడు (Cardiologist)",
    "Endocrinologist / Diabetologist": "మధుమేహ నిపుణుడు (Endocrinologist)",
    "Nephrologist": "కిడ్నీ నిపుణుడు (Nephrologist)",
    "Gastroenterologist / Hepatologist": "కాలేయ & జీర్ణశయాంతర నిపుణుడు (Hepatologist)",
    "Gastroenterologist": "జీర్ణశయాంతర నిపుణుడు (Gastroenterologist)",
    "Dermatologist": "చర్మవ్యాధి నిపుణుడు (Dermatologist)",
    "Rheumatologist / Orthopedist": "కీళ్ల & ఎముకల నిపుణుడు (Orthopedist)",
    "Urologist / General Physician": "యూరాలజిస్ట్ (Urologist)",
    "Neurologist": "నాడీ నిపుణుడు (Neurologist)",
    "Psychiatrist / Psychologist": "సైకియాట్రిస్ట్ (Psychiatrist)",
    "ENT Specialist": "ఈఎన్‌టీ నిపుణుడు (చెవి, ముక్కు, గొంతు)",
    "Dentist": "దంతవైద్యుడు (Dentist)",
    "Ophthalmologist": "కంటి నిపుణుడు (Ophthalmologist)"
  },
  ta: {
    "General Physician": "பொது மருத்துவர் (General Physician)",
    "Pulmonologist": "நுரையீரல் நிபுணர் (Pulmonologist)",
    "Cardiologist": "இதய நிபுணர் (Cardiologist)",
    "Endocrinologist / Diabetologist": "நீரிழிவு நிபுணர் (Endocrinologist)",
    "Nephrologist": "சிறுநீரக நிபுணர் (Nephrologist)",
    "Gastroenterologist / Hepatologist": "கல்லீரல் நிபுணர் (Hepatologist)",
    "Gastroenterologist": "இரைப்பை குடல் நிபுணர் (Gastroenterologist)",
    "Dermatologist": "தோல் நோய் நிபுணர் (Dermatologist)",
    "Rheumatologist / Orthopedist": "மூட்டு & எலும்பு நிபுணர் (Orthopedist)",
    "Urologist / General Physician": "சிறுநீரக அறுவை சிகிச்சை நிபுணர் (Urologist)",
    "Neurologist": "நரம்பியல் நிபுணர் (Neurologist)",
    "Psychiatrist / Psychologist": "மனநல மருத்துவர் (Psychiatrist)",
    "ENT Specialist": "காது, மூக்கு, தொண்டை நிபுணர் (ENT)",
    "Dentist": "பல் மருத்துவர் (Dentist)",
    "Ophthalmologist": "கண் மருத்துவர் (Ophthalmologist)"
  },
  ml: {
    "General Physician": "ജനറൽ ഫിസിഷ്യൻ (General Physician)",
    "Pulmonologist": "ശ്വാസകോശ വിദഗ്ദ്ധൻ (Pulmonologist)",
    "Cardiologist": "ഹൃദ്രോഗ വിദഗ്ദ്ധൻ (Cardiologist)",
    "Endocrinologist / Diabetologist": "പ്രമേഹ വിദഗ്ദ്ധൻ (Endocrinologist)",
    "Nephrologist": "വൃക്കരോഗ വിദഗ്ദ്ധൻ (Nephrologist)",
    "Gastroenterologist / Hepatologist": "കരൾ രോഗ വിദഗ്ദ്ധൻ (Hepatologist)",
    "Gastroenterologist": "ഗ്യാസ്ട്രോഎൻട്രോളജിസ്റ്റ് (Gastroenterologist)",
    "Dermatologist": "ത്വക്ക് രോഗ വിദഗ്ദ്ധൻ (Dermatologist)",
    "Rheumatologist / Orthopedist": "അസ്ഥിരോഗ വിദഗ്ദ്ധൻ (Orthopedist)",
    "Urologist / General Physician": "യൂറോളജിസ്റ്റ് (Urologist)",
    "Neurologist": "ന്യൂറോളജിസ്റ്റ് (Neurologist)",
    "Psychiatrist / Psychologist": "മനോരോഗ വിദഗ്ദ്ധൻ (Psychiatrist)",
    "ENT Specialist": "ഇ.എൻ.ടി സ്പെഷ്യലിസ്റ്റ് (ENT)",
    "Dentist": "ദന്തഡോക്ടർ (Dentist)",
    "Ophthalmologist": "നേത്രരോഗ വിദഗ്ദ്ധൻ (Ophthalmologist)"
  },
  mr: {
    "General Physician": "सामान्य फिजिशियन (General Physician)",
    "Pulmonologist": "फुफ्फुस विकार तज्ज्ञ (Pulmonologist)",
    "Cardiologist": "हृदयरोग तज्ज्ञ (Cardiologist)",
    "Endocrinologist / Diabetologist": "मधुमेह तज्ज्ञ (Endocrinologist)",
    "Nephrologist": "किडनी विकार तज्ज्ञ (Nephrologist)",
    "Gastroenterologist / Hepatologist": "लिव्हर व पोटविकार तज्ज्ञ (Hepatologist)",
    "Gastroenterologist": "पोटविकार तज्ज्ञ (Gastroenterologist)",
    "Dermatologist": "त्वचारोग तज्ज्ञ (Dermatologist)",
    "Rheumatologist / Orthopedist": "हाडे व सांधे तज्ज्ञ (Orthopedist)",
    "Urologist / General Physician": "मूत्रविकार तज्ज्ञ (Urologist)",
    "Neurologist": "मेंदू व मज्जारज्जू तज्ज्ञ (Neurologist)",
    "Psychiatrist / Psychologist": "मानसोपचार तज्ज्ञ (Psychiatrist)",
    "ENT Specialist": "कान, नाक, घसा तज्ज्ञ (ENT)",
    "Dentist": "दंतचिकित्सक (Dentist)",
    "Ophthalmologist": "नेत्ररोग तज्ज्ञ (Ophthalmologist)"
  },
  bn: {
    "General Physician": "সাধারণ চিকিৎসক (General Physician)",
    "Pulmonologist": "বক্ষব্যাধি ও ফুসফুস বিশেষজ্ঞ (Pulmonologist)",
    "Cardiologist": "হৃদরোগ বিশেষজ্ঞ (Cardiologist)",
    "Endocrinologist / Diabetologist": "ডায়াবেটিস বিশেষজ্ঞ (Endocrinologist)",
    "Nephrologist": "কিডনি বিশেষজ্ঞ (Nephrologist)",
    "Gastroenterologist / Hepatologist": "লিভার বিশেষজ্ঞ (Hepatologist)",
    "Gastroenterologist": "পরিপাকতন্ত্র বিশেষজ্ঞ (Gastroenterologist)",
    "Dermatologist": "চর্মরোগ বিশেষজ্ঞ (Dermatologist)",
    "Rheumatologist / Orthopedist": "অর্থোপেডিক ও বাত বিশেষজ্ঞ (Orthopedist)",
    "Urologist / General Physician": "ইউরোলজিস্ট (Urologist)",
    "Neurologist": "স্নায়ুরোগ বিশেষজ্ঞ (Neurologist)",
    "Psychiatrist / Psychologist": "মনোরোগ বিশেষজ্ঞ (Psychiatrist)",
    "ENT Specialist": "নাক, কান ও গলা বিশেষজ্ঞ (ENT)",
    "Dentist": "দন্ত চিকিৎসক (Dentist)",
    "Ophthalmologist": "চক্ষু বিশেষজ্ঞ (Ophthalmologist)"
  },
  gu: {
    "General Physician": "જનરલ ફિઝિશિયન (General Physician)",
    "Pulmonologist": "ફેફસાના રોગના નિષ્ણાત (Pulmonologist)",
    "Cardiologist": "હૃદય રોગના નિષ્ણાત (Cardiologist)",
    "Endocrinologist / Diabetologist": "ડાયાબિટીસ નિષ્ણાત (Endocrinologist)",
    "Nephrologist": "કિડની નિષ્ણાત (Nephrologist)",
    "Gastroenterologist / Hepatologist": "લીવર અને પેટના નિષ્ણાત (Hepatologist)",
    "Gastroenterologist": "પેટના રોગના નિષ્ણાત (Gastroenterologist)",
    "Dermatologist": "ચામડીના રોગના નિષ્ણાત (Dermatologist)",
    "Rheumatologist / Orthopedist": "સાંધા અને હાડકાના નિષ્ણાત (Orthopedist)",
    "Urologist / General Physician": "યુરોલોજિસ્ટ (Urologist)",
    "Neurologist": "ન્યુરોલોજિસ્ટ (મગજ અને ચેતા નિષ્ણાત)",
    "Psychiatrist / Psychologist": "મનોચિકિત્સક (Psychiatrist)",
    "ENT Specialist": "કાન, નાક અને ગળાના નિષ્ણાત (ENT)",
    "Dentist": "દંત ચિકિત્સક (Dentist)",
    "Ophthalmologist": "આંખના નિષ્ણાત (Ophthalmologist)"
  },
  pa: {
    "General Physician": "ਜਨਰਲ ਫਿਜ਼ੀਸ਼ੀਅਨ (General Physician)",
    "Pulmonologist": "ਫੇਫੜਿਆਂ ਦੇ ਮਾਹਰ (Pulmonologist)",
    "Cardiologist": "ਦਿਲ ਦੇ ਰੋਗਾਂ ਦੇ ਮਾਹਰ (Cardiologist)",
    "Endocrinologist / Diabetologist": "ਸ਼ੂਗਰ ਰੋਗਾਂ ਦੇ ਮਾਹਰ (Endocrinologist)",
    "Nephrologist": "ਗੁਰਦੇ ਦੇ ਮਾਹਰ (Nephrologist)",
    "Gastroenterologist / Hepatologist": "ਜਿਗਰ ਅਤੇ ਪੇਟ ਦੇ ਮਾਹਰ (Hepatologist)",
    "Gastroenterologist": "ਪੇਟ ਦੇ ਰੋਗਾਂ ਦੇ ਮਾਹਰ (Gastroenterologist)",
    "Dermatologist": "ਚਮੜੀ ਦੇ ਰੋਗਾਂ ਦੇ ਮਾਹਰ (Dermatologist)",
    "Rheumatologist / Orthopedist": "ਹੱਡੀਆਂ ਅਤੇ ਜੋੜਾਂ ਦੇ ਮਾਹਰ (Orthopedist)",
    "Urologist / General Physician": "ਯੂਰੋਲੋਜਿਸਟ (Urologist)",
    "Neurologist": "ਨਿਊਰੋਲੋਜਿਸਟ (ਦਿਮਾਗ ਤੇ ਨਾੜੀਆਂ ਦੇ ਮਾਹਰ)",
    "Psychiatrist / Psychologist": "ਮਨੋਰੋਗਾਂ ਦੇ ਮਾਹਰ (Psychiatrist)",
    "ENT Specialist": "ਕੰਨ, ਨੱਕ ਅਤੇ ਗਲੇ ਦੇ ਮਾਹਰ (ENT)",
    "Dentist": "ਦੰਦਾਂ ਦੇ ਡਾਕਟਰ (Dentist)",
    "Ophthalmologist": "ਅੱਖਾਂ ਦੇ ਮਾਹਰ (Ophthalmologist)"
  }
};

// -------------------------------------------------------------
// Risk Levels & General Advice in all 10 Languages
// -------------------------------------------------------------
const RISK_TEXT = {
  en: { Low: "Low Risk", Moderate: "Moderate Risk", High: "High Risk (Prompt / Urgent Care Recommended)" },
  kn: { Low: "ಕಡಿಮೆ ಅಪಾಯ", Moderate: "ಮಧ್ಯಮ ಅಪಾಯ", High: "ಹೆಚ್ಚಿನ ಅಪಾಯ (ತುರ್ತು ವೈದ್ಯಕೀಯ ಗಮನ ಅಗತ್ಯ)" },
  hi: { Low: "कम जोखिम", Moderate: "मध्यम जोखिम", High: "उच्च जोखिम (तत्काल चिकित्सकीय परामर्श आवश्यक)" },
  te: { Low: "తక్కువ ప్రమాదం", Moderate: "మధ్యస్థ ప్రమాదం", High: "అధిక ప్రమాదం (తక్షణ వైద్య సంరక్షణ అవసరం)" },
  ta: { Low: "குறைந்த ஆபத்து", Moderate: "நடுத்தர ஆபத்து", High: "அதிக ஆபத்து (உடனடி மருத்துவ கவனம் தேவை)" },
  ml: { Low: "കുറഞ്ഞ അപകടസാധ്യത", Moderate: "മിതമായ അപകടസാധ്യത", High: "ഉയർന്ന അപകടസാധ്യത (അടിയന്തിര വൈദ്യസഹായം തേടുക)" },
  mr: { Low: "कमी धोका", Moderate: "मध्यम धोका", High: "उच्च धोका (तातडीने वैद्यकीय सल्ला घ्या)" },
  bn: { Low: "কম ঝুঁকি", Moderate: "মাঝারি ঝুঁকি", High: "উচ্চ ঝুঁকি (জরুরি চিকিৎসার পরামর্শ প্রয়োজন)" },
  gu: { Low: "ઓછું જોખમ", Moderate: "મધ્યમ જોખમ", High: "ઉચ્ચ જોખમ (તાત્કાલિક તબીબી સારવાર જરૂરી)" },
  pa: { Low: "ਘੱਟ ਖ਼ਤਰਾ", Moderate: "ਦਰਮਿਆਨਾ ਖ਼ਤਰਾ", High: "ਉੱਚ ਖ਼ਤਰਾ (ਤੁਰੰਤ ਡਾਕਟਰੀ ਸਲਾਹ ਦੀ ਲੋੜ)" }
};

const ADVICE_TEXT = {
  en: {
    "Common Cold": "Rest, hydration, and seek medical advice if symptoms are severe or persistent.",
    "Influenza": "Consider clinical evaluation, especially with high fever or breathing difficulty.",
    "Pneumonia": "Breathing difficulty or severe symptoms require prompt medical evaluation.",
    "Asthma": "Seek medical evaluation for recurrent breathing symptoms or attacks.",
    "Heart Disease": "Chest pain, fainting, or severe breathlessness require urgent care.",
    "Diabetes": "Blood glucose testing and professional clinical evaluation are important.",
    "Kidney Disease": "Kidney function and urine testing should be assessed by a clinician.",
    "Liver Disease": "Persistent abdominal symptoms or jaundice need professional assessment.",
    "Dermatitis": "Avoid known irritants and seek assessment for persistent or worsening rash.",
    "Arthritis": "Persistent joint pain or swelling should be clinically evaluated.",
    "Gastroenteritis": "Maintain hydration and seek care for severe dehydration or persistent symptoms.",
    "UTI": "A clinician may recommend urine testing and appropriate treatment.",
    "Migraine": "Recurrent severe headaches should be evaluated, especially if new or unusual.",
    "Anxiety Disorder": "A mental-health professional can provide assessment and treatment options.",
    "Depression": "Professional mental-health support is recommended for persistent low mood.",
    "Otitis": "Persistent ear pain, discharge, or hearing changes should be assessed.",
    "Dental Caries": "A dental examination is recommended for tooth pain or suspected decay.",
    "Eye Disorder": "Sudden vision loss or major visual changes require urgent eye assessment."
  },
  kn: {
    "Common Cold": "ವಿಶ್ರಾಂತಿ ತೆಗೆದುಕೊಳ್ಳಿ, ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ. ಲಕ್ಷಣಗಳು ಮುಂದುವರಿದರೆ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    "Influenza": "ಹೆಚ್ಚಿನ ಜ್ವರ ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ ಇದ್ದಲ್ಲಿ ತಕ್ಷಣ ಕ್ಲಿನಿಕಲ್ ಪರೀಕ್ಷೆ ಅಗತ್ಯ.",
    "Pneumonia": "ಉಸಿರಾಟದ ತೊಂದರೆ ಅಥವಾ ತೀವ್ರ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಲ್ಲಿ ತುರ್ತು ವೈದ್ಯಕೀಯ ಚಿಕಿತ್ಸೆ ಪಡೆಯಿರಿ.",
    "Asthma": "ಮರುಕಳಿಸುವ ಉಸಿರಾಟದ ತೊಂದರೆ ಅಥವಾ ಆಸ್ತಮಾ ದಾಳಿಗಳಿಗೆ ತಜ್ಞರ ಸಲಹೆ ಪಡೆಯಿರಿ.",
    "Heart Disease": "ಎದೆ ನೋವು, ತಲೆತಿರುಗುವಿಕೆ ಅಥವಾ ಉಸಿರಾಟದ ತೊಂದರೆ ಇದ್ದರೆ ತಕ್ಷಣ ತುರ್ತು ಚಿಕಿತ್ಸೆ ಪಡೆಯಿರಿ.",
    "Diabetes": "ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಪರೀಕ್ಷೆ ಮತ್ತು ವೈದ್ಯಕೀಯ ಮೌಲ್ಯಮಾಪನ ಅತ್ಯಗತ್ಯ.",
    "Kidney Disease": "ಮೂತ್ರಪಿಂಡದ ಕಾರ್ಯನಿರ್ವಹಣೆ ಮತ್ತು ಮೂತ್ರ ಪರೀಕ್ಷೆಯನ್ನು ವೈದ್ಯರಿಂದ ಮಾಡಿಸಿಕೊಳ್ಳಿ.",
    "Liver Disease": "ಹೊಟ್ಟೆ ನೋವು ಅಥವಾ ಕಾಮಾಲೆ ಲಕ್ಷಣಗಳು ಮುಂದುವರಿದರೆ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    "Dermatitis": "ಅಲರ್ಜಿ ಉಂಟುಮಾಡುವ ವಸ್ತುಗಳಿಂದ ದೂರವಿರಿ ಮತ್ತು ಚರ್ಮ ತಜ್ಞರನ್ನು ಭೇಟಿ ಮಾಡಿ.",
    "Arthritis": "ಕೀಲು ನೋವು ಅಥವಾ ಊತ ನಿರಂತರವಾಗಿದ್ದರೆ ಮೂಳೆ ತಜ್ಞರ ಬಳಿ ತಪಾಸಣೆ ಮಾಡಿಸಿ.",
    "Gastroenteritis": "ಸಾಕಷ್ಟು ದ್ರವಾಹಾರ ಸೇವಿಸಿ (ORS) ನಿರ್ಜಲೀಕರಣ ತಪ್ಪಿಸಿ ಮತ್ತು ವೈದ್ಯರ ಚಿಕಿತ್ಸೆ ಪಡೆಯಿರಿ.",
    "UTI": "ಮೂತ್ರ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿ ಸೂಕ್ತ ಆಂಟಿಬಯೋಟಿಕ್ ಚಿಕಿತ್ಸೆಯನ್ನು ವೈದ್ಯರಿಂದ ಪಡೆಯಿರಿ.",
    "Migraine": "ಮರುಕಳಿಸುವ ತೀವ್ರ ತಲೆನೋವಿಗೆ ನರರೋಗ ತಜ್ಞರ ಸಲಹೆ ಮತ್ತು ಚಿಕಿತ್ಸೆ ಪಡೆಯಿರಿ.",
    "Anxiety Disorder": "ಮನೋವೈದ್ಯರು ಅಥವಾ ಆಪ್ತಸಮಾಲೋಚಕರನ್ನು ಸಂಪರ್ಕಿಸಿ ಸೂಕ್ತ ಚಿಕಿತ್ಸೆ ಪಡೆಯಿರಿ.",
    "Depression": "ನಿರಂತರ ದುಃಖ ಅಥವಾ ಖಿನ್ನತೆಗೆ ವೃತ್ತಿಪರ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಬೆಂಬಲ ಪಡೆಯಿರಿ.",
    "Otitis": "ಕಿವಿ ನೋವು, ಕೀವು ಸೋರುವುದು ಅಥವಾ ಕೇಳುವಿಕೆ ಬದಲಾವಣೆಗಳಿಗೆ ಇಎನ್‌ಟಿ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
    "Dental Caries": "ಹಲ್ಲು ನೋವು ಅಥವಾ ಹುಳುಕಿಗೆ ದಂತ ವೈದ್ಯರಿಂದ ಪರೀಕ್ಷೆ ಮಾಡಿಸಿಕೊಳ್ಳಿ.",
    "Eye Disorder": "ಹಠಾತ್ ದೃಷ್ಟಿ ದೋಷ ಅಥವಾ ಕಣ್ಣಿನ ನೋವಿಗೆ ನೇತ್ರ ತಜ್ಞರಿಂದ ತುರ್ತು ತಪಾಸಣೆ ಅಗತ್ಯ."
  },
  hi: {
    "Common Cold": "आराम करें, पर्याप्त तरल पदार्थ पिएं और लक्षण बने रहने पर डॉक्टर से परामर्श लें।",
    "Influenza": "तेज बुखार या सांस लेने में परेशानी होने पर तुरंत डॉक्टरी जांच कराएं।",
    "Pneumonia": "सांस लेने में गंभीर तकलीफ होने पर तत्काल अस्पताल जाकर जांच कराएं।",
    "Asthma": "सांस फूलने या अस्थमा के दौरे के लिए फेफड़ा रोग विशेषज्ञ से परामर्श लें।",
    "Heart Disease": "सीने में दर्द, घबराहट या बेहोशी होने पर तुरंत आपातकालीन चिकित्सा सहायता लें।",
    "Diabetes": "ब्लड शुगर (रक्त शर्करा) की नियमित जांच कराएं और डॉक्टर से सलाह लें।",
    "Kidney Disease": "गुर्दे की कार्यप्रणाली (KFT) और मूत्र परीक्षण विशेषज्ञ डॉक्टर से करवाएं।",
    "Liver Disease": "लगातार पेट दर्द या पीलिया के लक्षणों के लिए लिवर विशेषज्ञ से जांच कराएं।",
    "Dermatitis": "एलर्जी पैदा करने वाली चीजों से बचें और त्वचा रोग विशेषज्ञ से सलाह लें।",
    "Arthritis": "जोड़ों में लगातार दर्द या सूजन के लिए हड्डी विशेषज्ञ से जांच कराएं।",
    "Gastroenteritis": "ओआरएस और पर्याप्त पानी पिएं ताकि डिहाइड्रेशन न हो, और दवा लें।",
    "UTI": "मूत्र परीक्षण (Urine Test) कराएं और डॉक्टर द्वारा निर्देशित उपचार लें।",
    "Migraine": "बार-बार होने वाले सिरदर्द के लिए न्यूरोलॉजिस्ट से उचित उपचार लें।",
    "Anxiety Disorder": "अत्यधिक चिंता और तनाव के लिए मनोचिकित्सक से परामर्श लें।",
    "Depression": "लगातार उदासी या डिप्रेशन के लिए मानसिक स्वास्थ्य विशेषज्ञ की मदद लें।",
    "Otitis": "कान में दर्द या मवाद बहने पर ईएनटी (ENT) विशेषज्ञ को दिखाएं।",
    "Dental Caries": "दांत के दर्द और सड़न के लिए दंत चिकित्सक से दांतों की जांच कराएं।",
    "Eye Disorder": "दृष्टि में अचानक बदलाव या आंख में दर्द होने पर तुरंत नेत्र विशेषज्ञ को दिखाएं।"
  },
  te: {
    "Common Cold": "విశ్రాంతి తీసుకోండి, పుష్కలంగా ద్రవాలు తాగండి. లక్షణాలు తగ్గకపోతే వైద్యుడిని సంప్రదించండి.",
    "Influenza": "అధిక జ్వరం లేదా శ్వాస తీసుకోవడంలో ఇబ్బంది ఉంటే వెంటనే వైద్యుడిని సంప్రదించండి.",
    "Pneumonia": "తీవ్రమైన శ్వాస సమస్యలకు వెంటనే అత్యవసర వైద్య సంరక్షణ అవసరం.",
    "Asthma": "ఆస్తమా దాడులు మరియు శ్వాస సమస్యల కోసం నిపుణుల సలహా తీసుకోండి.",
    "Heart Disease": "ఛాతీ నొప్పి లేదా శ్వాస ఆడకపోవడం ఉంటే వెంటనే అత్యవసర చికిత్స పొందండి.",
    "Diabetes": "రక్తంలో చక్కెర స్థాయిలను పరీక్షించుకుని వైద్యుల పర్యవేక్షణలో ఉండండి.",
    "Kidney Disease": "కిడ్నీ పనితీరు మరియు మూత్ర పరీక్షలను వైద్యుడి ద్వారా చేయించుకోండి.",
    "Liver Disease": "కడుపు నొప్పి లేదా పచ్చకామెర్లు ఉంటే కాలేయ నిపుణుడిని సంప్రదించండి.",
    "Dermatitis": "అలర్జీ కలిగించే పదార్థాలకు దూరంగా ఉండండి మరియు చర్మ నిపుణుడిని సంప్రదించండి.",
    "Arthritis": "కీళ్ల నొప్పులు లేదా వాపులు ఉంటే ఆర్థోపెడిక్ వైద్యుడిని సంప్రదించండి.",
    "Gastroenteritis": "డీహైడ్రేషన్ కాకుండా ఓఆర్ఎస్ ద్రావణం తాగండి మరియు వైద్య చికిత్స పొందండి.",
    "UTI": "మూత్ర పరీక్ష చేయించుకుని తగిన యాంటీబయాటిక్ చికిత్స పొందండి.",
    "Migraine": "పునరావృత తలనొప్పికి న్యూరాలజిస్ట్ సలహా తీసుకోండి.",
    "Anxiety Disorder": "ఆందోళన మరియు ఒత్తిడి నియంత్రణకు మానసిక నిపుణుడిని సంప్రదించండి.",
    "Depression": "నిరంతర నిరాశకు వృత్తిపరమైన మానసిక ఆరోగ్య మద్దతు అవసరం.",
    "Otitis": "చెవి నొప్పి లేదా వినికిడి సమస్యలకు ఈఎన్‌టీ నిపుణుడిని సంప్రదించండి.",
    "Dental Caries": "పంటి నొప్పి మరియు దంత క్షయానికి దంతవైద్యుడిని సంప్రదించండి.",
    "Eye Disorder": "చూపు మందగించడం లేదా కంటి నొప్పులకు కంటి నిపుణుడిని సంప్రదించండి."
  },
  ta: {
    "Common Cold": "ஓய்வெடுங்கள், போதுமான திரவங்களை அருந்துங்கள். அறிகுறிகள் நீடித்தால் மருத்துவரை அணுகவும்.",
    "Influenza": "அதிக காய்ச்சல் அல்லது மூச்சுத்திணறல் இருந்தால் உடனே மருத்துவ பரிசோதனை செய்யவும்.",
    "Pneumonia": "கடுமையான மூச்சுத்திணறல் ஏற்பட்டால் தாமதிக்காமல் அவசர மருத்துவ உதவி பெறவும்.",
    "Asthma": "ஆஸ்துமா பாதிப்புகளுக்கு நுரையீரல் நிபுணரிடம் ஆலோசனை பெறவும்.",
    "Heart Disease": "நெஞ்சு வலி அல்லது மயக்கம் ஏற்பட்டால் உடனடியாக அவசர சிகிச்சைப் பிரிவை அணுகவும்.",
    "Diabetes": "இரத்த சர்க்கரை அளவை பரிசோதித்து தகுந்த மருத்துவ ஆலோசனை பெறவும்.",
    "Kidney Disease": "சிறுநீரக செயல்பாடு மற்றும் சிறுநீர் பரிசோதனைகளை மேற்கொள்ளவும்.",
    "Liver Disease": "நீடித்த வயிற்று வலி அல்லது மஞ்சள் காமாலைக்கு கல்லீரல் நிபுணரை அணுகவும்.",
    "Dermatitis": "ஒவ்வாமை ஏற்படுத்தும் காரணிகளைத் தவிர்த்து தோல் மருத்துவரிடம் சிகிச்சை பெறவும்.",
    "Arthritis": "மூட்டு வலி மற்றும் வீக்கத்திற்கு எலும்பு மூட்டு நிபுணரிடம் ஆலோசனை பெறவும்.",
    "Gastroenteritis": "உடலில் நீரிழப்பு ஏற்படாமல் இருக்க ORS மற்றும் திரவ உணவுகளை உட்கொள்ளவும்.",
    "UTI": "சிறுநீர் பரிசோதனை செய்து உரிய ஆண்டிபயாடிக் சிகிச்சையை எடுக்கவும்.",
    "Migraine": "கடுமையான தலைவலிக்கு நரம்பியல் நிபுணரை அணுகி சிகிச்சை பெறவும்.",
    "Anxiety Disorder": "அதிகப்படியான பதட்டத்திற்கு மனநல மருத்துவரிடம் ஆலோசனை பெறவும்.",
    "Depression": "நீடித்த மனச்சோர்வுக்கு தகுதியான மனநல உதவியை நாடவும்.",
    "Otitis": "காது வலி அல்லது சீழ் வடிதலுக்கு காது மூக்கு தொண்டை மருத்துவரை அணுகவும்.",
    "Dental Caries": "பல் வலி மற்றும் சொத்தைக்கு பல் மருத்துவரிடம் சிகிச்சை பெறவும்.",
    "Eye Disorder": "பார்வை குறைபாடு அல்லது கண் வலிக்கு கண் மருத்துவரை உடனே அணுகவும்."
  },
  ml: {
    "Common Cold": "വിശ്രമിക്കുക, ധാരാളം വെള്ളം കുടിക്കുക. ലക്ഷണങ്ങൾ തുടർന്നാൽ ഡോക്ടറെ കാണുക.",
    "Influenza": "കഠിനമായ പനിയോ ശ്വാസതടസ്സമോ ഉണ്ടെങ്കിൽ ഉടൻ വിദഗ്ദ്ധ ചികിത്സ തേടുക.",
    "Pneumonia": "ശ്വാസതടസ്സവും നെഞ്ചുവേദനയും ഉണ്ടെങ്കിൽ ഉടൻ അടിയന്തിര ചികിത്സ തേടുക.",
    "Asthma": "ആസ്ത്മ രോഗലക്ഷണങ്ങൾക്ക് ശ്വാസകോശ വിദഗ്ദ്ധന്റെ നിർദ്ദേശം സ്വീകരിക്കുക.",
    "Heart Disease": "നെഞ്ചുവേദനയോ ബോധക്ഷയമോ ഉണ്ടായാൽ ഉടൻ അടിയന്തിര വൈദ്യസഹായം തേടുക.",
    "Diabetes": "രക്തത്തിലെ പഞ്ചസാരയുടെ അളവ് പരിശോധിച്ച് കൃത്യമായ ചികിത്സ ഉറപ്പാക്കുക.",
    "Kidney Disease": "വൃക്കകളുടെ പ്രവർത്തന പരിശോധനയും മൂത്ര പരിശോധനയും നടത്തുക.",
    "Liver Disease": "മഞ്ഞപ്പിത്ത ലക്ഷണങ്ങൾക്കോ വയറുവേദനയ്ക്കോ കരൾ രോഗ വിദഗ്ദ്ധനെ കാണുക.",
    "Dermatitis": "അലർജി ഉണ്ടാക്കുന്ന വസ്തുക്കൾ ഒഴിവാക്കി ത്വക്ക് രോഗ വിദഗ്ദ്ധനെ കാണുക.",
    "Arthritis": "സന്ധിവേദനയോ നീർക്കെട്ടോ മാറാതെ നിൽക്കുന്നുവെങ്കിൽ ഡോക്ടറെ കാണുക.",
    "Gastroenteritis": "നിർജ്ജലീകരണം ഒഴിവാക്കാൻ ഒ.ആർ.എസ് ധാരാളം കുടിക്കുക, ചികിത്സ തേടുക.",
    "UTI": "മൂത്രപരിശോധന നടത്തി ഡോക്ടറുടെ നിർദ്ദേശപ്രകാരം മരുന്ന് കഴിക്കുക.",
    "Migraine": "ഇടവിട്ടുണ്ടാകുന്ന കഠിനമായ തലവേദനയ്ക്ക് ന്യൂറോളജിസ്റ്റിന്റെ സഹായം തേടുക.",
    "Anxiety Disorder": "അമിതമായ ഉത്കണ്ഠയ്ക്ക് കൗൺസിലിംഗോ വിദഗ്ദ്ധ ചികിത്സയോ തേടുക.",
    "Depression": "വിഷാദാവസ്ഥയ്ക്ക് മാനസികാരോഗ്യ വിദഗ്ദ്ധന്റെ സഹായം തേടുക.",
    "Otitis": "ചെവിവേദനയ്ക്കോ കേൾവിക്കുറവിനോ ഇ.എൻ.ടി ഡോക്ടറെ കാണുക.",
    "Dental Caries": "പല്ലുവേദനയ്ക്കും കേടിനും ദന്തഡോക്ടറെ കണ്ട് ചികിത്സിക്കുക.",
    "Eye Disorder": "കാഴ്ച മങ്ങുകയോ കണ്ണ് വേദനിക്കുകയോ ചെയ്താൽ നേത്രരോഗ വിദഗ്ദ്ധനെ കാണുക."
  },
  mr: {
    "Common Cold": "विश्रांती घ्या, भरपूर पाणी प्या आणि लक्षणे कायम राहिल्यास डॉक्टरांचा सल्ला घ्या.",
    "Influenza": "तीव्र ताप किंवा श्वास घेण्यास त्रास होत असल्यास त्वरित डॉक्टरांकडे जा.",
    "Pneumonia": "श्वास घेण्यास त्रास झाल्यास तातडीने वैद्यकीय तपासणी करून घ्या.",
    "Asthma": "दम्याच्या त्रासासाठी फुफ्फुस विकार तज्ज्ञांकडून नियमित उपचार घ्या.",
    "Heart Disease": "छातीत दुखणे किंवा चक्कर आल्यास त्वरित आपत्कालीन वैद्यकीय मदत घ्या.",
    "Diabetes": "रक्तातील साखरेची नियमित तपासणी करा आणि डॉक्टरांच्या सल्ल्यानुसार पथ्य पाळा.",
    "Kidney Disease": "किडनीची कार्यक्षमता आणि लघवीची तपासणी करून घ्या.",
    "Liver Disease": "पोटदुखी किंवा काविळीच्या लक्षणांसाठी तज्ज्ञ डॉक्टरांचा सल्ला घ्या.",
    "Dermatitis": "ऍलर्जी निर्माण करणाऱ्या घटकांपासून दूर राहा आणि त्वचारोग तज्ज्ञांना दाखवा.",
    "Arthritis": "सांधेदुखी किंवा सूज कायम असल्यास ऑर्थोपेडिक तज्ज्ञांचा सल्ला घ्या.",
    "Gastroenteritis": "डिहायड्रेशन टाळण्यासाठी ओआरएस आणि द्रवपदार्थ प्या, औषधोपचार घ्या.",
    "UTI": "लघवीची तपासणी करून योग्य अँटीबायोटिक्स उपचार डॉक्टरांच्या सल्ल्याने घ्या.",
    "Migraine": "वारंवार होणाऱ्या तीव्र डोकेदुखीसाठी न्यूरोलॉजिस्टचा सल्ला घ्या.",
    "Anxiety Disorder": "अति चिंता आणि तणावासाठी मानसोपचार तज्ज्ञांची मदत घ्या.",
    "Depression": "सततच्या खिन्नतेसाठी मानसिक आरोग्य तज्ज्ञांचा सल्ला घ्या.",
    "Otitis": "कानदुखी किंवा पू वाहण्यावर ईएनटी तज्ज्ञांकडून तपासणी करा.",
    "Dental Caries": "दातदुखी आणि कीड यावर दंतवैद्यांकडून योग्य उपचार करून घ्या.",
    "Eye Disorder": "दृष्टीत अचानक बदल झाल्यास किंवा डोळे दुखल्यास नेत्रतज्ज्ञांना दाखवा."
  },
  bn: {
    "Common Cold": "বিশ্রাম নিন, প্রচুর জল পান করুন এবং লক্ষণ স্থায়ী হলে চিকিৎসকের পরামর্শ নিন।",
    "Influenza": "উচ্চ জ্বর বা শ্বাসকষ্টের সমস্যা দেখা দিলে অবিলম্বে ডাক্তারের পরামর্শ নিন।",
    "Pneumonia": "তীব্র শ্বাসকষ্ট হলে দেরি না করে জরুরি চিকিৎসার সাহায্য নিন।",
    "Asthma": "হাঁপানি বা শ্বাসকষ্টের জন্য বক্ষব্যাধি বিশেষজ্ঞের পরামর্শ মেনে চলুন।",
    "Heart Disease": "বুকে ব্যথা বা মাথা ঘোরার মতো উপসর্গ থাকলে অবিলম্বে জরুরি চিকিৎসা নিন।",
    "Diabetes": "রক্তে সুগার পরীক্ষা করান এবং চিকিৎসকের পরামর্শমতো ডায়েট মেনে চলুন।",
    "Kidney Disease": "কিডনির কার্যকারিতা ও প্রস্রাব পরীক্ষা বিশেষজ্ঞ ডাক্তারকে দিয়ে করান।",
    "Liver Disease": "পেটে ব্যথা বা জন্ডিস হলে লিভার বিশেষজ্ঞের পরামর্শ নিন।",
    "Dermatitis": "অ্যালার্জির উপাদান থেকে দূরে থাকুন এবং চর্মরোগ বিশেষজ্ঞের পরামর্শ নিন।",
    "Arthritis": "জয়েন্টে তীব্র ব্যথা বা ফোলাভাব থাকলে অর্থোপেডিক বিশেষজ্ঞকে দেখান।",
    "Gastroenteritis": "জলশূন্যতা এড়াতে ওআরএস (ORS) পান করুন এবং ডাক্তারের ওষুধ নিন।",
    "UTI": "প্রস্রাব পরীক্ষা করিয়ে চিকিৎসকের নির্দেশমতো অ্যান্টিবায়োটিক গ্রহণ করুন।",
    "Migraine": "তীব্র মাথাব্যথার জন্য নিউরোলজিস্টের কাছ থেকে চিকিৎসা নিন।",
    "Anxiety Disorder": "অতিরিক্ত উদ্বেগ ও ভয়ের জন্য মানসিক স্বাস্থ্য বিশেষজ্ঞের সাহায্য নিন।",
    "Depression": "দীর্ঘস্থায়ী বিষণ্ণতার জন্য অভিজ্ঞ মনোচিকিৎসকের সাথে পরামর্শ করুন।",
    "Otitis": "কানে ব্যথা বা পুঁজ পড়ার জন্য ইএনটি বিশেষজ্ঞকে দেখান।",
    "Dental Caries": "দাঁতের ব্যথা ও ক্ষয়ের জন্য ডেন্টিস্টের কাছে যান।",
    "Eye Disorder": "চোখে দৃষ্টির সমস্যা বা ব্যথা হলে অবিলম্বে চক্ষু বিশেষজ্ঞকে দেখান।"
  },
  gu: {
    "Common Cold": "આરામ કરો, પૂરતા પ્રમાણમાં પ્રવાહી લો અને લક્ષણો રહે તો ડૉક્ટરની સલાહ લો.",
    "Influenza": "તીવ્ર તાવ અથવા શ્વાસ લેવામાં તકલીફ હોય તો તાત્કાલિક તબીબી તપાસ કરાવો.",
    "Pneumonia": "શ્વાસ લેવામાં તકલીફ જણાય તો વિલંબ કર્યા વિના ઈમરજન્સી સારવાર લો.",
    "Asthma": "દમ અને શ્વાસની તકલીફ માટે ફેફસાના નિષ્ણાતની સલાહ લો.",
    "Heart Disease": "છાતીમાં દુખાવો અથવા ચક્કર આવે તો તરત જ કટોકટી તબીબી સહાય મેળવો.",
    "Diabetes": "બ્લડ શુગરની નિયમિત તપાસ કરાવો અને યોગ્ય આહાર-દવાનું પાલન કરો.",
    "Kidney Disease": "કિડની ફંક્શન અને પેશાબની તપાસ નિષ્ણાત ડૉક્ટર પાસે કરાવો.",
    "Liver Disease": "પેટનો દુખાવો કે કમળાના લક્ષણો માટે લીવર નિષ્ણાતની સલાહ લો.",
    "Dermatitis": "એલર્જીજન્ય વસ્તુઓથી દૂર રહો અને ચામડીના ડૉક્ટરને બતાવો.",
    "Arthritis": "સાંધાનો દુખાવો કે સોજો મટતો ન હોય તો હાડકાના નિષ્ણાતને બતાવો.",
    "Gastroenteritis": "ડિહાઇડ્રેશન ન થાય તે માટે ઓઆરએસ અને પુષ્કળ પ્રવાહી પીવો.",
    "UTI": "પેશાબની તપાસ કરાવી યોગ્ય એન્ટિબાયોટિક સારવાર લો.",
    "Migraine": "વારંવાર થતા માથાના દુખાવા માટે ન્યુરોલોજિસ્ટની સલાહ લો.",
    "Anxiety Disorder": "ચિંતા અને ગભરાટ માટે મનોચિકિત્સકની મદદ લો.",
    "Depression": "સતત ઉદાસીનતા માટે માનસિક આરોગ્ય નિષ્ણાતની સલાહ લો.",
    "Otitis": "કાનનો દુખાવો કે પરુ નીકળવા પર કાન-નાક-ગળાના ડૉક્ટરને બતાવો.",
    "Dental Caries": "દાંતના દુખાવા અને સડા માટે ડેન્ટિસ્ટ પાસે સારવાર કરાવો.",
    "Eye Disorder": "દ્રષ્ટિમાં ફેરફાર કે આંખના દુખાવા માટે તરત જ આંખના ડૉક્ટરને બતાવો."
  },
  pa: {
    "Common Cold": "ਆਰਾਮ ਕਰੋ, ਵੱਧ ਤੋਂ ਵੱਧ ਤਰਲ ਪਦਾਰਥ ਪੀਓ ਅਤੇ ਜੇਕਰ ਲੱਛਣ ਬਣੇ ਰਹਿਣ ਤਾਂ ਡਾਕਟਰ ਨੂੰ ਮਿਲੋ।",
    "Influenza": "ਤੇਜ਼ ਬੁਖਾਰ ਜਾਂ ਸਾਹ ਲੈਣ ਵਿੱਚ ਦਿੱਕਤ ਹੋਣ 'ਤੇ ਤੁਰੰਤ ਡਾਕਟਰੀ ਜਾਂਚ ਕਰਵਾਓ।",
    "Pneumonia": "ਸਾਹ ਦੀ ਗੰਭੀਰ ਤਕਲੀਫ਼ ਹੋਣ 'ਤੇ ਬਿਨਾਂ ਦੇਰੀ ਹਸਪਤਾਲ ਜਾ ਕੇ ਇਲਾਜ ਕਰਵਾਓ।",
    "Asthma": "ਦਮੇ ਦੀ ਤਕਲੀਫ਼ ਲਈ ਫੇਫੜਿਆਂ ਦੇ ਮਾਹਰ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਲਓ।",
    "Heart Disease": "ਛਾਤੀ ਵਿੱਚ ਦਰਦ ਜਾਂ ਬੇਹੋਸ਼ੀ ਹੋਣ 'ਤੇ ਤੁਰੰਤ ਐਮਰਜੈਂਸੀ ਡਾਕਟਰੀ ਸਹਾਇਤਾ ਲਓ।",
    "Diabetes": "ਬਲੱਡ ਸ਼ੂਗਰ ਦੀ ਨਿਯਮਿਤ ਜਾਂਚ ਕਰਵਾਓ ਅਤੇ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਅਨੁਸਾਰ ਪਰਹੇਜ਼ ਰੱਖੋ।",
    "Kidney Disease": "ਗੁਰਦੇ ਦੀ ਕਾਰਜਪ੍ਰਣਾਲੀ ਅਤੇ ਪਿਸ਼ਾਬ ਦੀ ਜਾਂਚ ਮਾਹਰ ਡਾਕਟਰ ਤੋਂ ਕਰਵਾਓ।",
    "Liver Disease": "ਢਿੱਡ ਪੀੜ ਜਾਂ ਪੀਲੀਏ ਦੇ ਲੱਛਣਾਂ ਲਈ ਜਿਗਰ ਦੇ ਮਾਹਰ ਨੂੰ ਦਿਖਾਓ।",
    "Dermatitis": "ਐਲਰਜੀ ਵਾਲੀਆਂ ਚੀਜ਼ਾਂ ਤੋਂ ਬਚੋ ਅਤੇ ਚਮੜੀ ਦੇ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਲਓ।",
    "Arthritis": "ਜੋੜਾਂ ਵਿੱਚ ਲਗਾਤਾਰ ਦਰਦ ਜਾਂ ਸੋਜ ਲਈ ਹੱਡੀਆਂ ਦੇ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਲਓ।",
    "Gastroenteritis": "ਡੀਹਾਈਡ੍ਰੇਸ਼ਨ ਤੋਂ ਬਚਣ ਲਈ ਓਆਰਐਸ (ORS) ਪੀਓ ਅਤੇ ਦਵਾਈ ਲਓ।",
    "UTI": "ਪਿਸ਼ਾਬ ਦੀ ਜਾਂਚ ਕਰਵਾ ਕੇ ਡਾਕਟਰ ਦੀ ਸਲਾਹ ਨਾਲ ਦਵਾਈ ਲਓ।",
    "Migraine": "ਵਾਰ-ਵਾਰ ਹੋਣ ਵਾਲੇ ਸਿਰ ਦਰਦ ਲਈ ਨਿਊਰੋਲੋਜਿਸਟ ਨੂੰ ਦਿਖਾਓ।",
    "Anxiety Disorder": "ਬਹੁਤ ਜ਼ਿਆਦਾ ਚਿੰਤਾ ਅਤੇ ਘਬਰਾਹਟ ਲਈ ਮਨੋਰੋਗ ਮਾਹਰ ਦੀ ਮਦਦ ਲਓ।",
    "Depression": "ਲਗਾਤਾਰ ਉਦਾਸੀ ਲਈ ਮਾਨਸਿਕ ਸਿਹਤ ਮਾਹਰ ਦੀ ਸਲਾਹ ਲਓ।",
    "Otitis": "ਕੰਨ ਦਰਦ ਜਾਂ ਪਾਕ ਪੈਣ 'ਤੇ ਕੰਨ-ਨੱਕ-ਗਲੇ ਦੇ ਡਾਕਟਰ ਨੂੰ ਦਿਖਾਓ।",
    "Dental Caries": "ਦੰਦਾਂ ਦੇ ਦਰਦ ਅਤੇ ਕੀੜੇ ਲਈ ਦੰਦਾਂ ਦੇ ਡਾਕਟਰ ਤੋਂ ਇਲਾਜ ਕਰਵਾਓ।",
    "Eye Disorder": "ਨਜ਼ਰ ਦੀ ਸਮੱਸਿਆ ਜਾਂ ਅੱਖਾਂ ਦੇ ਦਰਦ ਲਈ ਅੱਖਾਂ ਦੇ ਮਾਹਰ ਨੂੰ ਦਿਖਾਓ।"
  }
};

const SPEECH_LANG = {
  en: "en-IN", kn: "kn-IN", hi: "hi-IN", te: "te-IN", ta: "ta-IN",
  ml: "ml-IN", mr: "mr-IN", bn: "bn-IN", gu: "gu-IN", pa: "pa-IN"
};

let lastResult = null;
let currentUser = null;
let isGuestMode = false;
let voicesReady = false;

// -------------------------------------------------------------
// Translation Helper Functions
// -------------------------------------------------------------
function lang() {
  const el = document.getElementById("language");
  return (el && el.value) || "en";
}

function tr() {
  return translations[lang()] || translations.en;
}

function symptomName(s) {
  const currentLang = lang();
  if (SYMPTOM_TEXT[currentLang] && SYMPTOM_TEXT[currentLang][s]) {
    return SYMPTOM_TEXT[currentLang][s];
  }
  return (SYMPTOM_TEXT.en && SYMPTOM_TEXT.en[s]) || s;
}

function diseaseName(d) {
  const currentLang = lang();
  if (DISEASE_TEXT[currentLang] && DISEASE_TEXT[currentLang][d]) {
    return DISEASE_TEXT[currentLang][d][0];
  }
  if (DISEASE_TEXT.en && DISEASE_TEXT.en[d]) {
    return DISEASE_TEXT.en[d][0];
  }
  return d;
}

function diseaseExplanation(d) {
  const currentLang = lang();
  if (DISEASE_TEXT[currentLang] && DISEASE_TEXT[currentLang][d]) {
    return DISEASE_TEXT[currentLang][d][1];
  }
  if (DISEASE_TEXT.en && DISEASE_TEXT.en[d]) {
    return DISEASE_TEXT.en[d][1];
  }
  return "";
}

function specialistName(s) {
  const currentLang = lang();
  if (SPECIALIST_TEXT[currentLang] && SPECIALIST_TEXT[currentLang][s]) {
    return SPECIALIST_TEXT[currentLang][s];
  }
  if (SPECIALIST_TEXT.en && SPECIALIST_TEXT.en[s]) {
    return SPECIALIST_TEXT.en[s];
  }
  return s;
}

function diseaseAdvice(d, fallback) {
  const currentLang = lang();
  if (ADVICE_TEXT[currentLang] && ADVICE_TEXT[currentLang][d]) {
    return ADVICE_TEXT[currentLang][d];
  }
  return fallback || (ADVICE_TEXT.en && ADVICE_TEXT.en[d]) || "";
}

function riskText(r) {
  const currentLang = lang();
  if (RISK_TEXT[currentLang] && RISK_TEXT[currentLang][r]) {
    return RISK_TEXT[currentLang][r];
  }
  return r;
}

// -------------------------------------------------------------
// View & State Management (Auth-Gate vs Main Dashboard)
// -------------------------------------------------------------
function showView(viewName) {
  const authGate = document.getElementById("authGateSection");
  const mainDashboard = document.getElementById("mainDashboardSection");
  const guestControls = document.getElementById("guestControls");
  const userControls = document.getElementById("userControls");

  if (viewName === "dashboard") {
    if (authGate) {
      authGate.hidden = true;
      authGate.setAttribute("hidden", "");
      authGate.style.display = "none";
    }
    if (mainDashboard) {
      mainDashboard.hidden = false;
      mainDashboard.removeAttribute("hidden");
      mainDashboard.style.display = "block";
    }
    
    if (currentUser) {
      if (guestControls) {
        guestControls.hidden = true;
        guestControls.setAttribute("hidden", "");
      }
      if (userControls) {
        userControls.hidden = false;
        userControls.removeAttribute("hidden");
      }
    } else {
      if (guestControls) {
        guestControls.hidden = false;
        guestControls.removeAttribute("hidden");
      }
      if (userControls) {
        userControls.hidden = true;
        userControls.setAttribute("hidden", "");
      }
    }
  } else {
    // Auth View
    if (authGate) {
      authGate.hidden = false;
      authGate.removeAttribute("hidden");
      authGate.style.display = "block";
    }
    if (mainDashboard) {
      mainDashboard.hidden = true;
      mainDashboard.setAttribute("hidden", "");
      mainDashboard.style.display = "none";
    }
    if (guestControls) {
      guestControls.hidden = false;
      guestControls.removeAttribute("hidden");
    }
    if (userControls) {
      userControls.hidden = true;
      userControls.setAttribute("hidden", "");
    }
  }
}

function showAuthTab(tabName) {
  const paneReg = document.getElementById("paneRegister");
  const paneLog = document.getElementById("paneLogin");
  const tabReg = document.getElementById("tabBtnRegister");
  const tabLog = document.getElementById("tabBtnLogin");

  if (tabName === "login") {
    if (paneReg) paneReg.hidden = true;
    if (paneLog) paneLog.hidden = false;
    if (tabReg) tabReg.classList.remove("active");
    if (tabLog) tabLog.classList.add("active");
  } else {
    if (paneReg) paneReg.hidden = false;
    if (paneLog) paneLog.hidden = true;
    if (tabReg) tabReg.classList.add("active");
    if (tabLog) tabLog.classList.remove("active");
  }
}

function continueAsGuest() {
  isGuestMode = true;
  currentUser = null;
  updateAuthState(null);
  showView("dashboard");
}

function applyLang() {
  const t = tr();
  const ids = {
    patientTitle: "patient", ageLabel: "age", sexLabel: "sex", durationLabel: "duration", severityLabel: "severity",
    symptomTitle: "symptoms", predictBtn: "predict", resultTitle: "result", empty: "empty", topTitle: "top", whyTitle: "why",
    historyTitle: "history", historyBtn: "load", reportBtn: "report", nearbyBtn: "nearby", voiceBtn: "voice", disclaimer: "disclaimer",
    loginLabel: "login", registerLabel: "register", profileLabel: "profile", logoutLabel: "logout"
  };
  Object.entries(ids).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el && t[key]) el.textContent = t[key];
  });

  const search = document.getElementById("symptomSearch");
  if (search && t.search) search.placeholder = t.search;

  const rb = document.getElementById("readAloudBtn");
  const pb = document.getElementById("pauseBtn");
  const resb = document.getElementById("resumeBtn");
  const sb = document.getElementById("stopBtn");
  if (rb && t.read) rb.textContent = t.read;
  if (pb && t.pause) pb.textContent = t.pause;
  if (resb && t.resume) resb.textContent = t.resume;
  if (sb && t.stop) sb.textContent = t.stop;

  // Re-render symptoms in new language
  renderSymptoms();

  // If a result is active, re-render it in the newly selected language
  if (lastResult) renderResult(false);
}

// -------------------------------------------------------------
// Symptoms UI Rendering & Search Filter
// -------------------------------------------------------------
function renderSymptoms() {
  const container = document.getElementById("symptoms");
  if (!container) return;
  const q = (document.getElementById("symptomSearch")?.value || "").toLowerCase().trim();
  const symptomsList = window.SYMPTOMS || Object.keys(SYMPTOM_TEXT.en);

  // Preserve already checked symptoms
  const checked = new Set(Array.from(container.querySelectorAll("input:checked")).map(i => i.value));

  container.innerHTML = "";
  symptomsList.forEach(s => {
    const localized = symptomName(s);
    const englishName = (SYMPTOM_TEXT.en && SYMPTOM_TEXT.en[s]) || s;
    
    // Search matches both local language and english
    if (q && !localized.toLowerCase().includes(q) && !englishName.toLowerCase().includes(q) && !s.toLowerCase().includes(q)) {
      return;
    }

    const label = document.createElement("label");
    label.className = "symptom";
    label.innerHTML = `
      <input type="checkbox" value="${s}" ${checked.has(s) ? "checked" : ""}>
      <span><strong>${localized}</strong>${lang() !== 'en' ? ` <small style="color:#64748b;">(${englishName})</small>` : ''}</span>
    `;
    container.appendChild(label);
  });
}

function selectedSymptoms() {
  return Array.from(document.querySelectorAll("#symptoms input:checked")).map(i => i.value);
}

// -------------------------------------------------------------
// Prediction & Result Rendering
// -------------------------------------------------------------
async function predict() {
  const selected = selectedSymptoms();
  if (selected.length === 0) {
    alert(lang() === "kn" ? "ದಯವಿಟ್ಟು ಕನಿಷ್ಠ ಒಂದು ರೋಗಲಕ್ಷಣವನ್ನು ಆಯ್ಕೆಮಾಡಿ." : (lang() === "hi" ? "कृपया कम से कम एक लक्षण चुनें।" : "Please select at least one symptom from the list."));
    return;
  }

  const ageVal = document.getElementById("age")?.value || "0";
  const sexVal = document.getElementById("sex")?.value || "";
  const durationVal = document.getElementById("duration")?.value || "1";
  const severityVal = document.getElementById("severity")?.value || "mild";

  const payload = {
    symptoms: selected,
    age: parseInt(ageVal) || 0,
    sex: sexVal,
    duration: parseInt(durationVal) || 0,
    severity: severityVal,
    language: lang()
  };

  const predictBtn = document.getElementById("predictBtn");
  if (predictBtn) {
    predictBtn.disabled = true;
    predictBtn.textContent = lang() === "kn" ? "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ..." : (lang() === "hi" ? "विश्लेषण किया जा रहा है..." : "Analyzing Symptoms...");
  }

  try {
    const res = await fetch("/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    lastResult = data;
    renderResult(true);
    loadHistory();
  } catch (e) {
    alert("Failed to get prediction from server. Please ensure the server is active.");
    console.error(e);
  } finally {
    if (predictBtn) {
      predictBtn.disabled = false;
      predictBtn.textContent = tr().predict || "Predict";
    }
  }
}

function renderResult(autoRead = false) {
  if (!lastResult) return;
  const empty = document.getElementById("empty");
  const result = document.getElementById("result");
  const t = tr();

  if (empty) empty.hidden = true;
  if (result) result.hidden = false;

  const riskBox = document.getElementById("risk");
  if (riskBox) {
    const localizedRisk = riskText(lastResult.risk_level);
    riskBox.textContent = `${t.risk}: ${localizedRisk}`;
    riskBox.style.background = lastResult.risk_level === "High" ? "#fee2e2" : (lastResult.risk_level === "Moderate" ? "#fef3c7" : "#dcfce7");
    riskBox.style.color = lastResult.risk_level === "High" ? "#991b1b" : (lastResult.risk_level === "Moderate" ? "#92400e" : "#166534");
  }

  const predBox = document.getElementById("predictions");
  if (predBox) {
    predBox.innerHTML = (lastResult.top3 || []).map(p => `
      <div class="pred">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <strong style="font-size:16px;">${diseaseName(p.disease)}</strong>
            ${lang() !== 'en' ? `<span style="font-size:13px;color:#64748b;margin-left:6px;">(${p.disease})</span>` : ''}
          </div>
          <span style="font-weight:bold;color:#1769aa;font-size:16px;">${p.probability}%</span>
        </div>
        <div class="bar"><div class="fill" style="width:${p.probability}%;"></div></div>
        <p style="margin:8px 0 0;font-size:13px;color:#475569;line-height:1.4;">${diseaseExplanation(p.disease)}</p>
      </div>
    `).join("");
  }

  const specBox = document.getElementById("specialistBox");
  if (specBox && lastResult.top3 && lastResult.top3.length > 0) {
    const p = lastResult.top3[0];
    specBox.hidden = false;
    specBox.innerHTML = `
      <div style="font-size:15px;"><strong>🩺 ${t.specialist}:</strong> <span style="color:#0f52ba;font-weight:bold;">${specialistName(p.specialist)}</span></div>
      <div style="margin-top:6px;font-size:13px;color:#334155;"><strong>💡 ${t.advice}:</strong> ${diseaseAdvice(p.disease, p.advice)}</div>
    `;
  }

  // Show Doctor & Specialist Location Finder
  const locatorPanel = document.getElementById("specialistLocatorPanel");
  if (locatorPanel && lastResult.top3 && lastResult.top3.length > 0) {
    locatorPanel.hidden = false;
    const p = lastResult.top3[0];
    const locTitle = document.getElementById("locatorTitle");
    if (locTitle) {
      locTitle.textContent = `${t.nearby || "Find Nearby Specialist"}: ${specialistName(p.specialist)}`;
    }
  }

  const expBox = document.getElementById("explanation");
  if (expBox) {
    const matched = (lastResult.explanation || []).map(s => symptomName(s)).join(", ");
    expBox.textContent = matched ? `${t.matching}: ${matched}` : "Analysis computed using symptom-profile overlap, severity, and duration.";
  }

  if (autoRead) setTimeout(() => speakResult(), 400);
}

// -------------------------------------------------------------
// Doctor & Specialist Geolocation & Custom Location Search
// -------------------------------------------------------------
function searchSpecialistByGPS() {
  if (!lastResult || !lastResult.top3 || lastResult.top3.length === 0) {
    alert("Please run a prediction first.");
    return;
  }
  const specialist = lastResult.top3[0].specialist;
  const statusEl = document.getElementById("locatorStatus");
  if (statusEl) statusEl.textContent = "📍 Detecting your live GPS location...";

  if (!navigator.geolocation) {
    if (statusEl) statusEl.textContent = "GPS is not supported by your browser. Please enter your location in the text box.";
    alert("GPS Geolocation is not supported by this browser. Please enter your city, area, or pincode in the box.");
    document.getElementById("specialistLocationInput")?.focus();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      if (statusEl) statusEl.textContent = `📍 Located at (${lat.toFixed(3)}, ${lng.toFixed(3)}). Opening nearest ${specialist} doctors & clinics...`;
      
      const query = encodeURIComponent(`${specialist} doctor clinic hospital`);
      const mapsUrl = `https://www.google.com/maps/search/${query}/@${lat},${lng},14z`;
      window.open(mapsUrl, "_blank");
    },
    (error) => {
      console.warn("GPS Geolocation error:", error);
      if (statusEl) statusEl.textContent = "GPS access denied or unavailable. Please type your city/area in the box above.";
      alert("Could not access live GPS location (permission denied). Please type your city, area, or pincode in the search box.");
      document.getElementById("specialistLocationInput")?.focus();
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
  );
}

function searchSpecialistByLocation() {
  if (!lastResult || !lastResult.top3 || lastResult.top3.length === 0) {
    alert("Please run a prediction first.");
    return;
  }
  const specialist = lastResult.top3[0].specialist;
  const loc = (document.getElementById("specialistLocationInput")?.value || "").trim();
  const statusEl = document.getElementById("locatorStatus");

  if (!loc) {
    alert("Please enter a city, town, area, or pincode (e.g. Mysuru, Hubli, Mumbai, Delhi, 570001).");
    document.getElementById("specialistLocationInput")?.focus();
    return;
  }

  if (statusEl) statusEl.textContent = `🔍 Searching nearest ${specialist} doctors & hospitals in ${loc}...`;
  const query = encodeURIComponent(`${specialist} doctor clinic hospital in ${loc}`);
  window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank");
}

function searchSpecialistType(type) {
  if (!lastResult || !lastResult.top3 || lastResult.top3.length === 0) {
    alert("Please run a prediction first.");
    return;
  }
  const specialist = lastResult.top3[0].specialist;
  const loc = (document.getElementById("specialistLocationInput")?.value || "").trim();
  const locationSuffix = loc ? ` in ${loc}` : " near me";
  
  let searchTerm = "";
  if (type === "doctor") searchTerm = `${specialist} doctor consultation${locationSuffix}`;
  else if (type === "hospital") searchTerm = `best ${specialist} hospital${locationSuffix}`;
  else if (type === "clinic") searchTerm = `${specialist} private clinic${locationSuffix}`;
  else if (type === "emergency") searchTerm = `24x7 emergency hospital${locationSuffix}`;
  else searchTerm = `${specialist} doctor clinic hospital${locationSuffix}`;

  const statusEl = document.getElementById("locatorStatus");
  if (statusEl) statusEl.textContent = `Searching ${searchTerm}...`;

  window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchTerm)}`, "_blank");
}

// -------------------------------------------------------------
// Speech Synthesis (Read Aloud) & Voice Input
// -------------------------------------------------------------
function getSpeechVoices() {
  if (!("speechSynthesis" in window)) return [];
  return window.speechSynthesis.getVoices() || [];
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => { voicesReady = true; };
}

function speakResult() {
  if (!lastResult || !lastResult.top3 || lastResult.top3.length === 0) {
    alert("Please click Predict first to generate a result.");
    return;
  }
  if (!("speechSynthesis" in window)) {
    alert("Read Aloud is not supported in this browser. Please use Google Chrome or Microsoft Edge.");
    return;
  }
  const t = tr(), p = lastResult.top3[0];
  const matched = (lastResult.explanation || []).map(s => symptomName(s)).join(", ");
  const text = `${diseaseName(p.disease)}. ${diseaseExplanation(p.disease)}. ${t.specialist}: ${specialistName(p.specialist)}. ${t.risk}: ${riskText(lastResult.risk_level)}. ${t.matching}: ${matched}. ${t.advice}: ${diseaseAdvice(p.disease, p.advice)}`;

  const speak = () => {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = SPEECH_LANG[lang()] || "en-IN";
    u.rate = 0.88;
    u.pitch = 1.0;
    const voices = getSpeechVoices();
    const exact = voices.find(v => v.lang && v.lang.toLowerCase() === u.lang.toLowerCase());
    const same = voices.find(v => v.lang && v.lang.toLowerCase().startsWith(u.lang.slice(0, 2).toLowerCase()));
    if (exact || same) u.voice = exact || same;
    u.onerror = (e) => console.error("Speech synthesis error", e);
    window.speechSynthesis.speak(u);
  };

  if (getSpeechVoices().length === 0) {
    setTimeout(speak, 400);
  } else {
    speak();
  }
}

function startVoice() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    alert("Voice input is not supported by this browser. Please use the latest Google Chrome or Microsoft Edge.");
    return;
  }
  const t = tr();
  const rec = new SR();
  rec.lang = SPEECH_LANG[lang()] || "en-IN";
  rec.continuous = false;
  rec.interimResults = false;
  rec.maxAlternatives = 3;

  const btn = document.getElementById("voiceBtn");
  rec.onstart = () => {
    if (btn) {
      btn.textContent = t.listening || "🎙 Listening...";
      btn.disabled = true;
    }
  };
  rec.onerror = (e) => {
    console.error("Speech recognition error:", e);
    alert(`${t.voiceError}\nError detail: ${e.error || "unknown"}`);
  };
  rec.onend = () => {
    if (btn) {
      btn.textContent = t.voice || "🎙 Voice";
      btn.disabled = false;
    }
  };
  rec.onresult = (e) => {
    const text = (e.results[0][0].transcript || "").toLowerCase();
    let found = 0;

    // Search across all languages in SYMPTOM_TEXT
    for (const [symKey, langObj] of Object.entries(SYMPTOM_TEXT.en)) {
      const candidates = [symKey, langObj.toLowerCase()];
      Object.keys(SYMPTOM_TEXT).forEach(lng => {
        if (SYMPTOM_TEXT[lng][symKey]) {
          candidates.push(SYMPTOM_TEXT[lng][symKey].toLowerCase());
        }
      });

      if (candidates.some(c => text.includes(c))) {
        const el = document.querySelector(`#symptoms input[value="${symKey}"]`);
        if (el) {
          el.checked = true;
          found++;
        }
      }
    }

    if (found === 0) {
      alert(`${t.voice}: "${e.results[0][0].transcript}"\nNo matching symptom detected. Try saying symptoms like fever, cough, headache, or chest pain in your chosen language.`);
    }
  };

  try {
    rec.start();
  } catch (e) {
    if (btn) {
      btn.disabled = false;
      btn.textContent = t.voice || "🎙 Voice";
    }
    alert(t.voiceError);
  }
}

// -------------------------------------------------------------
// Authentication & Registration Handlers
// -------------------------------------------------------------
function showAlert(alertEl, msg, type) {
  if (!alertEl) return;
  alertEl.hidden = false;
  alertEl.textContent = msg;
  alertEl.className = "alert-box " + type;
}

function updateAuthState(user) {
  currentUser = user;
  const userNameDisplay = document.getElementById("userNameDisplay");
  const patientBadge = document.getElementById("patientStatusBadge");
  const profileBanner = document.getElementById("patientProfileBanner");
  const displayName = document.getElementById("displayPatientName");
  const displayBlood = document.getElementById("displayBloodGroup");
  const displayEmergency = document.getElementById("displayEmergency");

  if (user) {
    isGuestMode = false;
    if (userNameDisplay) userNameDisplay.textContent = user.fullname || "Patient";
    if (patientBadge) {
      patientBadge.textContent = "Registered: " + (user.fullname || "");
      patientBadge.style.background = "#dcfce7";
      patientBadge.style.color = "#166534";
    }
    if (profileBanner) {
      profileBanner.hidden = false;
      if (displayName) displayName.textContent = user.fullname || "-";
      if (displayBlood) displayBlood.textContent = user.blood_group || "Not specified";
      if (displayEmergency) displayEmergency.textContent = user.emergency_contact || "Not specified";
    }

    // Auto-fill main assessment fields
    const ageInput = document.getElementById("age");
    const sexSelect = document.getElementById("sex");
    if (ageInput && user.age !== null && user.age !== undefined && user.age !== "") {
      ageInput.value = user.age;
    }
    if (sexSelect && user.sex) {
      sexSelect.value = user.sex;
    }

    // Pre-fill profile modal fields
    const profName = document.getElementById("profName");
    const profEmail = document.getElementById("profEmail");
    const profPhone = document.getElementById("profPhone");
    const profBloodGroup = document.getElementById("profBloodGroup");
    const profAge = document.getElementById("profAge");
    const profSex = document.getElementById("profSex");
    const profEmergency = document.getElementById("profEmergency");
    const profMedicalHistory = document.getElementById("profMedicalHistory");

    if (profName) profName.value = user.fullname || "";
    if (profEmail) profEmail.value = user.email || "";
    if (profPhone) profPhone.value = user.phone || "";
    if (profBloodGroup) profBloodGroup.value = user.blood_group || "";
    if (profAge) profAge.value = user.age !== null && user.age !== undefined ? user.age : "";
    if (profSex) profSex.value = user.sex || "";
    if (profEmergency) profEmergency.value = user.emergency_contact || "";
    if (profMedicalHistory) profMedicalHistory.value = user.medical_history || "";
  } else {
    if (patientBadge) {
      patientBadge.textContent = "Guest Session";
      patientBadge.style.background = "#eef3f7";
      patientBadge.style.color = "#243e53";
    }
    if (profileBanner) profileBanner.hidden = true;
  }
}

async function handleRegister(event) {
  if (event) event.preventDefault();
  const alertBox = document.getElementById("landingRegisterAlert");
  const submitBtn = document.getElementById("landingSubmitRegisterBtn");

  const fullname = (document.getElementById("landingRegName")?.value || "").trim();
  const email = (document.getElementById("landingRegEmail")?.value || "").trim().toLowerCase();
  const password = document.getElementById("landingRegPassword")?.value || "";
  const confirmPassword = document.getElementById("landingRegConfirmPassword")?.value || "";
  const phone = (document.getElementById("landingRegPhone")?.value || "").trim();
  const bloodGroup = document.getElementById("landingRegBloodGroup")?.value || "";
  const ageVal = document.getElementById("landingRegAge")?.value;
  const sex = document.getElementById("landingRegSex")?.value || "";
  const emergency = (document.getElementById("landingRegEmergency")?.value || "").trim();
  const medicalHistory = (document.getElementById("landingRegMedicalHistory")?.value || "").trim();

  if (!fullname) {
    showAlert(alertBox, "Full name is required.", "error");
    return;
  }
  if (!email || !email.includes("@") || !email.includes(".")) {
    showAlert(alertBox, "A valid email address is required.", "error");
    return;
  }
  if (!password || password.length < 6) {
    showAlert(alertBox, "Password must be at least 6 characters long.", "error");
    return;
  }
  if (password !== confirmPassword) {
    showAlert(alertBox, "Passwords do not match. Please re-enter identical passwords.", "error");
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Registering Patient...";
  }

  try {
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname,
        email,
        password,
        phone,
        blood_group: bloodGroup,
        age: ageVal ? parseInt(ageVal) : null,
        sex,
        emergency_contact: emergency,
        medical_history: medicalHistory
      })
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      showAlert(alertBox, data.error || "Registration failed. Please try again.", "error");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Complete Registration & Enter Diagnosis Portal ➔";
      }
      return;
    }

    showAlert(alertBox, "Registration successful! Welcome, " + fullname + ". Opening diagnosis portal...", "success");
    updateAuthState(data.user);

    loadHistory();

    setTimeout(() => {
      showView("dashboard");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Complete Registration & Enter Diagnosis Portal ➔";
      }
    }, 700);
  } catch (err) {
    console.error("Registration error:", err);
    showAlert(alertBox, "Network error during registration. Please ensure backend is running.", "error");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Complete Registration & Enter Diagnosis Portal ➔";
    }
  }
}

async function handleLogin(event) {
  if (event) event.preventDefault();
  const alertBox = document.getElementById("landingLoginAlert");
  const submitBtn = document.getElementById("landingSubmitLoginBtn");

  const email = (document.getElementById("landingLoginEmail")?.value || "").trim().toLowerCase();
  const password = document.getElementById("landingLoginPassword")?.value || "";

  if (!email || !password) {
    showAlert(alertBox, "Please provide both email and password.", "error");
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Logging in...";
  }

  try {
    const res = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      showAlert(alertBox, data.error || "Invalid email or password.", "error");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Log In & Access Diagnosis Portal ➔";
      }
      return;
    }

    showAlert(alertBox, "Login successful! Opening diagnosis portal...", "success");
    updateAuthState(data.user);

    loadHistory();

    setTimeout(() => {
      showView("dashboard");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Log In & Access Diagnosis Portal ➔";
      }
    }, 700);
  } catch (err) {
    console.error("Login error:", err);
    showAlert(alertBox, "Network error during login. Please check server connection.", "error");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Log In & Access Diagnosis Portal ➔";
    }
  }
}

async function handleLogout() {
  try {
    await fetch("/logout", { method: "POST" });
  } catch (e) {
    console.error("Logout error:", e);
  }
  currentUser = null;
  isGuestMode = false;
  updateAuthState(null);
  showView("auth");
  showAuthTab("register");
}

async function handleProfileUpdate(event) {
  if (event) event.preventDefault();
  const alertBox = document.getElementById("profileAlert");
  const submitBtn = document.getElementById("saveProfileBtn");

  const fullname = (document.getElementById("profName")?.value || "").trim();
  const phone = (document.getElementById("profPhone")?.value || "").trim();
  const bloodGroup = document.getElementById("profBloodGroup")?.value || "";
  const ageVal = document.getElementById("profAge")?.value;
  const sex = document.getElementById("profSex")?.value || "";
  const emergency = (document.getElementById("profEmergency")?.value || "").trim();
  const medicalHistory = (document.getElementById("profMedicalHistory")?.value || "").trim();

  if (!fullname) {
    showAlert(alertBox, "Full name cannot be empty.", "error");
    return;
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Saving...";
  }

  try {
    const res = await fetch("/update-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname,
        phone,
        blood_group: bloodGroup,
        age: ageVal ? parseInt(ageVal) : null,
        sex,
        emergency_contact: emergency,
        medical_history: medicalHistory
      })
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      showAlert(alertBox, data.error || "Failed to update profile.", "error");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Save Changes";
      }
      return;
    }

    showAlert(alertBox, "Profile updated successfully!", "success");
    updateAuthState(data.user);

    setTimeout(() => {
      closeModal("profileModal");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Save Changes";
      }
    }, 700);
  } catch (err) {
    console.error("Profile update error:", err);
    showAlert(alertBox, "Network error updating profile.", "error");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "Save Changes";
    }
  }
}

async function checkCurrentUser() {
  try {
    const res = await fetch("/current-user");
    const data = await res.json();
    if (data.authenticated && data.user) {
      updateAuthState(data.user);
      showView("dashboard");
      loadHistory();
    } else {
      updateAuthState(null);
      showView("auth");
      showAuthTab("register");
    }
  } catch (e) {
    updateAuthState(null);
    showView("auth");
    showAuthTab("register");
  }
}

// -------------------------------------------------------------
// Modals Handling
// -------------------------------------------------------------
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = false;
  const alertBox = modal.querySelector(".alert-box");
  if (alertBox) {
    alertBox.hidden = true;
    alertBox.textContent = "";
    alertBox.className = "alert-box";
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.hidden = true;
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal("profileModal");
  }
});

document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.hidden = true;
    }
  });
});

// -------------------------------------------------------------
// History, Reports, Maps & Photo Upload
// -------------------------------------------------------------
async function loadHistory() {
  const container = document.getElementById("history");
  if (!container) return;
  try {
    const res = await fetch("/history");
    const rows = await res.json();
    if (rows && rows.length > 0) {
      container.innerHTML = `
        <table>
          <thead>
            <tr><th>Date</th><th>Age/Sex</th><th>Symptoms</th><th>Prediction</th><th>Specialist</th></tr>
          </thead>
          <tbody>
            ${rows.map(r => `
              <tr>
                <td>${r[1]}</td>
                <td>${r[2] || "-"} / ${r[3] || "-"}</td>
                <td>${r[6]}</td>
                <td><strong>${diseaseName(r[7])}</strong> (${r[8]}%)</td>
                <td>${specialistName(r[9])}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      `;
    } else {
      container.innerHTML = "<p style='color:#666;font-size:14px;'>No diagnostic history recorded yet. Complete a prediction to save your record.</p>";
    }
  } catch (e) {
    container.innerHTML = "<p style='color:#c00;'>Could not load history.</p>";
  }
}

// PDF Report Download
document.getElementById("reportBtn")?.addEventListener("click", async () => {
  if (!lastResult) {
    alert("Please perform a prediction first.");
    return;
  }
  const payload = {
    result: lastResult,
    patient_name: currentUser ? currentUser.fullname : "Patient (Guest)",
    age: document.getElementById("age")?.value || "",
    sex: document.getElementById("sex")?.value || "",
    duration: document.getElementById("duration")?.value || "",
    severity: document.getElementById("severity")?.value || "",
    symptoms: selectedSymptoms()
  };
  try {
    const r = await fetch("/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const blob = await r.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "disease_report.pdf";
    a.click();
    URL.revokeObjectURL(url);
  } catch (e) {
    alert("Failed to download PDF report.");
  }
});

// Nearby Specialist Google Maps Search
document.getElementById("nearbyBtn")?.addEventListener("click", () => {
  if (!lastResult || !lastResult.top3 || lastResult.top3.length === 0) return;
  const specialist = specialistName(lastResult.top3[0].specialist);
  const q = encodeURIComponent(specialist + " doctor clinic hospital near me");
  window.open("https://www.google.com/maps/search/?api=1&query=" + q, "_blank");
});

// Load History Button
document.getElementById("historyBtn")?.addEventListener("click", loadHistory);

// Photo Upload & Instant Auto-Diagnosis
async function autoDiagnosePhoto(file) {
  if (!file) return;
  const status = document.getElementById("photoStatus");
  const resultBox = document.getElementById("photoResult");
  
  if (file.size > 10 * 1024 * 1024) {
    if (status) status.innerHTML = "⚠️ Photo must be 10 MB or smaller.";
    return;
  }
  
  const fd = new FormData();
  fd.append("photo", file);
  if (status) status.innerHTML = "🔬 <em>Analyzing photo with Computer Vision & ML classifier...</em>";
  if (resultBox) resultBox.innerHTML = "";
  
  try {
    const r = await fetch("/diagnose-photo", { method: "POST", body: fd });
    const data = await r.json();
    
    if (!r.ok || data.error) {
      if (status) status.innerHTML = `⚠️ ${data.error || "Photo analysis failed."}`;
      return;
    }
    
    if (status) status.innerHTML = `✅ <strong>Photo Diagnosed</strong> (ML Confidence: ${data.probability}%)`;
    
    // Auto-select detected symptoms in the symptoms checkbox list
    const detected = data.detected_symptoms || [];
    if (detected.length > 0) {
      // Clear any search filter to ensure all symptom checkboxes are accessible
      const searchInput = document.getElementById("symptomSearch");
      if (searchInput && searchInput.value) {
        searchInput.value = "";
        renderSymptoms();
      }
      
      detected.forEach(symKey => {
        const checkbox = document.querySelector(`#symptoms input[value="${symKey}"]`);
        if (checkbox) {
          checkbox.checked = true;
          const parentLabel = checkbox.closest("label");
          if (parentLabel) {
            parentLabel.style.transition = "all 0.3s ease";
            parentLabel.style.outline = "2px solid #0284c7";
            parentLabel.style.background = "#e0f2fe";
            setTimeout(() => {
              parentLabel.style.outline = "";
              parentLabel.style.background = "";
            }, 3000);
          }
        }
      });
    }
    
    // Render prominent Symptoms & Suggested Specialist box
    if (resultBox) {
      const symChips = detected.length > 0
        ? detected.map(s => `<span class="photo-sym-chip">🏷️ ${symptomName(s)}</span>`).join(" ")
        : `<span style="font-size:13px;color:#64748b;">No acute visible pathological lesions detected.</span>`;
        
      resultBox.innerHTML = `
        <div class="photo-diag-card">
          <div class="photo-diag-header">
            <span class="photo-diag-title">🔍 Detected Condition: ${data.prediction || data.condition}</span>
            <span class="photo-diag-badge">${data.probability}% ML Match</span>
          </div>
          
          <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:12px;margin:10px 0;">
            <div style="font-size:14px;color:#0369a1;margin-bottom:8px;">
              <strong>🩺 Suggested Specialist:</strong>
              <span style="font-size:15px;color:#0c4a6e;font-weight:800;margin-left:6px;">${specialistName(data.specialist)}</span>
            </div>
            <div class="photo-symptoms-label" style="color:#0369a1;">Extracted Symptoms:</div>
            <div class="photo-sym-chips" style="margin-bottom:4px;">${symChips}</div>
          </div>
          
          <div class="photo-findings-text">
            <strong>Clinical Observation:</strong> ${data.findings || "Image features matched clinical disease pattern."}
          </div>
          
          ${detected.length > 0 ? `
            <div class="photo-auto-synced">
              ✓ Symptoms automatically selected in your symptom checklist below.
            </div>
          ` : ''}
        </div>
      `;
    }
    
    // Integrate with main differential diagnosis result card
    if (data.full_diagnosis) {
      lastResult = data.full_diagnosis;
      renderResult(true);
      loadHistory();
    }
  } catch (e) {
    console.error("Photo diagnosis error:", e);
    if (status) status.innerHTML = "❌ Photo diagnosis failed. Please check the server connection.";
  }
}

document.getElementById("photo")?.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const preview = document.getElementById("photoPreview");
  if (!file) {
    if (preview) preview.hidden = true;
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    alert("Photo must be 10 MB or smaller.");
    e.target.value = "";
    if (preview) preview.hidden = true;
    return;
  }
  if (preview) {
    preview.src = URL.createObjectURL(file);
    preview.hidden = false;
  }
  // Automatically diagnose immediately when photo is chosen/uploaded
  autoDiagnosePhoto(file);
});

document.getElementById("diagnosePhotoBtn")?.addEventListener("click", () => {
  const file = document.getElementById("photo")?.files[0];
  if (!file) {
    const status = document.getElementById("photoStatus");
    if (status) status.innerHTML = "⚠️ Please select a photo first.";
    return;
  }
  autoDiagnosePhoto(file);
});

document.getElementById("uploadPhotoBtn")?.addEventListener("click", async () => {
  const file = document.getElementById("photo")?.files[0];
  const status = document.getElementById("photoStatus");
  if (!file) {
    if (status) status.innerHTML = "⚠️ Please select a photo first.";
    return;
  }
  const fd = new FormData();
  fd.append("photo", file);
  if (status) status.innerHTML = "⏳ <em>Saving photo to records...</em>";
  try {
    const r = await fetch("/upload-photo", { method: "POST", body: fd });
    const data = await r.json();
    if (status) status.innerHTML = data.error ? `⚠️ ${data.error}` : `✅ ${data.message || "Photo saved to patient record."}`;
  } catch (e) {
    if (status) status.innerHTML = "❌ Save failed. Please check backend connection.";
  }
});

document.getElementById("retrainPhotoBtn")?.addEventListener("click", async () => {
  const status = document.getElementById("photoStatus");
  const btn = document.getElementById("retrainPhotoBtn");
  if (status) status.innerHTML = "⏳ <em>Retraining Computer Vision ML model on clinical profiles...</em>";
  if (btn) btn.disabled = true;
  try {
    const res = await fetch("/train-photo-model", { method: "POST" });
    const data = await res.json();
    if (data.success) {
      if (status) status.innerHTML = `✅ <strong>Retrained successfully!</strong> Model accuracy: ${data.test_accuracy}% on held-out test data.`;
    } else {
      if (status) status.innerHTML = `⚠️ Retraining failed: ${data.error || "Unknown error"}`;
    }
  } catch (e) {
    if (status) status.innerHTML = "❌ Retraining request failed. Check server.";
  } finally {
    if (btn) btn.disabled = false;
  }
});

// Event Listeners Binding
document.getElementById("language")?.addEventListener("change", () => {
  applyLang();
});
document.getElementById("symptomSearch")?.addEventListener("input", renderSymptoms);
document.getElementById("predictBtn")?.addEventListener("click", predict);
document.getElementById("voiceBtn")?.addEventListener("click", startVoice);
document.getElementById("readAloudBtn")?.addEventListener("click", speakResult);
document.getElementById("pauseBtn")?.addEventListener("click", () => window.speechSynthesis && window.speechSynthesis.pause());
document.getElementById("resumeBtn")?.addEventListener("click", () => window.speechSynthesis && window.speechSynthesis.resume());
document.getElementById("stopBtn")?.addEventListener("click", () => window.speechSynthesis && window.speechSynthesis.cancel());

document.getElementById("patientStatusBadge")?.addEventListener("click", () => {
  if (currentUser) {
    openModal("profileModal");
  } else {
    showView("auth");
    showAuthTab("register");
  }
});

document.getElementById("searchLocationSpecialistBtn")?.addEventListener("click", searchSpecialistByLocation);
document.getElementById("gpsLocationBtn")?.addEventListener("click", searchSpecialistByGPS);
document.getElementById("nearbyBtn")?.addEventListener("click", () => {
  const customLoc = (document.getElementById("specialistLocationInput")?.value || "").trim();
  if (customLoc) {
    searchSpecialistByLocation();
  } else {
    searchSpecialistByGPS();
  }
});
document.getElementById("specialistLocationInput")?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchSpecialistByLocation();
  }
});

// Expose globally for HTML handlers
window.showView = showView;
window.showAuthTab = showAuthTab;
window.continueAsGuest = continueAsGuest;
window.openModal = openModal;
window.closeModal = closeModal;
window.handleRegister = handleRegister;
window.handleLogin = handleLogin;
window.handleLogout = handleLogout;
window.handleProfileUpdate = handleProfileUpdate;
window.predict = predict;
window.startVoice = startVoice;
window.speakResult = speakResult;
window.searchSpecialistByGPS = searchSpecialistByGPS;
window.searchSpecialistByLocation = searchSpecialistByLocation;
window.searchSpecialistType = searchSpecialistType;
window.handleRefreshPortal = function() {
  window.location.reload();
};
window.handleResetDiagnosisForm = function() {
  selectedSymptoms = [];
  const durationInput = document.getElementById("duration");
  if (durationInput) durationInput.value = "";
  const severitySelect = document.getElementById("severity");
  if (severitySelect) severitySelect.value = "mild";
  const searchInput = document.getElementById("search");
  if (searchInput) searchInput.value = "";
  const resultCard = document.getElementById("resultCard");
  if (resultCard) resultCard.hidden = true;
  const photoPreview = document.getElementById("photoPreview");
  if (photoPreview) photoPreview.hidden = true;
  const photoInput = document.getElementById("photoInput");
  if (photoInput) photoInput.value = "";
  const photoStatus = document.getElementById("photoDiagnosisResult");
  if (photoStatus) photoStatus.hidden = true;
  if (typeof renderSymptoms === "function") renderSymptoms();
};

// Initial startup
applyLang();
renderSymptoms();
checkCurrentUser();

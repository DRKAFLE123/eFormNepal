export interface ServiceItem {
  id: string;
  titleEn: string;
  titleNe: string;
  category: "Education & Admissions" | "Jobs & Recruitment" | "Government Services" | "Examinations & Applications" | "Online Registration" | "Document Assistance";
  categoryNe: string;
  shortDescEn: string;
  shortDescNe: string;
  detailedGuideEn: string;
  detailedGuideNe: string;
  officialUrl: string;
  officialSourceLabel: string;
  officialFee: string;
  officialFeeNe: string;
  estimatedTime: string;
  estimatedTimeNe: string;
  isAssistanceAvailable: boolean;
  assistanceType: "Form Filling & Document Check" | "Photo & Profile Review" | "Appointment & Schedule Guidance";
  assistanceTypeNe: string;
  requirementsEn: string[];
  requirementsNe: string[];
  stepsEn: { title: string; desc: string }[];
  stepsNe: { title: string; desc: string }[];
  deadlineEn?: string;
  deadlineNe?: string;
  isPopular?: boolean;
  alertNoteEn?: string;
  alertNoteNe?: string;
}

export const CATEGORIES = [
  { id: "all", labelEn: "All Services", labelNe: "सबै सेवाहरू", count: 10 },
  { id: "education", labelEn: "Education & Admissions", labelNe: "शिक्षा र भर्ना", count: 2 },
  { id: "jobs", labelEn: "Jobs & Recruitment", labelNe: "रोजगार र भर्ना", count: 2 },
  { id: "government", labelEn: "Government Services", labelNe: "सरकारी सेवाहरू", count: 3 },
  { id: "examinations", labelEn: "Examinations & Applications", labelNe: "परीक्षा र आवेदन", count: 1 },
  { id: "registration", labelEn: "Online Registration", labelNe: "अनलाइन दर्ता", count: 2 },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "edv-lottery",
    titleEn: "Diversity Visa (EDV) Lottery Assistance",
    titleNe: "डिभी (EDV) लटरी फाराम र फोटो सहायता",
    category: "Online Registration",
    categoryNe: "अनलाइन दर्ता",
    shortDescEn: "Accurate online entry guidance and precise 600x600 digital photo compliance verification according to US Dept of State standards.",
    shortDescNe: "अमेरिकी विदेश मन्त्रालयको मापदण्ड अनुसार ६००x६०० फोटो जाँच र अनलाइन फाराम भर्ने विश्वसनीय सहायता।",
    detailedGuideEn: "The Electronic Diversity Visa (EDV) is an annual lottery conducted by the US Department of State. While the official application itself has no entry fee, thousands of Nepali applicants are disqualified before selection due to non-compliant photos (shadows, incorrect eye level, spectacles, digital retouching) or typographical mistakes in biographical information. E-Form Nepal helps verify your photo specs and reviews entries carefully prior to submission.",
    detailedGuideNe: "इलेक्ट्रोनिक डिभी लटरी अमेरिकी सरकारद्वारा हरेक वर्ष खुलाइने निःशुल्क कार्यक्रम हो। तर धेरैजसो नेपाली आवेदकहरू फोटोको मापदण्ड नपुग्दा (चश्मा, छायाँ, गलत साइज) वा व्यक्तिगत विवरणमा त्रुटि हुँदा छनोट हुन सक्दैनन्। इ-फाराम नेपालले तपाईंको फोटो मापदण्ड परीक्षण र सही विवरण भर्न भरपर्दो मार्गदर्शन प्रदान गर्दछ।",
    officialUrl: "https://dvprogram.state.gov/",
    officialSourceLabel: "Official US Dept of State DV Portal (dvprogram.state.gov)",
    officialFee: "Free ($0 Official US Govt Fee)",
    officialFeeNe: "निःशुल्क (अमेरिकी सरकारको आधिकारिक शुल्क $०)",
    estimatedTime: "15 - 25 minutes",
    estimatedTimeNe: "१५ - २५ मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Form Filling & Document Check",
    assistanceTypeNe: "फाराम भर्ने र फोटो प्रमाणीकरण",
    requirementsEn: [
      "Completed High School (+2 / Grade 12 or equivalent) OR 2 years of qualifying work experience",
      "Digital passport photograph: 600x600 px, white background, neutral expression, strictly NO glasses, under 240KB",
      "Full name and date of birth exactly as shown in citizenship/passport",
      "Spouse and all unmarried biological/adopted children under age 21 details and photos"
    ],
    requirementsNe: [
      "+२ (कक्षा १२ उत्तीर्ण) वा सो सरहको न्यूनतम शैक्षिक योग्यता वा तोकिएको कामको अनुभव",
      "डिजिटल फोटो: ६००x६०० पिक्सेल, सेतो पृष्ठभूमि, चश्मा बिना, २४० KB भन्दा कम साइज",
      "नागरिकता वा राहदानी अनुसारको पूरा नाम र जन्ममिति",
      "विवाहित भएमा पति/पत्नी र २१ वर्ष मुनिका सबै सन्तानको विवरण र फोटो"
    ],
    stepsEn: [
      { title: "Review Photo Standards", desc: "Use our photo spec guide to ensure clean white background, no eyewear, and 50-69% head ratio." },
      { title: "Compile Biographical Data", desc: "Gather exact names, dates of birth, marital info, and family details." },
      { title: "Direct Filing or Assisted Review", desc: "Submit directly on dvprogram.state.gov or contact our team via WhatsApp for guided entry." },
      { title: "Save Confirmation Number", desc: "Securely store the generated 16-character confirmation code for result check." }
    ],
    stepsNe: [
      { title: "फोटोको मापदण्ड जाँच गर्नुहोस्", desc: "सेतो पृष्ठभूमि, चश्मा बिना र ६००x६०० अनुपात भएको फोटो तयार गर्नुहोस्।" },
      { title: "व्यक्तिगत विवरण संकलन गर्नुहोस्", desc: "नागरिकता/राहदानी अनुसार जन्ममिति र पारिवारिक विवरण तयार पार्नुहोस्।" },
      { title: "फाराम भर्नुहोस् वा सहायता लिनुहोस्", desc: "आफै वा हाम्रो ह्वाट्सएप मार्फत फाराम समीक्षा गराई समयमै प्रविष्ट गर्नुहोस्।" },
      { title: "कन्फर्मेसन नम्बर सुरक्षित राख्नुहोस्", desc: "नतिजा हेर्नको लागि १६ अंकको कन्फर्मेसन नम्बर अनिवार्य सुरक्षित राख्नुहोस्।" }
    ],
    deadlineEn: "Annual Window (Usually October - November)",
    deadlineNe: "वार्षिक समय (प्रायः असोज - कात्तिक)",
    isPopular: true,
    alertNoteEn: "Notice: Official entry on the US government site is completely free. We charge only for our independent technical assistance and photo editing service.",
    alertNoteNe: "ध्यानाकर्षण: आधिकारिक सरकारी वेबसाइटमा दर्ता निःशुल्क हुन्छ। हामी प्राविधिक सहयोग र फोटो सम्पादनको मात्र न्यूनतम सेवा शुल्क लिन्छौं।"
  },
  {
    id: "e-passport-pre-enrollment",
    titleEn: "e-Passport Pre-Enrollment & Appointment Booking",
    titleNe: "विद्युतीय राहदानी (ई-पासपोर्ट) अनलाइन आवेदन",
    category: "Government Services",
    categoryNe: "सरकारी सेवाहरू",
    shortDescEn: "Department of Passports (DoP) online pre-enrollment, NID verification, and appointment booking assistance across district and DoP centers.",
    shortDescNe: "राहदानी विभागको अनलाइन फाराम, राष्ट्रिय परिचयपत्र नम्बर प्रविष्टि र मिति छनोटमा भरपर्दो सहयोग।",
    detailedGuideEn: "All new and renewal passports in Nepal are now electronic (e-Passports). Applicants must pre-enroll through the Department of Passports portal and secure a date for biometric capture at their local District Administration Office (DAO) or the central DoP in Tripureshwor. National Identity Card (NID) number is mandatory for adult applicants.",
    detailedGuideNe: "नेपाल सरकारले हाल विद्युतीय राहदानी (ई-पासपोर्ट) मात्र जारी गर्दछ। यसको लागि राहदानी विभागको अनलाइन प्रणालीमा फाराम भरी जिल्ला प्रशासन कार्यालय वा त्रिपुरेश्वरस्थित विभागमा बायोमेट्रिकको मिति लिनुपर्छ। १८ वर्ष माथिका सबैलाई राष्ट्रिय परिचयपत्र (NID) नम्बर अनिवार्य छ।",
    officialUrl: "https://emrtds.nepalpassport.gov.np/",
    officialSourceLabel: "Official Dept. of Passports Portal (emrtds.nepalpassport.gov.np)",
    officialFee: "NPR 5,000 (District 34-page) / NPR 12,000 (DoP Urgent)",
    officialFeeNe: "रु ५,००० (जिल्ला ३४ पृष्ठ) / रु १२,००० (विभाग द्रुत सेवा)",
    estimatedTime: "20 - 30 minutes",
    estimatedTimeNe: "२० - ३० मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Appointment & Schedule Guidance",
    assistanceTypeNe: "मिति छनोट र फाराम प्रविष्टि",
    requirementsEn: [
      "National Identity Card (NID) Number or NID Enrollment Slip (mandatory for 18+)",
      "Original Nepali Citizenship Certificate (Front & Back scanned)",
      "Existing Passport copy (for renewal or amendment)",
      "Marriage Certificate (if applicant's surname changed after marriage)"
    ],
    requirementsNe: [
      "राष्ट्रिय परिचयपत्र (NID) नम्बर वा दर्ता नम्बर (१८ वर्ष माथिकालाई अनिवार्य)",
      "सक्कल नेपाली नागरिकता प्रमाणपत्र (अगाडि र पछाडिको स्पष्ट प्रतिलिपि)",
      "नवीकरणको हकमा पुरानो राहदानीको प्रतिलिपि",
      "विवाहपछि थर परिवर्तन भएको भए विवाह दर्ता प्रमाणपत्र"
    ],
    stepsEn: [
      { title: "NID Verification", desc: "Ensure your NID number matches your citizenship details exactly." },
      { title: "Select Location & Date", desc: "Choose DAO (District Administration Office) or DoP Tripureshwor based on urgency." },
      { title: "Fill Pre-Enrollment Form", desc: "Input personal, emergency contact, and family records." },
      { title: "Print Barcode Voucher", desc: "Download the pre-enrollment application with barcode to present at the center." }
    ],
    stepsNe: [
      { title: "NID नम्बर रुजु", desc: "परिचयपत्र नम्बर र नागरिकताको विवरण मिलेको सुनिश्चित गर्नुहोस्।" },
      { title: "स्थान र मिति छनोट", desc: "जिल्ला प्रशासन कार्यालय वा राहदानी विभागको उपलब्ध मिति छान्नुहोस्।" },
      { title: "विवरण प्रविष्टि", desc: "व्यक्तिगत विवरण, आपतकालीन सम्पर्क र ठेगाना भर्नुहोस्।" },
      { title: "बारकोडसहितको भौचर प्रिन्ट", desc: "आवेदन दर्ता भएपछि बारकोडसहितको स्लिप प्रिन्ट गरी तोकिएको दिन उपस्थित हुनुहोस्।" }
    ],
    deadlineEn: "Continuous (Appointments open on daily slots)",
    deadlineNe: "निरन्तर (दैनिक स्लटहरू खुल्ने गर्दछ)",
    isPopular: true
  },
  {
    id: "national-id-nid",
    titleEn: "National Identity Card (NID) Pre-Registration",
    titleNe: "राष्ट्रिय परिचयपत्र (NID) अनलाइन दर्ता फाराम",
    category: "Online Registration",
    categoryNe: "अनलाइन दर्ता",
    shortDescEn: "Department of National ID and Civil Registration pre-enrollment application for new NID biometric appointments.",
    shortDescNe: "राष्ट्रिय परिचयपत्र तथा पञ्जीकरण विभागको अनलाइन फाराम र विवरण प्रविष्टि सहायता।",
    detailedGuideEn: "The National Identity Card (NID) is Nepal's universal biometric identification document, now required for e-Passports, social security, and government procedures. Pre-registering online creates your application number and speeds up queue time at the registration station.",
    detailedGuideNe: "राष्ट्रिय परिचयपत्र नेपाल सरकारको प्रमुख डिजिटल पहिचान पत्र हो, जुन राहदानी बनाउन तथा अन्य सरकारी सेवामा अनिवार्य गरिएको छ। अनलाइन प्रि-रजिस्ट्रेसन गर्दा आवेदन नम्बर प्राप्त हुन्छ जसले बायोमेट्रिक स्टेसनमा समय बचत गर्दछ।",
    officialUrl: "https://idonline.donidcr.gov.np/",
    officialSourceLabel: "Official DoNIDCR Portal (idonline.donidcr.gov.np)",
    officialFee: "Free ($0 Official Government Fee)",
    officialFeeNe: "निःशुल्क (सरकारी दस्तुर रु ०)",
    estimatedTime: "15 - 20 minutes",
    estimatedTimeNe: "१५ - २० मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Form Filling & Document Check",
    assistanceTypeNe: "फाराम प्रविष्टि र कागजात जाँच",
    requirementsEn: [
      "Original Nepali Citizenship Certificate",
      "Parents' and Grandparents' full names and citizenship numbers (if available)",
      "Marriage certificate (for married individuals)",
      "Active mobile number for OTP confirmation"
    ],
    requirementsNe: [
      "सक्कल नेपाली नागरिकता प्रमाणपत्र",
      "आमा, बुबा र बाजेको पूरा नाम (उपलब्ध भएसम्म नागरिकता नम्बर)",
      "विवाहित भएमा विवाह दर्ता प्रमाणपत्र",
      "ओटिपी (OTP) प्राप्त हुने चालु मोबाइल नम्बर"
    ],
    stepsEn: [
      { title: "Mobile Verification", desc: "Login with OTP sent to your personal mobile number." },
      { title: "Fill Personal & Family History", desc: "Enter 3-generation family data and permanent address." },
      { title: "Select Biometric Station", desc: "Choose designated DAO, Area Administration Office, or local ward camp." },
      { title: "Download PDF Application", desc: "Save the application sheet bearing your unique Application Number." }
    ],
    stepsNe: [
      { title: "मोबाइल प्रमाणीकरण", desc: "मोबाइल नम्बरमा आएको ओटिपी कोड प्रविष्ट गर्नुहोस्।" },
      { title: "तीन पुस्ते र व्यक्तिगत विवरण", desc: "बाजे, बुबाआमा र स्थायी ठेगाना भर्नुहोस्।" },
      { title: "बायोमेट्रिक स्टेसन छनोट", desc: "सम्बन्धित जिल्ला प्रशासन वा इलाका प्रशासन कार्यालय छनोट गर्नुहोस्।" },
      { title: "आवेदन डाउनलोड", desc: "प्राप्त आवेदन नम्बरसहितको फाराम सुरक्षित राख्नुहोस्।" }
    ],
    deadlineEn: "Open Year Round",
    deadlineNe: "वर्षभरि खुला रहने",
    isPopular: true
  },
  {
    id: "lok-sewa-aayog",
    titleEn: "Public Service Commission (Lok Sewa Aayog) Online Application",
    titleNe: "लोक सेवा आयोग दरखास्त फाराम",
    category: "Jobs & Recruitment",
    categoryNe: "रोजगार र भर्ना",
    shortDescEn: "PSC master profile setup, advertisement selection, qualification document scanning, and payment voucher generation.",
    shortDescNe: "लोक सेवा आयोगको मास्टर आइडी निर्माण, कागजात स्क्यान, विज्ञापन छनोट र दस्तुर भुक्तानी सहायता।",
    detailedGuideEn: "Nepal Public Service Commission conducts competitive examinations for Civil Service (Nijamati), Security forces, and Public Corporations. Applicants must register on the PSC Master Profile, upload properly sized documents (under 200KB), choose open/inclusive quotas, and verify online payment prior to the advertisement deadline.",
    detailedGuideNe: "लोक सेवा आयोगले निजामती, सुरक्षा निकाय तथा संगठित संस्थाहरूको पदपूर्तिको लागि अनलाइन दरखास्त लिने गर्दछ। यसको लागि मास्टर प्रोफाइल बनाउने, तोकिएको साइजमा कागजात अपलोड गर्ने र समयमै परीक्षा दस्तुर बुझाउनु पर्दछ।",
    officialUrl: "https://psconline1.psc.gov.np/",
    officialSourceLabel: "Official PSC Application System (psconline1.psc.gov.np)",
    officialFee: "NPR 300 - NPR 1,500 depending on Officer/Assistant level and inclusion groups",
    officialFeeNe: "पद र समावेशी समूह अनुसार रु ३०० देखि रु १,५०० सम्म",
    estimatedTime: "25 - 40 minutes",
    estimatedTimeNe: "२५ - ४० मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Form Filling & Document Check",
    assistanceTypeNe: "मास्टर प्रोफाइल र कागजात अपलोड",
    requirementsEn: [
      "Nepali Citizenship Certificate (scanned under 200KB)",
      "Recent passport photograph with clear face (JPEG, under 200KB)",
      "Digital Signature on clean white paper (JPEG, under 200KB)",
      "Educational Transcripts & Character Certificates (SEE, +2, Bachelor/Master)",
      "Equivalence Certificate (if graduated from foreign universities)",
      "Inclusive Group Certificate (Women, Janajati, Madhesi, Dalit, Backward Area) from CDO/Municipality"
    ],
    requirementsNe: [
      "नागरिकताको स्क्यान प्रति (२०० KB भन्दा कम)",
      "हालसालै खिचिएको पासपोर्ट साइजको फोटो (२०० KB भन्दा कम)",
      "सेतो कागजमा गरिएको डिजिटल हस्ताक्षर (२०० KB भन्दा कम)",
      "शैक्षिक योग्यताका ट्रान्सक्रिप्ट र चारित्रिक प्रमाणपत्रहरू",
      "समावेशी समूह (महिला, जनजाति, मधेसी, दलित, अपाङ्गता, पिछडिएको क्षेत्र) को आधिकारिक सिफारिस"
    ],
    stepsEn: [
      { title: "Create Master Profile", desc: "Fill bio-data, education details, and permanent address." },
      { title: "Upload Verified Documents", desc: "Optimize photos and certificates to comply with PSC upload bounds." },
      { title: "Select Vacancy & Quota", desc: "Select Advertisement Number, Service/Group, and Inclusive categories." },
      { title: "Online Payment", desc: "Pay application fees via ConnectIPS, eSewa, Khalti, or designated bank vouchers." }
    ],
    stepsNe: [
      { title: "मास्टर प्रोफाइल दर्ता", desc: "व्यक्तिगत विवरण, ठेगाना र शैक्षिक योग्यता प्रविष्ट गर्नुहोस्।" },
      { title: "कागजात अपलोड", desc: "फोटो, हस्ताक्षर र शैक्षिक प्रमाणपत्रहरू तोकिएको साइजमा मिलाएर राख्नुहोस्।" },
      { title: "विज्ञापन र पद छनोट", desc: "आफूले आवेदन दिन चाहेको पद र समावेशी समूह छान्नुहोस्।" },
      { title: "परीक्षा दस्तुर भुक्तानी", desc: "कनेक्ट आइपिएस वा बैंक भाउचर मार्फत तोकिएको दस्तुर बुझाउनुहोस्।" }
    ],
    deadlineEn: "Subject to active PSC Gazette advertisements (Single / Double fee dates)",
    deadlineNe: "साप्ताहिक गोरखापत्र विज्ञापन तालिका अनुसार",
    isPopular: true
  },
  {
    id: "dotm-driving-license",
    titleEn: "DOTM Smart Driving License Online Pre-Registration",
    titleNe: "सवारी चालक अनुमति पत्र अनलाइन फाराम",
    category: "Government Services",
    categoryNe: "सरकारी सेवाहरू",
    shortDescEn: "Department of Transport Management (DOTM) license application, biometric appointment slot selection, and exam tracking.",
    shortDescNe: "यातायात व्यवस्था विभागको अनलाइन प्रणालीमा नयाँ लाइसेन्स फाराम दर्ता र बायोमेट्रिक कोटा छनोट।",
    detailedGuideEn: "To obtain a new driving license or add categories (Category A, B, C, etc.), candidates must submit an online application through the DOTM central portal and select an available Transport Office (Yatayat Karyalaya). Quota fills quickly, so accurate submission is vital.",
    detailedGuideNe: "नयाँ सवारी चालक अनुमति पत्र लिन वा क्याटागोरी थप्न (मोटरसाइकल, स्कुटर, कार) यातायात व्यवस्था विभागको पोर्टलबाट अनलाइन फाराम भरी बायोमेट्रिकको कोटा सुरक्षित गर्नुपर्छ।",
    officialUrl: "https://applydl.dotm.gov.np/",
    officialSourceLabel: "Official DOTM Application Portal (applydl.dotm.gov.np)",
    officialFee: "NPR 500 (Application & Medical) + Category Exam Fee",
    officialFeeNe: "रु ५०० (दरखास्त र मेडिकल) + वर्ग अनुसार परीक्षा दस्तुर",
    estimatedTime: "15 - 20 minutes",
    estimatedTimeNe: "१५ - २० मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Appointment & Schedule Guidance",
    assistanceTypeNe: "कोटा बुकिङ र फाराम सहायता",
    requirementsEn: [
      "Nepali Citizenship Certificate (front & back clear picture)",
      "Blood Group Card / Verified lab report",
      "Applicant's active personal mobile number",
      "Age eligibility: 16+ for Motorcycle/Scooter (Cat A/K), 18+ for Light Vehicle (Cat B)"
    ],
    requirementsNe: [
      "नेपाली नागरिकताको स्पष्ट फोटो (अगाडि र पछाडि)",
      "रक्त समूह (ब्लड ग्रुप) कार्ड वा प्रयोगशाला रिपोर्ट",
      "व्यक्तिगत चालु मोबाइल नम्बर",
      "उमेर: मोटरसाइकल/स्कुटरको लागि १६ वर्ष र कार/जिपको लागि १८ वर्ष पूरा भएको"
    ],
    stepsEn: [
      { title: "Select Transport Office", desc: "Choose your nearest Yatayat Karyalaya offering category slots." },
      { title: "Fill Applicant Details", desc: "Enter citizenship info, parent details, address, and blood group." },
      { title: "Confirm Biometric Visit Date", desc: "Select the available appointment day." },
      { title: "Download PDF Application Form", desc: "Print the registered application form for your office visit." }
    ],
    stepsNe: [
      { title: "यातायात कार्यालय छनोट", desc: "आफूलाई पायक पर्ने यातायात कार्यालय र सवारी वर्ग छान्नुहोस्।" },
      { title: "विवरण प्रविष्टि", desc: "नागरिकता, ठेगाना र ब्लड ग्रुप विवरण भर्नुहोस्।" },
      { title: "बायोमेट्रिक मिति निश्चित", desc: "उपलब्ध कोटा अनुसार मिति सुरक्षित गर्नुहोस्।" },
      { title: "फाराम प्रिन्ट", desc: "दर्ता नम्बर सहितको फाराम प्रिन्ट गरी कार्यालय जानुहोस्।" }
    ],
    deadlineEn: "Ongoing (Subject to office quota availability)",
    deadlineNe: "निरन्तर खुला (कार्यालय अनुसारको दैनिक कोटामा आधारित)",
    isPopular: true
  },
  {
    id: "dofe-shram-swikriti",
    titleEn: "DOFE Shram Swikriti (Foreign Employment Labor Permit / FEIMS)",
    titleNe: "वैदेशिक रोजगार श्रम स्वीकृति (FEIMS अनलाइन)",
    category: "Jobs & Recruitment",
    categoryNe: "रोजगार र भर्ना",
    shortDescEn: "Department of Foreign Employment online labor permit, renewal (Puna Shram), welfare fund, and insurance processing.",
    shortDescNe: "वैदेशिक रोजगारीमा जाने नेपालीहरूका लागि अनलाइन श्रम स्वीकृति, कल्याणकारी कोष र बिमा भुक्तानी सहायता।",
    detailedGuideEn: "Any Nepali citizen proceeding for foreign employment must obtain an official Shram Swikriti through the FEIMS portal. E-Form Nepal helps verify your visa copy, insurance policy, and welfare fund deposit to prevent airport offloading.",
    detailedGuideNe: "वैदेशिक रोजगारीमा जाने वा बिदामा फर्केका नेपाली नागरिकहरूले अनलाइन प्रणाली (FEIMS) बाट अनिवार्य श्रम स्वीकृति लिनुपर्दछ। यसका लागि बिमा र कल्याणकारी कोषको रकम तिरी कागजात रुजु गर्नुपर्छ।",
    officialUrl: "https://feims.dofe.gov.np/",
    officialSourceLabel: "Official FEIMS Portal (feims.dofe.gov.np)",
    officialFee: "Welfare Fund (NPR 1,500 - 2,500) + Term Life Insurance (as per age)",
    officialFeeNe: "कल्याणकारी कोष (रु १,५०० - २,५००) + उमेर अनुसारको बिमा शुल्क",
    estimatedTime: "30 - 45 minutes",
    estimatedTimeNe: "३० - ४५ मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Form Filling & Document Check",
    assistanceTypeNe: "कागजात अपलोड र बिमा रुजु",
    requirementsEn: [
      "Valid Nepali Passport (valid for at least 6 months)",
      "Valid Employment Visa copy from destination country",
      "Work Contract / Agreement Letter from employer",
      "Foreign Employment Term Life Insurance policy",
      "Foreign Employment Welfare Fund deposit receipt",
      "Orientation Training Certificate (for first-time applicants)"
    ],
    requirementsNe: [
      "कम्तीमा ६ महिना म्याद भएको सक्कल राहदानी",
      "गन्तव्य मुलुकको रोजगार भिसाको प्रतिलिपि",
      "रोजगारदाता कम्पनीको सम्झौता पत्र (अफर लेटर)",
      "म्यादी जीवन बिमा पोलिसी",
      "वैदेशिक रोजगार कल्याणकारी कोष दाखिला रसिद",
      "अभिमुखीकरण (Orientation) तालिमको प्रमाणपत्र (पहिलोपटक जानेलाई)"
    ],
    stepsEn: [
      { title: "Passport & Bio Login", desc: "Login to FEIMS with your passport number." },
      { title: "Insurance & Welfare Payment", desc: "Process payments through online wallets or banking channels." },
      { title: "Upload Visa & Contracts", desc: "Submit clear digital scans of entry permit and job agreement." },
      { title: "Download e-Shram Sticker", desc: "Receive the verified electronic labor approval document." }
    ],
    stepsNe: [
      { title: "पासपोर्ट र व्यक्तिगत प्रोफाइल", desc: "राहदानी नम्बर प्रयोग गरी FEIMS प्रणालीमा लगइन गर्नुहोस्।" },
      { title: "बिमा र कल्याणकारी कोष भुक्तानी", desc: "अनलाइन माध्यमबाट तोकिएको रकम दाखिला गर्नुहोस्।" },
      { title: "भिसा र सम्झौता अपलोड", desc: "भिसा र रोजगार सम्झौता पत्र स्पष्ट स्क्यान गरी राख्नुहोस्।" },
      { title: "इ-श्रम स्वीकृति डाउनलोड", desc: "स्वीकृत भएपछि क्युआर कोडसहितको श्रम स्वीकृति डाउनलोड गर्नुहोस्।" }
    ],
    deadlineEn: "Open 24/7",
    deadlineNe: "२४सै घण्टा खुला",
    isPopular: true
  },
  {
    id: "moest-noc",
    titleEn: "No Objection Certificate (NOC) for Abroad Studies",
    titleNe: "वैदेशिक अध्ययन अनुमति पत्र (NOC) अनलाइन आवेदन",
    category: "Education & Admissions",
    categoryNe: "शिक्षा र भर्ना",
    shortDescEn: "Ministry of Education (MOEST) online NOC application for abroad university verification and bank currency approval.",
    shortDescNe: "शिक्षा मन्त्रालयको अनलाइन पोर्टल मार्फत वैदेशिक अध्ययन अनुमति पत्र र कलेज अफर लेटर प्रमाणीकरण।",
    detailedGuideEn: "Students travelling abroad for higher education require an official No Objection Certificate (NOC) issued by the Ministry of Education, Science and Technology (Sanothimi, Bhaktapur) to remit tuition fees and obtain visa clearance.",
    detailedGuideNe: "विदेशमा उच्च शिक्षा अध्ययन गर्न जाने विद्यार्थीहरूले बैंकबाट शुल्क पठाउन र अध्यागमन प्रयोजनको लागि शिक्षा मन्त्रालय (सानोठिमी) बाट एनओसी (NOC) लिनु अनिवार्य छ।",
    officialUrl: "https://noc.moest.gov.np/",
    officialSourceLabel: "Official MOEST NOC Portal (noc.moest.gov.np)",
    officialFee: "NPR 2,000 (Revenue Voucher)",
    officialFeeNe: "रु २,००० (सरकारी राजस्व)",
    estimatedTime: "20 - 30 minutes",
    estimatedTimeNe: "२० - ३० मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Form Filling & Document Check",
    assistanceTypeNe: "शैक्षिक कागजात रुजु र आवेदन",
    requirementsEn: [
      "Valid Passport copy",
      "Citizenship Certificate",
      "Offer Letter / I-20 / CoE / Unconditional Admission Letter from recognized institution",
      "Transcripts & Character Certificates of previous educational level",
      "Equivalence Certificate from Tribhuvan University or CDC (if applicable)"
    ],
    requirementsNe: [
      "सक्कल राहदानीको प्रतिलिपि",
      "नागरिकता प्रमाणपत्र",
      "सम्बन्धित विश्वविद्यालयको अफर लेटर (I-20, CoE वा भर्ना पत्र)",
      "अघिल्लो तहको ट्रान्सक्रिप्ट र चारित्रिक प्रमाणपत्र",
      "विदेशबाट अध्ययन गरेको भए त्रिभुवन विश्वविद्यालयको समकक्षता (Equivalence)"
    ],
    stepsEn: [
      { title: "Register on MOEST NOC", desc: "Create an account with email and mobile verification." },
      { title: "Select Country & Program", desc: "Enter country, university, degree level, and subject." },
      { title: "Upload Scans & Pay Revenue", desc: "Upload clear transcripts and pay the NPR 2,000 government fee." },
      { title: "Collect / Download NOC", desc: "Receive your verified digital NOC document after ministry approval." }
    ],
    stepsNe: [
      { title: "खाता निर्माण", desc: "इमेल र मोबाइल नम्बर मार्फत एनओसी पोर्टलमा दर्ता हुनुहोस्।" },
      { title: "देश र विषय छनोट", desc: "अध्ययन गर्न जाने मुलुक, विश्वविद्यालय र अध्ययन तह छान्नुहोस्।" },
      { title: "कागजात अपलोड र राजस्व भुक्तानी", desc: "शैक्षिक प्रमाणपत्र अपलोड गरी रु २,००० राजस्व बुझाउनुहोस्।" },
      { title: "NOC प्राप्त गर्नुहोस्", desc: "मन्त्रालयबाट स्वीकृत भएपछि डिजिटल एनओसी डाउनलोड गर्नुहोस्।" }
    ],
    deadlineEn: "Continuous Year Round",
    deadlineNe: "वर्षभरि अनलाइन सेवा उपलब्ध"
  },
  {
    id: "pan-card-registration",
    titleEn: "Personal / Business PAN Card Online Registration (IRD)",
    titleNe: "स्थायी लेखा नम्बर (PAN) अनलाइन दर्ता",
    category: "Government Services",
    categoryNe: "सरकारी सेवाहरू",
    shortDescEn: "Inland Revenue Department (IRD) individual PAN for salaried employees and business registration.",
    shortDescNe: "आन्तरिक राजस्व विभागको व्यक्तिगत तथा व्यावसायिक प्यान दर्ता फाराम सहायता।",
    detailedGuideEn: "Every salaried individual, freelancer, and business entity in Nepal requires a Permanent Account Number (PAN) from the Inland Revenue Department. Applications are completed online and verified at the local Tax Office (IRO/Karyalaya).",
    detailedGuideNe: "जागिर, व्यवसाय वा कर प्रयोजनका लागि नेपाल सरकारको आन्तरिक राजस्व विभागबाट स्थायी लेखा नम्बर (PAN) लिनुपर्दछ। अनलाइन फाराम भरेर सम्बन्धित करदाता सेवा कार्यालयबाट तुरुन्त कार्ड लिन सकिन्छ।",
    officialUrl: "https://taxonline.ird.gov.np/",
    officialSourceLabel: "Official IRD Taxpayer Portal (taxonline.ird.gov.np)",
    officialFee: "Free ($0 Official Government Fee)",
    officialFeeNe: "निःशुल्क (सरकारी दस्तुर रु ०)",
    estimatedTime: "10 - 15 minutes",
    estimatedTimeNe: "१० - १५ मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Form Filling & Document Check",
    assistanceTypeNe: "फाराम प्रविष्टि सहायता",
    requirementsEn: [
      "Citizenship Certificate (scanned)",
      "Passport size photograph (digital JPEG)",
      "Active mobile number and email",
      "Company registration certificate & board decision (for business PAN)"
    ],
    requirementsNe: [
      "नेपाली नागरिकता प्रमाणपत्रको फोटो",
      "पासपोर्ट साइजको फोटो",
      "इमेल र मोबाइल नम्बर",
      "व्यावसायिक प्यानको हकमा दर्ता प्रमाणपत्र र निर्णय"
    ],
    stepsEn: [
      { title: "Select Taxpayer Portal", desc: "Access the IRD integrated tax system." },
      { title: "Fill Individual Details", desc: "Enter name, father/mother name, date of birth, and local tax office." },
      { title: "Submit Application", desc: "Generate the unique submission number." },
      { title: "Collect PAN Card", desc: "Present submission slip at your selected tax office for same-day card issuance." }
    ],
    stepsNe: [
      { title: "पोर्टलमा प्रवेश", desc: "आन्तरिक राजस्व विभागको करदाता पोर्टल खोल्नुहोस्।" },
      { title: "विवरण प्रविष्टि", desc: "व्यक्तिगत विवरण, नागरिकता नम्बर र पायक पर्ने कर कार्यालय छान्नुहोस्।" },
      { title: "फाराम पेश", desc: "सबमिसन नम्बर (Submission Number) प्राप्त गर्नुहोस्।" },
      { title: "प्यान कार्ड संकलन", desc: "उक्त नम्बर लिएर कर कार्यालयबाट निःशुल्क प्यान कार्ड प्राप्त गर्नुहोस्।" }
    ],
    deadlineEn: "Continuous Year Round",
    deadlineNe: "वर्षभरि खुला"
  },
  {
    id: "teacher-service-commission",
    titleEn: "Teacher Service Commission (TSC) Online Application",
    titleNe: "शिक्षक सेवा आयोग दरखास्त फाराम",
    category: "Examinations & Applications",
    categoryNe: "परीक्षा र आवेदन",
    shortDescEn: "Shikshak Sewa Aayog teaching license and teacher recruitment competitive examination applications.",
    shortDescNe: "शिक्षक सेवा आयोगको अध्यापन अनुमति पत्र (लाइसेन्स) तथा शिक्षक पदपूर्ति दरखास्त।",
    detailedGuideEn: "TSC conducts annual examinations for permanent teacher recruitment across Primary, Lower Secondary, and Secondary levels, as well as Teaching License examinations.",
    detailedGuideNe: "सामुदायिक विद्यालयहरूमा स्थायी शिक्षक पदपूर्ति तथा अध्यापन अनुमति पत्रका लागि शिक्षक सेवा आयोगको अनलाइन पोर्टल मार्फत आवेदन दिनुपर्दछ।",
    officialUrl: "https://online.tsc.gov.np/",
    officialSourceLabel: "Official TSC Portal (online.tsc.gov.np)",
    officialFee: "NPR 500 - NPR 1,000 depending on school level",
    officialFeeNe: "तह अनुसार रु ५०० देखि रु १,००० सम्म",
    estimatedTime: "25 - 35 minutes",
    estimatedTimeNe: "२५ - ३५ मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Form Filling & Document Check",
    assistanceTypeNe: "कागजात अपलोड र आवेदन सहायता",
    requirementsEn: [
      "Citizenship Certificate",
      "Teaching License (for permanent teacher posts)",
      "B.Ed / Relevant educational degree certificates & transcripts",
      "Recent passport photo and signature scan",
      "Equivalence certificate if applicable"
    ],
    requirementsNe: [
      "नेपाली नागरिकता प्रमाणपत्र",
      "अध्यापन अनुमति पत्र (खुला प्रतियोगिताको लागि)",
      "शिक्षा विषयमा स्नातक वा सम्बन्धित शैक्षिक प्रमाणपत्र",
      "पासपोर्ट साइजको फोटो र डिजिटल हस्ताक्षर"
    ],
    stepsEn: [
      { title: "Profile Creation", desc: "Register with verified mobile and email." },
      { title: "Upload Academic Credentials", desc: "Upload transcripts, character certificates, and license." },
      { title: "Select Exam Level & District", desc: "Select Secondary, Lower Sec, or Primary level." },
      { title: "Pay Online & Download Admit Slip", desc: "Complete fee payment to receive your roll number voucher." }
    ],
    stepsNe: [
      { title: "प्रोफाइल दर्ता", desc: "मोबाइल र इमेल रुजु गरी खाता खोल्नुहोस्।" },
      { title: "शैक्षिक विवरण अपलोड", desc: "ट्रान्सक्रिप्ट र अध्यापन अनुमति पत्र स्क्यान गरी राख्नुहोस्।" },
      { title: "तह र विषय छनोट", desc: "माध्यमिक, निम्न माध्यमिक वा प्राथमिक तह छान्नुहोस्।" },
      { title: "दस्तुर भुक्तानी", desc: "अनलाइन दस्तुर बुझाएर प्रवेशपत्र भौचर सुरक्षित राख्नुहोस्।" }
    ],
    deadlineEn: "Subject to active TSC Gazetted Advertisements",
    deadlineNe: "आयोगको वार्षिक कार्यतालिका अनुसार"
  },
  {
    id: "tu-exam-registration",
    titleEn: "Tribhuvan University (TU) Exam & Registration Forms",
    titleNe: "त्रिभुवन विश्वविद्यालय (TU) परीक्षा फाराम",
    category: "Education & Admissions",
    categoryNe: "शिक्षा र भर्ना",
    shortDescEn: "TU Office of the Controller of Examinations (Balkhu) online student registration, exam form, and admit card processing.",
    shortDescNe: "त्रिभुवन विश्वविद्यालय परीक्षा नियन्त्रण कार्यालयको अनलाइन परीक्षा फाराम र प्रवेशपत्र सहायता।",
    detailedGuideEn: "Tribhuvan University degree students across faculties (Management, Humanities, Science, Education) can fill out registration forms and examination applications through the integrated TU exam portal.",
    detailedGuideNe: "त्रिभुवन विश्वविद्यालयका विद्यार्थीहरूले परीक्षा फाराम भर्न तथा नतिजा/प्रवेशपत्र व्यवस्थापनका लागि अनलाइन प्रणाली प्रयोग गर्न सक्छन्।",
    officialUrl: "https://tuexam.edu.np/",
    officialSourceLabel: "Official TU Examination Portal (tuexam.edu.np)",
    officialFee: "As per TU Faculty regulations (NPR 1,000 - 3,500)",
    officialFeeNe: "संकाय र तह अनुसार (रु १,००० देखि ३,५०० सम्म)",
    estimatedTime: "15 - 20 minutes",
    estimatedTimeNe: "१५ - २० मिनेट",
    isAssistanceAvailable: true,
    assistanceType: "Form Filling & Document Check",
    assistanceTypeNe: "फाराम प्रविष्टि र भौचर रुजु",
    requirementsEn: [
      "TU Registration Number / Card",
      "Campus / College Name & Roll Number",
      "Recent passport photograph",
      "Previous year/semester marksheet or admit card",
      "Online fee voucher receipt"
    ],
    requirementsNe: [
      "त्रि.वि. दर्ता नम्बर (TU Registration No)",
      "क्याम्पसको नाम र रोल नम्बर",
      "हालसालैको पासपोर्ट साइज फोटो",
      "अघिल्लो परीक्षाको मार्कसिट वा प्रवेशपत्र",
      "बैंक भौचर वा अनलाइन भुक्तानी रसिद"
    ],
    stepsEn: [
      { title: "Input TU Registration No", desc: "Fetch your enrolled faculty profile." },
      { title: "Select Subjects / Papers", desc: "Select regular or back-paper examination subjects." },
      { title: "Upload Fee Receipt", desc: "Attach bank voucher or wallet transaction ID." },
      { title: "Download Exam Slip", desc: "Print verified examination entry slip." }
    ],
    stepsNe: [
      { title: "दर्ता नम्बर प्रविष्टि", desc: "आफ्नो त्रि.वि. दर्ता नम्बर राखी प्रोफाइल खोज्नुहोस्।" },
      { title: "विषय छनोट", desc: "नियमित वा आंशिक (Back) परीक्षाका विषयहरू छान्नुहोस्।" },
      { title: "भाउचर अपलोड", desc: "तोकिएको परीक्षा शुल्कको रसिद संलग्न गर्नुहोस्।" },
      { title: "प्रवेशपत्र स्लिप डाउनलोड", desc: "फाराम सबमिट गरी प्रिन्ट निकाल्नुहोस्।" }
    ],
    deadlineEn: "Subject to TU Exam Schedule deadlines",
    deadlineNe: "परीक्षा नियन्त्रण कार्यालयको सूचना अनुसार"
  }
];

export const VERIFIED_CONTACT = {
  brandName: "E-Form Nepal",
  tagline: "Your Online Form Partner",
  taglineNe: "तपाईंको डिजिटल काममा हाम्रो साथ",
  brandPromise: "Easy Process, Brighter Future",
  whatsappNumber: "9865575108",
  whatsappInternational: "+9779865575108",
  whatsappUrl: "https://wa.me/9779865575108",
  displayPhone: "+977 9865575108",
  email: "support@eformnepal.com",
  socialLinks: {
    youtube: "https://www.youtube.com/@eFormNepal",
    tiktok: "https://www.tiktok.com/@eformnepal",
    facebook: "https://www.facebook.com/@eformnepalofficial",
  },
  officeHoursEn: "Sunday - Friday: 8:00 AM - 7:00 PM (Nepal Time)",
  officeHoursNe: "आइतबार - शुक्रबार: बिहान ८:०० - साँझ ७:००",
  addressEn: "Kathmandu & Nationwide Digital Form Assistance, Nepal",
  addressNe: "काठमाडौँ तथा देशभर डिजिटल फाराम सहायता, नेपाल",
  disclaimerEn: "Disclaimer: E-Form Nepal is an independent digital services and technical assistance provider. We are not affiliated with, endorsed by, or representing any government authority, embassy, or official commission. All trademarks, official portals, and logos belong to their respective statutory bodies.",
  disclaimerNe: "अस्वीकरण: इ-फाराम नेपाल एक स्वतन्त्र डिजिटल सेवा तथा प्राविधिक परामर्श प्रदायक संस्था हो। हामी कुनै पनि सरकारी निकाय, दूतावास वा आयोगको आधिकारिक प्रतिनिधि होइनौं। सबै आधिकारिक ट्रेडमार्क र वेबसाइटहरू सम्बन्धित निकायका हुन्।"
};

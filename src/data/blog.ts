export interface PhotoGuideSection {
  titleEn: string;
  titleNe: string;
  descriptionEn: string;
  descriptionNe: string;
  samplesImageUrl?: string;
  templateImageUrl?: string;
  specs?: Array<{ labelEn: string; labelNe: string; valueEn: string; valueNe: string }>;
  dos?: Array<{ textEn: string; textNe: string }>;
  donts?: Array<{ textEn: string; textNe: string }>;
}

export interface BlogArticle {
  id: string;
  slug: string;
  titleEn: string;
  titleNe: string;
  summaryEn: string;
  summaryNe: string;
  contentEn: string;
  contentNe: string;
  category: "guides" | "notices" | "eps" | "jlpt" | "edv" | "passport" | "license" | "nid" | "loksewa" | "general" | string;
  tags: string[];
  thumbnailUrl?: string;
  youtubeUrl?: string;
  youtubeVideoId?: string;
  videoDuration?: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  officialSources: Array<{
    title: string;
    url: string;
    authority: string;
  }>;
  photoGuide?: PhotoGuideSection;
  stepByStepInstructions?: Array<{
    stepNumber: number;
    titleEn: string;
    titleNe: string;
    descriptionEn: string;
    descriptionNe: string;
    tips?: string[];
    warning?: string;
  }>;
  requiredDocuments?: Array<{
    nameEn: string;
    nameNe: string;
    note?: string;
  }>;
  commonMistakes?: Array<{
    mistakeEn: string;
    mistakeNe: string;
    solutionEn: string;
    solutionNe: string;
  }>;
  faqs?: Array<{
    questionEn: string;
    questionNe: string;
    answerEn: string;
    answerNe: string;
  }>;
  ctaServiceId?: string;
  ctaTitleEn?: string;
  ctaTitleNe?: string;
  ctaDescriptionEn?: string;
  ctaDescriptionNe?: string;
  featured?: boolean;
}

export function extractYouTubeId(urlOrId?: string): string | undefined {
  if (!urlOrId) return undefined;
  const trimmed = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }
  const match = trimmed.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/
  );
  return match ? match[1] : undefined;
}

export const BLOG_CATEGORIES: Record<string, { labelEn: string; labelNe: string; color: string }> = {
  notices: { labelEn: "Form Open Notices", labelNe: "खुला फाराम सूचना", color: "#E11D2E" },
  eps: { labelEn: "EPS Korea (TOPIK)", labelNe: "इपिएस (EPS) कोरिया", color: "#0284C7" },
  jlpt: { labelEn: "JLPT Japan (JFT)", labelNe: "जापान (JLPT/JFT)", color: "#9333EA" },
  guides: { labelEn: "Step-by-Step Guides", labelNe: "विस्तृत मार्गदर्शन", color: "#1E73EB" },
  edv: { labelEn: "Diversity Visa (EDV)", labelNe: "डिभी (EDV) लटरी", color: "#059669" },
  passport: { labelEn: "e-Passport", labelNe: "विद्युतीय राहदानी", color: "#0B3D91" },
  license: { labelEn: "Driving License", labelNe: "सवारी चालक अनुमति पत्र", color: "#D97706" },
  nid: { labelEn: "National ID (NID)", labelNe: "राष्ट्रिय परिचयपत्र", color: "#7C3AED" },
  loksewa: { labelEn: "Lok Sewa Aayog", labelNe: "लोक सेवा आयोग", color: "#DC2626" },
  general: { labelEn: "Online Forms Nepal", labelNe: "अनलाइन फाराम जानकारी", color: "#475569" },
};

export const INITIAL_ARTICLES: BlogArticle[] = [
  {
    "id": "edv-2027-application-photo-requirements-complete-guide",
    "slug": "edv-2027-application-photo-requirements-complete-guide",
    "titleEn": "EDV 2027 Complete Guide: Court-Ordered Nov 1 Opening, $1 Registration Fee, Mandatory Passport & Photo Specs",
    "titleNe": "EDV 2027 नयाँ निर्देशिका: नोभेम्बर १ को अदालतको आदेश, $१ दर्ता शुल्क, अनिवार्य राहदानी र फोटो मापदण्ड",
    "summaryEn": "Essential official guide for Nepali applicants for DV-2027: court-ordered 30-day opening from November 1, 2026, the new US$1 registration fee requirement, mandatory valid passport and biographical page scan at entry, 600x600 px photo specifications, and verified official links.",
    "summaryNe": "EDV 2027 का लागि नेपाली आवेदकहरूले जान्नैपर्ने नयाँ नियमहरू: नोभेम्बर १, २०२६ देखि ३० दिनको खुला विन्डो, नयाँ $१ दर्ता शुल्क, अनिवार्य चालु राहदानी र बायो-पेज स्क्यान, ६००x६०० डिजिटल फोटो मापदण्ड र आधिकारिक लिङ्कहरू।",
    "category": "edv",
    "tags": [
      "EDV 2027",
      "Diversity Visa Court Order",
      "November 1 2026",
      "$1 Registration Fee",
      "Mandatory Passport",
      "Passport Bio Page Scan",
      "DV Photo Guidelines",
      "dvprogram.state.gov"
    ],
    "thumbnailUrl": "/images/edv/photo-samples.jpg",
    "author": {
      "name": "E-Form Nepal Editorial Desk",
      "role": "US Visa & International Online Application Specialists"
    },
    "publishedAt": "2026-10-28T09:00:00Z",
    "updatedAt": "2026-10-29T17:15:00Z",
    "readingTimeMinutes": 10,
    "featured": true,
    "contentEn": "The U.S. Electronic Diversity Visa Program (DV-2027) comes with landmark legal and procedural updates that every Nepali applicant must know before applying. Following recent federal court directives, key entry rules have changed regarding registration dates, entry fees, and mandatory passport submissions.\n\nThis detailed guide outlines the verified court-ordered timeline, the new US$1 registration fee, mandatory passport bio-page scanning rules, and strict digital photo compliance standards.\n\n---\n\n### 1. Court-Ordered Registration Window (Starting November 1, 2026)\n* **Court-Ordered Opening Date:** A U.S. Federal Court has ordered the DV-2027 lottery registration to open for a **30-day window starting November 1, 2026**.\n* **Current Legal Status:** The U.S. Government (Department of State) has filed an appeal requesting a stay (pause) on the order. Entrants must monitor official announcements closely as proceedings progress.\n* **Official Application Portal:** All submissions must be completed exclusively through the official [Electronic Diversity Visa Program](https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry.html) portal at **dvprogram.state.gov**.\n* **Traffic Caution:** During the 30-day window, apply early and avoid the final 72 hours when global server overload causes gateway timeouts and submission failures.\n\n---\n\n### 2. New Requirement: US$1 Registration Fee\n* **Introduction of Entry Fee:** Under the new directives for DV-2027, a **US$1 registration fee** is required to submit your entry.\n* **Pay Only on the Official Portal:** The official US$1 fee must only be paid through the secure government payment gateway embedded directly within **dvprogram.state.gov**.\n* **Avoid Third-Party Scams:** Be vigilant against unauthorized agencies, cyber cafes, or unofficial websites charging exorbitant fees or claiming special selection guarantees. Any fee payment outside the official state.gov portal is fraudulent.\n\n---\n\n### 3. New Requirement: Mandatory Valid Passport & Biographical Page Scan\n* **Mandatory Passport at Entry:** Unlike previous cycles where applicants could enter with only civil citizenship details, **a valid, unexpired international passport is now MANDATORY at the time of initial registration**.\n* **Biographical Page Scan Required:** Applicants must upload a clear, legible digital scan of their **passport's biographical page** (the page containing your photo, full name, date of birth, passport number, and expiry date).\n* **Validity Criteria:** The passport must be valid and unexpired at the time of application. Ensure all personal details entered on the DV form match the passport letter-for-letter.\n\n---\n\n### 4. Digital Photo Compliance: The Strictest Metric\nThe U.S. Department of State enforces automated facial recognition biometrics. Images that fail the 600x600 px dimensions, head-to-height ratio (50%–69%), or background lighting standards are disqualified automatically by software algorithms before the lottery draw takes place. See the detailed photo guide and template below.",
    "contentNe": "संयुक्त राज्य अमेरिकाको इलेक्ट्रोनिक डाइभर्सिटी भिसा (DV-2027) का लागि अमेरिकी संघीय अदालतको पछिल्लो फैसला अनुसार फाराम खुल्ने मिति, दर्ता दस्तुर र राहदानी सम्बन्धी महत्वपूर्ण नयाँ नियमहरू लागू भएका छन्। नेपाली आवेदकहरूले फाराम भर्नु अगावै यी नयाँ मापदण्डहरू बुझ्नु अत्यन्त आवश्यक छ।\n\nयो निर्देशिकामा नोभेम्बर १ देखि खुल्ने अदालतको आदेश, नयाँ $१ दर्ता शुल्क, अनिवार्य राहदानी तथा बायो-पेज स्क्यान र ६००x६०० फोटो मापदण्डको पूर्ण विवरण प्रस्तुत गरिएको छ।\n\n---\n\n### १. अदालतको आदेश अनुसार फाराम खुल्ने मिति (नोभेम्बर १, २०२६ देखि)\n* **अदालतको आदेश:** अमेरिकी संघीय अदालतले DV-2027 लटरी दर्ता **नोभेम्बर १, २०२६ देखि ३० दिनको विन्डो** खोली सञ्चालन गर्न आदेश दिएको छ।\n* **वर्तमान कानुनी अवस्था:** अमेरिकी सरकार (विदेश मन्त्रालय) ले उक्त आदेश तत्काल रोक्न (Stay Request) का लागि पुनरावेदन (Appeal) दर्ता गरेको छ। तसर्थ आवेदकहरूले आधिकारिक निर्णय र अपडेट निरन्तर हेर्नुपर्छ।\n* **आधिकारिक वेबसाइट:** फाराम केवल अमेरिकी सरकारको आधिकारिक [Electronic Diversity Visa Program](https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry.html) पोर्टल **dvprogram.state.gov** मार्फत मात्र भर्नुपर्दछ।\n* **समयमै फाराम भर्नुहोस्:** ३० दिनको समयावधिभित्र अन्तिम दिनहरूमा संसारभरिको चापले गर्दा सर्भर स्लो हुने हुँदा सुरुका दिनहरूमा नै फाराम भर्न सल्लाह दिइन्छ।\n\n---\n\n### २. नयाँ नियम: US$१ दर्ता शुल्क\n* **$१ दर्ता शुल्क अनिवार्य:** नयाँ मापदण्ड अनुसार DV-2027 फाराम दर्ता गर्दा **१ अमेरिकी डलर (US$1)** दर्ता शुल्क तिर्नुपर्ने व्यवस्था गरिएको छ।\n* **आधिकारिक पोर्टलबाट मात्र भुक्तानी:** यो १ डलर शुल्क केवल अमेरिकी सरकारको आधिकारिक पोर्टल **dvprogram.state.gov** भित्रको सुरक्षित सरकारी पेमेन्ट गेटवेबाट मात्र भुक्तानी गर्नुपर्छ।\n* **ठगीबाट सावधान रहनुहोस्:** सामाजिक सञ्जाल वा अन्य अनधिकृत वेबसाइटहरूले चर्को शुल्क लिने वा डिभी पारिदिने ग्यारेन्टी दिने नाममा ठगी गर्न सक्ने भएकाले आधिकारिक वेबसाइट बाहेक कहिल्यै पनि अन्यत्र कार्ड नम्बर नहाल्नुहोस्।\n\n---\n\n### ३. नयाँ नियम: अनिवार्य चालु राहदानी र बायो-पेज स्क्यान\n* **फाराम भर्दा नै राहदानी अनिवार्य:** पहिलेका वर्षहरूमा नागरिकताको आधारमा मात्र फाराम भर्न मिल्ने व्यवस्था रहेकोमा नयाँ नियम अनुसार **आवेदन दर्ता गर्दा नै चालु (मियाद नसकिएको) राहदानी (Passport) अनिवार्य** गरिएको छ।\n* **बायो-पेज स्क्यान अपलोड गर्नुपर्ने:** आवेदकले आफ्नो राहदानीको व्यक्तिगत विवरण, फोटो र मियाद देखिने **बायोग्राफिकल पेज (Biographical Page) को स्पष्ट डिजिटल स्क्यान** अनिवार्य रूपमा अपलोड गर्नुपर्छ।\n* **विवरण मिल्नुपर्ने:** राहदानीमा उल्लेख भएको नामको हिज्जे (Spelling), जन्ममिति र राहदानी नम्बर फाराममा ठ्याक्कै एउटै हुनुपर्दछ।\n\n---\n\n### ४. डिजिटल फोटो मापदण्ड: फाराम रद्द हुनबाट बच्ने उपाय\nअमेरिकी विदेश मन्त्रालयको एआई सफ्टवेयरले ६००x६०० पिक्सेलको वर्गाकार फोटो, ५०% देखि ६९% सम्मको टाउकोको अनुपात, सादा सेतो पृष्ठभूमि र छायाँ नभएको फोटो मात्र स्वीकार गर्दछ। चस्मा लगाउन पूर्ण निषेध छ। विस्तृत फोटो टेम्प्लेट तल हेर्नुहोस्।",
    "photoGuide": {
      "titleEn": "Official Digital Photo Specifications & Visual Template",
      "titleNe": "आधिकारिक डिजिटल फोटो मापदण्ड तथा भिजुअल टेम्प्लेट",
      "descriptionEn": "The digital photograph is strictly verified by automated biometrics. Submitting an old photo, wearing glasses, or having uneven lighting/shadows leads to automated disqualification before the lottery drawing. Follow the official proportion template and samples below:",
      "descriptionNe": "डिभी फाराममा फोटो सबैभन्दा संवेदनशील विषय हो। मापदण्ड नपुगेका फोटोहरू लटरी सफ्टवेयरले सुरुमै हटाउँछ। तल दिइएको अनुपात टेम्प्लेट र नमुनाहरू हेरेर आफ्नो फोटो मिलाउनुहोस्:",
      "templateImageUrl": "/images/edv/photo-template.png",
      "samplesImageUrl": "/images/edv/photo-samples.jpg",
      "specs": [
        {
          "labelEn": "Dimensions",
          "labelNe": "फोटोको आकार",
          "valueEn": "600 x 600 pixels (1:1 Square)",
          "valueNe": "६०० x ६०० पिक्सेल (वर्गाकार)"
        },
        {
          "labelEn": "File Size",
          "labelNe": "फाइलको साइज",
          "valueEn": "Maximum 240 KB (JPEG format)",
          "valueNe": "अधिकतम २४० KB (JPEG फर्म्याट)"
        },
        {
          "labelEn": "Head Height Ratio",
          "labelNe": "टाउकोको उचाइ",
          "valueEn": "50% to 69% of total height",
          "valueNe": "कुल उचाइको ५०% देखि ६९% सम्म"
        },
        {
          "labelEn": "Eye Level Height",
          "labelNe": "आँखाको उचाइ",
          "valueEn": "56% to 69% from bottom border",
          "valueNe": "तल्लो भागबाट ५६% देखि ६९% उचाइमा"
        },
        {
          "labelEn": "Background",
          "labelNe": "पृष्ठभूमि",
          "valueEn": "Plain white or off-white, no shadows",
          "valueNe": "सादा सेतो वा अफ-ह्वाइट, छायाँरहित"
        },
        {
          "labelEn": "Eyeglasses",
          "labelNe": "चस्मा",
          "valueEn": "Strictly PROHIBITED (No glasses)",
          "valueNe": "पूर्ण रूपमा निषेध (चस्मा खोल्नुपर्ने)"
        },
        {
          "labelEn": "Expression",
          "labelNe": "अनुहारको भाव",
          "valueEn": "Neutral, mouth closed, both eyes open",
          "valueNe": "सामान्य भाव, मुख बन्द, आँखा खुला"
        },
        {
          "labelEn": "Recency",
          "labelNe": "समय सीमा",
          "valueEn": "Taken within last 6 months (Do not reuse)",
          "valueNe": "पछिल्लो ६ महिनाभित्र खिचिएको (नयाँ)"
        }
      ],
      "dos": [
        {
          "textEn": "Take a fresh photo against a plain, smooth white background with balanced studio lighting.",
          "textNe": "सादा सेतो पर्खाल वा कपडा अगाडि दुवै कान र अनुहार प्रष्ट देखिने गरी फोटो खिच्नुहोस्।"
        },
        {
          "textEn": "Look straight into the camera lens with a neutral expression and your mouth naturally closed.",
          "textNe": "क्यामेरामा सिधा हेर्नुहोस्, आँखा दुवै खुला र मुख प्राकृतिक रूपमा बन्द राख्नुहोस्।"
        },
        {
          "textEn": "Ensure there are no shadows on your face, under your chin, or on the wall behind you.",
          "textNe": "अनुहार, चिउँडो वा पछाडिको भित्तामा कुनै पनि छायाँ नपरेको यकिन गर्नुहोस्।"
        },
        {
          "textEn": "Verify your photo using the official State Department cropping tool before uploading.",
          "textNe": "अपलोड गर्नु अगाडि आधिकारिक अमेरिकी फोटो टुलमा हालेर ६००x६०० साइज जाँच गर्नुहोस्।"
        }
      ],
      "donts": [
        {
          "textEn": "NEVER wear eyeglasses, sunglasses, or tinted lenses (automatic disqualification since 2016).",
          "textNe": "फोटो खिच्दा चस्मा (पावर भएको वा सनग्लास) कहिल्यै नलगाउनुहोस्।"
        },
        {
          "textEn": "NEVER reuse a photo from last year's DV lottery, your passport, or citizenship card.",
          "textNe": "पोहर सालको डिभी वा राहदानी/नागरिकतामा भएको पुरानो फोटो पुनः प्रयोग नगर्नुहोस्।"
        },
        {
          "textEn": "NEVER use AI filters, beauty smoothing, digital cut-and-paste backgrounds, or Photoshop altering.",
          "textNe": "ब्युटी क्यामेरा, एआई फिल्टर वा फोटोसपबाट पछाडिको ब्याकग्राउन्ड फेरबदल नगर्नुहोस्।"
        },
        {
          "textEn": "NEVER tilt your head or take selfies from an elevated smartphone angle.",
          "textNe": "टाउको ढल्काएर वा माथिबाट सेल्फी लिएर फोटो नखिच्नुहोस्।"
        }
      ]
    },
    "stepByStepInstructions": [
      {
        "stepNumber": 1,
        "titleEn": "Prepare Valid Passport & Clear Biographical Page Scan",
        "titleNe": "चालु राहदानी र बायोग्राफिकल पेजको स्पष्ट स्क्यान तयार गर्नुहोस्",
        "descriptionEn": "Ensure your international passport is valid and unexpired. Create a clean, flat, high-resolution digital scan of the biographical page showing your photo, passport number, full name, and expiry date.",
        "descriptionNe": "आफ्नो राहदानी चालु अवस्थामा रहेको यकिन गर्नुहोस् र फोटो तथा व्यक्तिगत विवरण भएको पृष्ठको प्रष्ट डिजिटल स्क्यान तयार राख्नुहोस्।",
        "tips": [
          "Check that the scan has no glare or cropped edges.",
          "Ensure personal name spellings match civil records."
        ],
        "warning": "Applications submitted without a valid passport or clear bio-page scan are invalid under current rules."
      },
      {
        "stepNumber": 2,
        "titleEn": "Prepare Verified 600x600 px Digital Photos for Entire Family",
        "titleNe": "परिवारका सम्पूर्ण सदस्यहरूको ६००x६०० पिक्सेलको सही फोटो तयार गर्नुहोस्",
        "descriptionEn": "Obtain compliant digital photos (maximum 240 KB, 600x600 px) for yourself, your spouse, and all unmarried children under age 21. Use a white background with no shadows or glasses.",
        "descriptionNe": "आफ्नो, पति/पत्नी र २१ वर्ष मुनिका सबै अविवाहित सन्तानहरूको सेतो पृष्ठभूमि भएको, चस्मा नलगाएको र छायाँ नभएको फोटो तयार राख्नुहोस्।",
        "tips": [
          "Use the official State Department Photo Tool to crop and center the image.",
          "Do not digitally alter face contours or hair."
        ],
        "warning": "Submitting a photo older than 6 months or previously used in any prior DV lottery results in immediate automated disqualification."
      },
      {
        "stepNumber": 3,
        "titleEn": "Access the Only Official Portal: dvprogram.state.gov",
        "titleNe": "एकमात्र आधिकारिक पोर्टल dvprogram.state.gov खोल्नुहोस्",
        "descriptionEn": "The US Department of State operates only ONE official portal. Do not use unauthorized third-party domains. Complete the visual Captcha security code to begin Part 1.",
        "descriptionNe": "अमेरिकी सरकारको एकमात्र आधिकारिक पोर्टल dvprogram.state.gov मात्र खोल्नुहोस्। कुनै पनि पैसा माग्ने नक्कली साइटहरू नखोल्नुहोस्।",
        "tips": [
          "Apply using a desktop or laptop browser (Chrome, Firefox, Edge) with a stable connection."
        ],
        "warning": "The official portal address ends in .state.gov. Do not submit data on commercial sites."
      },
      {
        "stepNumber": 4,
        "titleEn": "Enter Primary Entrant Details & Upload Passport Bio Page",
        "titleNe": "मुख्य आवेदकको विवरण प्रविष्ट गरी राहदानी स्क्यान अपलोड गर्नुहोस्",
        "descriptionEn": "Enter your full legal name (Last/Family Name, First Name, Middle Name) matching your passport. Fill Date of Birth, Gender, City of Birth, Country of Eligibility (Nepal), and attach the required passport biographical page scan.",
        "descriptionNe": "राहदानी अनुसार थर, नाम, जन्ममिति, जन्मस्थान (जिल्ला) मिलाएर प्रविष्ट गर्नुहोस् र राहदानीको बायो-पेज स्क्यान अपलोड गर्नुहोस्।",
        "tips": [
          "If you have no middle name, check the 'No Middle Name' box."
        ],
        "warning": "A single spelling discrepancy between your application and passport can cause disqualification."
      },
      {
        "stepNumber": 5,
        "titleEn": "Declare Spouse & Children and Pay Official US$1 Fee",
        "titleNe": "परिवारको विवरण प्रविष्ट गरी आधिकारिक १ डलर शुल्क भुक्तानी गर्नुहोस्",
        "descriptionEn": "List your legally married spouse and all living unmarried children under 21 with their photos. Proceed to complete the official US$1 registration fee through the portal's integrated payment system.",
        "descriptionNe": "पति/पत्नी र २१ वर्ष मुनिका सबै सन्तानको विवरण तथा फोटो समावेश गर्नुहोस् र प्रणालीमार्फत १ अमेरिकी डलर दर्ता शुल्क भुक्तानी गर्नुहोस्।",
        "tips": [
          "Both husband and wife can submit independent primary entries listing each other, legally doubling family chances."
        ],
        "warning": "Failure to list legal dependents guarantees permanent refusal at the embassy interview."
      },
      {
        "stepNumber": 6,
        "titleEn": "Immediately Save and Print Your Confirmation Number",
        "titleNe": "१६ अङ्कको कन्फर्मेसन नम्बर तुरुन्तै सुरक्षित प्रिन्ट तथा सेभ गर्नुहोस्",
        "descriptionEn": "Upon successful submission, the system generates a Submission Confirmation page with your full name, year of birth, and a 16-character confirmation number (e.g., 2027xxxxxxxxxxxx).",
        "descriptionNe": "फाराम सबमिट हुनासाथ आउने १६ अङ्कको कन्फर्मेसन नम्बर, नाम र जन्ममिति भएको पेज तुरुन्तै पीडीएफ सेभ र प्रिन्ट गर्नुहोस्।",
        "tips": [
          "Print 2 physical copies, save the PDF to Google Drive, and email it to yourself and a trusted family member."
        ],
        "warning": "The US Embassy will NOT email or call you if selected. The confirmation number is the ONLY way to check results."
      }
    ],
    "requiredDocuments": [
      {
        "nameEn": "Valid, Unexpired International Passport",
        "nameNe": "चालु मियाद भएको सक्कल राहदानी (Passport)",
        "note": "Mandatory at initial entry. Must be unexpired and issued in your legal name."
      },
      {
        "nameEn": "Digital Scan of Passport Biographical Page",
        "nameNe": "राहदानीको व्यक्तिगत विवरण भएको पृष्ठ (Bio-Page) को स्क्यान",
        "note": "Must clearly show photo, passport number, full legal name, date of birth, and expiration date."
      },
      {
        "nameEn": "Compliant 600x600 px Digital Photos for All Entrants",
        "nameNe": "सबै सदस्यको मापदण्ड पुगेको ६००x६०० पिक्सेल डिजिटल फोटो",
        "note": "Taken within the last 6 months, white background, no glasses, maximum 240 KB."
      },
      {
        "nameEn": "Payment Method for Official US$1 Registration Fee",
        "nameNe": "आधिकारिक $१ दर्ता शुल्क भुक्तानीको साधन",
        "note": "Payable directly on dvprogram.state.gov during form submission."
      },
      {
        "nameEn": "Spouse & Children Civil Details & Photos",
        "nameNe": "पति/पत्नी र सन्तानको व्यक्तिगत विवरण तथा फोटो",
        "note": "Mandatory for all legal dependents even if they do not plan to immigrate with you."
      },
      {
        "nameEn": "Active Personal Email Address",
        "nameNe": "सक्रिय व्यक्तिगत इमेल ठेगाना",
        "note": "Essential for communication and recovering confirmation numbers."
      }
    ],
    "commonMistakes": [
      {
        "mistakeEn": "Applying without a valid passport or uploading an illegible bio-page scan",
        "mistakeNe": "चालु राहदानी बिना फाराम भर्ने वा धमिलो बायो-पेज स्क्यान अपलोड गर्ने",
        "solutionEn": "Ensure your passport is currently valid and upload a clean, flat scan of the biographical page.",
        "solutionNe": "मियाद नसकिएको राहदानीको स्पष्ट स्क्यान मात्र अपलोड गर्नुहोस्।"
      },
      {
        "mistakeEn": "Paying excessive third-party service charges instead of the official US$1 fee",
        "mistakeNe": "आधिकारिक १ डलर बाहेक बिचौलियालाई चर्को रकम तिर्ने",
        "solutionEn": "The official entry fee is US$1 payable only on the official dvprogram.state.gov portal.",
        "solutionNe": "आधिकारिक सरकारी १ डलर शुल्क मात्र आधिकारिक पोर्टलमा तिर्नुहोस्।"
      },
      {
        "mistakeEn": "Reusing old photos or wearing eyeglasses in the photo",
        "mistakeNe": "पुरानो फोटो पुनः प्रयोग गर्ने वा चस्मा लगाएर फोटो खिच्ने",
        "solutionEn": "Always take a fresh, studio-grade digital photo without glasses against a white background.",
        "solutionNe": "सधैं पछिल्लो ६ महिनाभित्र खिचिएको नयाँ, चस्मारहित र सेतो ब्याकग्राउन्ड भएको फोटो प्रयोग गर्नुहोस्।"
      },
      {
        "mistakeEn": "Omitting legally married spouse or unmarried children under 21",
        "mistakeNe": "पति/पत्नी वा २१ वर्ष मुनिका छोराछोरीको विवरण नखुलाउने",
        "solutionEn": "You must declare all legal dependents. Omitting them leads to automatic refusal at the embassy stage.",
        "solutionNe": "सबै सन्तान र पति/पत्नीको विवरण अनिवार्य रूपमा भर्नुहोस्।"
      },
      {
        "mistakeEn": "Waiting until the final days of the 30-day window to apply",
        "mistakeNe": "फाराम भर्ने अन्तिम दिनहरू सम्म पर्खिने",
        "solutionEn": "Apply during the early weeks of the opening window to avoid heavy server outages.",
        "solutionNe": "अन्तिम समयको सर्भर जामबाट बच्न विन्डो खुल्नेबित्तिकै सुरुका हप्तामै फाराम भर्नुहोस्।"
      }
    ],
    "faqs": [
      {
        "questionEn": "When does the DV-2027 registration officially open under the court order?",
        "questionNe": "अदालतको आदेश अनुसार DV-2027 फाराम कहिले खुल्छ?",
        "answerEn": "A U.S. Federal Court has ordered a 30-day registration window starting November 1, 2026, though the U.S. government has appealed to pause (stay) the order. Applicants should monitor official updates.",
        "answerNe": "अमेरिकी संघीय अदालतले नोभेम्बर १, २०२६ देखि ३० दिनको विन्डो खोल्न आदेश दिएको छ, यद्यपि अमेरिकी सरकारले उक्त आदेशविरुद्ध पुनरावेदन गरेको छ। आधिकारिक निर्णय निरन्तर हेर्नुपर्छ।"
      },
      {
        "questionEn": "Is there a registration fee for DV-2027?",
        "questionNe": "के DV-2027 फाराम दर्ता गर्दा शुल्क लाग्छ?",
        "answerEn": "Yes. Under the new guidelines, an official US$1 registration fee is required, payable directly through the official dvprogram.state.gov portal.",
        "answerNe": "हो। नयाँ नियम अनुसार फाराम दर्ता गर्दा आधिकारिक १ अमेरिकी डलर (US$1) दर्ता शुल्क तिर्नुपर्ने व्यवस्था गरिएको छ।"
      },
      {
        "questionEn": "Is a valid passport mandatory to apply for DV-2027?",
        "questionNe": "के DV-2027 फाराम भर्न चालु राहदानी (Passport) अनिवार्य छ?",
        "answerEn": "Yes. Unlike previous years, a valid, unexpired passport and a digital scan of the biographical page are mandatory at the time of entry.",
        "answerNe": "हो। नयाँ नियम अनुसार आवेदन दिँदा नै चालु राहदानी र त्यसको बायोग्राफिकल पेजको डिजिटल स्क्यान अनिवार्य गरिएको छ।"
      },
      {
        "questionEn": "Where must the DV-2027 form be submitted?",
        "questionNe": "DV-2027 को आधिकारिक फाराम कहाँ भर्ने हो?",
        "answerEn": "Entries must be submitted exclusively via the official U.S. Electronic Diversity Visa Program portal at dvprogram.state.gov.",
        "answerNe": "फाराम केवल अमेरिकी सरकारको एकमात्र आधिकारिक पोर्टल dvprogram.state.gov मार्फत मात्र भर्नुपर्दछ।"
      },
      {
        "questionEn": "What are the strict photo specifications for DV-2027?",
        "questionNe": "DV-2027 का लागि फोटोको मुख्य मापदण्ड के के हुन्?",
        "answerEn": "Photo must be exactly 600x600 pixels (JPEG, under 240 KB), plain white background, head height 50%-69%, eye level 56%-69%, taken within the last 6 months, strictly NO eyeglasses, and neutral expression.",
        "answerNe": "फोटो ६००x६०० पिक्सेलको हुनुपर्छ, सादा सेतो पृष्ठभूमि, छायाँरहित, चस्मा नभएको, टाउको ५०%-६९% र पछिल्लो ६ महिनाभित्र खिचिएको हुनुपर्छ।"
      }
    ],
    "officialSources": [
      {
        "title": "Official U.S. Electronic Diversity Visa Program Portal",
        "url": "https://dvprogram.state.gov",
        "authority": "U.S. Department of State - Consular Affairs"
      },
      {
        "title": "U.S. Travel.State.Gov Diversity Visa Program Entry",
        "url": "https://travel.state.gov/content/travel/en/us-visas/immigrate/diversity-visa-program-entry.html",
        "authority": "U.S. Department of State"
      },
      {
        "title": "Official U.S. State Department Photo Tool",
        "url": "https://tsg.phototool.state.gov/photo",
        "authority": "Bureau of Consular Affairs"
      },
      {
        "title": "U.S. Embassy in Nepal - Diversity Visa Instructions",
        "url": "https://np.usembassy.gov/visas/immigrant-visas/diversity-visa/",
        "authority": "U.S. Embassy Kathmandu"
      }
    ],
    "ctaServiceId": "edv-lottery",
    "ctaTitleEn": "Need Assistance with EDV 2027 Passport Scan, $1 Payment & Photo Compliance?",
    "ctaTitleNe": "EDV 2027 को राहदानी स्क्यान, $१ भुक्तानी र फोटो मिलाउन प्राविधिक सहयोग चाहिन्छ?",
    "ctaDescriptionEn": "Connect with our verified WhatsApp desk (9865575108). We verify passport scans, ensure exact 600x600 px photo compliance, and assist with verified submissions.",
    "ctaDescriptionNe": "हाम्रो आधिकारिक ह्वाट्सएप (9865575108) मा सम्पर्क गर्नुहोस्। हामी तपाईंको राहदानी स्क्यान, फोटो मापदण्ड र सुरक्षित फाराम भर्न भरपर्दो प्राविधिक सहयोग प्रदान गर्छौं।"
  },
  {
    "id": "step-by-step-online-form-guide-nepal",
    "slug": "how-to-fill-out-an-online-application-form-in-nepal-step-by-step-guide",
    "titleEn": "How to Fill Out an Online Application Form in Nepal: Step-by-Step Guide",
    "titleNe": "नेपालमा सरकारी अनलाइन फाराम भर्ने सम्पूर्ण तरिका: विस्तृत निर्देशिका",
    "summaryEn": "A complete, reliable walkthrough for Nepali citizens on preparing required documents, sizing photos correctly, handling OTPs, avoiding common mistakes, and successfully submitting online forms.",
    "summaryNe": "कागजात तयारी, फोटो साइज मिलाउने, ओटिपी समस्या समाधान र फाराम सबमिट गर्दा ध्यान दिनुपर्ने मुख्य कुराहरू सहितको आधिकारिक मार्गदर्शन।",
    "contentEn": "Online public service portals in Nepal—such as the Department of Passports, DOTM Driving License, Lok Sewa Aayog, and National ID (NID)—have modernized government services. However, thousands of applicants face frustrating technical rejections every day due to simple document sizing errors, timeout issues, or mismatched spelling.\n\nThis comprehensive guide takes you step-by-step through the preparation, filling, and submission stages to ensure your application goes through smoothly without costly mistakes.",
    "contentNe": "नेपाल सरकारका विभिन्न मन्त्रालय तथा विभागहरू (जस्तै ई-पासपोर्ट, यातायात, लोक सेवा, राष्ट्रिय परिचयपत्र) ले अनलाइन फाराम प्रणाली अनिवार्य गरेका छन्। तर धेरै सेवाग्राहीहरू फोटोको साइज नमिल्दा, विवरण फरक पर्दा वा ओटिपी नआउँदा फाराम भर्न असमर्थ हुने गरेका छन्। यस निर्देशिकाले तपाईंलाई सही र सुरक्षित तरिकाले फाराम भर्न मद्दत गर्दछ।",
    "category": "guides",
    "tags": [
      "Online Form Guide",
      "Nepal Government Portals",
      "Document Resizing",
      "OTP Solutions",
      "Photo Compliance"
    ],
    "thumbnailUrl": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    "youtubeUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "youtubeVideoId": "dQw4w9WgXcQ",
    "videoDuration": "10:45",
    "author": {
      "name": "E-Form Nepal Editorial Desk",
      "role": "Digital Services & Form Verification Team"
    },
    "publishedAt": "2026-03-15T08:00:00Z",
    "updatedAt": "2026-10-25T11:30:00Z",
    "readingTimeMinutes": 7,
    "featured": true,
    "officialSources": [
      {
        "title": "Nepal Government National Portal",
        "url": "https://nepal.gov.np",
        "authority": "Office of the Prime Minister and Council of Ministers"
      },
      {
        "title": "Department of Passports Nepal",
        "url": "https://nepalpassport.gov.np",
        "authority": "Ministry of Foreign Affairs"
      },
      {
        "title": "Department of Transport Management (DOTM)",
        "url": "https://dotm.gov.np",
        "authority": "Ministry of Physical Infrastructure and Transport"
      }
    ],
    "stepByStepInstructions": [
      {
        "stepNumber": 1,
        "titleEn": "Check Document Requirements & Keep Clear Scans Ready",
        "titleNe": "आवश्यक कागजातहरूको सूची तयार गरी स्पष्ट स्क्यान गर्नुहोस्",
        "descriptionEn": "Before opening any application portal, scan your Nepali Citizenship (Nagarikta), previous passports, educational transcripts, or marriage certificates. Save them in JPEG or PDF format under 300 KB.",
        "descriptionNe": "फाराम खोल्नु अगाडि नै आफ्नो नागरिकता, पुरानो राहदानी वा शैक्षिक प्रमाणपत्रहरू ३०० केबी भन्दा कम साइजमा स्पष्ट स्क्यान गरी तयार राख्नुहोस्।",
        "tips": [
          "Do not take angled phone photos with harsh shadows or flash reflections.",
          "Use a free document scanner app or proper scanner at 300 DPI."
        ],
        "warning": "Blurry or unreadable scans will result in rejection at the biometric verification center."
      },
      {
        "stepNumber": 2,
        "titleEn": "Format Your Digital Photo to Government & ICAO Standards",
        "titleNe": "मापदण्ड अनुसारको डिजिटल फोटो तयार गर्नुहोस्",
        "descriptionEn": "Different portals require specific photo aspect ratios (e.g., 35mm x 45mm for e-Passport, 600x600 px for EDV). Background must be plain white or off-white, without shadows, spectacles, or hair covering the forehead/ears.",
        "descriptionNe": "सेतो पृष्ठभूमि भएको, दुवै कान स्पष्ट देखिने, चस्मा नलगाएको र तोकिएको पिक्सेल तथा साइज भएको फोटो मात्र अपलोड गर्नुहोस्।",
        "tips": [
          "You can use our built-in E-Form Nepal Photo Spec Tool to verify and crop your photo instantly."
        ]
      },
      {
        "stepNumber": 3,
        "titleEn": "Verify Name Spelling Across Citizenship & Academic Certificates",
        "titleNe": "नागरिकता र शैक्षिक प्रमाणपत्रहरूमा नामको हिज्जे (Spelling) रुजु गर्नुहोस्",
        "descriptionEn": "A single mismatched letter between your English name on Nagarikta vs. SLC/SEE certificates will freeze your application. Double-check your Date of Birth in both Bikram Sambat (B.S.) and Anno Domini (A.D.).",
        "descriptionNe": "नागरिकता र शैक्षिक प्रमाणपत्रमा नामको हिज्जे फरक भएमा फाराम अस्वीकृत हुनसक्छ। विक्रम संवत् र इस्वी संवत् दुवैमा जन्ममिति रुजु गर्नुहोस्।"
      },
      {
        "stepNumber": 4,
        "titleEn": "Fill One Section at a Time and Keep Session Active",
        "titleNe": "फारामका प्रत्येक खण्ड ध्यानपूर्वक भरेर सेभ गर्दै जानुहोस्",
        "descriptionEn": "Government web servers in Nepal typically time out after 10-15 minutes of inactivity. Keep your phone near you to read OTP SMS messages immediately.",
        "descriptionNe": "नेपालका सरकारी सर्भरहरू छिट्टै टाइम-आउट हुने भएकाले आवश्यक विवरण नजिकै राखेर तुरुन्तै ओटिपी भेरिफाई गर्नुहोस्।"
      },
      {
        "stepNumber": 5,
        "titleEn": "Review the Confirmation PDF & Print the Barcode Slip",
        "titleNe": "अन्तिम कन्फर्मेसन स्लिप तथा बारकोड डाउनलोड गरी प्रिन्ट गर्नुहोस्",
        "descriptionEn": "Once submitted, download the generated PDF application summary immediately. Save multiple copies on your Google Drive and print the barcode sheet for your physical appointment.",
        "descriptionNe": "फाराम सबमिट भइसकेपछि प्राप्त हुने बारकोड वा टोकन नम्बर सहितको पीडीएफ तुरुन्त सुरक्षित गर्नुहोस्।"
      }
    ],
    "requiredDocuments": [
      {
        "nameEn": "Original Nepali Citizenship Certificate (Nagarikta)",
        "nameNe": "सक्कल नेपाली नागरिकताको प्रमाणपत्र",
        "note": "Both front and back scanned clearly."
      },
      {
        "nameEn": "Recent Passport-sized Photograph",
        "nameNe": "हालसालै खिचिएको सेतो ब्याकग्राउन्डको फोटो",
        "note": "Plain white background, no shadows, no eyeglasses."
      },
      {
        "nameEn": "Active Nepali Mobile Number for SMS OTP",
        "nameNe": "ओटिपी (OTP) कोड आउने चालू मोबाइल नम्बर",
        "note": "Required for login verification and appointment SMS."
      }
    ],
    "commonMistakes": [
      {
        "mistakeEn": "Uploading heavy camera files exceeding file-size limits (resulting in server crash/error)",
        "mistakeNe": "५ वा १० एमबीको ठूलो फोटो सिधै अपलोड गर्दा सर्भर एरर आउने",
        "solutionEn": "Compress your files to 150 KB - 300 KB using our free photo tool or document resizer.",
        "solutionNe": "हाम्रो फोटो टुल प्रयोग गरी फाइललाई ३०० केबी भन्दा कम बनाउनुहोस्।"
      },
      {
        "mistakeEn": "Converting B.S. to A.D. incorrectly with manual guesswork",
        "mistakeNe": "विक्रम संवत् र इस्वी संवत् कन्भर्ट गर्दा मिति फरक पर्नु",
        "solutionEn": "Always use the official Department of Passports date converter or our verified date mapping.",
        "solutionNe": "सधैं आधिकारिक पात्रो वा सरकारी डेट कन्भर्टर प्रयोग गर्नुहोस्।"
      }
    ],
    "faqs": [
      {
        "questionEn": "What should I do if the government website shows 'Server Busy' or doesn't open?",
        "questionNe": "सरकारी वेबसाइट 'Server Busy' देखाएर खुल्दै खुलेन भने के गर्ने?",
        "answerEn": "Government portals experience heavy traffic between 10:00 AM and 2:00 PM. We recommend attempting enrollment early in the morning (6:00 AM - 8:30 AM) or late evening when server load is low.",
        "answerNe": "बिहान १० बजेदेखि दिउँसो २ बजेसम्म सर्भरमा अत्यधिक चाप हुन्छ। बिहान ६ देखि ८ बजे वा साँझको समयमा फाराम भर्दा सहजै खुल्छ।"
      }
    ],
    "ctaServiceId": "e-passport-pre-enrollment",
    "ctaTitleEn": "Need Personalized Assistance With Your Online Application?",
    "ctaTitleNe": "अनलाइन फाराम भर्न हाम्रो व्यक्तिगत सहायता चाहिन्छ?",
    "ctaDescriptionEn": "If you are short on time, experiencing portal errors, or want our verified desk to format your photos and review your documents one-on-one, reach out to us directly.",
    "ctaDescriptionNe": "यदि तपाईंलाई फोटो मिलाउन, मिति लिन वा विवरण भर्न समस्या भइरहेको छ भने हाम्रो टिमसँग सिधै ह्वाट्सएपमा सम्पर्क गर्नुहोस्।"
  },
  {
    "id": "epassport-nepal-online-pre-enrollment-guide",
    "slug": "epassport-nepal-online-pre-enrollment-complete-guide",
    "titleEn": "e-Passport Nepal Online Pre-Enrollment: Complete Application & Appointment Guide",
    "titleNe": "नेपाल ई-पासपोर्ट (e-Passport) अनलाइन फाराम तथा अपोइन्टमेन्ट लिने सम्पूर्ण तरिका",
    "summaryEn": "Step-by-step tutorial on booking e-Passport appointments at DAO, DOP, or foreign embassies, mandatory photo specs, fee structures, and document verification rules.",
    "summaryNe": "ई-पासपोर्टको मिति लिने तरिका, राजस्व दस्तुर, आवश्यक कागजात तथा बायोमेट्रिक अपोइन्टमेन्ट सम्बन्धी भरपर्दो जानकारी।",
    "contentEn": "The Department of Passports (DoP) under the Ministry of Foreign Affairs mandates online pre-enrollment for all Nepali citizens applying for a new, renewed, or lost biometric e-Passport. Due to high demand, appointment slots fill up rapidly. This guide provides exact instructions on how to secure your appointment and arrive fully prepared.",
    "contentNe": "नेपालमा ई-पासपोर्ट (विद्युतीय राहदानी) बनाउनका लागि राहदानी विभागको अनलाइन पोर्टलमा प्रि-इनरोलमेन्ट गर्नु अनिवार्य छ। यस गाइडमा फाराम भर्ने, मिति छान्ने र आवश्यक कागजात मिलाउने सम्पूर्ण प्रक्रिया बताइएको छ।",
    "category": "passport",
    "tags": [
      "e-Passport Nepal",
      "Pre-Enrollment",
      "DOP Tripureshwor",
      "NID for Passport",
      "Passport Renewal"
    ],
    "thumbnailUrl": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
    "youtubeUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "youtubeVideoId": "dQw4w9WgXcQ",
    "videoDuration": "12:15",
    "author": {
      "name": "E-Form Nepal Editorial Desk",
      "role": "Digital Services & Form Verification Team"
    },
    "publishedAt": "2026-03-20T09:00:00Z",
    "updatedAt": "2026-10-26T14:00:00Z",
    "readingTimeMinutes": 6,
    "officialSources": [
      {
        "title": "Official e-Passport Pre-Enrollment System",
        "url": "https://emrtds.nepalpassport.gov.np",
        "authority": "Department of Passports Nepal"
      },
      {
        "title": "National Identity Card (NID) Verification",
        "url": "https://nid.gov.np",
        "authority": "Department of National ID and Civil Registration"
      }
    ],
    "requiredDocuments": [
      {
        "nameEn": "National Identity Card (NID) Number or NID Enrollment Slip",
        "nameNe": "राष्ट्रिय परिचयपत्र नम्बर वा इनरोलमेन्ट स्लिप",
        "note": "Mandatory for all applicants aged 16 and above in Nepal."
      },
      {
        "nameEn": "Original Nepali Citizenship Certificate",
        "nameNe": "सक्कल नेपाली नागरिकता प्रमाणपत्र"
      }
    ],
    "ctaServiceId": "e-passport-pre-enrollment",
    "ctaTitleEn": "Struggling to Get an e-Passport Appointment Date?",
    "ctaTitleNe": "ई-पासपोर्टको मिति वा फाराम भर्न समस्या भयो?",
    "ctaDescriptionEn": "Connect with our verified WhatsApp assistance desk for prompt review and step-by-step support.",
    "ctaDescriptionNe": "हाम्रो आधिकारिक ह्वाट्सएपमा सम्पर्क गरी तुरुन्तै सहायता लिन सक्नुहुन्छ।"
  },
  {
    "id": "edv-lottery-photo-requirements-checklist",
    "slug": "edv-lottery-photo-specifications-requirements-checklist",
    "titleEn": "EDV Lottery Photo Requirements & Official Application Checklist",
    "titleNe": "डिभी (EDV) लटरी फाराम: फोटोको मापदण्ड तथा आधिकारिक चेकलिस्ट",
    "summaryEn": "Avoid automatic AI disqualification in the US Diversity Visa lottery. Learn exact 600x600 px photo dimensions, white background rules, eye-level positioning, and official guidelines.",
    "summaryNe": "डिभी लटरीमा फोटो नमिलेर हुने स्वतः रिजेक्सनबाट बच्ने उपायहरू, ६००x६०० पिक्सेल मापदण्ड तथा आधिकारिक नियमहरू।",
    "contentEn": "Every year, thousands of EDV entries are automatically disqualified before the lottery drawing because the submitted digital photo fails the US Department of State's automated composition algorithms. This guide outlines the exact photo specifications, family entry rules, and legitimate verification practices.",
    "contentNe": "अमेरिकी डिभी लटरीमा फोटोको मापदण्ड नपुगेमा कम्प्युटर सफ्टवेयरले सिधै रिजेक्ट गरिदिन्छ। सेतो पृष्ठभूमि, चस्मा नभएको, ६००x६०० पिक्सेलको सही फोटो कसरी खिच्ने र तयार गर्ने भन्ने जानकारी यहाँ दिइएको छ।",
    "category": "edv",
    "tags": [
      "EDV Lottery",
      "US Visa",
      "EDV Photo Checker",
      "600x600 px",
      "DV Selection"
    ],
    "thumbnailUrl": "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    "youtubeUrl": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "youtubeVideoId": "dQw4w9WgXcQ",
    "videoDuration": "08:30",
    "author": {
      "name": "E-Form Nepal Editorial Desk",
      "role": "Digital Services & Form Verification Team"
    },
    "publishedAt": "2026-03-25T10:00:00Z",
    "updatedAt": "2026-10-27T16:00:00Z",
    "readingTimeMinutes": 5,
    "officialSources": [
      {
        "title": "Official U.S. Electronic Diversity Visa Program",
        "url": "https://dvprogram.state.gov",
        "authority": "U.S. Department of State - Consular Affairs"
      }
    ],
    "ctaServiceId": "edv-lottery",
    "ctaTitleEn": "Verify Your EDV Photo With Our Dedicated Compliance Tool",
    "ctaTitleNe": "आफ्नो डिभी फोटो हाम्रो निःशुल्क टुलबाट जाँच गर्नुहोस्",
    "ctaDescriptionEn": "Upload your photo to check dimensions, aspect ratio, lighting balance, and background compliance.",
    "ctaDescriptionNe": "फोटोको साइज, पिक्सेल र ब्याकग्राउन्ड ठिक छ छैन तुरुन्तै चेक गर्नुहोस्।"
  }
];

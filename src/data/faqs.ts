export interface FaqItem {
  id: string;
  questionEn: string;
  questionNe: string;
  answerEn: string;
  answerNe: string;
  category: "General" | "Assistance" | "Official Websites" | "Fees & Payments" | "Photos & Documents";
}

export const FAQS: FaqItem[] = [
  {
    id: "how-does-it-work",
    category: "General",
    questionEn: "How does E-Form Nepal work?",
    questionNe: "इ-फाराम नेपालले कसरी काम गर्दछ?",
    answerEn: "E-Form Nepal is a modern digital guidance platform. You can either use our free resources — verified requirements checklists, official government portal links, and photo compliance tools — to apply yourself, or request our professional assistance where our experts review your documents, optimize photos, and guide you through form submission via WhatsApp.",
    answerNe: "इ-फाराम नेपाल एक आधुनिक डिजिटल मार्गदर्शन प्लेटफर्म हो। तपाईं हाम्रा निःशुल्क सामग्रीहरू (कागजात आवश्यकता, आधिकारिक सरकारी वेबसाइटका लिङ्कहरू, र फोटो परीक्षण टुल) प्रयोग गरेर आफै फाराम भर्न सक्नुहुन्छ, वा हाम्रो प्राविधिक टोलीको सहयोगमा ह्वाट्सएप मार्फत फाराम भर्ने र कागजात मिलाउने सेवा लिन सक्नुहुन्छ।"
  },
  {
    id: "is-official-portal",
    category: "Official Websites",
    questionEn: "Is E-Form Nepal an official government website?",
    questionNe: "के इ-फाराम नेपाल कुनै सरकारी वेबसाइट हो?",
    answerEn: "No. E-Form Nepal is an independent digital assistance service provider. We are not a government agency, embassy, or official commission. Every service card on our platform clearly identifies and links directly to the official government portal (e.g., dvprogram.state.gov, psconline1.psc.gov.np, nepalpassport.gov.np) so you always know where your data is officially submitted.",
    answerNe: "होइन। इ-फाराम नेपाल एक स्वतन्त्र डिजिटल फाराम सहायता सेवा हो। हामी कुनै सरकारी निकाय वा दूतावास होइनौं। प्रत्येक सेवा कार्डमा आधिकारिक सरकारी पोर्टलको लिङ्क स्पष्ट राखिएको छ ताकि तपाईं आधिकारिक वेबसाइटमै आवेदन दिन सक्नुहुन्छ।"
  },
  {
    id: "can-i-apply-directly",
    category: "Official Websites",
    questionEn: "Can I apply directly through the official website without paying anyone?",
    questionNe: "के म कुनै शुल्क नतिरी आधिकारिक वेबसाइटबाट सिधै फाराम भर्न सक्छु?",
    answerEn: "Yes, absolutely! Official government portals are open to the public. For instance, the official US Diversity Visa (EDV) lottery application is 100% free on the official government website. E-Form Nepal exists for people who lack computer access, high-speed internet, photo editing tools, or confidence in navigating complex English/Nepali online forms.",
    answerNe: "हो, अवश्य! सबै आधिकारिक सरकारी वेबसाइटहरू सर्वसाधारणका लागि खुला हुन्छन्। उदाहरणका लागि, अमेरिकी डिभी लटरीको आधिकारिक आवेदन पूर्णतया निःशुल्क हुन्छ। हामी कम्प्युटर नभएका, इन्टरनेट वा फोटो मिलाउन समस्या भएका, वा प्राविधिक सहयोग चाहने व्यक्तिहरूलाई मात्र सेवा प्रदान गर्दछौं।"
  },
  {
    id: "service-charges",
    category: "Fees & Payments",
    questionEn: "Are there service charges when requesting assistance?",
    questionNe: "फाराम भर्न सहयोग लिँदा कति शुल्क लाग्छ?",
    answerEn: "Browsing our guides, accessing official links, and using our digital photo compliance preview tool is completely free. If you request personalized one-on-one assistance (such as scanning and resizing photos, filling complex multi-page applications, or monitoring appointment slots), a transparent, modest nominal service charge applies based on the task.",
    answerNe: "हाम्रो वेबसाइटमा जानकारी हेर्न, आधिकारिक लिङ्क खोल्न र फोटो साइज जाँच गर्न कुनै शुल्क लाग्दैन। यदि तपाईं हाम्रो टोलीबाट व्यक्तिगत सहयोग लिनुहुन्छ भने सेवाको प्रकृति अनुसारको पारदर्शी र न्यूनतम प्राविधिक सेवा शुल्क मात्र लाग्दछ।"
  },
  {
    id: "guarantee-approval",
    category: "Assistance",
    questionEn: "Do you guarantee visa approval, job selection, or license success?",
    questionNe: "के तपाईं भिसा, जागिर वा लाइसेन्स ग्यारेन्टी गर्नुहुन्छ?",
    answerEn: "No. We never make false guarantees. Selection, approvals, and examination results are strictly in the hands of the respective authorities (e.g., US Department of State, Lok Sewa Aayog, Department of Passports). Our genuine commitment is ensuring your form is error-free, formatted correctly, and meets all stated technical specifications.",
    answerNe: "हामी कुनै पनि प्रकारको नक्कली ग्यारेन्टी गर्दैनौं। भिसा छनोट, जागिर वा लाइसेन्सको निर्णय सम्बन्धित सरकारी निकाय वा आयोगको मात्र हातमा हुन्छ। हाम्रो प्रतिबद्धता भनेको तपाईंको फाराम र फोटोमा कुनै प्राविधिक त्रुटि नहोस् र मापदण्ड अनुसार भरियोस् भन्ने सुनिश्चित गर्नु हो।"
  },
  {
    id: "photo-specifications",
    category: "Photos & Documents",
    questionEn: "Why do so many photos get rejected in EDV and Online Forms?",
    questionNe: "डिभी र अनलाइन फारामहरूमा फोटो किन अस्वीकृत हुन्छन्?",
    answerEn: "Most portals have rigid technical specifications: for example, EDV requires exactly 600x600 pixels square, white background, no eyeglasses, natural lighting with no facial shadows, and eye level at 56-69% height. Lok Sewa requires files under 200KB. Using our built-in Photo Verification Tool prevents these common disqualifications.",
    answerNe: "धेरैजसो अनलाइन फारामहरूमा कडा नियम हुन्छन्: जस्तै डिभीको लागि ६००x६०० पिक्सेल, सेतो पृष्ठभूमि, चश्मा नभएको, र अनुहारमा छायाँ नभएको फोटो चाहिन्छ। लोक सेवामा २०० KB भन्दा कम साइज हुनुपर्छ। हाम्रो फोटो टुलले यी सबै मापदण्ड जाँच्न मद्दत गर्दछ।"
  },
  {
    id: "how-to-request-help",
    category: "Assistance",
    questionEn: "How do I request assistance quickly?",
    questionNe: "म कसरी छिटो सहयोग प्राप्त गर्न सक्छु?",
    answerEn: "You can click any 'Request Assistance' or 'Chat on WhatsApp' button on the website. This opens WhatsApp (Official number: +977 9865575108) with your selected service pre-filled, connecting you directly to our verified assistance support.",
    answerNe: "वेबसाइटको 'Get Assistance' वा 'WhatsApp' बटनमा क्लिक गर्नुहोस्। यसले तपाईंको छनोट गरिएको सेवासहितको सन्देश हाम्रो आधिकारिक ह्वाट्सएप नम्बर (+९७७ ९८६५५७५१०८) मा सिधै पठाउनेछ।"
  }
];

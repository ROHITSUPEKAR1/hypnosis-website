const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    certificates: "Certificates",
    appointments: "Appointments",
    contact: "Contact",
    heroTitle: "Welcome to Mind & Health Wellness Centre",
    heroSubtitle: "Complete care for your mind, body & soul",
    heroButton: "Book Appointment",
    whyChoose: "Why Choose Mind & Health Wellness?",
    reason1Title: "26+ Years Experience",
    reason1Desc: "Trusted Clinical & Stage Hypnosis Expertise",
    reason2Title: "Complete Wellness",
    reason2Desc: "Combination of Hypnosis, Yoga Classes",
    reason3Title: "Certified Expert",
    reason3Desc: "PhD in Hypnosis & Alternative Medicine",
    treatmentTitle: "OUR TREATMENT",
    treatmentSubtitle: "BEST THERAPY & TREATMENT FOR MENTAL HEALTH",
    treatmentItems: [
      "Anxiety",
      "Depression",
      "Classes Hypnosis, and Yoga",
      "Stu. Educational Problem",
      "Fears",
      "Sleep Disorders",
      "Tension & Migraine",
      "Paralysis & Diabetes"
    ],
    footerAbout: "Welcome to a holistic haven of healing...",
    quickLinks: ["Home", "About Us", "Courses", "News & Events", "Contact Us"],
    treatmentList: ["Anxiety", "Depression", "Fears", "Sleep Disorders", "Psychosomatic Disorders"],
    contactUs: [
      "+91-8329212282",
      "MIND & HEALTH WELLNESS CENTRE",
      "Bhande Plot chowk, Nandanvan Road, Nagpur 440022"
    ],
    stat1: "Stage Shows",
    stat2: "Recovered Patients",
    stat3: "Yoga & Meditation Recovery"
  },
  mr: {
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    services: "सेवा",
    certificates: "प्रमाणपत्र",
    appointments: "अपॉइंटमेंट",
    contact: "संपर्क",
    heroTitle: "माइंड आणि हेल्थ वेलनेस सेंटरमध्ये आपले स्वागत आहे",
    heroSubtitle: "तुमच्या मन, शरीर आणि आत्म्याची संपूर्ण काळजी",
    heroButton: "अपॉइंटमेंट बुक करा",
    whyChoose: "माइंड आणि हेल्थ वेलनेस का निवडावे?",
    reason1Title: "२६+ वर्षांचा अनुभव",
    reason1Desc: "विश्वासार्ह क्लिनिकल आणि स्टेज हिप्नोसिस कौशल्य",
    reason2Title: "संपूर्ण आरोग्यसंपन्नता",
    reason2Desc: "हिप्नोसिस आणि योग क्लासेसचा संयोग",
    reason3Title: "प्रमाणित तज्ज्ञ",
    reason3Desc: "हिप्नोसिस आणि पर्यायी औषधांमध्ये PhD",
    treatmentTitle: "आमचे उपचार",
    treatmentSubtitle: "मानसिक आरोग्यासाठी सर्वोत्तम उपचार व थेरपी",
    treatmentItems: [
      "भीती",
      "नैराश्य",
      "हिप्नोसिस व योगाचे वर्ग",
      "विद्यार्थी व शैक्षणिक समस्या",
      "भिती",
      "झोपेचे विकार",
      "ताण व माईग्रेन",
      "पक्षाघात व मधुमेह"
    ],
    footerAbout: "उपचारासाठी एक सर्वसमावेशक जागा...",
    quickLinks: ["मुख्यपृष्ठ", "आमच्याबद्दल", "कोर्सेस", "बातम्या व कार्यक्रम", "संपर्क"],
    treatmentList: ["भीती", "नैराश्य", "भिती", "झोपेचे विकार", "मानसिक-सांशल्य विकार"],
    contactUs: [
      "+९१-८३२९२१२२८२",
      "माइंड आणि हेल्थ वेलनेस सेंटर",
      "भांडे प्लॉट चौक, नंदनवन रोड, नागपूर ४४००२२"
    ],
    stat1: "स्टेज शो",
    stat2: "बरे झालेले रुग्ण",
    stat3: "योग व ध्यान पुनर्वसन"
  }
  
};

function changeLanguage() {
  const lang = document.getElementById("language").value;

  // Navigation
  document.querySelector("nav a:nth-child(2)").innerText = translations[lang].home;
  document.querySelector("nav a:nth-child(3)").innerText = translations[lang].about;
  document.querySelector("nav a:nth-child(4)").innerText = translations[lang].services;
  document.querySelector("nav a:nth-child(5)").innerText = translations[lang].appointments;
  document.querySelector("nav a:nth-child(6)").innerText = translations[lang].certificates;
  document.querySelector("nav a:nth-child(7)").innerText = translations[lang].contact;

  // Hero
  document.getElementById("heroTitle").innerText = translations[lang].heroTitle;
  document.getElementById("heroSubtitle").innerText = translations[lang].heroSubtitle;
  document.getElementById("heroButton").innerText = translations[lang].heroButton;

  // Why Choose Us
  document.querySelector(".why-choose h2").innerText = translations[lang].whyChoose;
  const reasonCards = document.querySelectorAll(".reason-card");

  reasonCards[0].querySelector("h3").innerText = translations[lang].reason1Title;
  reasonCards[0].querySelector("p").innerText = translations[lang].reason1Desc;

  reasonCards[1].querySelector("h3").innerText = translations[lang].reason2Title;
  reasonCards[1].querySelector("p").innerText = translations[lang].reason2Desc;

  reasonCards[2].querySelector("h3").innerText = translations[lang].reason3Title;
  reasonCards[2].querySelector("p").innerText = translations[lang].reason3Desc;

  // Treatment Section
  const treatmentTitleParts = translations[lang].treatmentTitle.split(" ");
  document.querySelector(".treatment-section h2").innerHTML = `<span class="highlight">${treatmentTitleParts[0]}</span> ${treatmentTitleParts.slice(1).join(" ")}`;
  document.querySelector(".subtitle").innerText = translations[lang].treatmentSubtitle;

  document.querySelectorAll(".treatment-card .card-title").forEach((el, index) => {
    el.innerText = translations[lang].treatmentItems[index] || "";
  });

  // Footer
  document.querySelector(".footer-column p").innerText = translations[lang].footerAbout;

  const quickLinks = document.querySelectorAll(".footer-column ul")[0].querySelectorAll("li");
  translations[lang].quickLinks.forEach((text, i) => {
    quickLinks[i].innerText = text;
  });

  const treatmentList = document.querySelectorAll(".footer-column ul")[1].querySelectorAll("li");
  translations[lang].treatmentList.forEach((text, i) => {
    treatmentList[i].innerText = text;
  });

  const contactInfo = document.querySelectorAll(".footer-column")[3].querySelectorAll("p");
  translations[lang].contactUs.forEach((text, i) => {
    contactInfo[i].innerText = text;
  });

  // Statistics Section
  document.getElementById("stat1").innerText = translations[lang].stat1;
  document.getElementById("stat2").innerText = translations[lang].stat2;
  document.getElementById("stat3").innerText = translations[lang].stat3;
}

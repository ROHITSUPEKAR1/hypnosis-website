const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    appointments: "Appointments",
    contact: "Contact",
  },
  mr: {
    home: "मुख्यपृष्ठ",
    about: "आमच्याबद्दल",
    services: "सेवा",
    appointments: "अपॉइंटमेंट्स",
    contact: "संपर्क",
  },
};

function changeLanguage() {
  const lang = document.getElementById("language").value;
  const navLinks = document.querySelectorAll("nav a");

  navLinks[0].innerText = translations[lang].home;
  navLinks[1].innerText = translations[lang].about;
  navLinks[2].innerText = translations[lang].services;
  navLinks[3].innerText = translations[lang].appointments;
  navLinks[4].innerText = translations[lang].contact;
}

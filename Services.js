document.addEventListener("DOMContentLoaded", () => {
  const servicesData = [
    {
      category: "Hypnosis",
      items: ["Counseling", "Self Hypnosis", "Learn Hypnosis"]
    },
    {
      category: "Health",
      items: ["Addictions", "Lose Weight", "Depression", "Insomnia", "Pain & Healing"]
    },
    {
      category: "Mind Management",
      items: ["Success", "Confidence", "Persuasion", "Attitude"]
    },
    {
      category: "NLP",
      items: ["Sports Mind Training", "EFT"]
    }
  ];

  const container = document.getElementById("servicesContainer");

  servicesData.forEach(service => {
    const section = document.createElement("section");
    section.className = "service-category";

    const heading = document.createElement("h2");
    heading.textContent = service.category;

    const ul = document.createElement("ul");
    service.items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    section.appendChild(heading);
    section.appendChild(ul);
    container.appendChild(section);
  });
});

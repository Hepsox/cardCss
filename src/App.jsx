import { useState } from "react";
import Card from "./components/Card";
import "./style.scss";

const cards = [
  {
    imgProfil:
      "https://ad-russo.fr/wp-content/uploads/2021/03/adrien-russo.jpg",
    nomDeProfil: "Adrien Russo",
    secondoryText: "Un super développeur",
    textProfil:
      " Je m’appelle Adrien, je suis développeur web et je me suis spécialisé dans la création de site internet WordPress à Bordeaux.  J’interviens partout en France pour vous accompagner dans vos projets !",
    subtitle: "Mes compétences en web : ",
    items: ["PHP", "Symfony", "SQL"],
  },

  {
    imgProfil:
      "https://rozardi-communication.com/wp-content/uploads/2023/07/marie-delaire-rozardi.jpg",
    nomDeProfil: "Marie Delaire",
    secondoryText: "Développeuse en devenir",
    textProfil:
      " Je me suis spécialisée dans la création de site internet sous WordPress, un CMS très flexible qui permet de créer des sites web personnalisés et facilement administrable pour mes clients. Efficace et impactant sont les maîtres mots !",
    subtitle: "Mes compétences en web : ",
    items: ["WordPress", "JS", "React"],
  },
];

function App() {
  return (
    <div className="container">
      {cards.map((element) => (
        <Card
          imgProfil={element.imgProfil}
          nomDeProfil={element.nomDeProfil}
          secondoryText={element.secondoryText}
          textProfil={element.textProfil}
          subtitle={element.subtitle}
          items={element.items}
        />
      ))}
    </div>
  );
}

export default App;

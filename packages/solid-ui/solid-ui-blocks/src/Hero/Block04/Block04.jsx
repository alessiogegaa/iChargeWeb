import React from "react";
import "./hero.css";
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';
import heroContent from './heroContent.json';

const HeroBlock04 = () => {
  const { title, description, buttons } = heroContent;

  return (
    <div className="hero">
      <div className="banner">
       
      </div>
    </div>
  );
};
const handleButtonClick = (button) => {
  if (button.type === "ANCHOR") {
    const targetElement = document.querySelector(button.link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};


export default WithDefaultContent(HeroBlock04);
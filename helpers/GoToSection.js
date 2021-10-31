export const gotToSection = (element) => {
  document.querySelector(element).scrollIntoView({ behavior: "smooth" });
};

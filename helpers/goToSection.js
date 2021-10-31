export const goToSection = (element) => {
  document.querySelector(element).scrollIntoView({ behavior: "smooth" });
};

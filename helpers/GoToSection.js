export default function gotToSection(element) {
  document.querySelector(element).scrollIntoView({ behavior: "smooth" });
}

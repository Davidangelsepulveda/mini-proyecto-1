const habilidades = [
  "HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express",
  "MongoDB", "Git", "Responsive Design", "Web Accessibility",
  "RESTful APIs", "TypeScript", "Sass", "Webpack", "Jest",
  "Docker", "Figma", "Photoshop", "SEO", "UI/UX Design"
];

export { habilidades };

/**
 * Muestra las habilidades con efecto fade-in secuencial
 */
export function mostrarHabilidades() {
  const listaHabilidades = document.getElementById("lista-habilidades");
  
  habilidades.forEach((habilidad, index) => {
    const li = document.createElement("li");
    li.textContent = habilidad;
    li.className = "opacity-0 translate-y-3 transition-all duration-700 ease-out"; 
    listaHabilidades.appendChild(li);

    // Aparece con retardo progresivo
    setTimeout(() => {
      li.classList.remove("opacity-0", "translate-y-3");
      li.classList.add("opacity-100", "translate-y-0");
    }, index * 150);
  });
}

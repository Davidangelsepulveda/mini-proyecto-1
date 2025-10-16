let btnformcontacto = document.getElementById("btnformcontacto");
btnformcontacto.addEventListener("click", function() {
    alert("Gracias por contactarnos, en breve nos comunicaremos con usted.");
});
document.addEventListener("DOMContentLoaded", () => {
  const botonCV = document.getElementById("descargarCV");
  if (botonCV) {
    botonCV.addEventListener("click", () => {
      const link = document.createElement("a");
      link.href = "./cv_final_david_sepulveda_(2).pdf";
      link.download = "./cv_final_david_sepulveda_(2).pdf";
      link.target = "_blank";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    });
  }
});

function exportPDF() {
  const element = document.getElementById("variant");
  const opt = {
    margin: 0.5,
    filename: 'variant.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  // CDN используется легально
  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  script.onload = () => {
    html2pdf().set(opt).from(element).save();
  };
  document.body.appendChild(script);
}

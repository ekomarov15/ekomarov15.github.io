function exportPDF(text) {
  const doc = new jspdf.jsPDF();
  doc.text(text, 10, 10);
  doc.save("summary.pdf");
}


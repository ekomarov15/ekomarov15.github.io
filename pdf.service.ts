import * as PDF from 'pdfkit';

// Генерация PDF варианта
export function generatePdf(tasks, res) {
  const doc = new PDF();
  doc.pipe(res);

  doc.fontSize(14).text("Вариант по русскому языку\n\n");

  tasks.forEach((t, i) => {
    doc.text(`${i + 1}. ${t.text}\n`);
  });

  doc.end();
}

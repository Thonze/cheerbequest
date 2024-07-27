// PdfGenerator.jsx
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const PdfGenerator = ({ contentRef }) => {
  const handleGeneratePdf = () => {
    const content = contentRef.current;

    if (!content) {
      console.error("Couldn't find the content to convert to PDF.");
      return;
    }

    const pdfOptions = {
      margin: 10,
      filename: 'custom-component.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(content).set(pdfOptions).outputPdf();
  };

  return <button onClick={handleGeneratePdf}>Generate PDF</button>;
};

export default PdfGenerator;

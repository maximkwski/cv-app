import React from 'react';
import html2pdf from 'html2pdf.js';
import OutputCV from './OutputCV'; // Import your OutputCV component

const PdfGenerator = ({ info }) => {
  const generatePdf = () => {
    const element = document.getElementById('output-cv'); // Assuming you have an id on the root element of your OutputCV component
    html2pdf().from(element).save();
  };

  return (
    <div>
      {/* <OutputCV info={info} /> */}
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;

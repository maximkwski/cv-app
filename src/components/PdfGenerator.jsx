import html2pdf from 'html2pdf.js';
import '../styles/OutputCV.css'

const PdfGenerator = ({ info }) => {
  const generatePdf = () => {
    const element = document.getElementById('output-pdf'); 
    html2pdf().from(element).save();
  };

  return (
    <div className='container pdf'>
      {/* <OutputCV info={info} /> */}
      <button type='button' 
        className='btn btn--save'
      onClick={generatePdf}>Save as PDF</button>
    </div>
  );
};

export default PdfGenerator;

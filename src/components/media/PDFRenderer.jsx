/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable new-cap */
import jsPDF from 'jspdf'
import { Button } from 'react-bootstrap'

const PDFRenderer = () => {
  const handleDownload = () => {
    fetch('/certificate.jpg')
      .then((response) => response.blob())
      .then((blob) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          const imageData = reader.result
          const doc = new jsPDF('landscape')
          doc.addImage(imageData, 'JPEG', 0, 0, 297, 210)
          const pdfDataUri = doc.output('datauristring') // Get the data URI of the PDF
          const newTab = window.open() // Open a new tab or window
          newTab.document.write('<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe>') // Display the PDF in the new tab or window
        }
        reader.readAsDataURL(blob)
      })
  }

  return (
        <div className='certificate'>
            <h1>E-Certificate</h1>
            <Button onClick={handleDownload}>Download PDF</Button>
        </div>
  )
}

export default PDFRenderer

const PDFMerger = require('pdf-merger-js');
// const fs = require('fs');

const merger = new PDFMerger();

const mergePdfs = async (p1, p2) => {
  try {
    console.log("Merging PDFs...");
    console.log("File paths:", p1, p2);

    await merger.add(p1);
    console.log("First file added successfully:", p1);

    await merger.add(p2); 
    console.log("Second file added successfully:", p2);

    const timestamp = new Date().getTime();
    const filePath = `public/${timestamp}.pdf`;
    await merger.save(filePath); 

    console.log("PDFs merged successfully!");
    
    await merger.reset();
    
    return filePath; 
    
  } 
  catch (error) {
    console.error(`PDF merging failed: ${error}`);
    throw new Error(`PDF merging failed: ${error.message}`);
  }

};

module.exports = { mergePdfs };
const fs = require('fs');
const path = require('path');

const src1 = path.join(__dirname, 'profeesional1.jpeg');
const src2 = path.join(__dirname, 'profeesional2.jpeg');
const src3 = 'C:\\Users\\Vinay\\.gemini\\antigravity\\brain\\4757c72e-b475-4f4f-82d0-9d3f4ee69db3\\professional_photo_about_bio_1777866669802.png';
const src4 = 'C:\\Users\\Vinay\\.gemini\\antigravity\\brain\\4757c72e-b475-4f4f-82d0-9d3f4ee69db3\\professional_photo_contact_1777866687217.png';

const dest1 = path.join(__dirname, 'public', 'profeesional1.jpeg');
const dest2 = path.join(__dirname, 'public', 'profeesional2.jpeg');
const dest3 = path.join(__dirname, 'public', 'profeesional3.png');
const dest4 = path.join(__dirname, 'public', 'profeesional4.png');

function copySilently(src, dest) {
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied to ${dest}`);
    } else {
      console.log(`Source not found: ${src}`);
    }
  } catch (err) {
    console.error(`Failed to copy ${src} to ${dest}:`, err.message);
  }
}

copySilently(src1, dest1);
copySilently(src2, dest2);
copySilently(src3, dest3);
copySilently(src4, dest4);

console.log("Image copy complete! Please check your website now.");

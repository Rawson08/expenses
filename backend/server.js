const express = require('express');
const multer = require('multer');
const OCR = require('./ocr');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.json());
app.use(cors());

app.post('/upload', upload.single('file'), async (req, res) => {
    const imagePath = req.file.path;
    const text = await OCR.extractText(imagePath);
    //TODO: logic for extracting text from image
    res.send({ text });
});

app.listen(5000, () => console.log('Server running on port 3001'));
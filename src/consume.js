const axios = require("axios");
const fs = require("fs");
const { PdfReader } = require("pdfreader");

// curl -X GET "https://www.federalregister.gov/api/v1/suggested_searches" -H "accept: */*"
// curl -X GET "https://www.federalregister.gov/api/v1/public-inspection-documents/current.json

const getCurrent = async () => {
  const url =
    "https://www.federalregister.gov/api/v1/public-inspection-documents/current.json";
  const res = await axios.get(url);
  const { data } = res;
  fs.writeFileSync(
    "./data/current-documents.json",
    JSON.stringify(data, null, 2)
  );
};

const getPDF = async (url) => {
  const res = await axios({
    url: url,
    method: "GET",
    responseType: "arraybuffer", // important
  });
  const { data } = res;
  return data;
};

const getRawText = async (pdfPath) => {
  let data = "";
  return new Promise((resolve, reject) => {
    new PdfReader().parseFileItems(pdfPath, (err, item) => {
      if (err) reject(err);
      else if (!item) resolve(data);
      else if (item.text) {
        data += "\n" + item.text;
      }
    });
  });
};

const getSuggestion = async () => {
  const data = JSON.parse(
    fs.readFileSync("./data/current-documents.json").toString()
  );
  let suggestedDoc = null;
  for (const doc of data.results) {
    const docPath = `./data/documents/${doc.document_number}.json`;
    if (!fs.existsSync(docPath)) {
      suggestedDoc = doc;
      fs.writeFileSync(docPath, JSON.stringify(suggestedDoc, null, 2));

      const pdfBuffer = await getPDF(suggestedDoc.pdf_url);
      const pdfPath = docPath.replace(".json", ".pdf");
      fs.writeFileSync(pdfPath, pdfBuffer);

      const textPath = docPath.replace(".json", ".txt");
      const rawText = await getRawText(pdfPath);
      fs.writeFileSync(textPath, rawText);

      break;
    }
  }
  return suggestedDoc;
};

module.exports = { getSuggestion };

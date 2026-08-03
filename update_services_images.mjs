import fs from 'fs';
import 'dotenv/config';

const queries = [
  "call center corporate", // Live Call Transfers
  "inbound customer support", // Inbound
  "sales outbound calling", // Outbound
  "digital marketing affiliate network", // Affiliate
  "health insurance medical coverage", // ACA
  "elderly family senior care", // Final Expense
  "car driving auto insurance", // Auto
  "disability physical therapy support", // SSDI
  "finance calculator debt", // Debt
  "water damage plumbing leak", // Water
  "solar panels home roof" // Solar
];

async function run() {
  const urls = [];
  for (const q of queries) {
    try {
      const res = await fetch(`https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${encodeURIComponent(q)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=3`);
      const data = await res.json();
      if (data.hits && data.hits.length > 0) {
        urls.push(data.hits[0].webformatURL);
      } else {
        urls.push("https://pixabay.com/get/g897ee6bc5260a685aa9ed25201d9f237da38b9066d97251279f4ea2f47f659d8b8c88c1637dcca85d257b2820b84087c_640.jpg");
      }
    } catch (e) {
      console.error(e);
      urls.push("");
    }
  }

  let content = fs.readFileSync("src/lib/data/services.ts", "utf8");
  
  // Remove existing imageUrl lines to avoid duplicates
  content = content.replace(/\s*imageUrl:\s*"[^"]*",?/g, "");
  
  // Inject new imageUrls
  let index = 0;
  content = content.replace(/(avgConversionRate:\s*"[^"]*",?)/g, (match) => {
    const url = urls[index++];
    return `${match}\n    imageUrl: "${url}",`;
  });

  fs.writeFileSync("src/lib/data/services.ts", content);
  console.log("Updated services.ts with 11 distinct images!");
}
run();
